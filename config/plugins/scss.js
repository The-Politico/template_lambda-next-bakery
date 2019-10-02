const cssLoaderConfig = require('@zeit/next-css/css-loader-config');

module.exports = (nextConfig = {}) => {
  return Object.assign({}, nextConfig, {
    webpack(config, options) {
      if (!options.defaultLoaders) {
        throw new Error(
          'This plugin is not compatible with Next.js versions below 5.0.0 https://err.sh/next-plugins/upgrade'
        );
      }

      const { dev, isServer } = options;
      const {
        scssModules,
        cssLoaderOptions,
        postcssLoaderOptions,
        sassLoaderOptions = {},
      } = nextConfig;

      options.defaultLoaders.sass = cssLoaderConfig(config, {
        extensions: ['scss', 'sass'],
        cssModules: scssModules,
        cssLoaderOptions,
        postcssLoaderOptions,
        dev,
        isServer,
        loaders: [
          {
            loader: 'sass-loader',
            options: sassLoaderOptions,
          },
        ],
      });

      config.module.rules.push(
        {
          test: /\.scss$/,
          exclude: /theme.*\.s?css$/,
          use: cssLoaderConfig(config, {
            extensions: ['scss'],
            cssModules: true,
            cssLoaderOptions,
            postcssLoaderOptions,
            dev,
            isServer,
            loaders: [
              {
                loader: 'sass-loader',
                options: sassLoaderOptions,
              },
            ],
          }),
        },
        {
          test: /theme.*\.scss$/,
          use: cssLoaderConfig(config, {
            extensions: ['scss'],
            cssModules: false,
            cssLoaderOptions,
            postcssLoaderOptions,
            dev,
            isServer,
            loaders: [
              {
                loader: 'sass-loader',
                options: sassLoaderOptions,
              },
            ],
          }),
        }
      );

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options);
      }

      return config;
    },
  });
};
