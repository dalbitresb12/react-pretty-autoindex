import { useState, useEffect } from 'react';
import { getDirectoryContents } from '../utils';

const useAutoindex = (path) => {
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleResponse = (res) => {
    setResponse(res);
    setLoading(false);
    setError(false);
  };

  const handleError = (err) => {
    setResponse([]);
    setLoading(false);
    setError(err);
  };

  useEffect(() => {
    setLoading(true);

    getDirectoryContents(path)
      .then(handleResponse)
      .catch(handleError);
  }, [path]);

  return {
    response,
    loading,
    error
  };
};

export default useAutoindex;
