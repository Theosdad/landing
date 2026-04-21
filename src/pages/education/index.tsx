import React from "react";
import Layout from "@theme/Layout";
import "./index.scss";

export default function TrainingPage() {
  return (
    <Layout
      title="Обучение"
      description="Обучение работе с платформой moncloud"
    >
      <main>
        <div className="education">
          <div className="education__content">
            <h1>Обучение</h1>
            <p>
              На платформе <a href="https://www.unicraft.org/">unicraft.org</a>{" "}
              размещён набор обучающих материалов.
            </p>
            <p>
              В&nbsp;рамках сотрудничества мы&nbsp;готовы предоставить доступ
              к&nbsp;указанным материалам для инженеров, которые будут
              осуществлять сопровождение нашей платформы на&nbsp;вашей площадке.
              Документация на&nbsp;платформу{" "}
              <a href="https://docs.moncloud.ru/">доступна всем</a>.
            </p>
          </div>
          <div className="education__image">
            <img src="./img/education.png" alt="" />
          </div>
          <div className="education__sub">
            <p>
              Также если у&nbsp;вас есть сертификаты/опыт прохождения программ
              CL110, CL210, CL211, RH294, RH124, RH135 от&nbsp;Red Hat, вам
              будет гораздо комфортнее пользоваться платформой.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
