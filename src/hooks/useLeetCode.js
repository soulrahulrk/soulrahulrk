import { useState, useEffect } from 'react';
import { getLeetCodeStats } from '../services/leetcode';
import { leetcodeStats as fallbackStats } from '../data/content';

/**
 * Custom hook for fetching and managing LeetCode data
 * Always returns data (either from API or fallback)
 */
export const useLeetCode = () => {
  const [stats, setStats] = useState(fallbackStats); // Start with fallback
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getLeetCodeStats();
        
        if (mounted) {
          setStats(data);
          setError(null);
        }
      } catch (err) {
        console.warn('LeetCode fetch error:', err.message);
        if (mounted) {
          setError(err.message);
          // Stats already set to fallback
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    fetchData();
    
    return () => {
      mounted = false;
    };
  }, []);

  return { stats, loading, error };
};

export default useLeetCode;
