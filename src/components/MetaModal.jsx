import { useState } from 'react';
import ReactModal from 'react-modal';
import { useLocation } from 'react-router-dom';
import prettyBytes from 'pretty-bytes';
import { DateTime } from 'luxon';
import { get } from 'lodash';
import { getFilePath } from '../utils';
import { Icon as FileIcon } from './FileItem';
import { Icon as DirectoryIcon } from './DirectoryItem';
import clsx from 'clsx';
import { FileMetadataProps, SizeDateProps } from '../proptypes';
import PropTypes from 'prop-types';

// Make sure to bind modal to the app element.
// http://reactcommunity.org/react-modal/accessibility/
ReactModal.setAppElement("#root");

/**
 * @summary Type definitions
 * 
 * @typedef {import('../types').FileMetadata} FileMetadata
 * @typedef {import('../types').SizeDate} SizeDate
 * @typedef {import('../types').VisibilityOptions} VisibilityOptions 
 */

/**
 * @callback HandleClose
 * @returns {void}
 */

/**
 * @callback HandleAfterClose
 * @returns {void}
 */

/**
 * @param {Object} props
 * @param {FileMetadata} props.file
 * @param {boolean} props.visibility
 * @param {SizeDate} props.config
 * @param {HandleClose} props.handleClose
 * @param {HandleAfterClose} props.handleAfterClose
 */
const MetaModal = ({ file, visibility, config, handleClose, handleAfterClose }) => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const handleRequestClose = () => {
    setOpen(false);
    handleClose();
  };

  const handleAfterOpen = () => {
    setOpen(true);
  };

  const fileName = get(file, "name") || undefined;
  const fileType = get(file, "type") || undefined;
  const fileSize = fileType === "file"
    ? get(file, "size", 0) || undefined
    : undefined;
  const fileDate = get(file, "mtime", "") || undefined;

  const humanSize = fileType === "file"
    ? prettyBytes(fileSize)
    : undefined;
  const humanDate = fileDate
    ? DateTime.fromHTTP(fileDate).toRelative()
    : undefined;

  const fullPath = fileName
    ? getFilePath(location, fileName)
    : undefined;

  /**
   * @param {VisibilityOptions} options
   * @param {"raw" | "readable" | "both"} type 
   * @returns {boolean}
   */
  const configIsType = (options, type) => {
    return options.use && options.type === type;
  };

  /**
   * @param {VisibilityOptions} options
   * @param {"raw" | "readable" | "both"} type 
   * @returns {boolean}
   */
  const configIsNotType = (options, type) => {
    return options.use && options.type !== type;
  };

  const isAnyConfigRaw = configIsNotType(config.size, "readable") || configIsNotType(config.date, "readable");

  const overlayClassName = clsx(
    "fixed inset-0 transition-opacity outline-none",
    !visibility && "ease-in duration-200",
    visibility && "ease-out duration-300",
    !open && "opacity-0",
    open && "opacity-100",
  );

  const modalClassName = clsx(
    "inline-block align-bottom w-full bg-white rounded-lg text-left overflow-hidden outline-none",
    "shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg",
    !visibility && "ease-in duration-200",
    visibility && "ease-out duration-300",
    !open && "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
    open && "opacity-100 translate-y-0 sm:scale-100"
  );

  const iconContainerClassName = clsx(
    "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full sm:mx-0 sm:h-10 sm:w-10",
    {
      "bg-light-blue-100": fileType === "directory",
      "bg-gray-100": fileType === "file",
    }
  );

  const closeBtnClassName = clsx(
    "w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 text-base",
    "font-medium text-gray-700 focus:outline-none bg-white hover:bg-gray-50",
    "sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm",
  );

  const openFileBtnClassName = clsx(
    "mt-3 w-full inline-flex justify-center rounded-md shadow-sm px-4 py-2 text-base",
    "font-medium text-white focus:outline-none bg-green-500 hover:bg-green-600",
    "sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm",
  );

  const rawMetadataClassName = clsx(
    "mt-4",
    (configIsType(config.size, "raw") || configIsType(config.date, "raw")) && "text-sm text-gray-500",
    !(configIsType(config.size, "raw") || configIsType(config.date, "raw")) && "text-xs text-gray-400",
  );

  return (
    <ReactModal
      isOpen={visibility}
      onRequestClose={handleRequestClose}
      onAfterOpen={handleAfterOpen}
      onAfterClose={handleAfterClose}
      closeTimeoutMS={200}
      overlayClassName="fixed z-10 inset-0 overflow-y-auto outline-none"
      className="flex items-end justify-center min-h-full py-4 px-4 text-center sm:block sm:p-0 outline-none"
      bodyOpenClassName="overflow-hidden"
      htmlOpenClassName={null}
    >
      <div className={overlayClassName} aria-hidden="true" onClick={handleRequestClose}>
        <div className="absolute inset-0 bg-gray-500 opacity-75 outline-none" />
      </div>

      <span className="hidden sm:inline-block sm:align-middle sm:h-full" aria-hidden="true">&#8203;</span>

      <div className={modalClassName} role="dialog" aria-modal="true">
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">
            <div className={iconContainerClassName}>
              {fileType === "file"
                ? <FileIcon className="text-gray-500 h-6 w-6" />
                : <DirectoryIcon className="text-light-blue-600 h-6 w-6" />
              }
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-4 text-center sm:text-left">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                {fileName}
              </h3>
              <div className="text-sm text-gray-500 mt-2">
                {config.size.use && config.size.type !== "raw" && fileType === "file" &&
                  <span className="block">
                    {humanSize}
                  </span>
                }
                {config.date.use && config.date.type !== "raw" &&
                  <span className="block">
                    Last modified {humanDate}
                  </span>
                }
                <span className="block whitespace-nowrap overflow-x-auto pretty-scrollbar">
                  Located at {location.pathname}
                </span>
              </div>
              {isAnyConfigRaw &&
                <div className={rawMetadataClassName}>
                  <span className="block font-semibold">
                    Raw Metadata
                  </span>
                  {config.size.use && config.size.type !== "readable" && fileType === "file" &&
                    <span className="block">
                      Size: {fileSize} bytes
                    </span>
                  }
                  {config.date.use && config.date.type !== "readable" &&
                    <span className="block">
                      Last Modified: {fileDate}
                    </span>
                  }
                </div>
              }
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button type="button" className={closeBtnClassName} onClick={handleRequestClose}>
            Close
          </button>
          {fileType === "file" &&
            <a href={fullPath} target="_blank" rel="noreferrer">
              <button type="button" className={openFileBtnClassName}>
                Open
              </button>
            </a>
          }
        </div>
      </div>
    </ReactModal >
  );
};

MetaModal.propTypes = {
  file: FileMetadataProps,
  visibility: PropTypes.bool.isRequired,
  config: SizeDateProps.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleAfterClose: PropTypes.func.isRequired,
};

export default MetaModal;
