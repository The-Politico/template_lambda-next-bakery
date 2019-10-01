'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const bakeryRoute = require('./routes/bakery');
const checkRoute = require('./routes/check');

const server = express();

// Parsers
server.use(express.json());

// CORS
server.use(cors());

// Logging
if (!process.env.LAMBDA && !process.env.TESTING) {
  server.use(morgan('dev'));
}

server.use('/', bakeryRoute);
server.use('/check', checkRoute);

// Error handler
server.use(function(err, req, res, next) {
  res.status(err.status).send({ error: err.message });
});

module.exports = server;
