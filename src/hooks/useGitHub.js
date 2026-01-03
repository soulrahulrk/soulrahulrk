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
    let mounted = true;
    
    const fetchData = async () => {
      try {
        setLoading(true);
        const stats = await fetchGitHubStats();
        
        if (mounted) {
          setData(stats);
          setError(null);
        }
      } catch (err) {
        console.warn('GitHub fetch error:', err.message);
        if (mounted) {
          setError(err.message);
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
    let mounted = true;
    
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const githubRepos = await fetchGitHubRepos(30);
        
        if (!mounted) return;
        
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
        
        if (mounted) {
          setProjects(enhancedProjects);
        }
      } catch (err) {
        console.warn('Error fetching projects:', err.message);
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    fetchProjects();
    
    return () => {
      mounted = false;
    };
  }, []);

  return { projects, repos, loading };
};

export default { useGitHub, useProjects };
