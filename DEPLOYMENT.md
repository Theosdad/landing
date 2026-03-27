# Deployment Instructions

## Автоматический деплой на GitHub Pages

Проект настроен для автоматического деплоя на GitHub Pages при каждом пуше в ветку `main`.

### Настройка GitHub Pages (один раз)

1. Перейдите в настройки репозитория: `https://github.com/Theosdad/landing/settings/pages`

2. В разделе **Build and deployment**:
   - **Source**: выберите `GitHub Actions`

3. Сохраните настройки

### Как это работает

- При каждом пуше в ветку `main` автоматически запускается GitHub Actions workflow
- Workflow устанавливает зависимости, собирает проект и деплоит на GitHub Pages
- Сайт будет доступен по адресу: `https://theosdad.github.io/landing/`

### Первый деплой

После настройки GitHub Pages выполните:

```bash
git add .
git commit -m "Add GitHub Actions deployment"
git push origin main
```

Проверить статус деплоя можно во вкладке **Actions** в репозитории.

### Локальная сборка

Для тестирования production сборки локально:

```bash
npm run build
npm run serve
```
