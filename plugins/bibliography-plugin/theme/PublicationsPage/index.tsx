import React, { useState, useEffect, useRef } from "react";
import Layout from "@theme/Layout";
import { usePluginData } from "@docusaurus/useGlobalData";
import { BibliographyData, BibEntry } from "../../src/types";
import "./index.scss";

export function PublicationCard({ publication }: { publication: BibEntry }) {
  const [isAbstractOpen, setIsAbstractOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const venue = publication.journal || publication.booktitle || "";

  const quartileMatch = publication.abbr?.match(/Q[1-4]/);
  const quartile = quartileMatch ? quartileMatch[0] : null;
  const abbrWithoutQuartile = publication.abbr
    ?.replace(/,?\s*Q[1-4]\s*,?/, "")
    .trim();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 997);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile && isAbstractOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isAbstractOpen, isMobile]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsAbstractOpen(false);
      }
    };

    if (!isMobile && isAbstractOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isAbstractOpen, isMobile]);

  return (
    <div className="publication-card">
      <div className="publication-card__header">
        {abbrWithoutQuartile && <span>{abbrWithoutQuartile}</span>}
        {quartile && (
          <div className="publication-card__quartile-wrapper">
            <div className="publication-card__quartile">{quartile}</div>
            <div className="publication-card__quartile-dot"></div>
          </div>
        )}
      </div>

      <div className="publication-card__wrapper">
        <div className="publication-card__content">
          <h3>{publication.title}</h3>
          {publication.author && (
            <div className="publication-card__authors">
              {publication.author}
            </div>
          )}

          {venue && (
            <div className="publication-card__venue">
              {venue} {publication.month} {publication.year}
            </div>
          )}
        </div>

        <div className="publication-card__buttons">
          {publication.abstract && (
            <button
              className="publication-card__button"
              onClick={() => setIsAbstractOpen(!isAbstractOpen)}
            >
              ABS
            </button>
          )}

          {publication.doi && (
            <a
              href={`https://doi.org/${publication.doi}`}
              target="_blank"
              rel="noopener noreferrer"
              className="publication-card__button"
            >
              DOI
            </a>
          )}
        </div>

        {publication.abstract && isAbstractOpen && isMobile && (
          <div className="publication-card__abstract">
            {publication.abstract}
          </div>
        )}
      </div>

      {publication.abstract && isAbstractOpen && !isMobile && (
        <div className="publication-card__modal-overlay">
          <div className="publication-card__modal" ref={modalRef}>
            <div className="publication-card__modal-header">
              <h4>{publication.title}</h4>
              <button
                className="publication-card__modal-close"
                onClick={() => setIsAbstractOpen(false)}
              >
                ×
              </button>
            </div>
            <div className="publication-card__modal-content">
              {publication.abstract}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

interface PublicationsListProps {
  selectedOnly?: boolean;
  limit?: number;
  groupByYear?: boolean;
  showAbstract?: boolean;
}

export function PublicationsList({
  selectedOnly = false,
  limit,
  groupByYear = true,
  showAbstract = false,
}: PublicationsListProps) {
  const { publicationsByYear, allPublications, selectedPublications } =
    usePluginData("bibliography-plugin") as BibliographyData;

  if (groupByYear) {
    const years = Object.keys(publicationsByYear).sort((a, b) => {
      return parseInt(b) - parseInt(a);
    });

    return (
      <>
        {years.map((year) => {
          let pubs = publicationsByYear[year];
          if (!pubs || pubs.length === 0) return null;

          if (selectedOnly) {
            pubs = pubs.filter((pub) => pub.selected);
          }

          if (pubs.length === 0) return null;

          const displayPubs = limit ? pubs.slice(0, limit) : pubs;

          return (
            <div key={year} className="publications-group">
              <h2>{year}</h2>
              <div className="publications-list">
                {displayPubs.map((pub, idx) => (
                  <PublicationCard key={`${pub.id}-${idx}`} publication={pub} />
                ))}
              </div>
            </div>
          );
        })}
      </>
    );
  } else {
    let publications = selectedOnly ? selectedPublications : allPublications;

    if (limit) {
      publications = publications.slice(0, limit);
    }

    return (
      <div className="publications-list">
        {publications.map((pub, idx) => (
          <PublicationCard key={`${pub.id}-${idx}`} publication={pub} />
        ))}
      </div>
    );
  }
}

export default function PublicationsPage() {
  return (
    <Layout title="Публикации" description="Research publications and papers">
      <main>
        <section className="publications">
          <div className="publications-header">
            <h1>Публикации</h1>
            <p>Некоторые публикации от нашей команды</p>
          </div>

          <PublicationsList groupByYear={true} />
        </section>
      </main>
    </Layout>
  );
}
