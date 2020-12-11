import { get } from 'lodash';
import defaultConfig from '../defaultConfig';

const getDirectoryContents = async path => {
  const address = get(globalThis, "config.address", defaultConfig.address);
  const withCredentials = get(globalThis, "config.withCredentials", defaultConfig.withCredentials);

  const response = await fetch(`${address}${path}`, {
    method: "GET",
    mode: "cors",
    credentials: withCredentials ? "include" : "same-origin",
    redirect: "follow",
    referrerPolicy: "strict-origin-when-cross-origin"
  }).then(res => res.json());
  
  return response;
};

export default getDirectoryContents;
