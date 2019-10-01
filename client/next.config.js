const path = require('path');
const webpack = require('../config/next.webpack');
const { APP_ROOT } = require('../config/constants/paths');
const routes = require('./routes');

module.exports = {
  distDir: path.relative(__dirname, path.resolve(__dirname, '.dist')),
  exportTrailingSlash: true,
  assetPrefix: APP_ROOT,
  exportPathMap: routes,
  webpack,
};
