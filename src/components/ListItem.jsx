import prettyBytes from 'pretty-bytes';
import { DateTime } from 'luxon';
import { get } from 'lodash';
import { InfoIcon } from '@primer/octicons-react';
import FileItem from './FileItem';
import DirectoryItem from './DirectoryItem';
import BackItem from './BackItem';
import MetaItem from './MetaItem';
import { SizeDateProps, FileMetadataProps } from '../proptypes';
import PropTypes from 'prop-types';

/**
 * @summary Type definitions
 * 
 * @typedef {import('../types').FileMetadata} FileMetadata
 * @typedef {import('../types').SizeDate} SizeDate
 */

/**
 * @callback HandleMetadata
 * @param {FileMetadata} file
 * @returns {void}
 */

/**
 * @param {Object} props
 * @param {FileMetadata} props.file
 * @param {SizeDate} props.config
 * @param {boolean} props.back
 * @param {HandleMetadata} props.handleMetadata
 */
const ListItem = ({ file, config, back, handleMetadata }) => {
  const { size, date } = config;
  
  const fileName = !back ? get(file, "name") : undefined;
  const type = !back ? get(file, "type") : undefined;
  
  const fileSize = (!back && size.use) ? get(file, "size", 0) : 0;
  const fileDate = (!back && date.use) ? get(file, "mtime", "") : "";

  const humanSize = (!back && size.type !== "raw")
    ? prettyBytes(fileSize)
    : undefined;
  const humanDate = (!back && date.type !== "raw")
    ? DateTime.fromHTTP(fileDate).toRelative()
    : undefined;

  return (
    <li className="px-3 py-2 first:rounded-t last:rounded-b hover:bg-gray-100">
      <div className="flex justify-between">
        <div className="space-x-2">
          {!back
            ? type === "file"
              ? <FileItem name={fileName} />
              : <DirectoryItem name={fileName} />
            : <BackItem />
          }
        </div>
        {(!back && type !== "other") &&
          <>
            <div className="text-gray-500">
              <MetaItem
                className="hidden md:inline"
                display={size.use && size.type !== "readable" && type === "file"}
              >
                {fileSize} bytes
              </MetaItem>
              <MetaItem
                className="hidden sm:inline"
                display={size.use && size.type !== "raw" && type === "file"}
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
            <span className="inline sm:hidden cursor-pointer" onClick={() => handleMetadata(file)}>
              <InfoIcon className="text-gray-500 hover:text-light-blue-600" />
            </span>
          </>
        }
      </div>
    </li>
  );
};

ListItem.propTypes = {
  file: FileMetadataProps,
  config: SizeDateProps.isRequired,
  back: PropTypes.bool,
  handleMetadata: PropTypes.func.isRequired,
};

export default ListItem;
