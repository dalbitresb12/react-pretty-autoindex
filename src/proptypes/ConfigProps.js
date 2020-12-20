import PropTypes from 'prop-types';

const VisibilityOptionsProps = PropTypes.shape({
  use: PropTypes.bool.isRequired,
  tooltip: PropTypes.bool.isRequired,
  type: PropTypes.oneOf(["raw", "readable", "both"]).isRequired,
});

const SizeDateProps = PropTypes.shape({
  size: VisibilityOptionsProps,
  date: VisibilityOptionsProps
});

const ConfigProps = {
  name: PropTypes.string,
  basePath: PropTypes.string,
  address: PropTypes.string,
  withCredentials: PropTypes.bool,
  visibilityOptions: SizeDateProps,
};

export {
  VisibilityOptionsProps,
  SizeDateProps,
  ConfigProps,
};
