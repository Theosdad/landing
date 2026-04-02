// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer").themes.github;
const darkCodeTheme = require("prism-react-renderer").themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Landing",
  tagline: "Welcome to our landing page",
  favicon: "img/favicon.ico",

  url: "https://theosdad.github.io",
  baseUrl: "/landing/",

  organizationName: "Theosdad",
  projectName: "landing",

  onBrokenLinks: "throw",

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

  plugins: ["docusaurus-plugin-sass"],

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
          { to: "/", label: "О нас", position: "right" },
          { to: "#", label: "События", position: "right" },
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
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/Theosdad/landing",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Landing. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
