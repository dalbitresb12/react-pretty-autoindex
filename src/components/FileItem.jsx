import { useLocation } from 'react-router-dom';
import { FileIcon } from '@primer/octicons-react';
import { getFilePath } from '../utils';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const FileItem = ({ name, className }) => {
  const location = useLocation();
  const pathname = getFilePath(location, name);

  const styles = clsx(className && className, "text-light-blue-600");

  return (
    <li className={styles}>
      <FileIcon />
      <a href={pathname} target="_blank" rel="noreferrer">{name}</a>
    </li>
  );
};

FileItem.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default FileItem;
