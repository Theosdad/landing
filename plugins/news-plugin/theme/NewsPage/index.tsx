import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { usePluginData } from '@docusaurus/useGlobalData';
import styles from './styles.module.css';

interface NewsPageProps {
  data: {
    news: {
      id: string;
      title?: string;
      date: string;
      content: string;
      inline?: boolean;
      layout?: string;
    };
    allNews: any[];
  };
}

export default function NewsPage({ data }: NewsPageProps) {
  const { news } = data;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return date.toLocaleDateString('ru-RU', options);
  };

  return (
    <Layout title={news.title || 'Новость'}>
      <main className={styles.newsPage}>
        <div className="container">
          <Link to="/news" className={styles.backLink}>
            ← Все новости
          </Link>
          
          <article className={styles.newsArticle}>
            {news.title && (
              <h1 className={styles.newsTitle}>{news.title}</h1>
            )}
            
            <div className={styles.newsDate}>
              {formatDate(news.date)}
            </div>
            
            <div 
              className={styles.newsContent}
              dangerouslySetInnerHTML={{ __html: news.content }}
            />
          </article>
        </div>
      </main>
    </Layout>
  );
}
