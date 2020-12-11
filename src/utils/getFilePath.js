import { get } from 'lodash';
import defaultConfig from '../defaultConfig';
import removeTrailingSlash from './removeTrailingSlash';

const getFilePath = (location, fileName) => {
  let address = get(globalThis, "config.address", defaultConfig.address);
  address = removeTrailingSlash(address);

  let baseDir = location.pathname;
  baseDir = removeTrailingSlash(baseDir);

  return `${address}${baseDir}/${fileName}`;
};

export default getFilePath;
