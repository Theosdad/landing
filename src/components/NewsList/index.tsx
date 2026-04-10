import React from "react";
import { usePluginData } from "@docusaurus/useGlobalData";
import Link from "@docusaurus/Link";

import "./index.scss";

interface NewsItem {
  id: string;
  title?: string;
  date: string;
  inline?: boolean;
  filePath: string;
  content: string;
  layout?: string;
  related_posts?: boolean;
  images?: {
    slider?: boolean;
  };
}

interface NewsPluginData {
  allNews: NewsItem[];
  newsByYear: Record<string, NewsItem[]>;
}

interface NewsListProps {
  limit?: number;
  showViewAll?: boolean;
  showTitle?: boolean;
}

export default function NewsList({
  limit,
  showViewAll = false,
  showTitle = false,
}: NewsListProps = {}) {
  const { allNews } = usePluginData("news-plugin") as NewsPluginData;

  const displayNews = limit ? allNews.slice(0, limit) : allNews;

  const newsByYear: Record<string, NewsItem[]> = {};
  for (const news of displayNews) {
    const date = new Date(news.date);
    const year = date.getFullYear().toString();

    if (!newsByYear[year]) {
      newsByYear[year] = [];
    }
    newsByYear[year].push(news);
  }

  const years = Object.keys(newsByYear).sort((a, b) => Number(b) - Number(a));

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const monthNames = [
      "Янв",
      "Фев",
      "Мар",
      "Апр",
      "Май",
      "Июн",
      "Июл",
      "Авг",
      "Сен",
      "Окт",
      "Ноя",
      "Дек",
    ];
    const month = monthNames[date.getMonth()];
    return `${day} ${month}`;
  };

  return (
    <div className="news">
      {showTitle && (
        <div className="news__header">
          <h2>События</h2>
        </div>
      )}

      {showViewAll && (
        <div className="news__header">
          <h2>Последние новости</h2>
          <Link to="/news">Перейти ко всем событиям</Link>
        </div>
      )}

      <div className="news__content">
        {years.map((year) => (
          <div key={year} className="news__year">
            <div className="news__year-label">{year}</div>
            <div className="news__list">
              {newsByYear[year].map((news) => (
                <div key={news.id} className="news__item">
                  <div className="news__date">{formatDate(news.date)}</div>
                  <div className="news__title">
                    {news.title ? (
                      <Link to={`/news/${news.id}`} className="">
                        <div className="">{news.title}</div>
                      </Link>
                    ) : news.inline ? (
                      <div
                        className=""
                        dangerouslySetInnerHTML={{ __html: news.content }}
                      />
                    ) : (
                      <Link to={`/news/${news.id}`} className="">
                        <div className="">
                          {news.content.replace(/<[^>]*>/g, "")}
                        </div>
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
