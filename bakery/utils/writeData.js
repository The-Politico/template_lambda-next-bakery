'use strict';

const fs = require('fs-extra');
const { DATA } = require('../../config/constants/paths');

module.exports = function(data) {
  fs.writeJsonSync(DATA, data);
};
