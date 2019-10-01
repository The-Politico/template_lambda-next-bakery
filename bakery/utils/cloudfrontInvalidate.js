'use strict';

const AWS = require('aws-sdk');

const cloudfrontInvalidate = function(invalidateList) {
  return new Promise(function(resolve, reject) {
    const cloudfront = new AWS.CloudFront({
      credentials: new AWS.Credentials(
        process.env.AWS_PUBLISH_ACCESS_KEY_ID || process.env.AWS_ACCESS_KEY_ID,
        process.env.AWS_PUBLISH_SECRET_ACCESS_KEY || process.env.AWS_SECRET_ACCESS_KEY
      ),
    });

    cloudfront.createInvalidation({
      DistributionId: process.env.AWS_CLOUDFRONT_DISTRIBUTION,
      InvalidationBatch: {
        CallerReference: Date.now().toString(),
        Paths: {
          Quantity: invalidateList.length,
          Items: invalidateList,
        },
      },
    }, function(err, data) {
      if (err) {
        reject(err);
      }

      resolve(data);
    });
  });
};

module.exports = cloudfrontInvalidate;
