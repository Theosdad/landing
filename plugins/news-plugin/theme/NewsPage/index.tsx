import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import { usePluginData } from "@docusaurus/useGlobalData";
import ImageSlider from "@site/src/components/ImageSlider";
import "./index.scss";

interface NewsPageProps {
  data: {
    news: {
      id: string;
      title?: string;
      date: string;
      content: string;
      inline?: boolean;
      layout?: string;
      images?: {
        slider?: boolean;
      };
    };
    allNews: any[];
  };
}

export default function NewsPage({ data }: NewsPageProps) {
  const { news } = data;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("ru-RU", options);
  };

  // Parse content to extract slider images and replace with placeholder
  const parseContentWithSlider = () => {
    const sliderRegex =
      /<!--\s*SLIDER_START\s*-->([\s\S]*?)<!--\s*SLIDER_END\s*-->/g;
    const parts: React.ReactNode[] = [];
    let lastIndex = 0;
    let match;
    let key = 0;

    while ((match = sliderRegex.exec(news.content)) !== null) {
      // Add content before slider
      if (match.index > lastIndex) {
        parts.push(
          <div
            key={`content-${key++}`}
            dangerouslySetInnerHTML={{
              __html: news.content.substring(lastIndex, match.index),
            }}
          />,
        );
      }

      // Extract image URLs from the slider content
      const sliderContent = match[1];
      const imgRegex = /src="([^"]+)"/g;
      const images: Array<{ src: string; alt: string }> = [];
      let imgMatch;
      let imgIndex = 0;

      while ((imgMatch = imgRegex.exec(sliderContent)) !== null) {
        images.push({
          src: imgMatch[1],
          alt: `Изображение ${++imgIndex}`,
        });
      }

      // Add slider component
      if (images.length > 0) {
        parts.push(<ImageSlider key={`slider-${key++}`} images={images} />);
      }

      lastIndex = sliderRegex.lastIndex;
    }

    // Add remaining content
    if (lastIndex < news.content.length) {
      parts.push(
        <div
          key={`content-${key++}`}
          dangerouslySetInnerHTML={{
            __html: news.content.substring(lastIndex),
          }}
        />,
      );
    }

    return parts.length > 0 ? (
      parts
    ) : (
      <div dangerouslySetInnerHTML={{ __html: news.content }} />
    );
  };

  return (
    <Layout title={news.title || "Новость"}>
      <main>
        <div className="news-page">
          <Link to="/news" className="news-page__back-link">
            Все новости
          </Link>

          <article className="news-page__content">
            {news.title && <h1>{news.title}</h1>}

            <div className="news-page__date">
              Событие состоялось: <span>{formatDate(news.date)}</span>
            </div>

            <div className="news-page__markdown">{parseContentWithSlider()}</div>
          </article>
        </div>
      </main>
    </Layout>
  );
}
