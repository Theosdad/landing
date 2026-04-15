import React from "react";
import Link from "@docusaurus/Link";
import { Tooltip } from "antd";
import "./index.scss";

export interface Product {
  id: string;
  title: string;
  description: string;
  image?: string;
  link: string;
  tags?: string[];
  tooltip?: string;
}

interface ProductCardProps {
  product: Product;
  inDevelopment?: boolean;
}

export default function ProductCard({
  product,
  inDevelopment = false,
}: ProductCardProps) {
  const cardContent = (
    <div className="product-card__wrapper">
      {product.image && (
        <div className="product-card__image">
          <img src={product.image} alt={product.title} />
        </div>
      )}
      <div className="product-card__content">
        <h3 className="product-card__title">{product.title}</h3>
        <p className="product-card__description">{product.description}</p>
      </div>
      {product.tooltip && (
        <Tooltip title={product.tooltip || "В разработке"} placement="bottom">
          <img src="/landing/img/info-icon.svg" alt="info" className="product-card__info-icon" />
        </Tooltip>
      )}
    </div>
  );

  if (inDevelopment) {
    return (
      <div className="product-card product-card--in-development">
        {cardContent}
      </div>
    );
  }

  return (
    <Link to={product.link} className="product-card product-card--clickable">
      {cardContent}
    </Link>
  );
}
