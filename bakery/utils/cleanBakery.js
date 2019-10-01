const glob = require('glob');
const { removeSync, ensureDirSync } = require('fs-extra');
const locations = require('../constants/locations');

module.exports = function() {
  const files = glob.sync(`${locations.BAKERY_DIR}/**`);
  files.forEach(function(f) { removeSync(f); });
  ensureDirSync(locations.BAKERY_DIR);
};
