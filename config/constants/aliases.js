const path = require('path');
const { TMP } = require('./paths');

// These aliases are shared across compilers.
module.exports = {
  Config: path.resolve(__dirname, '..'),
  Client: path.resolve(__dirname, '../../client/'),
  Components: path.join(__dirname, '../../client/components'),
  Content: path.join(__dirname, '../../client/content'),
  TMP: TMP,
  'package.json': path.resolve(__dirname, '../../package.json'),
  'politico-components': 'politico-style/js/lib/components/base',
};
