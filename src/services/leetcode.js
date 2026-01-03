import { leetcodeStats as fallbackStats } from '../data/content';

// LeetCode GraphQL API endpoint (CORS proxy needed for browser)
const LEETCODE_API = 'https://leetcode.com/graphql';
const USERNAME = 'j5Fa0igpi6';

// Since LeetCode doesn't have a public API with CORS support,
// we'll use a combination of approaches

/**
 * Fetch LeetCode stats using a CORS proxy or server-side endpoint
 * Falls back to static data if API is unavailable
 */
export const fetchLeetCodeStats = async () => {
  try {
    // Try fetching from a public LeetCode stats API
    // These are community-maintained endpoints
    const response = await fetch(
      `https://leetcode-stats-api.herokuapp.com/${USERNAME}`,
      { 
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      }
    );
    
    if (!response.ok) {
      throw new Error('LeetCode API unavailable');
    }
    
    const data = await response.json();
    
    if (data.status === 'error') {
      throw new Error(data.message);
    }
    
    return {
      username: USERNAME,
      totalSolved: data.totalSolved || fallbackStats.totalSolved,
      ranking: data.ranking || fallbackStats.ranking,
      breakdown: {
        easy: { 
          solved: data.easySolved || fallbackStats.breakdown.easy.solved, 
          total: data.totalEasy || fallbackStats.breakdown.easy.total 
        },
        medium: { 
          solved: data.mediumSolved || fallbackStats.breakdown.medium.solved, 
          total: data.totalMedium || fallbackStats.breakdown.medium.total 
        },
        hard: { 
          solved: data.hardSolved || fallbackStats.breakdown.hard.solved, 
          total: data.totalHard || fallbackStats.breakdown.hard.total 
        },
      },
      acceptanceRate: data.acceptanceRate || null,
      contributionPoints: data.contributionPoints || null,
    };
  } catch (error) {
    console.warn('Using fallback LeetCode stats:', error.message);
    
    // Return fallback static data
    return {
      ...fallbackStats,
      isStatic: true,
    };
  }
};

/**
 * Alternative: Try LeetCode-CN API which sometimes has better availability
 */
export const fetchLeetCodeStatsAlt = async () => {
  try {
    // Try alfa-leetcode-api (another community API)
    const response = await fetch(
      `https://alfa-leetcode-api.onrender.com/${USERNAME}/solved`,
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      }
    );
    
    if (!response.ok) {
      throw new Error('Alternative LeetCode API unavailable');
    }
    
    const data = await response.json();
    
    return {
      username: USERNAME,
      totalSolved: data.solvedProblem || fallbackStats.totalSolved,
      ranking: data.ranking || fallbackStats.ranking,
      breakdown: {
        easy: { 
          solved: data.easySolved || fallbackStats.breakdown.easy.solved, 
          total: data.totalEasy || 800 
        },
        medium: { 
          solved: data.mediumSolved || fallbackStats.breakdown.medium.solved, 
          total: data.totalMedium || 1700 
        },
        hard: { 
          solved: data.hardSolved || fallbackStats.breakdown.hard.solved, 
          total: data.totalHard || 750 
        },
      },
    };
  } catch (error) {
    console.warn('Alternative API also failed:', error.message);
    return null;
  }
};

/**
 * Main function to get LeetCode stats with multiple fallbacks
 */
export const getLeetCodeStats = async () => {
  // Try primary API first
  let stats = await fetchLeetCodeStats();
  
  // If primary fails, try alternative
  if (stats.isStatic) {
    const altStats = await fetchLeetCodeStatsAlt();
    if (altStats && !altStats.isStatic) {
      stats = altStats;
    }
  }
  
  return stats;
};

export default {
  fetchLeetCodeStats,
  fetchLeetCodeStatsAlt,
  getLeetCodeStats,
};
