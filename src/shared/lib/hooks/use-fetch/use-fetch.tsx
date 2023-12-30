import {useEffect, useState} from "react";


export const useFetch = <T,>(promise: () => Promise<T>) => {
  const [response, setResponse] = useState<T>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await promise();
        setResponse(res);
        setIsLoading(false);
      } catch (e: any) {
        setError(e);
        setIsLoading(false);
      }
    }

    fetchData();
  }, [promise]);

  return {response, isLoading, error}
}
