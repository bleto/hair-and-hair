# Wielojęzyczność w 11ty - Dwa Podejścia

## Podejście 1: Osobne pliki (aktualne)

### Struktura:

```
src/
  contact.njk          → /contact/
  en/
    contact.njk        → /en/contact/
```

### Zalety:

- ✅ Proste do zrozumienia
- ✅ Można mieć różną treść dla każdego języka
- ✅ Łatwe w edycji

### Wady:

- ❌ Duplikacja kodu
- ❌ Trzeba aktualizować w dwóch miejscach
- ❌ Więcej plików

---

## Podejście 2: Pagination (ZALECANE)

### Struktura:

```
src/
  contact.njk          → /contact/ + /en/contact/
```

### Jak to działa:

**Jeden plik generuje wiele wersji:**

```yaml
---
pagination:
  data: translations.locales # ['pl', 'en']
  size: 1
  alias: locale # Tworzy zmienną 'locale'
permalink: "{% if locale == 'en' %}/en/contact/{% else %}/contact/{% endif %}"
---
```

### Przykład użycia:

**src/contact.njk** (jeden plik):

```html
---
pagination:
  data: translations.locales
  size: 1
  alias: locale
permalink: "{% if locale == 'en' %}/en/{{ page.fileSlug }}/{% else %}/{{ page.fileSlug }}/{% endif %}"
---

<h1>{{ 'contact.title' | t(locale) }}</h1>
```

To wygeneruje:

- `/contact/index.html` (locale = 'pl')
- `/en/contact/index.html` (locale = 'en')

### Zalety:

- ✅ Jeden plik do utrzymania
- ✅ Automatyczna generacja dla wszystkich języków
- ✅ Łatwe dodawanie nowych języków
- ✅ Mniejsza szansa na błędy

### Wady:

- ❌ Wszystkie wersje językowe mają tę samą strukturę HTML
- ❌ Trochę bardziej skomplikowane

---

## Podejście 3: Dynamiczne + własny content

Dla stron które mają różną treść w różnych językach:

```yaml
---
pagination:
  data: translations.locales
  size: 1
  alias: locale
permalink: "{% if locale == 'en' %}/en/{% else %}/{% endif %}"
---

{% if locale == 'en' %}
  <!-- Angielska wersja z innymi sekcjami -->
{% else %}
  <!-- Polska wersja -->
{% endif %}
```

---

## REKOMENDACJA

### Dla prostych stron (contact, about):

👉 **Użyj Pagination** (Podejście 2) - zobacz `contact-multi.njk`

### Dla stron z bardzo różną treścią (home):

👉 **Osobne pliki** (Podejście 1)

### Uniwersalny template dla wszystkich:

Możesz stworzyć bazowy layout który automatycznie obsługuje oba podejścia.

---

## Jak przejść na Pagination?

1. Zamień obecny `contact.njk` na wersję z pagination
2. Usuń `en/contact.njk`
3. Jeden plik obsługuje wszystkie języki!

**Przykład gotowy:** `src/contact-multi.njk`

Możesz go przetestować i jak zadziała - zastąpić obecny contact.njk.
