import Layout from "@theme/Layout";
import "./index.scss";
import Comparison from "../../../components/Comparison";
import Breadcrumbs from "../../../components/Breadcrumbs";

export default function WormholePage() {
  return (
    <Layout
      title="wormhole"
      description="технология предоставления доступа к удалённым рабочим столам"
    >
      <main>
        <div className="wormhole-page">
          <div className="wormhole-page__breadcrumb">
            <Breadcrumbs
              items={[
                { label: "Продукты:", href: "/landing/products" },
                { label: "Wormhole" },
              ]}
            />
          </div>
          <h1 className="wormhole-page__title">Wormhole</h1>
          <p className="wormhole-page__subtitle">
            технология предоставления доступа к&nbsp;удалённым рабочим столам
          </p>
          <section className="wormhole-hero">
            <div className="wormhole-hero__description">
              <p className="wormhole-hero__slogan">
                Собственная технология трансляции виртуальных рабочих столов,
                позволяющая работать с 3D-нагрузками без задержек.
              </p>
              <p className="wormhole-hero__slogan">
                Поставляется как подключаемая опция в дистрибутиве moncloud,
                однако можно обсудить и отдельное использование без дистрибутива
                облака.
              </p>
            </div>

            <div className="wormhole-hero__comparison">
              <Comparison
                rightTitle="Общие вводные"
                rightKey="wormhole"
                rightItems={[
                  "WebRTC как основа для трансляции;",
                  "очень маленькие задержки (<100мс);",
                  "переключение кодеков для трансляции",
                  "проброс USB",
                  "нативная интеграция с облаком moncloud, но может работать и отдельно;",
                  "поддержка множества мониторов;",
                  "поддержка любых разрещений экрана при использовании moncloud (fullhd, 2K, 4K, 5K).",
                ]}
              />
            </div>
            <div className="wormhole-hero__licensing">
              <h2>Лицензирование</h2>
              <p>По числу рабочих столов/пользователей.</p>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}
