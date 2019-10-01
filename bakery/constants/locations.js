const path = require('path');
const paths = require('../../config/constants/paths');

const BAKERY_DIR = path.resolve(paths.TMP, 'bakery/');

module.exports = {
  BAKERY_DIR: BAKERY_DIR,
};
