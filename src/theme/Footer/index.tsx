import React, {type ReactNode} from 'react';

import {useThemeConfig} from '@docusaurus/theme-common';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import FooterLinks from '@theme/Footer/Links';
import FooterLogo from '@theme/Footer/Logo';
import FooterCopyright from '@theme/Footer/Copyright';
import FooterLayout from '@theme/Footer/Layout';
import type {FooterLayoutProps} from './Layout';

interface CustomFields {
  footerEmail?: string;
  footerPhone?: string;
  footerLastUpdate?: string;
}

function Footer(): ReactNode {
  const {footer} = useThemeConfig();
  const {siteConfig} = useDocusaurusContext();
  const {footerEmail, footerPhone, footerLastUpdate} = siteConfig.customFields as CustomFields;
  
  if (!footer) {
    return null;
  }
  const {copyright, links, logo} = footer;

  const footerProps: FooterLayoutProps = {
    links: links && links.length > 0 ? <FooterLinks links={links} /> : undefined,
    logo: logo ? <FooterLogo logo={logo} /> : undefined,
    copyright: copyright ? <FooterCopyright copyright={copyright} /> : undefined,
    email: footerEmail,
    phone: footerPhone,
    lastUpdate: footerLastUpdate,
    style: 'light',
  };

  return <FooterLayout {...footerProps} />;
}

export default React.memo(Footer);
