import React, { type ReactNode } from "react";
import clsx from "clsx";
import { ThemeClassNames } from "@docusaurus/theme-common";
import "./index.scss";

interface FooterLayoutProps {
  style?: "light" | "dark";
  links?: ReactNode;
  logo?: ReactNode;
  copyright?: ReactNode;
  email?: string;
  phone?: string;
  lastUpdate?: string;
}

export type { FooterLayoutProps };

export default function FooterLayout({ links, logo, copyright, email, phone, lastUpdate }: FooterLayoutProps): ReactNode {
  return (
    <footer className={clsx(ThemeClassNames.layout.footer.container, "footer")}>
      <div className="footer__container">
        <div className="footer__top">
          {logo && <div className="footer__logo">{logo}</div>}
          <div className="footer__contacts">
            {email && <a href={`mailto:${email}`}>{email}</a>}
            {phone && <a href={`tel:${phone.replace(/[\s-]/g, '')}`}>{phone}</a>}
          </div>
        </div>

        <div className="footer__bottom">
          {copyright && <div>{copyright}</div>}
          {lastUpdate && <div>Последнее обновление: {lastUpdate}</div>}
        </div>
      </div>
    </footer>
  );
}
