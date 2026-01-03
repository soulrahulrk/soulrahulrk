import { useState, useEffect } from 'react';
import { getLeetCodeStats } from '../services/leetcode';

/**
 * Custom hook for fetching and managing LeetCode data
 */
export const useLeetCode = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getLeetCodeStats();
        setStats(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { stats, loading, error };
};

export default useLeetCode;
