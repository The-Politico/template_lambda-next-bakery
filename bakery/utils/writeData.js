'use strict';

const fs = require('fs-extra');
const { DATA } = require('../../config/constants/paths');

module.exports = (data) => fs.writeJsonSync(DATA, data);
