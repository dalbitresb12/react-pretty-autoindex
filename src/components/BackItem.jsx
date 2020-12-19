import { useLocation, Link } from 'react-router-dom';
import { getParentLocation } from '../utils';

const BackItem = () => {
  const location = useLocation();
  const pathname = getParentLocation(location);

  return (
    <>
      <Link to={pathname} className="hover:text-light-blue-600 hover:underline ml-6">
        ..
      </Link>
    </>
  );
};

BackItem.propTypes = {};

export default BackItem;
