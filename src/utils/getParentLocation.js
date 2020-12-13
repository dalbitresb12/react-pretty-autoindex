import path from 'path';

const getParentLocation = location => {
  return path.join(path.dirname(location.pathname), "/");
};

export default getParentLocation;
