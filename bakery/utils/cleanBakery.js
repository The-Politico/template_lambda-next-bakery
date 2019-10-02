'use strict';

const glob = require('glob');
const { removeSync, ensureDirSync } = require('fs-extra');
const { BAKERY_DIR } = require('../../config/constants/paths');

module.exports = () => {
  const files = glob.sync(`${BAKERY_DIR}/pages/**`);
  files.forEach(f => removeSync(f));
  ensureDirSync(BAKERY_DIR);
};
