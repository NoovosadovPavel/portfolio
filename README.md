# Портфолио — Павел Новосадов

**Сайт:** https://noovosadovpavel.github.io/portfolio/
**Репозиторий:** https://github.com/NoovosadovPavel/portfolio

Сайт-портфолио инженера по медицинскому оборудованию на чистом HTML, CSS и JavaScript. Без сборщиков и зависимостей — открывается двойным кликом по `index.html` и хостится на GitHub Pages.

## Особенности

- Адаптивная вёрстка (мобильные, планшет, десктоп)
- Тёмная и светлая темы с запоминанием выбора
- Плавные анимации появления и «свечение» за курсором
- Мобильное меню, scroll-spy для активного пункта навигации
- Доступность: skip-link, `aria-*`, поддержка `prefers-reduced-motion`
- Копирование e-mail в один клик
- SEO-мета и Open Graph

## Структура

```
portfolio/
├── index.html              # главная страница
├── 404.html                # страница ошибки
├── .nojekyll               # отключает обработку Jekyll на GitHub Pages
├── assets/
│   ├── css/style.css       # стили и дизайн-токены
│   ├── js/main.js          # логика интерфейса
│   ├── favicon.svg
│   └── img/                # аватар, превью проектов, OG-обложка
└── README.md
```

## Локальный запуск

Сайт статический. Достаточно открыть `index.html` в браузере.

Чтобы проверить пути и поведение как на сервере:

```bash
python3 -m http.server 8000
# затем откройте http://localhost:8000
```

## Как изменить контент

| Что | Где |
| --- | --- |
| Имя, заголовок, описание | `index.html`, теги `<title>`, `<meta name="description">`, секция `hero` |
| Текст «О себе» и факты | `index.html`, секция `#about` |
| Навыки | `index.html`, секция `#skills` |
| Проекты | `index.html`, секция `#projects` |
| Контакты и соцсети | `index.html`, секция `#contact` |
| Цвета и шрифты | `assets/css/style.css`, блок `:root` |
| Аватар и превью | `assets/img/` |

## Публикация на GitHub Pages

1. Создайте репозиторий на GitHub и запушьте код в ветку `main`.
2. Откройте **Settings → Pages**.
3. В разделе **Build and deployment** выберите **Source: Deploy from a branch**.
4. Укажите ветку `main` и папку `/ (root)`, нажмите **Save**.
5. Через 1–2 минуты сайт будет доступен по адресу `https://<username>.github.io/<repo>/`.

Файл `.nojekyll` уже добавлен — он нужен, чтобы GitHub Pages отдавал файлы как есть, без обработки Jekyll.

### Свой домен (опционально)

1. В **Settings → Pages → Custom domain** укажите домен.
2. Создайте файл `CNAME` в корне с этим доменом.
3. В DNS пропишите `CNAME` на `<username>.github.io` (для поддомена) или `A`-записи GitHub (для apex-домена).

## Лицензия

Код — MIT. Контент и тексты — © автор.
