import useSWR from 'swr';
import { getConfigKey } from '../utils';

const useAutoindex = (path) => {
  const address = getConfigKey("address");
  const withCredentials = getConfigKey("withCredentials");

  const fetcher = async (path) => {
    return fetch(`${address}${path}`, {
      method: "GET",
      mode: "cors",
      credentials: withCredentials ? "include" : "same-origin",
      redirect: "follow",
      referrerPolicy: "strict-origin-when-cross-origin"
    }).then(res => res.json());
  };

  const { data, error, isValidating } = useSWR(path, fetcher, {
    initialData: [],
    revalidateOnMount: true,
    revalidateOnFocus: false,
    revalidateOnReconnect: true,
    shouldRetryOnError: true,
    errorRetryInterval: 5000,
    errorRetryCount: 3,
  });

  return {
    data,
    loading: !error && !data,
    error,
    validating: isValidating,
  };
};

export default useAutoindex;
