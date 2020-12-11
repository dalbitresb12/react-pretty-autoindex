import path from 'path';

const getParentLocation = location => {
  return path.join(location.pathname, "..");
};

export default getParentLocation;
