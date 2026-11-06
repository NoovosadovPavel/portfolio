# Портфолио — Павел Новосадов

**Сайт:** https://noovosadovpavel.github.io/portfolio/
**Репозиторий:** https://github.com/NoovosadovPavel/portfolio

Личное портфолио на чистом HTML, CSS и JavaScript. Без сборщиков и зависимостей: открывается двойным кликом по `index.html` и хостится на GitHub Pages.

Сайт не привязан к одной профессии: показывает четыре направления — инженерный сервис, IT и разработку, видеомонтаж, склад и учёт. Подходит для отклика на вакансии инженера, техника, мастера, IT-специалиста, видеомонтажёра и кладовщика. Портфолио и вёрстку автор сделал сам.

## Разделы

| № | Раздел | Якорь |
| --- | --- | --- |
| 01 | О себе | `#about` |
| 02 | Направления | `#directions` |
| 03 | Навыки с уровнями: продвинутый, средний, базовый | `#skills` |
| 04 | Хронология работы — 12 мест, 26 лет 7 месяцев | `#experience` |
| 05 | Сертификаты | `#certificates` |
| 06 | Курсы | `#education` |
| 07 | Контакты | `#contact` |

## Что уже работает

- Адаптивная вёрстка: мобильные, планшет, десктоп
- Тёмная и светлая темы с запоминанием выбора (без «вспышки» при загрузке)
- Навыки, сгруппированные по уровням владения
- Плавные анимации появления, «свечение» за курсором
- Мобильное меню и scroll-spy с `aria-current`
- Доступность: skip-link, `aria-*`, `prefers-reduced-motion`
- Копирование e-mail в один клик
- Телефон и мессенджеры: Telegram, Viber, WhatsApp
- SEO: мета-теги, Open Graph, JSON-LD, `sitemap.xml`, `robots.txt`

## Структура

```
portfolio/
├── index.html              # главная страница
├── 404.html                # страница ошибки
├── robots.txt
├── sitemap.xml
├── certificates/           # сканы сертификатов и папка previews/
├── .nojekyll               # отключает обработку Jekyll на GitHub Pages
├── assets/
│   ├── css/style.css       # стили и дизайн-токены
│   ├── js/main.js          # тема, меню, анимации
│   ├── favicon.svg
│   └── img/                # аватар и OG-обложка
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
| Навыки и уровни | `index.html`, секция `#skills`; блоки `.level` и теги внутри |
| Хронология работы | `index.html`, секция `#experience`; список `.work`, элементы `.work__item` |
| Сертификаты | `index.html`, секция `#certificates` |
| Сканы сертификатов | `certificates/` |
| Курсы | `index.html`, секция `#education` |
| Контакты | `index.html`, секция `#contact` |
| Цвета и шрифты | `assets/css/style.css`, блок `:root` и `[data-theme="light"]` |
| Аватар и обложка | `assets/img/` |

### Как добавить сертификат

1. Положите оригинал в `certificates/`, а превью 800×600 — в `certificates/previews/`.
2. В секции `#certificates` добавьте карточку:

```html
<article class="cert reveal">
  <div class="cert__top">
    <span class="cert__kind">Сертификат</span>
    <span class="cert__year">2026</span>
  </div>
  <a class="cert__scan" href="certificates/2026-elektromehanik-medoborudovanie.jpg" target="_blank" rel="noopener">
    <img src="certificates/previews/2026-elektromehanik-medoborudovanie.jpg" alt="Удостоверение электромеханика, 2026" width="800" height="600" loading="lazy" />
  </a>
  <h3 class="cert__title">Название документа</h3>
  <p class="cert__org">Кто выдал</p>
  <p class="cert__meta">Дата · номер</p>
</article>
```

Если ссылка на скан не нужна, оставьте карточку без `<a>` и `<img>` — она будет выглядеть как текстовый документ.

### Как добавить место работы

В секции `#experience` скопируйте соседний `<li class="work__item">` и замените даты, стаж, должность, организацию и описание. Текущее место помечается классом `work__item--current`. Список идёт от свежего к старому.

## Что заменить перед публикацией

- [x] Опыт: 12 мест работы, 26 лет 7 месяцев — перенесены из резюме
- [x] Навыки: 29 пунктов с уровнями из резюме
- [x] Сертификаты: 12 сканов добавлены в `certificates/` и размечены в `#certificates`
- [x] Электробезопасность (III группа) и статус самозанятого — добавлены в факты
- [x] Телефон +375 25 735-90-02 и ссылки на Telegram, Viber, WhatsApp — добавлены в контакты
- [ ] Проверить, все ли номера и данные на сканах можно публиковать
- [ ] Уточнить название организации «Удпрб Гумтс» (в резюме указано сокращённо)
- [ ] Ссылка на LinkedIn, если нужна
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
