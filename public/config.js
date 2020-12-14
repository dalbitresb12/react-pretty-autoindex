const config = {
  name: 'react-pretty-autoindex',
  basePath: '/', // base path for react-router
  address: 'http://example.com/directory', // no trailing slash
  withCredentials: false, // include credentials in fetch
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

Object.freeze(config);

// Un-comment the following line to use this config instead of the default config
// globalThis.config = config;
