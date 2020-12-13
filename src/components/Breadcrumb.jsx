import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';
import { get } from 'lodash';
import clsx from 'clsx';
import path from 'path';
import defaultConfig from '../defaultConfig';
import { removeTrailingSlash } from '../utils';

const Item = ({ label, path, root }) => {
  const labelClassName = clsx(root && "font-bold");
  const activeClassName = clsx(!root && ["text-gray-800", "font-medium"]);

  return (
    <>
      <span className={labelClassName}>
        <NavLink to={path} className="hover:text-light-blue-600 hover:underline" activeClassName={activeClassName} exact>
          {label}
        </NavLink>
      </span>
      <span className="text-gray-800 font-light">/</span>
    </>
  );
};

Item.propTypes = {
  label: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  root: PropTypes.bool,
};

const Breadcrumb = ({ className }) => {
  const location = useLocation();
  const route = removeTrailingSlash(location.pathname.substring(1));
  const items = route.length > 0 ? route.split("/") : [];

  const title = get(globalThis, "config.name", defaultConfig.name);

  const containerClassName = clsx(className && className, "text-light-blue-600", "text-lg", "m-2", "space-x-2");

  return (
    <div className={containerClassName}>
      <Item label={title} path="/" root />
      {items.map((value, index) => {
        const pathname = path.join("/", items.slice(0, index + 1).join("/"), "/");

        return (
          <Item key={index} label={value} path={pathname} />
        );
      })}
    </div>
  );
};

Breadcrumb.propTypes = {
  className: PropTypes.string
};

export default Breadcrumb;
