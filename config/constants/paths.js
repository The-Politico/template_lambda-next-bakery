const path = require('path');
const { publishPath } = require('../../package.json');

// Default for dev
let appRoot = '/';
// A local baked state
appRoot = process.env.BUILD ? '/bakery/pages/' : appRoot;
// LAMBDA build environment...
// Set the first conditional to the root of your project on S3
appRoot = process.env.LAMBDA ? publishPath : appRoot;

const TMP = process.env.LAMBDA ? '/tmp' : path.resolve(__dirname, '../../tmp');

module.exports = {
  APP_ROOT: appRoot,
  TMP: TMP,
  BAKERY_DIR: path.resolve(TMP, 'bakery/'),
  DATA: path.join(TMP, 'bakery/data.json'),
};
