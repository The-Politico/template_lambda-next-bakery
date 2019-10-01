const path = require('path');

// Default for dev
let appRoot = '/';
// A local baked state
appRoot = process.env.BUILD ? '/bakery/pages/' : appRoot;
// LAMBDA build environment...
// Set the first conditional to the root of your project on S3
appRoot = process.env.LAMBDA ?
  'https://www.politico.com/interactives/project/' : appRoot;

const TMP = process.env.LAMBDA ? '/tmp' : path.resolve(__dirname, '../../tmp');

module.exports = {
  SRC_PATH: path.join(__dirname, '../../client/'),
  DIST_PATH: path.join(__dirname, '../../dist/client/'),
  APP_ROOT: appRoot,
  TMP: TMP,
  DATA: path.join(TMP, 'bakery/data.json'),
};
