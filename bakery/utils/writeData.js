const path = require('path');
const fs = require('fs-extra');
const locations = require('../constants/locations');

module.exports = function(data) {
  fs.writeJsonSync(path.resolve(locations.BAKERY_DIR, 'data.json'), data);
};
