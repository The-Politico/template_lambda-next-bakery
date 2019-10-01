'use strict';

const router = require('express').Router();
const authenticate = require('../authenticate');

router.post('/', authenticate, function(req, res) {
  res
    .status(200)
    .send('API OK');
});

module.exports = router;
