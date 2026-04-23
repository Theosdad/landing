import type { LoadContext, Plugin } from '@docusaurus/types';
import path from 'path';
import { loadRepositories } from './src/loader';
import { RepositoriesData } from './src/types';
import { normalizeUrl } from '@docusaurus/utils';

export default async function repositoriesPlugin(
  context: LoadContext,
  options: any
): Promise<Plugin<RepositoriesData>> {
  const reposFilePath = path.resolve(context.siteDir, 'content', 'repositories', 'repositories.yml');

  return {
    name: 'repositories-plugin',

    getThemePath() {
      return path.resolve(__dirname, './theme');
    },

    async loadContent() {
      const repositories = await loadRepositories(reposFilePath);
      return { repositories };
    },

    async contentLoaded({ content, actions }) {
      const { setGlobalData, addRoute } = actions;
      
      setGlobalData({
        repositories: content.repositories,
      });

      const permalink = normalizeUrl([context.baseUrl, '/technologies']);

      addRoute({
        path: permalink,
        component: '@theme/TechnologiesPage',
        exact: true,
      });
    },

    getPathsToWatch() {
      return [reposFilePath];
    },
  };
}
