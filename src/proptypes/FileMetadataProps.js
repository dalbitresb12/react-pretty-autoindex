import PropTypes from 'prop-types';

const FileMetadataProps = PropTypes.shape({
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["file", "directory", "other"]).isRequired,
  mtime: PropTypes.string.isRequired,
  size: PropTypes.number
});

export default FileMetadataProps;
