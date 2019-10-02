const path = require('path');
const webpack = require('../config/next.webpack');
const { APP_ROOT } = require('../config/constants/paths');
const routes = require('./routes');

const withSCSS = require('../config/plugins/scss');
const withCSS = require('@zeit/next-css');
const withTM = require('@weco/next-plugin-transpile-modules');

let config = {
  distDir: path.relative(__dirname, path.resolve(__dirname, '.dist')),
  exportTrailingSlash: true,
  assetPrefix: APP_ROOT,
  exportPathMap: routes,
  webpack,
  transpileModules: [
    '@politico/interactive-style-sketch',
    'react-loader-spinner',
  ],
};

config = withCSS(config);
config = withSCSS(config);
config = withTM(config);

module.exports = config;
