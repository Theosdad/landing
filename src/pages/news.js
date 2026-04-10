import Layout from "@theme/Layout";
import NewsList from "@site/src/components/NewsList";

export default function NewsPage() {
  return (
    <Layout title="События" description="Все новости и события">
      <main>
        <NewsList showTitle={true} />
      </main>
    </Layout>
  );
}
