import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { getConfigKey } from '../utils';
import clsx from 'clsx';
import useAutoindex from '../hooks/useAutoindex';
import Loading from './Loading';
import ListItem from './ListItem';
import MetaModal from './MetaModal';
import path from 'path';

const FileList = (props) => {
  const location = useLocation();
  const { response: data, loading, error } = useAutoindex(location.pathname);
  const [modalData, setModalData] = useState({});
  const [modalVisibility, setModalVisibility] = useState(false);

  const title = getConfigKey("name");
  const visibilityOptions = getConfigKey("visibilityOptions");

  const tableClassNames = clsx(
    "border border-solid border-gray-300 divide-y divide-gray-200 rounded",
    {
      "block": !loading && !error,
      "hidden": loading || error || (location.pathname === "/" && data.length === 0),
    }
  );

  const handleMetadata = (file) => {
    setModalData(file);
    setModalVisibility(true);
  };

  const handleClose = () => {
    setModalVisibility(false);
    setModalData({});
  };

  return (
    <div {...props}>
      <Helmet>
        <title>Index of {path.join("/", title, location.pathname)}</title>
      </Helmet>
      <Loading loading={loading} error={error} />
      <ul className={tableClassNames}>
        {location.pathname !== "/" &&
          <ListItem config={visibilityOptions} back />
        }
        {data.map((file, index) =>
          <ListItem key={index} file={file} config={visibilityOptions} handleMetadata={handleMetadata} />
        )}
      </ul>
      <MetaModal visibility={modalVisibility} handleClose={handleClose} />
    </div>
  );
};

export default FileList;
