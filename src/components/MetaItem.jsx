import clsx from 'clsx';
import PropTypes from 'prop-types';

const MetaItem = (props) => {
  const { display, tooltip, children } = props;

  const className = clsx(
    props.className && props.className,
    "after:content content-separator-dot last:content-separator-none"
  );

  props = {
    ...props,
    className: className,
    title: tooltip?.display ? tooltip?.content : undefined,
    tooltip: undefined,
    children: undefined,
    display: undefined,
  };

  if (!display) {
    return null;
  }

  return (
    <span {...props}>
      {children}
    </span>
  );
};

MetaItem.propTypes = {
  display: PropTypes.bool,
  tooltip: PropTypes.shape({
    display: PropTypes.bool,
    content: PropTypes.string,
  }),
  className: PropTypes.string,
  children: PropTypes.node,
};

export default MetaItem;
