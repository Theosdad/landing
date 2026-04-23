import fs from 'fs';
import yaml from 'js-yaml';
import path from 'path';
import { GitHubRepository } from './types';

interface RepositoriesYaml {
  github_repos: string[];
  repo_description_lines_max?: number;
}

export async function loadRepositories(yamlPath: string): Promise<GitHubRepository[]> {
  const fileContents = fs.readFileSync(yamlPath, 'utf8');
  const data = yaml.load(fileContents) as RepositoriesYaml;
  
  const repositories: GitHubRepository[] = [];
  
  for (const repo of data.github_repos) {
    try {
      const response = await fetch(`https://api.github.com/repos/${repo}`, {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'User-Agent': 'Docusaurus-Site'
        }
      });
      
      if (response.ok) {
        const repoData = await response.json();
        repositories.push({
          name: repoData.name,
          full_name: repoData.full_name,
          description: repoData.description || 'No description available',
          html_url: repoData.html_url,
          stargazers_count: repoData.stargazers_count,
          forks_count: repoData.forks_count,
          language: repoData.language || 'Unknown',
          owner: {
            login: repoData.owner.login,
            avatar_url: repoData.owner.avatar_url
          }
        });
      } else {
        console.warn(`Failed to fetch repository ${repo}: ${response.status}`);
      }
      
      await new Promise(resolve => setTimeout(resolve, 100));
    } catch (error) {
      console.error(`Error fetching repository ${repo}:`, error);
    }
  }
  
  return repositories;
}
