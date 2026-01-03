import { useState, useEffect } from 'react';
import { fetchGitHubStats, fetchGitHubRepos } from '../services/github';
import { featuredProjects } from '../data/content';

/**
 * Custom hook for fetching and managing GitHub data
 */
export const useGitHub = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const stats = await fetchGitHubStats();
        setData(stats);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

/**
 * Custom hook for managing projects with GitHub integration
 */
export const useProjects = () => {
  const [projects, setProjects] = useState(featuredProjects);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const githubRepos = await fetchGitHubRepos(30);
        setRepos(githubRepos);
        
        // Enhance featured projects with GitHub data if available
        const enhancedProjects = featuredProjects.map((project) => {
          const matchingRepo = githubRepos.find(
            (repo) =>
              repo.name.toLowerCase().includes(project.id.toLowerCase()) ||
              project.github?.includes(repo.name)
          );
          
          if (matchingRepo) {
            return {
              ...project,
              stars: matchingRepo.stargazers_count,
              forks: matchingRepo.forks_count,
              language: matchingRepo.language,
              updatedAt: matchingRepo.updated_at,
            };
          }
          
          return project;
        });
        
        setProjects(enhancedProjects);
      } catch (err) {
        console.error('Error fetching projects:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return { projects, repos, loading };
};

export default { useGitHub, useProjects };
