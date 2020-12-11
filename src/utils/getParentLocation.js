import removeTrailingSlash from "./removeTrailingSlash";

const getParentLocation = location => {
  const pathname = removeTrailingSlash(location.pathname).split("/");
  pathname.pop();
  return pathname.join("/");
};

export default getParentLocation;
