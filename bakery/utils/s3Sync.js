'use strict';

const sync = require('@politico/interactive-bin/dist/scripts/sync');
const { publishPath } = require('../../package.json');
const { BAKERY_DIR } = require('../../config/constants/paths');

const syncS3 = async function() {
  await sync(
    {
      directory: BAKERY_DIR,
      path: publishPath,
      bucket: process.env.AWS_BUCKET_NAME,
      invalidate: true,
    },
    {
      s3Options: {
        accessKeyId: process.env.AWS_PUBLISH_ACCESS_KEY_ID ?
          process.env.AWS_PUBLISH_ACCESS_KEY_ID :
          process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_PUBLISH_SECRET_ACCESS_KEY ?
          process.env.AWS_PUBLISH_SECRET_ACCESS_KEY :
          process.env.AWS_SECRET_ACCESS_KEY,
      },
    });
};

module.exports = syncS3;
