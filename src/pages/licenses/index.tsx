import React from "react";
import Layout from "@theme/Layout";
import LicensesList from "@site/src/components/LicensesList";
import licensesData from "@site/content/licenses/cv.yml";
import "./index.scss";

export default function LicensesPage() {
  return (
    <Layout
      title="Лицензии, сертификаты, товарные знаки, РИД"
      description="Лицензии, сертификаты, товарные знаки и свидетельства о регистрации программ для ЭВМ"
    >
      <main className="licenses">
        <div className="licenses__container">
          <h1>Лицензии, сертификаты, товарные знаки, РИД</h1>
          <LicensesList data={licensesData} />
        </div>
      </main>
    </Layout>
  );
}
