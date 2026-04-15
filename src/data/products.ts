import { Product } from "../components/ProductCard";

export const currentProducts: Product[] = [
  {
    id: "moncloud",
    title: "moncloud",
    description: "on-prem дистрибутив облачной среды, промышленное облако на базе OpenStack",
    image: "./img/moncloud.svg",
    link: "#",
  },
  {
    id: "wormhole",
    title: "wormhole",
    description: "технология предоставления доступа к удалённым рабочим столам",
    image: "./img/moncloud.svg",
    link: "#",
  },
];

export const productsInDevelopment: Product[] = [
  {
    id: "mlm",
    title: "MLM",
    description: "облачный сервис MLOps в on-prem формате",
    image: "./img/indevelopment.svg",
    link: "#",
    tooltip: "Пока что секрет — ну кроме того, что мы рассказываем вам о самом факте разработки",
  },
  {
    id: "security-lifecycle",
    title: "Среда безопасной разработки полного цикла",
    description: "технология предоставления доступа к удалённым рабочим столам",
    image: "./img/indevelopment.svg",
    link: "#",
    tooltip: "Пока что секрет — ну кроме того, что мы рассказываем вам о самом факте разработки",
  },
  {
    id: "osaas",
    title: "Openstack as a Service",
    description: "on-prem облако по запросу в нашем/вашем датацентре",
    image: "./img/indevelopment.svg",
    link: "#",
    tooltip: "Это то, с чего мы начали: а что если мы будем давать полное управление облаком на нашей или вашей площадке? Мы это сделали, однако есть тонкости: ваше железо может не соответствовать нашим ожиданиям. Требует обсуждения.",
  },
  {
    id: "public-cloud",
    title: "Публичное облако",
    description: "whitelabel-публичное облако на базе наших технологий",
    image: "./img/indevelopment.svg",
    link: "#",
    tooltip: "Было бы действительно странно, если бы мы об этом рассказали, правда? Мы и не расскажем.",
  },
];
