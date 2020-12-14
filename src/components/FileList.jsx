import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { get } from 'lodash';
import { getDirectoryContents } from '../utils';
import clsx from 'clsx';
import prettyBytes from 'pretty-bytes';
import { DateTime } from 'luxon';
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

  return (
    <div className="text-sm">
      <ul className="border border-solid border-gray-300 rounded">
        {data.map((file, index) => {
          const name = get(file, "name");
          const time = get(file, "mtime");
          const size = get(file, "size", 0);
          const isFile = get(file, "type") === "file";

          const humanSize = prettyBytes(size);
          const humanTime = DateTime.fromHTTP(time).toRelative();

          const itemClassNames = clsx(
            "px-3 py-2 border-b border-solid border-gray-200",
            "first:rounded-t last:rounded-b last:border-b-0 hover:bg-gray-100"
          );

          return (
            <li key={index} className={itemClassNames}>
              <div className="flex justify-between">
                <div className="space-x-2">
                  {isFile
                    ? <FileItem name={name} />
                    : <DirectoryItem name={name} />
                  }
                </div>
                <div className="text-gray-500">
                  {isFile && <span>{humanSize} - </span>}
                  <span>{humanTime}</span>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FileList;
