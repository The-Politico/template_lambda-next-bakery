const paths = require('../config/constants/paths');

module.exports = function() {
  // Homepage
  const routes = {
    '/': {
      page: '/',
      query: { appRoot: paths.APP_ROOT },
    },
  };

  const pages = require(paths.DATA);

  const { date } = pages[0];

  pages.forEach(page => {
    const { slug } = page;
    // Normal page
    routes[`/${slug}`] = {
      page: '/[slug]',
      query: { slug, date, appRoot: paths.APP_ROOT },
    };
    // AMP page
    routes[`/${slug}/amp`] = {
      page: '/[slug]/amp',
      query: { slug, appRoot: paths.APP_ROOT },
    };
  });

  return routes;
};
