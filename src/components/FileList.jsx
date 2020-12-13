import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FileIcon, FileDirectoryFillIcon } from '@primer/octicons-react';
import { get } from 'lodash';
import { getParentLocation, getDirectoryContents } from '../utils';
import FileItem from './FileItem';
import DirectoryItem from './DirectoryItem';

const FileList = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);

    getDirectoryContents(location.pathname)
      .then(res => {
        setData(res);
        setLoading(false);
      });
  }, [location.pathname]);

  if (loading) {
    return (
      <div>
        <span>Loading...</span>
      </div>
    );
  }

  /* return (
    <div>
      {(location.pathname !== "/") &&
        <Link to={getParentLocation(location)} className="block">..</Link>
      }
      {data.map((value, index) => {
        const name = get(value, "name");
        const isFile = get(value, "type") === "file";

        return isFile
          ? <FileItem key={index} name={name} />
          : <DirectoryItem key={index} name={name} />;
      })}
    </div>
  ); */

  return (
    <div className="text-sm">
      <ul className="border border-solid border-gray-300 rounded">
        {/* Template for Directory */}
        <li className="px-3 py-2 border-b border-solid border-gray-200 last:border-b-0">
          <div className="flex justify-between">
            <div className="space-x-2">
              <FileDirectoryFillIcon className="text-light-blue-400" />
              <Link to={getParentLocation(location)} className="hover:text-light-blue-600 hover:underline">
                13BarreroN4.pdf
              </Link>
            </div>
            <div className="text-gray-500 space-x-2">
              <span>250.77kB</span>
              <span>-</span>
              <span>5 years ago</span>
            </div>
          </div>
        </li>
        {/* Template for File */}
        <li className="px-3 py-2 border-b border-solid border-gray-200 last:border-b-0">
          <div className="flex justify-between">
            <div className="space-x-2">
              <FileIcon className="text-gray-500" />
              <Link to={getParentLocation(location)} className="hover:text-light-blue-600 hover:underline">
                13BarreroN4.pdf
              </Link>
            </div>
            <div className="text-gray-500 space-x-2">
              <span>250.77kB</span>
              <span>-</span>
              <span>5 years ago</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default FileList;
