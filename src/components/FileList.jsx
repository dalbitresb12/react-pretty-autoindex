import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { get } from 'lodash';
import { getDirectoryContents } from '../utils';
import prettyBytes from 'pretty-bytes';
import { DateTime } from 'luxon';
import FileItem from './FileItem';
import DirectoryItem from './DirectoryItem';
import MetaItem from './MetaItem';
import defaultConfig from '../defaultConfig';

const FileList = (props) => {
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

  const size = get(globalThis, "config.visibilityOptions.size", defaultConfig.visibilityOptions.size);
  const date = get(globalThis, "config.visibilityOptions.date", defaultConfig.visibilityOptions.date);

  return (
    <div {...props}>
      <ul className="border border-solid border-gray-300 divide-y divide-gray-200 rounded">
        {data.map((file, index) => {
          const isFile = get(file, "type") === "file";
          const fileName = get(file, "name");

          const fileSize = size.use ? get(file, "size", 0) : 0;
          const fileDate = date.use ? get(file, "mtime") : "";

          const humanSize = size.type !== "raw"
            ? prettyBytes(fileSize)
            : "";
          const humanDate = date.type !== "raw"
            ? DateTime.fromHTTP(fileDate).toRelative()
            : "";

          return (
            <li key={index} className="px-3 py-2 first:rounded-t last:rounded-b hover:bg-gray-100">
              <div className="flex justify-between">
                <div className="space-x-2">
                  {isFile
                    ? <FileItem name={fileName} />
                    : <DirectoryItem name={fileName} />
                  }
                </div>
                <div className="text-gray-500">
                  <MetaItem
                    className="hidden md:inline"
                    display={size.use && size.type !== "readable" && isFile}
                  >
                    {fileSize} bytes
                  </MetaItem>
                  <MetaItem
                    className="hidden sm:inline"
                    display={size.use && size.type !== "raw" && isFile}
                    tooltip={{
                      display: size.tooltip && size.type !== "both",
                      content: `${fileSize} bytes`,
                    }}
                  >
                    {humanSize}
                  </MetaItem>
                  <MetaItem
                    className="hidden md:inline"
                    display={date.use && date.type !== "readable"}
                  >
                    {fileDate}
                  </MetaItem>
                  <MetaItem
                    className="hidden sm:inline"
                    display={date.use && date.type !== "raw"}
                    tooltip={{
                      display: date.tooltip && date.type !== "both",
                      content: fileDate
                    }}
                  >
                    {humanDate}
                  </MetaItem>
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
