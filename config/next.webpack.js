const path = require('path');
const merge = require('lodash/merge');
const aliases = require('./constants/aliases');

module.exports = function(config, options) {
  config.resolve.alias = merge(config.resolve.alias, aliases);
  config.module.rules.push({
    test: /\.md$/,
    loader: require.resolve('@politico/markdown-react-loader'),
  });
  config.module.rules.push({
    test: /\.txt$/,
    loader: path.resolve(__dirname, 'loaders/text.js'),
  });
  return config;
};
