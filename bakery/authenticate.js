'use strict';

const errors = require('./errors');

module.exports = (req, res, next) => {
  const TOKEN = process.env.API_VERIFICATION_TOKEN;

  if (TOKEN && !req.headers.authorization) {
    next(errors.NO_AUTH_HEADER());
  }

  const match = /^Token (.*)$/.exec(req.headers.authorization);
  if (TOKEN && !match) {
    next(errors.NO_AUTH_TOKEN());
  }

  if (TOKEN && match[1] !== TOKEN) {
    next(errors.INVALID_AUTH_TOKEN());
  };

  next();
};
