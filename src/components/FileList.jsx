import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { get } from 'lodash';
import { getParentLocation, getDirectoryContents, getFilePath, getDirectoryPath } from '../utils';

const FileList = () => {
  const location = useLocation();
  const [data, setData] = useState([]);

  useEffect(() => {
    getDirectoryContents(location.pathname)
      .then(res => setData(res));
  }, [location]);

  if (data.length === 0) {
    return (
      <div>
        <span>Loading...</span>
      </div>
    );
  }

  return (
    <div>
      <Link to={getParentLocation}>..</Link><br />
      {data.map((value, index) => {
        const name = get(value, "name");
        const isFile = get(value, "type") === "file";

        if (isFile) {
          return (
            <a key={index} href={getFilePath(location, name)} className="block" target="_blank" rel="noreferrer">{name} File</a>
          );
        } else {
          return (
            <Link key={index} to={getDirectoryPath(location, name)} className="block">{name} Directory</Link>
          );
        }
      })}
    </div>
  );
};

export default FileList;
