import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import "./index.scss";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`moncloud`}
      description="Description will go into a meta tag in <head />"
    >
      <main className="home-main">
        <section className="hero-section">
          <div className="hero-section__banner">
            <img src="./img/hero-image.jpg" alt="moncloud" />
            <div className="hero-section__banner-text">
              <h1>moncloud</h1>
              <p>
                Отечественная облачная платформа, включённая в&nbsp;Реестр
                ПО&nbsp;МинЦифры &#8470;&nbsp;26306
              </p>
            </div>
          </div>
          <div className="hero-section__offer hero-offer">
            <h2>Что мы предлагаем</h2>
            <div className="hero-offer__wrapper">
              <h3>Облако IaaS + PaaS + VDI в двух моделях:</h3>
              <ul className="hero-offer__list list-reset">
                <li className="hero-offer__item">
                  On-premise инсталляция на&nbsp;вашей площадке. Доступ
                  к&nbsp;интернету не&nbsp;требуется ни&nbsp;на&nbsp;каком
                  из&nbsp;этапов
                </li>
                <li className="hero-offer__item">
                  Подконтрольные вам инсталляции в&nbsp;Tier-IV датацентре
                  с&nbsp;возможностью эластичного добавления и&nbsp;уменьшения
                  вычислительной ёмкости.
                </li>
              </ul>
            </div>
            <span>Обе модели подразумевают повышенную безопасность среды.</span>
          </div>
        </section>
      </main>
    </Layout>
  );
}
