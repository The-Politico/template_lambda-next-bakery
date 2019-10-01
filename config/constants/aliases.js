const path = require('path');
const PATHS = require('./paths');

// These aliases are shared across compilers.
module.exports = {
  Bakery: path.resolve(__dirname, '../../bakery/'),
  Client: path.resolve(__dirname, '../../client/'),
  Config: path.resolve(__dirname, '..'),
  Dev: path.resolve(__dirname, '../../dev/'),
  Dist: path.resolve(__dirname, '../../dist/'),
  Components: path.join(__dirname, '../../client/components'),
  Content: path.join(__dirname, '../../client/content'),
  TMP: PATHS.TMP,
  'package.json': path.resolve(__dirname, '../../package.json'),
  'politico-components': 'politico-style/js/lib/components/base',
};
