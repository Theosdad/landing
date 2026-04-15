import type { LoadContext, Plugin } from '@docusaurus/types';
import path from 'path';
import { loadBibFile } from './src/loader';
import { BibliographyData, BibEntry } from './src/types';
import { normalizeUrl } from '@docusaurus/utils';

export default async function bibliographyPlugin(
  context: LoadContext,
  options: any
): Promise<Plugin<BibliographyData>> {
  const bibFilePath = path.resolve(context.siteDir, 'content', 'bibliography', 'papers.bib');

  return {
    name: 'bibliography-plugin',

    getThemePath() {
      return path.resolve(__dirname, './theme');
    },

    async loadContent() {
      const allPublications = loadBibFile(bibFilePath);

      const selectedPublications = allPublications.filter(pub => pub.selected === true);

      const publicationsByYear: Record<string, BibEntry[]> = {};
      
      for (const pub of allPublications) {
        const year = pub.year || 'Unknown';
        
        if (!publicationsByYear[year]) {
          publicationsByYear[year] = [];
        }
        publicationsByYear[year].push(pub);
      }

      return { allPublications, selectedPublications, publicationsByYear };
    },

    async contentLoaded({ content, actions }) {
      const { setGlobalData, addRoute } = actions;
      
      setGlobalData({
        allPublications: content.allPublications,
        selectedPublications: content.selectedPublications,
        publicationsByYear: content.publicationsByYear,
      });

      const permalink = normalizeUrl([context.baseUrl, '/publications']);

      addRoute({
        path: permalink,
        component: '@theme/PublicationsPage',
        exact: true,
      });
    },

    getPathsToWatch() {
      return [bibFilePath];
    },
  };
}
