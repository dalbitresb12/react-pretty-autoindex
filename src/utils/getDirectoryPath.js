import removeTrailingSlash from './removeTrailingSlash';

const getDirectoryPath = (location, directory) => {
  let currentDir = location.pathname;
  currentDir = removeTrailingSlash(currentDir);

  directory = removeTrailingSlash(directory);

  return `${currentDir}/${directory}/`;
};

export default getDirectoryPath;
