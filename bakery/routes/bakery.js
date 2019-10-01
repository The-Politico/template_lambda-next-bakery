'use strict';

const router = require('express').Router();
const authenticate = require('../authenticate');
const { execSync } = require('child_process');
const cleanBakery = require('../utils/cleanBakery');
const writeData = require('../utils/writeData');
const s3Sync = require('../utils/s3Sync');

router.post('/', authenticate, function(req, res) {
  // Clean the bakery of stale files
  cleanBakery();

  // Write data to tmp
  writeData(req.body);

  // Bake static pages
  try {
    execSync('node bin/bake.js');
  } catch (err) {
    res
      .status(500)
      .send({ error: `BAKE ERROR: ${err.message}` });
  }

  // try {
  //   if (process.env.LAMBDA) s3Sync();
  // } catch (err) {
  //   res
  //     .status(500)
  //     .send({ error: `SYNC ERROR: ${err.message}` });
  // }

  res
    .status(200)
    .send('BAKE OK');
});

module.exports = router;
