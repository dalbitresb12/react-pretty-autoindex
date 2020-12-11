import { get } from 'lodash';
import defaultConfig from '../defaultConfig';
import path from 'path';

const getFilePath = (location, fileName) => {
  const address = get(globalThis, "config.address", defaultConfig.address);
  const currentDir = location.pathname;
  const url = address + path.join(currentDir, fileName);
  return url;
};

export default getFilePath;
