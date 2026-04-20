import React from "react";
import Link from "@docusaurus/Link";
import HomeIcon from "./HomeIcon";
import "./index.scss";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="breadcrumb" aria-label="Навигация">
      <div className="breadcrumb__container">
        <Link to="/landing" className="breadcrumb__home-link" aria-label="Главная">
          <HomeIcon />
        </Link>
        <ol className="breadcrumb__list list-reset">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={index} className="breadcrumb__item">
                {!isLast && item.href ? (
                  <>
                    <Link to={item.href} className="breadcrumb__link">
                      {item.label}
                    </Link>
                  </>
                ) : (
                  <span className="breadcrumb__current">{item.label}</span>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
