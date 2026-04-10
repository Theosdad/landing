// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const path = require("path");
const lightCodeTheme = require("prism-react-renderer").themes.github;
const darkCodeTheme = require("prism-react-renderer").themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Landing",
  tagline: "Welcome to our landing page",
  favicon: "img/favicon.svg",

  url: "https://theosdad.github.io",
  baseUrl: "/landing/",

  organizationName: "Theosdad",
  projectName: "landing",

  onBrokenLinks: "throw",

  customFields: {
    footerEmail: "info@moncloud.ru",
    footerPhone: "+7 495 899-09-29",
    footerLastUpdate: "09.30.2025",
  },

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  stylesheets: [
    {
      href: "/landing/fonts/fonts.css",
      type: "text/css",
    },
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
      }),
    ],
  ],

  plugins: [
    "docusaurus-plugin-sass",
    path.resolve(__dirname, './plugins/news-plugin')
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        logo: {
          alt: "Landing Logo",
          src: "img/logo.svg",
        },
        items: [
          { to: "/news", label: "События", position: "right" },
          { to: "#", label: "Продукты", position: "right" },
          { to: "#", label: "Контакты", position: "right" },
          {
            type: "dropdown",
            label: "Интересное",
            position: "right",
            items: [
              { to: "#", label: "Обучение" },
              { to: "#", label: "Публикации" },
              { to: "#", label: "Технологии" },
              { to: "#", label: "Лицензии, сертификаты, товарные знаки, РИД" },
            ],
          },
          { to: "https://docs.moncloud.ru/1.6.3/ru/", label: "Документация", position: "right" },
        ],
      },
      footer: {
        style: "dark",
        logo: {
          alt: "Landing Logo",
          src: "img/logo.svg",
        },
        copyright: `© moncloud: 2023 - ${new Date().getFullYear()}`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
