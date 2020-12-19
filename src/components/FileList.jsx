import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getConfigKey } from '../utils';
import clsx from 'clsx';
import useAutoindex from '../hooks/useAutoindex';
import Loading from './Loading';
import ListItem from './ListItem';
import MetaModal from './MetaModal';

const FileList = (props) => {
  const location = useLocation();
  const { response: data, loading, error } = useAutoindex(location.pathname);
  const [modalData, setModalData] = useState({});
  const [modalVisibility, setModalVisibility] = useState(false);

  const visibilityOptions = getConfigKey("visibilityOptions");

  const tableClassNames = clsx(
    "border border-solid border-gray-300 divide-y divide-gray-200 rounded",
    {
      "block": !loading && !error,
      "hidden": loading || error,
    }
  );

  return (
    <div {...props}>
      <Loading loading={loading} error={error} />
      <ul className={tableClassNames}>
        {location.pathname !== "/" &&
          <ListItem config={visibilityOptions} back />
        }
        {data.map((file, index) =>
          <ListItem key={index} file={file} config={visibilityOptions} />
        )}
      </ul>
      <MetaModal visibility={modalVisibility} handleClose={() => setModalVisibility(false)} />
    </div>
  );
};

export default FileList;
