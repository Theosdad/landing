# Bibliography Plugin

Плагин для Docusaurus, который извлекает информацию из BibTeX файла и рендерит публикации.

## Возможности

- Автоматический парсинг `.bib` файлов
- Отображение публикаций с сортировкой по годам
- Фильтрация избранных публикаций (selected=true)
- Поддержка различных типов публикаций (статьи, конференции)
- Отображение метаданных: авторы, журнал, DOI, URL
- Адаптивный дизайн

## Использование

### 1. Структура BibTeX файла

Файл должен находиться в `content/bibliography/papers.bib`:

```bibtex
@Article{Stolyarov2024,
  selected={true},
  abbr={Dokl. Math. Q2},
  author="Stolyarov Roman and Shvetcova Valeriya",
  title="TOMMANO---Virtualised Network Functions Management",
  journal="Doklady Mathematics",
  year="2024",
  volume="109",
  pages="84--92",
  doi="10.1134/S1064562424701850",
  url="https://doi.org/10.1134/S1064562424701850"
}
```

### 2. Страница публикаций

Доступна по адресу `/publications`. Плагин автоматически создает маршрут.

### 3. Компонент для использования в других местах

```tsx
import Publications from '@site/src/components/Publications';

// Показать все публикации
<Publications />

// Показать только избранные
<Publications selectedOnly={true} />

// Ограничить количество
<Publications limit={5} />

// Показать с аннотациями
<Publications showAbstract={true} />
```

### 4. Доступ к данным через usePluginData

```tsx
import { usePluginData } from '@docusaurus/useGlobalData';
import { BibliographyData } from '@site/plugins/bibliography-plugin/src/types';

const { allPublications, selectedPublications, publicationsByYear } = 
  usePluginData('bibliography-plugin') as BibliographyData;
```

## Поддерживаемые поля BibTeX

- `selected` - отметка избранной публикации
- `abbr` - сокращенное название журнала/конференции
- `author` - авторы
- `title` - название
- `journal` - журнал
- `booktitle` - название конференции
- `year`, `month`, `day` - дата
- `volume`, `number` - том и номер
- `pages` - страницы
- `abstract` - аннотация
- `doi` - DOI
- `url` - ссылка
- `publisher` - издатель
- `keywords` - ключевые слова

## Структура плагина

```
bibliography-plugin/
├── index.ts              # Основной файл плагина
├── package.json
├── src/
│   ├── types.ts         # TypeScript типы
│   ├── parser.ts        # Парсер BibTeX
│   └── loader.ts        # Загрузчик файлов
└── theme/
    └── PublicationsPage/
        ├── index.tsx    # React компонент страницы
        └── styles.module.css
```
