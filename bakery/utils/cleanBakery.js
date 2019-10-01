'use strict';

const glob = require('glob');
const { removeSync, ensureDirSync } = require('fs-extra');
const { BAKERY_DIR } = require('../../config/constants/paths');

module.exports = function() {
  const files = glob.sync(`${BAKERY_DIR}/pages/**`);
  files.forEach(function(f) { removeSync(f); });
  ensureDirSync(BAKERY_DIR);
};
