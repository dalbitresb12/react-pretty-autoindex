globalThis.config = {
  name: 'Autoindex',
  basePath: '/autoindex', // base path for react-router
  address: 'https://static.dev.local/programming-books', // no trailing slash
  withCredentials: true, // include credentials in fetch
  visibilityOptions: {
    size: {
      use: true,
      type: 'readable' // raw, readable, both
    },
    date: {
      use: true,
      type: 'readable' // raw, readable, both
    }
  }
};
