import { get } from 'lodash';
import defaultConfig from '../defaultConfig';

const getConfigKey = (key) => {
  const defaultValue = get(defaultConfig, key, undefined);
  return get(globalThis, `config.${key}`, defaultValue);
};

export default getConfigKey;
