import { useState, useEffect, useCallback } from 'react';

/**
 * Custom hook for handling async operations
 * Provides loading, error, and data states
 */
export function useAsync(asyncFunction, immediate = true, deps = []) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(immediate);
  const [error, setError] = useState(null);

  const execute = useCallback(async (...args) => {
    setLoading(true);
    setError(null);
    
    try {
      const result = await asyncFunction(...args);
      setData(result);
      return result;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, deps);

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);

  return {
    data,
    loading,
    error,
    execute,
    setData,
    setError
  };
}

/**
 * Hook for handling async operations with manual trigger
 */
export function useAsyncCallback(asyncFunction, deps = []) {
  return useAsync(asyncFunction, false, deps);
}