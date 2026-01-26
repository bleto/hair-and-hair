# System Tłumaczeń (i18n) w 11ty

## Struktura

### Pliki z tłumaczeniami

- `/src/_data/i18n/pl.js` - polskie tłumaczenia
- `/src/_data/i18n/en.js` - angielskie tłumaczenia
- `/src/_data/translations.js` - główny plik łączący wszystkie języki

### Strony

- `/src/*.njk` - strony po polsku (domyślne)
- `/src/en/*.njk` - strony po angielsku

## Użycie

### 1. W szablonach Nunjucks

```html
<!-- Podstawowe użycie -->
<h1>{{ 'nav.home' | t(locale) }}</h1>

<!-- Zagnieżdżone klucze -->
<p>{{ 'home.slider.slide1.title' | t(locale) }}</p>

<!-- Z domyślnym językiem (jeśli locale nie jest zdefiniowane) -->
<span>{{ 'header.bookNow' | t(locale) }}</span>
```

### 2. W plikach .njk (Front Matter)

```yaml
---
layout: layout.njk
locale: en # Ustaw język dla tej strony
title: Contact
---
```

### 3. Dodawanie nowych tłumaczeń

Edytuj pliki w `/src/_data/i18n/`:

**pl.js:**

```javascript
export default {
  locale: "pl",
  nav: {
    home: "O mnie",
    contact: "Kontakt",
  },
};
```

**en.js:**

```javascript
export default {
  locale: "en",
  nav: {
    home: "About me",
    contact: "Contact",
  },
};
```

### 4. Przełącznik języków

Już zaimplementowany w headerze:

- PL - przełącza na `/`
- EN - przełącza na `/en/`

## Struktura URL

- Polska wersja: `https://hairandhair.pl/`
- Angielska wersja: `https://hairandhair.pl/en/`
- Podstrony: `/contact/` (PL), `/en/contact/` (EN)

## CSS dla przełącznika

Style znajdują się w `/src/assets/css/language-switcher.css`

## Konfiguracja w .eleventy.js

Filter `t` (translate):

- Pobiera tłumaczenie z plików i18n
- Obsługuje zagnieżdżone klucze (np. `nav.home`)
- Zwraca klucz jeśli nie znajdzie tłumaczenia

## Przykład tworzenia nowej strony

### Wersja polska (src/about.njk):

```yaml
---
layout: layout.njk
title: O nas
description: Poznaj nasz zespół
---
<h1>{{ 'about.title' | t(locale) }}</h1>
```

### Wersja angielska (src/en/about.njk):

```yaml
---
layout: layout.njk
locale: en
permalink: /en/about/
title: About us
description: Meet our team
---
<h1>{{ 'about.title' | t(locale) }}</h1>
```

### Dodanie tłumaczeń (src/\_data/i18n/pl.js i en.js):

```javascript
// pl.js
about: {
  title: "O nas";
}

// en.js
about: {
  title: "About us";
}
```

## Wskazówki

1. Zawsze używaj `locale` w wywołaniu filtra `t`
2. Klucze tłumaczeń używają notacji kropkowej: `section.subsection.key`
3. Dla każdej strony angielskiej ustaw `locale: en` w front matter
4. Permalink dla wersji angielskiej powinien zaczynać się od `/en/`
5. Obrazy i zasoby są współdzielone między wersjami językowymi
