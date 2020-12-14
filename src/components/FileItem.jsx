import { useLocation } from 'react-router-dom';
import { FileIcon } from '@primer/octicons-react';
import { getFilePath } from '../utils';
import PropTypes from 'prop-types';

const FileItem = ({ name }) => {
  const location = useLocation();
  const pathname = getFilePath(location, name);

  return (
    <>
      <FileIcon className="text-gray-500" />
      <a href={pathname} className="hover:text-light-blue-600 hover:underline" target="_blank" rel="noreferrer">
        {name}
      </a>
    </>
  );
};

FileItem.propTypes = {
  name: PropTypes.string.isRequired
};

export default FileItem;
