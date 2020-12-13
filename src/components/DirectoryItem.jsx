import { useLocation, Link } from 'react-router-dom';
import { FileDirectoryFillIcon } from '@primer/octicons-react';
import { getDirectoryPath } from '../utils';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const DirectoryItem = ({ name, className }) => {
  const location = useLocation();
  const pathname = getDirectoryPath(location, name);

  const styles = clsx(className && className, "text-light-blue-600");

  return (
    <li className={styles}>
      <FileDirectoryFillIcon />
      <Link to={pathname}>{name}</Link>
    </li>
  );
};

DirectoryItem.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default DirectoryItem;
