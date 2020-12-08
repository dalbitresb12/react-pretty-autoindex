import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { get } from 'lodash';
import defaultConfig from '../defaultConfig';

const Item = ({ label, path, className }) => (
  <>
    <span className={className ? className : undefined}>
      <Link to={path}>{label}</Link>
    </span>
    <span>/</span>
  </>
);

Item.propTypes = {
  label: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  className: PropTypes.string,
};

const Breadcrumb = ({ className }) => {
  const route = useLocation().pathname.substring(1);
  const root = get(globalThis, "config.name", defaultConfig.name);
  const items = [root, ...(route.length > 0 ? route.split("/") : [])];

  return (
    <div className={(className ? `${className} text-blue-500` : `text-blue-500`) + ' text-lg m-2 space-x-4'}>
      {items.map((value, index) => {
        const path = index !== 0
          ? "/" + items.slice(1, index + 1).join("/")
          : "/";

        return (
          <Item key={index} label={value} path={path} className={index === 0 ? 'font-bold' : undefined} />
        );
      })}
    </div>
  );
};

Breadcrumb.propTypes = {
  className: PropTypes.string
};

export default Breadcrumb;
