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

/**
 * @summary Type definitions
 * 
 * @typedef {import('../types').FileMetadata} FileMetadata
 * @typedef {import('../types').SizeDate} SizeDate 
 */

const FileList = (props) => {
  const location = useLocation();
  const { response: items, loading, error } = useAutoindex(location.pathname);

  const [modalData, setModalData] = useState(null);
  const [modalVisibility, setModalVisibility] = useState(false);

  /** @type {string} */
  const title = getConfigKey("name");
  /** @type {SizeDate} */
  const visibilityOptions = getConfigKey("visibilityOptions");

  const tableClassNames = clsx(
    "border border-solid border-gray-300 divide-y divide-gray-200 rounded",
    {
      "block": !loading && !error,
      "hidden": loading || error || (location.pathname === "/" && items.length === 0),
    }
  );

  /**
   * @param {FileMetadata} file
   * @returns {void}
   */
  const handleMetadata = (file) => {
    setModalData(file);
    setModalVisibility(true);
  };

  return (
    <div {...props}>
      <Helmet>
        <title>Index of {path.join("/", title, location.pathname)}</title>
      </Helmet>
      <Loading loading={loading} error={error} />
      <ul className={tableClassNames}>
        {location.pathname !== "/" &&
          <ListItem config={visibilityOptions} back handleMetadata={handleMetadata} />
        }
        {items.map((file, index) =>
          <ListItem key={index} file={file} config={visibilityOptions} handleMetadata={handleMetadata} />
        )}
      </ul>
      <MetaModal
        file={modalData}
        visibility={modalVisibility}
        config={visibilityOptions}
        handleClose={() => setModalVisibility(false)}
        handleAfterClose={() => setModalData(null)}
      />
    </div>
  );
};

export default FileList;
