import type { LoadContext, Plugin } from '@docusaurus/types';
import path from 'path';
import { loadNewsDir } from './src/loader';
import { newsSchema } from './src/schema';
import { LoadedNews, NewsData } from './src/types';
import { aliasedSitePath, normalizeUrl } from '@docusaurus/utils';

export default async function newsPlugin(
  context: LoadContext,
  options: any
): Promise<Plugin<NewsData>> {
  const contentPath = path.resolve(context.siteDir, 'content', 'news');

  return {
    name: 'news-plugin',

    getThemePath() {
      return path.resolve(__dirname, './theme');
    },

    async loadContent() {
      const newsItems = loadNewsDir(
        contentPath,
        (d) => newsSchema.validate(d).value
      );

      const allNews: LoadedNews[] = Object.values(newsItems);

      allNews.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB.getTime() - dateA.getTime();
      });

      const newsByYear: Record<string, LoadedNews[]> = {};
      
      for (const news of allNews) {
        const date = new Date(news.date);
        const year = date.getFullYear().toString();
        
        if (!newsByYear[year]) {
          newsByYear[year] = [];
        }
        newsByYear[year].push(news);
      }

      return { allNews, newsByYear };
    },

    async contentLoaded({ content, actions }) {
      const { setGlobalData, addRoute, createData } = actions;
      
      setGlobalData({
        allNews: content.allNews,
        newsByYear: content.newsByYear,
      });

      // Create individual routes for each news item
      for (const news of content.allNews) {
        const dataPath = await createData(
          `news-${news.id}.json`,
          JSON.stringify({ news, allNews: content.allNews })
        );

        const permalink = normalizeUrl([context.baseUrl, `/news/${news.id}`]);

        addRoute({
          path: permalink,
          component: '@theme/NewsPage',
          modules: {
            data: dataPath,
          },
          exact: true,
        });
      }
    },

    getPathsToWatch() {
      return [path.join(contentPath, '**/*')];
    },
  };
}
