const GITHUB_API = 'https://api.github.com';
const GITHUB_USERNAME = import.meta.env.VITE_GITHUB_USERNAME || 'soulrahulrk';
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

// Headers for GitHub API requests
const getHeaders = () => {
  const headers = {
    Accept: 'application/vnd.github.v3+json',
  };
  
  if (GITHUB_TOKEN) {
    headers.Authorization = `token ${GITHUB_TOKEN}`;
  }
  
  return headers;
};

/**
 * Fetch user profile from GitHub
 */
export const fetchGitHubProfile = async () => {
  try {
    const response = await fetch(`${GITHUB_API}/users/${GITHUB_USERNAME}`, {
      headers: getHeaders(),
    });
    
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching GitHub profile:', error);
    return null;
  }
};

/**
 * Fetch repositories from GitHub
 */
export const fetchGitHubRepos = async (perPage = 30) => {
  try {
    const response = await fetch(
      `${GITHUB_API}/users/${GITHUB_USERNAME}/repos?per_page=${perPage}&sort=updated&direction=desc`,
      { headers: getHeaders() }
    );
    
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }
    
    const repos = await response.json();
    
    // Filter out forks and empty repos
    return repos.filter((repo) => !repo.fork && repo.description);
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return [];
  }
};

/**
 * Fetch a specific repository
 */
export const fetchGitHubRepo = async (repoName) => {
  try {
    const response = await fetch(
      `${GITHUB_API}/repos/${GITHUB_USERNAME}/${repoName}`,
      { headers: getHeaders() }
    );
    
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error(`Error fetching repo ${repoName}:`, error);
    return null;
  }
};

/**
 * Fetch repository languages
 */
export const fetchRepoLanguages = async (repoName) => {
  try {
    const response = await fetch(
      `${GITHUB_API}/repos/${GITHUB_USERNAME}/${repoName}/languages`,
      { headers: getHeaders() }
    );
    
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error(`Error fetching languages for ${repoName}:`, error);
    return {};
  }
};

/**
 * Fetch GitHub contribution stats
 */
export const fetchGitHubStats = async () => {
  try {
    const [profile, repos] = await Promise.all([
      fetchGitHubProfile(),
      fetchGitHubRepos(100),
    ]);
    
    if (!profile || !repos.length) {
      return null;
    }
    
    // Calculate stats
    const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
    const totalForks = repos.reduce((sum, repo) => sum + repo.forks_count, 0);
    const languages = new Set();
    
    repos.forEach((repo) => {
      if (repo.language) {
        languages.add(repo.language);
      }
    });
    
    return {
      profile,
      repos,
      stats: {
        publicRepos: profile.public_repos,
        totalStars,
        totalForks,
        followers: profile.followers,
        languages: Array.from(languages),
      },
    };
  } catch (error) {
    console.error('Error fetching GitHub stats:', error);
    return null;
  }
};

export default {
  fetchGitHubProfile,
  fetchGitHubRepos,
  fetchGitHubRepo,
  fetchRepoLanguages,
  fetchGitHubStats,
};
