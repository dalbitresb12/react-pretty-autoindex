import { useLocation, Link } from 'react-router-dom';
import { FileDirectoryFillIcon } from '@primer/octicons-react';
import { getDirectoryPath } from '../utils';
import PropTypes from 'prop-types';

const DirectoryItem = ({ name }) => {
  const location = useLocation();
  const pathname = getDirectoryPath(location, name);

  return (
    <>
      <FileDirectoryFillIcon className="text-light-blue-400" />
      <Link to={pathname} className="hover:text-light-blue-600 hover:underline">
        {name}
      </Link>
    </>
  );
};

DirectoryItem.propTypes = {
  name: PropTypes.string.isRequired
};

export default DirectoryItem;
