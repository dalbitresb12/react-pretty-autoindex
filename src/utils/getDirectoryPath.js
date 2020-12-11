import path from 'path';

const getDirectoryPath = (location, directory) => {
  const currentDir = location.pathname;
  return path.join(currentDir, directory, "/");
};

export default getDirectoryPath;
