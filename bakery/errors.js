'use strict';

const NO_AUTH_HEADER = () => {
  const err = new Error('No Authorization header found.');
  err.status = 403;
  return err;
};

const NO_AUTH_TOKEN = () => {
  const err = new Error('No authentication token provided.');
  err.status = 403;
  return err;
};

const INVALID_AUTH_TOKEN = () => {
  const err = new Error('Invalid authentication token.');
  err.status = 403;
  return err;
};

const SERVER_ERROR = () => {
  const err = new Error('Something went wrong. Contact a system administrator to check the log for more information.');
  err.status = 500;
  return err;
};

module.exports = {
  NO_AUTH_HEADER: NO_AUTH_HEADER,
  NO_AUTH_TOKEN: NO_AUTH_TOKEN,
  INVALID_AUTH_TOKEN: INVALID_AUTH_TOKEN,
  SERVER_ERROR: SERVER_ERROR,
};
