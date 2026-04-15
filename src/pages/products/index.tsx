import React from "react";
import Layout from "@theme/Layout";
import ProductCard from "@site/src/components/ProductCard";
import {
  currentProducts,
  productsInDevelopment,
} from "@site/src/data/products";
import "./index.scss";

export default function ProductsPage() {
  return (
    <Layout
      title="Продукты"
      description="Наши продукты и решения для облачной инфраструктуры"
    >
      <main>
        <div className="products-page__container">
          <section className="products-section">
            <div className="products-section__header">
              <h1>Продукты</h1>
              <p className="products-section__subtitle">
                Комплексные решения для построения облачной инфраструктуры
              </p>
            </div>

            <div className="products-section__content">
              <h2 className="products-section__title">Готовые решения</h2>
              <div className="products-grid">
                {currentProducts.map((product: currentProducts) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>

            <div className="products-section__content">
              <h2 className="products-section__title">В разработке</h2>
              <div className="products-grid">
                {productsInDevelopment.map((product: productsInDevelopment) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    inDevelopment={true}
                  />
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}
