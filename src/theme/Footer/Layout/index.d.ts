import type { ReactNode } from "react";

export interface FooterLayoutProps {
  links?: ReactNode;
  logo?: ReactNode;
  copyright?: ReactNode;
  email?: string;
  phone?: string;
  lastUpdate?: string;
}

export default function FooterLayout(props: FooterLayoutProps): ReactNode;
