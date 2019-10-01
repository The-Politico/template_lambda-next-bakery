const path = require('path');
const webpack = require('../config/next.webpack');
const paths = require('../config/constants/paths');
const routes = require('./routes');

module.exports = {
  distDir: path.relative(__dirname, path.resolve(paths.TMP, 'bakery/.dist')),
  exportTrailingSlash: true,
  assetPrefix: paths.APP_ROOT,
  exportPathMap: routes,
  webpack,
};
