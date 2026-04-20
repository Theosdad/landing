import Layout from "@theme/Layout";
import useBaseUrl from "@docusaurus/useBaseUrl";
import "./index.scss";
import Comparison from "../../../components/Comparison";

export default function MonCloudPage() {
  const instanceSvgUrl = useBaseUrl("/img/instance.svg");
  const securitySvgUrl = useBaseUrl("/img/security.svg");
  const clanLogoSvgUrl = useBaseUrl("/img/c-lan-logo.svg");

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
                      <b>PostgreSQL-as-a-Service</b>&nbsp;с выбором версии
                      и упрощённой настройкой.
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

          <section className="moncloud-security">
            <h2>Надёжность и&nbsp;безопасность</h2>
            <div className="moncloud-security__content">
              <div className="moncloud-security__item">
                <h3>Эксплуатация и&nbsp;сопровождение:</h3>
                <p>
                  Решение поставляется со&nbsp;средой сопровождения (TUI + CLI +
                  API): установка, упрощённое добавление новых узлов, обновления
                  и&nbsp;повседневные операции&nbsp;&mdash; всё через единые
                  инструменты (собственная разработка).
                </p>
              </div>
              <div className="moncloud-security__item moncloud-security__item--image">
                <img src={securitySvgUrl} alt="" />
              </div>
              <div className="moncloud-security__item">
                <h3>Безопасность и&nbsp;импортонезависимость:</h3>
                <ul className="list-reset">
                  <li>
                    Изолированная сборка и&nbsp;развёртывание, не&nbsp;требуются
                    внешние репозитории
                  </li>
                  <li>Поддержка отечественных&nbsp;ОС</li>
                  <li>
                    ФСТЭК-ядро, безопасный компилятор, ПМДЗ для ВМ. Основано
                    на&nbsp;сертифицированном ФСТЭК продукте и&nbsp;проходит
                    самостоятельную сертификацию по&nbsp;требованиям 187-го
                    приказа на&nbsp;4-й уровень доверия
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <Comparison
            title="Наши преимущества от ванильного OpenStack"
            leftTitle="Ванильный OpenStack"
            rightTitle="Moncloud"
            leftKey="openstack"
            rightKey="moncloud"
            leftItems={[
              "Собственная система сопровождения, позволяющая обновлять облако",
              "Неизолирован от интернет-источников",
              "Ориентирован на распространённые дистрибутивы и не изолирован по источникам обновления: Ubuntu, RHEL и т.д",
              "Нет встроенных механизмов безопасности",
              "Нет VDI/виртуальных рабочих столов",
              "Базовые сети",
              "PaaS в виде всегда отстающих от сообщества сервисов, которые не учитывают текущих потребностей",
            ]}
            rightItems={[
              "Собственная система сопровождения, позволяющая обновлять облако",
              "Сборка в изолированной среде",
              "Весь дистрибутив собирается в изолированной среде, не требуетинтернета для установки/развёртывания, работают отечественные ОС",
              "ФСТЭК-ядро, безопасный компилятор, ПМДЗ для виртуальных машин, основан на сертифицированном ФСТЭК продукте и проходит к самостоятельную сертификацию по требованиям 187 приказа на 4й уровень доверия",
              "Есть технология VDI/виртуальных рабочих столов с различными профилями от офисной работы до 3D-проектирования с пониженными задержками",
              "Собственный SDN с поддержкой шифрованных виртуальных сетей, запрещающих правил firewall, NFV, SFC и других возможностей",
              "PaaS в виде всегда отстающих от сообщества сервисов, которые не учитывают текущих потребностей",
            ]}
          />

          <section className="moncloud-implementation">
            <h2>Преимущества и&nbsp;внедрение</h2>
            <div className="moncloud-implementation__content">
              <div className="moncloud-implementation__item">
                <h3>Почему moncloud:</h3>
                <ul className="list-reset">
                  <li>
                    Промышленный уровень OpenStack без доработок
                    &laquo;на&nbsp;стороне&raquo;
                  </li>
                  <li>
                    Изолированная поставка и&nbsp;соответствие жёстким
                    требованиям безопасности
                  </li>
                  <li>
                    Сокращение TCO: меньше интеграции, меньше ручной рутины,
                    быстрее ввод в&nbsp;строй. В&nbsp;этой области наша команда
                    знает всё, что необходимо
                  </li>
                  <li>
                    Готов к&nbsp;росту: инструменты сопровождения входят
                    в&nbsp;дистрибутив. Вы&nbsp;можете масштабировать Ваше
                    облако в&nbsp;любой момент
                  </li>
                </ul>
              </div>
              <div className="moncloud-implementation__item">
                <h3>Взаимодействие:</h3>
                <p>
                  Мы&nbsp;готовы организовать демонстрацию и&nbsp;предоставить
                  пробный доступ к&nbsp;нашей платформе. Также
                  мы&nbsp;предлагаем обсудить профили нагрузок, включая VDI,
                  NFV/SFC, HPC/AI и&nbsp;корпоративные информационные системы.
                  В&nbsp;дополнение к&nbsp;этому, мы&nbsp;готовы разработать
                  план миграции и&nbsp;внедрения, адаптированный под ваши
                  требования
                </p>
              </div>
            </div>
          </section>

          <section className="moncloud-licensing">
            <h2>Лицензирование</h2>
            <div className="moncloud-licensing__content">
              <div className="moncloud-licensing__item moncloud-licensing__item--partner">
                <p>
                  Плата берётся за&nbsp;промышленную функциональность ежегодно;
                  также доступна бессрочная лицензия. Стоимость уточняйте
                  у&nbsp;интегратора
                </p>
                <a href="https://c-lan.ru/" target="_blank">
                  <img src={clanLogoSvgUrl} alt="" />
                </a>
              </div>
              <div className="moncloud-licensing__item">
                <h3>Общие принципы лицензирования:</h3>
                <ul className="list-reset">
                  <li>
                    Количество контроллеров (отказоустойчивая версия или нет)
                  </li>
                  <li>
                    Количество гипервизоров по&nbsp;ядрам (32&nbsp;ядра минимум,
                    дальше линейно увеличивается стоимость)
                  </li>
                  <li>Количество серверов SDS, если требуется</li>
                  <li>Количество пользователей VDI, если требуется</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}
