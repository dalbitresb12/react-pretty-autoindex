import getConfigKey from './getConfigKey';

const getDirectoryContents = async path => {
  const address = getConfigKey("address");
  const withCredentials = getConfigKey("withCredentials");

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
