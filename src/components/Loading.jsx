import clsx from 'clsx';
import PropTypes from 'prop-types';
import { AlertIcon } from '@primer/octicons-react';

/**
 * @param {Object} props
 * @param {boolean} props.loading
 * @param {unknown} props.error
 * @param {boolean} props.validating
 */
const Loading = ({ loading, error, validating }) => {
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
        {error && !validating
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
          {error && !validating && "There was an error loading the content."}
          {validating && "Retrying..."}
        </span>
      </div>
      {error && !validating &&
        <div className="mt-4 mx-4 lg:max-w-5xl lg:mx-auto z-50 space-y-2 flex flex-wrap">
          <p className="w-full text-sm text-gray-400 z-50">
            The app might automatically retry loading the content in 5 seconds.
          </p>
          <p className="w-full text-sm text-gray-400 z-50">
            If nothing happens, the server might be down or the max retry count could have been reached.
          </p>
          <p className="w-full text-sm text-gray-400 z-50">
            You can always try and reload the page or press the back button on your browser.
          </p>
          <p className="w-full text-sm text-gray-400 z-50">
            For the record, the max retry count is 3.
          </p>
        </div>
      }
    </div>
  );
};

Loading.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.any,
  validating: PropTypes.bool.isRequired,
};

export default Loading;
