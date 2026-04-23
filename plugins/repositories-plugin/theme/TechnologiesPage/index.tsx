import React from "react";
import Layout from "@theme/Layout";
import { usePluginData } from "@docusaurus/useGlobalData";
import RepositoryCard from "@site/src/components/RepositoryCard";
import { RepositoriesData } from "../../src/types";
import "./index.scss";

export default function TechnologiesPage() {
  const { repositories } = usePluginData(
    "repositories-plugin",
  ) as RepositoriesData;

  return (
    <Layout
      title="Технологии"
      description="Открытые технологии и проекты, которые мы используем и развиваем"
    >
      <main>
        <section className="technologies">
          <div className="technologies__header">
            <h1>Технологии</h1>
            <p>
              Мы&nbsp;придерживаемся идеологии коллаборативной
              разработки&nbsp;и, разумеется, опираемся на&nbsp;open-source
              технологии. Более того, мы&nbsp;стараемся отправлять обратно
              в&nbsp;upstream всё, что можем, насколько это возможно
              в&nbsp;нынешних условиях. Поэтому мы&nbsp;не&nbsp;считаем
              возможным обойти вниманием технологии, которые используем
              в&nbsp;качестве основы. Все мы&nbsp;перечислить не&nbsp;сможем,
              но&nbsp;постараемся подсветить самые важные (в&nbsp;том числе
              и&nbsp;технологии, которые заопенсорсили сами).
            </p>
          </div>
          
          <h2>Репозитории исходного кода, которые важны для наших решений</h2>

          <div className="technologies-grid">
            {repositories.map((repo) => (
              <RepositoryCard key={repo.full_name} repository={repo} />
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
