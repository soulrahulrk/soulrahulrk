import { leetcodeStats as fallbackStats } from '../data/content';

const USERNAME = 'j5Fa0igpi6';
const TIMEOUT = 8000; // 8 seconds timeout
const MAX_RETRIES = 2;

/**
 * Fetch with timeout
 */
const fetchWithTimeout = async (url, options = {}, timeout = TIMEOUT) => {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  
  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    });
    clearTimeout(id);
    return response;
  } catch (error) {
    clearTimeout(id);
    throw error;
  }
};

/**
 * Try multiple LeetCode API endpoints with retry logic
 */
const tryLeetCodeAPIs = async () => {
  const apis = [
    {
      name: 'alfa-leetcode-api',
      url: `https://alfa-leetcode-api.onrender.com/${USERNAME}/solved`,
      parser: (data) => ({
        totalSolved: data.solvedProblem || 0,
        ranking: data.ranking || null,
        breakdown: {
          easy: { solved: data.easySolved || 0, total: 800 },
          medium: { solved: data.mediumSolved || 0, total: 1700 },
          hard: { solved: data.hardSolved || 0, total: 750 },
        },
      }),
    },
    {
      name: 'leetcode-stats-api',
      url: `https://leetcode-stats-api.herokuapp.com/${USERNAME}`,
      parser: (data) => ({
        totalSolved: data.totalSolved || 0,
        ranking: data.ranking || null,
        breakdown: {
          easy: { solved: data.easySolved || 0, total: data.totalEasy || 800 },
          medium: { solved: data.mediumSolved || 0, total: data.totalMedium || 1700 },
          hard: { solved: data.hardSolved || 0, total: data.totalHard || 750 },
        },
      }),
    },
  ];

  for (const api of apis) {
    for (let retry = 0; retry < MAX_RETRIES; retry++) {
      try {
        const response = await fetchWithTimeout(api.url, {
          method: 'GET',
          headers: { 'Accept': 'application/json' },
        });

        if (!response.ok) continue;

        const data = await response.json();
        if (data.status === 'error') continue;

        const parsed = api.parser(data);
        if (parsed.totalSolved > 0) {
          return {
            username: USERNAME,
            ...parsed,
            ...fallbackStats,
            totalSolved: parsed.totalSolved,
            breakdown: parsed.breakdown,
          };
        }
      } catch (error) {
        if (retry === MAX_RETRIES - 1) {
          console.warn(`Failed ${api.name}:`, error.message);
        }
      }
    }
  }

  return null;
};

/**
 * Fetch LeetCode stats with fallback to static data
 */
export const fetchLeetCodeStats = async () => {
  try {
    const apiData = await tryLeetCodeAPIs();
    if (apiData) return apiData;
    
    throw new Error('All LeetCode APIs failed');
  } catch (error) {
    console.warn('Using static LeetCode stats:', error.message);
    return { ...fallbackStats, isStatic: true };
  }
};

/**
 * Main export that always returns data (either from API or fallback)
 */
export const getLeetCodeStats = async () => {
  return await fetchLeetCodeStats();
};

export default getLeetCodeStats;
