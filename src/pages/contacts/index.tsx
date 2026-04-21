import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import "./index.scss";

interface CustomFields {
  email: string;
  phone: string;
  companyName: string;
  address: string;
  legalAddress: string;
  inn: string;
  kpp: string;
  ogrn: string;
}

function YandexMap() {
  return (
    <iframe
      src="https://yandex.ru/map-widget/v1/?ll=37.560197%2C55.783600&z=17&pt=37.560197%2C55.783600,pm2rdm"
      className="yandex-map"
      allowFullScreen
      title="Карта расположения moncloud"
    />
  );
}

export default function ContactsPage() {
  const { siteConfig } = useDocusaurusContext();
  const { email, phone, companyName, address, legalAddress, inn, kpp, ogrn } = (siteConfig.customFields as any) as CustomFields;

  return (
    <Layout title="Контакты" description="Свяжитесь с нами">
      <main>
        <div className="contacts">
          <div className="contacts__content">
            <div className="contacts__title">
              <h1>Контакты</h1>
              <p>{String(companyName)}</p>
            </div>
            <div className="contacts__list">
              <div className="contacts__item">
                <h2>Связаться с нами</h2>
                <a href={`tel:${String(phone).replace(/\s/g, "")}`}>
                  {String(phone)}
                </a>
                <a href={`mailto:${email}`}>{String(email)}</a>
                <address>{String(address)}</address>
              </div>
              <div className="contacts__item">
                <h2>Юридический адрес:</h2>
                <address>{String(legalAddress)}</address>
              </div>
            </div>
            <div className="contacts__details">
              <h2>Реквизиты:</h2>
              <span>
                <b>ИНН:</b>{String(inn)}
              </span>
              <span>
                <b>КПП:</b>{String(kpp)}
              </span>
              <span>
                <b>ОГРН:</b>{String(ogrn)}
              </span>
            </div>
          </div>

          <div className="contacts__map">
            <YandexMap />
          </div>
        </div>
      </main>
    </Layout>
  );
}
