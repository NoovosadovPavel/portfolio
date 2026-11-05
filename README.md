# Портфолио — Павел Новосадов

**Сайт:** https://noovosadovpavel.github.io/portfolio/
**Репозиторий:** https://github.com/NoovosadovPavel/portfolio

Личное портфолио на чистом HTML, CSS и JavaScript. Без сборщиков и зависимостей: открывается двойным кликом по `index.html` и хостится на GitHub Pages.

Сайт не привязан к одной профессии: показывает четыре направления — инженерный сервис, производство и ЧПУ, видеомонтаж, склад и учёт. Подходит для отклика на вакансии инженера, техника, мастера, видеомонтажёра и кладовщика.

## Разделы

| № | Раздел | Якорь |
| --- | --- | --- |
| 01 | О себе | `#about` |
| 02 | Направления | `#directions` |
| 03 | Навыки с фильтром по направлениям | `#skills` |
| 04 | Опыт и практика | `#experience` |
| 05 | Сертификаты | `#certificates` |
| 06 | Курсы | `#education` |
| 07 | Контакты | `#contact` |

## Что уже работает

- Адаптивная вёрстка: мобильные, планшет, десктоп
- Тёмная и светлая темы с запоминанием выбора (без «вспышки» при загрузке)
- Фильтр навыков по направлениям
- Плавные анимации появления, «свечение» за курсором
- Мобильное меню и scroll-spy с `aria-current`
- Доступность: skip-link, `aria-*`, `prefers-reduced-motion`
- Копирование e-mail в один клик
- SEO: мета-теги, Open Graph, JSON-LD, `sitemap.xml`, `robots.txt`

## Структура

```
portfolio/
├── index.html              # главная страница
├── 404.html                # страница ошибки
├── robots.txt
├── sitemap.xml
├── certificates/           # сюда складываются сканы сертификатов
├── .nojekyll               # отключает обработку Jekyll на GitHub Pages
├── assets/
│   ├── css/style.css       # стили и дизайн-токены
│   ├── js/main.js          # тема, меню, фильтр, анимации
│   ├── favicon.svg
│   └── img/                # аватар, превью кейсов, OG-обложка
└── README.md
```

## Локальный запуск

```bash
python3 -m http.server 8000
# откройте http://localhost:8000
```

## Как менять контент

| Что | Где |
| --- | --- |
| Имя, заголовок, описание | `index.html`: `<title>`, `<meta name="description">`, секция `.hero` |
| Текст «О себе» и факты | `index.html`, секция `#about` |
| Направления | `index.html`, секция `#directions` |
| Навыки и фильтры | `index.html`, секция `#skills`; кнопки `.filter`, карточки `.skill-card` с `data-track` |
| Кейсы | `index.html`, секция `#experience` |
| Сертификаты | `index.html`, секция `#certificates` |
| Сканы сертификатов | `certificates/` |
| Курсы | `index.html`, секция `#education` |
| Контакты | `index.html`, секция `#contact` |
| Цвета и шрифты | `assets/css/style.css`, блок `:root` и `[data-theme="light"]` |
| Аватар и обложка | `assets/img/` |

### Как добавить сертификат

1. Положите скан в `certificates/` (например, `2026-elektromehanik-medoborudovanie.jpg`).
2. В секции `#certificates` добавьте карточку:

```html
<article class="cert reveal">
  <div class="cert__top">
    <span class="cert__kind">Удостоверение</span>
    <span class="cert__year">2026</span>
  </div>
  <a class="cert__scan" href="certificates/2026-elektromehanik-medoborudovanie.jpg" target="_blank" rel="noopener">
    <img src="certificates/2026-elektromehanik-medoborudovanie.jpg" alt="Удостоверение электромеханика, 2026" loading="lazy" />
  </a>
  <h3 class="cert__title">Название документа</h3>
  <p class="cert__org">Кто выдал</p>
</article>
```

Если ссылка на скан не нужна, оставьте карточку без `<a>` и `<img>` — она будет выглядеть как текстовый документ.

### Как добавить места работы

В секции `#experience` есть комментарий `WORK_HISTORY`. Когда будет список прошлых мест работы, на его месте можно добавить блок с хронологией (по образцу `.timeline` из раздела курсов) или расширить карточку «Полная хронология мест работы».

## Что заменить перед публикацией

Сейчас в тексте остаются данные, которые нужно подтвердить:

- [ ] Цифры в hero: **7+ лет**, **400+ единиц техники**, **25 организаций**
- [ ] Цифры в кейсах: **60 аппаратов ИВЛ**, **35 единиц**, **снижение простоев на 40%**
- [ ] Годы и организации в кейсах (2023, 2022)
- [ ] Список прошлых мест работы (пользователь пришлёт отдельно)
- [ ] Сканы, номера и сроки действия сертификатов
- [ ] Ссылки на Telegram / LinkedIn, если нужны
- [ ] PDF-резюме, если нужна кнопка «Скачать резюме»

## Публикация на GitHub Pages

1. Запушьте код в ветку `main`.
2. **Settings → Pages → Build and deployment**.
3. **Source: Deploy from a branch**, ветка `main`, папка `/ (root)`.
4. Сохраните — через 1–2 минуты сайт обновится.

Файл `.nojekyll` уже добавлен, чтобы GitHub Pages отдавал файлы как есть.

### Свой домен (опционально)

1. **Settings → Pages → Custom domain** — укажите домен.
2. Создайте файл `CNAME` в корне с этим доменом.
3. В DNS пропишите `CNAME` на `<username>.github.io` (для поддомена) или `A`-записи GitHub (для apex-домена).

## Лицензия

Код — MIT. Контент и тексты — © автор.
