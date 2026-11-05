# Сертификаты и удостоверения

В этой папке лежат сканы, которые уже размещены в разделе «Сертификаты» на сайте.

## Что уже добавлено

| Файл | Документ |
| --- | --- |
| `uwu-technical-maintenance-2026.jpg` | United World University — основы технического обслуживания и ремонта промышленного оборудования |
| `saylor-business-2026.jpg` | Saylor University — BUS101 Introduction to Business |
| `saylor-financial-accounting-2026.jpg` | Saylor University — BUS103 Introduction to Financial Accounting |
| `saylor-managerial-accounting-2026.jpg` | Saylor University — BUS105 Managerial Accounting |
| `saylor-managing-people-2026.jpg` | Saylor University — BUS603 Managing People |
| `microsoft-git-intro-2026.jpg` | Microsoft — введение в Git |
| `microsoft-github-intro-2026.jpg` | Microsoft — введение в GitHub |
| `microsoft-github-actions-2026.jpg` | Microsoft — GitHub Actions |
| `microsoft-github-packages-2026.jpg` | Microsoft — GitHub Packages |
| `microsoft-power-bi-2026.jpg` | Microsoft — начало работы с Power BI |
| `microsoft-365-copilot-2026.jpg` | Microsoft — Microsoft 365 Copilot |
| `microsoft-dyslexia-2026.jpg` | Microsoft — дислексия и технологии |

Оригиналы лежат в корне папки, уменьшенные превью для сайта — в `previews/`.
Превью обрезаны до формата 4:3, оригиналы открываются по клику в полном размере.

## Как добавить новый документ

1. Положите оригинал в эту папку, назвав латиницей без пробелов:
   `год-организация-тема.jpg` (например, `2026-company-safety.jpg`).
2. Сделайте превью 800×600:

```bash
cd certificates
convert "2026-company-safety.jpg" -fuzz 6% -trim +repage \
  -resize '800x600^' -gravity center -extent 800x600 \
  -quality 84 "previews/2026-company-safety.jpg"
```

3. В `index.html`, секция `#certificates`, добавьте карточку по образцу соседних:
   ссылка на оригинал, картинка из `previews/`, название, организация и дата.

## Форматы

- **JPG, PNG, WebP** — превью и просмотр прямо на сайте.
- **PDF** — можно, но на сайте будет кнопка «Открыть документ» без картинки-превью.

Если на скане есть лишние личные данные (паспорт, адрес), их лучше закрыть — для портфолио они не нужны.
