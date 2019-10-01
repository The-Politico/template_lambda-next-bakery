'use strict';

const s3 = require('s3');
const cloudfrontInvalidate = require('./cloudfrontInvalidate');
const { publishPath } = require('../../package.json');
const { BAKERY_DIR } = require('../../config/constants/paths');

const REJECT_DEPTH = 3;

const syncS3 = function(deleteRemoved = false) {
  const prefix = publishPath.replace(/\/?$/, '/');
  const localDir = BAKERY_DIR;

  if (prefix.split('/').length < REJECT_DEPTH) {
    return new Error(`Sync path less than ${REJECT_DEPTH} folders deep in bucket.`);
  }

  const clientOptions = {
    s3Options: {
      accessKeyId: process.env.AWS_PUBLISH_ACCESS_KEY_ID || process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_PUBLISH_SECRET_ACCESS_KEY || process.env.AWS_SECRET_ACCESS_KEY,
    },
  };

  const client = s3.createClient(clientOptions);

  const uploadParams = {
    localDir: localDir,
    deleteRemoved,
    s3Params: {
      Bucket: process.env.AWS_BUCKET_NAME,
      Prefix: prefix,
    },
    getS3Params: function(localFile, stat, callback) {
      const s3Params = {
        CacheControl: localFile.split('.').pop() === 'json' ? 'max-age=15' : 'max-age=60',
      };
      callback(undefined, s3Params);
    },
  };

  return new Promise(function(resolve, reject) {
    const uploader = client.uploadDir(uploadParams);

    uploader.on('error', function(err) { reject(err); });

    uploader.on('end', function() {
      console.log(`Synced ${localDir} to ${prefix}.`);
      if (process.env.AWS_CLOUDFRONT_DISTRIBUTION) {
        cloudfrontInvalidate([`/${prefix}*`]).then(resolve);
      } else {
        resolve();
      }
    });
  });
};

module.exports = syncS3;
