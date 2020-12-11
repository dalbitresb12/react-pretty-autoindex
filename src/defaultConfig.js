const defaultConfig = {
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

Object.freeze(defaultConfig);

export default defaultConfig;
