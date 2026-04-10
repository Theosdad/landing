import React, { useState } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import "./index.scss";
import NewsList from "../components/NewsList";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const [activeComparison, setActiveComparison] = useState<
    "openstack" | "moncloud"
  >("openstack");
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

        <section className="included">
          <div className="included__wrapper">
            <div className="included__text">
              <h2>Что в комплекте:</h2>
              <p>
                Промышленные функции, которых нет в&nbsp;Opensource-редакциях
                Openstack (и&nbsp;в&nbsp;некоторых коммерческих решениях).Обе
                модели подразумевают повышенную безопасность среды.
              </p>
              <span>
                Решение поставляется вместе со&nbsp;средой сопровождения (TUI +
                CLI + API): установка, упрощённое добавление новых узлов,
                обновление и&nbsp;другие операции сопровождения (собственная
                разработка).
              </span>
            </div>
            <ul className="included__list list-reset">
              <li className="included__item">
                Отказоустойчивость ВМ&nbsp;и&nbsp;управляющей плоскости
              </li>
              <li className="included__item">
                Балансировка нагрузки по&nbsp;гипервизорам/перераспредение ВМ
              </li>
              <li className="included__item">
                Собственная реализация SDN, ориентированный на&nbsp;сложные
                сетевые задачи. Поддерживается полный набор возможностей для
                работы Network Function Virtualization (NFV)&nbsp;/ Service
                Function Chaining (SFC)
              </li>
              <li className="included__item">
                VPNaaS с&nbsp;возможностью прозрачного подключения пользователей
                к&nbsp;виртуальным сетям, а&nbsp;также классический site-to-site
              </li>
              <li className="included__item">
                Управление облачными заданиями по&nbsp;расписанию
              </li>
              <li className="included__item">
                Собственная технология VDI&nbsp;/ Desktop as&nbsp;a&nbsp;Service
                для Windows и&nbsp;Linux. В&nbsp;качестве протокола трансляции
                можно использовать как RDP, так и&nbsp;нашу собственную
                реализацию, ориентированную на&nbsp;пониженные задержки
                и&nbsp;3D-нагрузки.
              </li>
              <li className="included__item">Биллинг использования ресурсов</li>
              <li className="included__item">
                Полный аудит событий в&nbsp;облаке
              </li>
              <li className="included__item">
                Подконтрольные Platform-as-a-Service (с&nbsp;возможностью
                быстрого добавления новых сервисов при наличии запроса).
                Простота добавления обеспечивается использованием стандарта
                OASIS TOSCA в&nbsp;нашем движке оркестрации платформенных
                сервисов. Предоставляются Kubernetes as&nbsp;a&nbsp;Service
                и&nbsp;PostgreSQL as&nbsp;a&nbsp;Service с&nbsp;выбором версии
                и&nbsp;упрощённой настройкой (дистрибутивы PostgreSQL
                и&nbsp;Kubernetes не&nbsp;входят в&nbsp;дистрибутив облачной
                среды)
              </li>
              <li className="included__item">
                Контроль целостности виртуальных машин
              </li>
              <li className="included__item">Управление оборудованием</li>
            </ul>
          </div>
        </section>

        <section className="strengths">
          <div className="strengths__wrapper">
            <div className="strengths__badge">
              <h2>Наши сильные стороны</h2>
              <img src="./img/swot.png" alt="" />
            </div>
            <ul className="strengths__list list-reset">
              <li className="strengths__item">
                <h3>Поддержка от&nbsp;индустрии</h3>
                <p>
                  Компания основана командой, занимающейся строительством
                  сверхнадёжных ЦОД и&nbsp;построившей первый
                  в&nbsp;РФ&nbsp;Tier-IV&nbsp;датацентр.
                </p>
              </li>
              <li className="strengths__item">
                <h3>Промышленный подход к&nbsp;продуктам</h3>
                <p>
                  В&nbsp;основе IaaS-части лежит комбинация продуктов Asperitas
                  и&nbsp;AccentOS. AccentOS известен в&nbsp;сообществе своими
                  функциональными возможностями, Asperitas использует надёжные
                  механизмы безопасности и&nbsp;является передовой разработкой
                  в&nbsp;консорциуме облачных технологий Российской Академии
                  Наук.
                </p>
              </li>
              <li className="strengths__item">
                <h3>Научные принципы</h3>
                <p>
                  Проект изначально запущен в&nbsp;рамках сотрудничества
                  с&nbsp;Институтом Системного Программирования им. В.П.
                  Иванникова Российской Академии Наук. Институт занимается
                  разработками технологий от&nbsp;уровня оборудования
                  до&nbsp;уровня прикладных приложений. Институт также известен
                  повышенным вниманием к&nbsp;анализу исходных и&nbsp;бинарных
                  кодов, а&nbsp;также внимательностью к&nbsp;аспектам
                  безопасности на&nbsp;всех уровнях.
                </p>
              </li>
            </ul>
          </div>
        </section>

        <section className="comparison">
          <h2>Наши преимущества от&nbsp;ванильного OpenStack</h2>
          <div className="comparison__buttons">
            <button
              className={clsx("comparison__button", {
                active: activeComparison === "openstack",
              })}
              onClick={() => setActiveComparison("openstack")}
            >
              Ванильный OpenStack
            </button>
            <button
              className={clsx("comparison__button", {
                active: activeComparison === "moncloud",
              })}
              onClick={() => setActiveComparison("moncloud")}
            >
              Moncloud
            </button>
          </div>
          <div className="comparison__wrapper">
            <div
              className={clsx("comparison__subject", "openstack", {
                active: activeComparison === "openstack",
              })}
            >
              <h3>Ванильный OpenStack</h3>
              <ul className="comparison__list list-reset">
                <li className="comparison__item openstack__item">
                  Собственная система сопровождения, позволяющая обновлять
                  облако
                </li>
                <li className="comparison__item openstack__item">
                  Неизолирован от&nbsp;интернет-источников
                </li>
                <li className="comparison__item openstack__item">
                  Ориентирован на&nbsp;распространённые дистрибутивы
                  и&nbsp;не&nbsp;изолирован по&nbsp;источникам обновления:
                  Ubuntu, RHEL и&nbsp;т.д
                </li>
                <li className="comparison__item openstack__item">
                  Нет встроенных механизмов безопасности
                </li>
                <li className="comparison__item openstack__item">
                  Нет VDI/виртуальных рабочих столов
                </li>
                <li className="comparison__item openstack__item">
                  Базовые сети
                </li>
                <li className="comparison__item openstack__item">
                  PaaS в&nbsp;виде всегда отстающих от&nbsp;сообщества сервисов,
                  которые не&nbsp;учитывают текущих потребностей
                </li>
              </ul>
            </div>
            <div
              className={clsx("comparison__subject", "moncloud", {
                active: activeComparison === "moncloud",
              })}
            >
              <h3>Moncloud</h3>
              <ul className="comparison__list list-reset">
                <li className="comparison__item moncloud__item">
                  Собственная система сопровождения, позволяющая обновлять
                  облако
                </li>
                <li className="comparison__item moncloud__item">
                  Сборка в&nbsp;изолированной среде
                </li>
                <li className="comparison__item moncloud__item">
                  Весь дистрибутив собирается в&nbsp;изолированной среде,
                  не&nbsp;требуетинтернета для установки/развёртывания, работают
                  отечественные&nbsp;ОС
                </li>
                <li className="comparison__item moncloud__item">
                  ФСТЭК-ядро, безопасный компилятор, ПМДЗ для виртуальных машин,
                  основан на&nbsp;сертифицированном ФСТЭК продукте
                  и&nbsp;проходит к&nbsp;самостоятельную сертификацию
                  по&nbsp;требованиям 187 приказа на&nbsp;4й&nbsp;уровень
                  доверия
                </li>
                <li className="comparison__item moncloud__item">
                  Есть технология VDI/виртуальных рабочих столов
                  с&nbsp;различными профилями от&nbsp;офисной работы
                  до&nbsp;3D-проектирования с&nbsp;пониженными задержками
                </li>
                <li className="comparison__item moncloud__item">
                  Собственный SDN с&nbsp;поддержкой шифрованных виртуальных
                  сетей, запрещающих правил firewall, NFV, SFC и&nbsp;других
                  возможностей
                </li>
                <li className="comparison__item moncloud__item">
                  PaaS в&nbsp;виде всегда отстающих от&nbsp;сообщества сервисов,
                  которые не&nbsp;учитывают текущих потребностей
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <NewsList limit={5} showViewAll={true} />
        </section>
      </main>
    </Layout>
  );
}
