import clsx from 'clsx';
import PropTypes from 'prop-types';
import { AlertIcon } from '@primer/octicons-react';

/**
 * @param {Object} props
 * @param {boolean} props.loading
 * @param {unknown} props.error
 */
const Loading = ({ loading, error }) => {
  const classNames = clsx(
    "fixed inset-0 z-30",
    {
      "block": loading || error,
      "hidden": !loading && !error
    },
  );

  const textClassName = clsx(
    "text-base text-gray-600 font-bold z-50",
    !error && "hidden",
    error && "inline",
  );

  return (
    <div className={classNames}>
      <div className="fixed inset-0 bg-white opacity-50 z-40" />
      <div className="mt-10 mx-4 lg:max-w-5xl lg:mx-auto z-50 space-x-3 flex">
        {error
          ? (
            <AlertIcon className="text-gray-600 z-50 h-6 w-6" />
          )
          : (
            <svg className="animate-spin h-6 w-6 z-50" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="text-gray-300" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="text-gray-500" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
          )
        }
        <span className={textClassName}>
          {error && "There was an error loading the content."}
        </span>
      </div>
    </div>
  );
};

Loading.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.any
};

export default Loading;
