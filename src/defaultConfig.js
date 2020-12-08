const defaultConfig = {
  name: 'react-pretty-autoindex',
  basePath: '/',
  address: 'http://example.com/directory',
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
