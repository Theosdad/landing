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
    email: "info@moncloud.ru",
    phone: "+7 495 899-09-29",
    lastUpdate: "30.09.2025",
    companyName: "ООО «СИСТЕМНЫЕ РЕШЕНИЯ»",
    address: "г. Москва, Ленинградский проспект, 31аС1",
    legalAddress: "125284, г. Москва, вн.тёр.г. Муниципальный Округ Беговой, пр-кт Ленинградский, д. 31А, стр. 1",
    inn: "9714023666",
    kpp: "771401001",
    ogrn: "1237700726031",
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
    path.resolve(__dirname, './plugins/news-plugin'),
    path.resolve(__dirname, './plugins/bibliography-plugin'),
    path.resolve(__dirname, './plugins/yaml-loader-plugin')
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
          { to: "/products", label: "Продукты", position: "right" },
          { to: "/contacts", label: "Контакты", position: "right" },
          {
            type: "dropdown",
            label: "Интересное",
            position: "right",
            items: [
              { to: "/education", label: "Обучение" },
              { to: "/publications", label: "Публикации" },
              { to: "#", label: "Технологии" },
              { to: "/licenses", label: "Лицензии, сертификаты, товарные знаки, РИД" },
            ],
          },
          { to: "https://docs.moncloud.ru/", label: "Документация", position: "right" },
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
