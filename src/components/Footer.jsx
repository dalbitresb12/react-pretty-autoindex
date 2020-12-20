import clsx from 'clsx';
import PropTypes from 'prop-types';
import { MarkGithubIcon } from '@primer/octicons-react';
import packageJson from '../../package.json';

const Footer = ({ className }) => {
  const version = packageJson.version;
  const homepage = packageJson.homepage;

  const classNames = clsx(
    className && className,
  );

  return (
    <footer className={classNames}>
      <div className="py-4 mt-6 border-t-4 border-solid border-gray-300 flex items-center">
        <div className="ml-auto text-gray-500 flex items-center">
          <span>
            Generated with <a className="hover:text-light-blue-600 hover:underline" href={homepage}>react-pretty-autoindex</a> v{version}.
          </span>
          <a href={homepage} className="block ml-2 h-5 w-5 hover:text-light-blue-600">
            <MarkGithubIcon className="block m-0 -mt-1 h-5 w-5" verticalAlign="middle" />
          </a>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
