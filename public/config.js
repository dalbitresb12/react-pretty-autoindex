const config = {
  name: 'react-pretty-autoindex',
  basePath: '/', // base path for react-router, no trailing slash
  address: 'http://example.com/directory', // no trailing slash
  withCredentials: false, // include credentials in fetch
  visibilityOptions: {
    size: {
      use: true,
      tooltip: true, // always false if type is set to both
      type: 'readable' // raw, readable, both
    },
    date: {
      use: true,
      tooltip: true, // always false if type is set to both
      type: 'readable' // raw, readable, both
    }
  }
};

Object.freeze(config);
Object.freeze(config.visibilityOptions);
Object.freeze(config.visibilityOptions.size);
Object.freeze(config.visibilityOptions.date);

// Uncomment the following line to use this config instead of the default config
// globalThis.config = config;
