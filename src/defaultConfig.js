const defaultConfig = {
  name: 'react-pretty-autoindex',
  basePath: '/', // base path for react-router
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

Object.freeze(defaultConfig);
Object.freeze(defaultConfig.visibilityOptions);
Object.freeze(defaultConfig.visibilityOptions.size);
Object.freeze(defaultConfig.visibilityOptions.date);

export default defaultConfig;
