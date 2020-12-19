import path from 'path';
import getConfigKey from './getConfigKey';

const getFilePath = (location, fileName) => {
  const address = getConfigKey("address");
  const currentDir = location.pathname;
  const url = address + path.join(currentDir, fileName);
  return url;
};

export default getFilePath;
