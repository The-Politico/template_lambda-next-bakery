const { APP_ROOT, DATA } = require('../config/constants/paths');

module.exports = function() {
  // Make sure to pass page data as context to all your routes.
  const pages = require(DATA);
  const appRoot = APP_ROOT;

  // Homepage
  const routes = {
    '/': {
      page: '/',
      query: {
        pages,
        appRoot,
      },
    },
  };

  const { date } = pages[0];

  pages.forEach(page => {
    const { slug } = page;
    // Normal page
    routes[`/${slug}`] = {
      page: '/[slug]',
      query: {
        slug,
        date,
        pages,
        appRoot,
      },
    };
    // AMP page
    routes[`/${slug}/amp`] = {
      page: '/[slug]/amp',
      query: {
        slug,
        pages,
        appRoot,
      },
    };
  });

  return routes;
};
