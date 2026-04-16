import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import "./index.scss";

export default function MonCloudPage() {
  const instanceSvgUrl = useBaseUrl("/img/instance.svg");

  return (
    <Layout
      title="moncloud"
      description="on-prem дистрибутив облачной среды, промышленное облако на базе OpenStack"
    >
      <main>
        <div className="moncloud-page">
          <section className="moncloud-hero">
            <h1 className="moncloud-hero__title">Moncloud</h1>
            <p className="moncloud-hero__subtitle">
              on-prem дистрибутив облачной среды, промышленное облако
              на&nbsp;базе OpenStack
            </p>
            <p className="moncloud-hero__slogan">
              Moncloud&nbsp;&mdash; это промышленная редакция OpenStack
              с&nbsp;готовыми к&nbsp;эксплуатации функциями, которых нет
              в&nbsp;опенсорс-дистрибутивах (более того, некоторых нет даже
              в&nbsp;коммерческих). Платформа закрывает инфраструктурные,
              сетевые и&nbsp;эксплуатационные задачи &laquo;под ключ&raquo;
              и&nbsp;ставится в&nbsp;изолированных контурах без выхода
              в&nbsp;интернет.
            </p>
            <p className="moncloud-hero__version">
              Текущая версия: Openstack 2023.2&nbsp;Bobcat, Ceph&nbsp;18.2 +
              наши разработки.
            </p>
          </section>

          <section className="moncloud-included">
            <h2>Что входит &laquo;из&nbsp;коробки&raquo;:</h2>
            <div className="moncloud-included__wrapper">
              <div className="moncloud-included__image">
                <img src={instanceSvgUrl} alt="" />
              </div>
              <ul className="moncloud-included__list list-reset">
                <li className="moncloud-included__item">
                  <h3>
                    Отказоустойчивость ВМ&nbsp;и&nbsp;управляющей плоскости
                  </h3>
                  <p>
                    Архитектура с&nbsp;автоматическим перезапуском
                    и&nbsp;минимизацией простоев
                  </p>
                </li>
                <li className="moncloud-included__item">
                  <h3>
                    Балансировка нагрузки по&nbsp;гипервизорам&nbsp;/
                    автоперераспределение&nbsp;ВМ
                  </h3>
                  <p>
                    Умные политики размещения для лучшего использования ресурсов
                  </p>
                </li>
                <li className="moncloud-included__item">
                  <h3>Собственный SDN для сложных сетей</h3>
                  <p>
                    Полная поддержка NFV и&nbsp;SFC для построения сервисных
                    цепочек исполнения сетевых функций. Для читателей, которые
                    знают про Openstack побольше: мы&nbsp;встроили
                    в&nbsp;Neutron собственный движок и&nbsp;включили
                    дополнительные фичи&nbsp;&mdash; NFV, SFC, шифрованные
                    виртуальные сети, подключение к&nbsp;ним, запрещающие
                    правила, мониторинг сети (возможности пополняются постоянно,
                    смотрите release notes)
                  </p>
                </li>
                <li className="moncloud-included__item">
                  <h3>VPNaaS</h3>
                  <p>
                    Прозрачное подключение пользователей к&nbsp;виртуальным
                    сетям + классический site-to-site
                  </p>
                </li>
                <li className="moncloud-included__item">
                  <h3>Планировщик облачных заданий</h3>
                  <p>
                    Автоматизация действий в&nbsp;облаке по&nbsp;расписанию:
                    запуск/остановка ВМ, снапшоты, балансировка нагрузки
                    и&nbsp;произвольные команды на&nbsp;ваше усмотрение
                  </p>
                </li>
                <li className="moncloud-included__item">
                  <h3>
                    VDI&nbsp;/ Desktop-as-a-Service для Windows и&nbsp;Linux
                  </h3>
                  <p>
                    Поддержка RDP и&nbsp;собственного протокола с&nbsp;низкими
                    задержками и&nbsp;3D-нагрузками. В&nbsp;об&nbsp;этом
                    написано в&nbsp;отдельной секции, однако важно сказать
                    о&nbsp;том, что moncloud позволяет использовать эти
                    технологии в&nbsp;полной мере
                  </p>
                </li>
                <li className="moncloud-included__item">
                  <h3>Биллинг использования ресурсов</h3>
                  <p>
                    Учёт CPU/RAM/дисков/GPU/vGPU с&nbsp;возможностью гибких
                    расчётов&nbsp;&mdash; предусматриваютя скидки,
                    мультиоблачность, разбиение по&nbsp;ресурсам
                    и&nbsp;по&nbsp;типам инстансов
                  </p>
                </li>
                <li className="moncloud-included__item">
                  <h3>Полный аудит событий</h3>
                  <p>
                    Трассировка всех операций в&nbsp;облаке для соответствия
                    требованиям безопасности
                  </p>
                </li>
                <li className="moncloud-included__item">
                  <h3>
                    Подконтрольные PaaS-сервисы с&nbsp;быстрым расширением
                  </h3>
                  <p>
                    Оркестрация на базе стандарта OASIS TOSCA — быстро добавляем
                    новые сервисы по запросу:
                  </p>
                  <li className="moncloud-included__item--inner">
                    <p>
                      Доступны <b>Kubernetes-as-a-Service</b> и 
                      <b>PostgreSQL-as-a-Service</b>
                      с выбором версии и упрощённой настройкой.
                    </p>
                  </li>
                  <li className="moncloud-included__item--inner">
                    <p>
                      Дистрибутивы <b>Kubernetes</b> и <b>PostgreSQL</b>{" "}
                      не входят в дистрибутив облачной среды.
                    </p>
                  </li>
                </li>
                <li className="moncloud-included__item">
                  <h3>Контроль целостности&nbsp;ВМ</h3>
                  <p>ПМДЗ для виртуальных машин</p>
                </li>
                <li className="moncloud-included__item">
                  <h3>Управление оборудованием</h3>
                  <p>
                    Инвентаризация, включение в&nbsp;кластер, операции
                    с&nbsp;узлами
                  </p>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}
