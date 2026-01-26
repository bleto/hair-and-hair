# 💇‍♀️ Hair & Hair - Gabinet Trychologiczny

Strona internetowa gabinetu trychologicznego Hair & Hair w Krakowie.

## ✨ Funkcje

- 🌍 **Dwujęzyczna** - Polski / English
- 📱 **Responsywna** - działa na wszystkich urządzeniach
- 📸 **Instagram Feed** - automatyczne posty z Instagram
- 🔄 **Auto-refresh tokena** - token Instagram odświeża się sam co 14 dni
- ⚡ **Szybka** - statyczny HTML generowany przez 11ty
- 🚀 **Auto-deploy** - każdy push → nowa wersja live

## 🛠️ Technologie

- [11ty (Eleventy)](https://www.11ty.dev/) - Static Site Generator
- [Nunjucks](https://mozilla.github.io/nunjucks/) - Templating
- [Bootstrap 5](https://getbootstrap.com/) - CSS Framework
- [Font Awesome](https://fontawesome.com/) - Ikony
- [Instagram Basic Display API](https://developers.facebook.com/docs/instagram-basic-display-api) - Feed Instagram
- [GitHub Actions](https://github.com/features/actions) - CI/CD
- [GitHub Pages](https://pages.github.com/) - Hosting

## 📦 Instalacja

```bash
# Klonuj repo
git clone https://github.com/bleto/hair-and-hair.git
cd hair-and-hair

# Zainstaluj zależności
npm install

# Skopiuj .env.example do .env
cp .env.example .env

# Dodaj swój Instagram token do .env
# INSTAGRAM_ACCESS_TOKEN=twój_token_tutaj

# Uruchom dev server
npm run dev
```

Strona dostępna na: http://localhost:8080

## 🚀 Deployment

### Automatyczny deploy (GitHub Pages)

Każdy push na branch `main` automatycznie deployuje stronę.

```bash
git add .
git commit -m "Twoje zmiany"
git push origin main
```

Strona dostępna na: https://bleto.github.io/hair-and-hair/

## 📝 Komendy

```bash
npm run dev      # Start dev server (localhost:8080)
npm run build    # Build strony do folderu dist/
npm run clean    # Wyczyść cache i dist/
npm run format   # Prettier formatowanie
```

## 📸 Instagram Feed

System automatycznie pobiera najnowsze posty z Instagram:

- ✅ **Build-time fetch** - posty pobierane podczas buildu
- ✅ **Auto-refresh tokena** - co 14 dni (GitHub Actions)
- ✅ **Fallback** - placeholder gdy token nie jest dostępny

### Konfiguracja Instagram API

Zobacz: [INSTAGRAM_SETUP.md](INSTAGRAM_SETUP.md)

## 🔄 Automatyczne odświeżanie tokena

Token Instagram automatycznie odświeża się co 14 dni (1. i 15. każdego miesiąca).

**GitHub Actions workflow:** `.github/workflows/refresh-instagram-token.yml`

Zobacz: [GITHUB_PAGES_SETUP.md](GITHUB_PAGES_SETUP.md)

## 🌍 Tłumaczenia

Pliki z tłumaczeniami:

- `src/_data/i18n/pl.js` - Polski
- `src/_data/i18n/en.js` - English

Dodawanie nowego tekstu:

```javascript
// pl.js
nav: {
  home: 'Strona Główna',
  newPage: 'Nowa Strona'  // ← dodaj tutaj
}

// en.js
nav: {
  home: 'Home',
  newPage: 'New Page'  // ← i tutaj
}
```

Użycie w template:

```nunjucks
<a href="...">{{ 'nav.newPage' | t(locate) }}</a>
```

## 📁 Struktura projektu

```
hair-and-hair/
├── .github/workflows/      # GitHub Actions workflows
│   ├── deploy-github-pages.yml
│   └── refresh-instagram-token.yml
├── src/
│   ├── _data/
│   │   ├── i18n/          # Tłumaczenia (pl.js, en.js)
│   │   ├── translations.js # Konfiguracja i18n
│   │   └── instagram.js   # Instagram API fetch
│   ├── _includes/
│   │   ├── layout.njk     # Layout bazowy
│   │   ├── header.njk     # Nagłówek z menu
│   │   └── footer.njk     # Stopka
│   ├── assets/
│   │   ├── css/           # Style CSS
│   │   ├── js/            # JavaScript
│   │   ├── images/        # Obrazy
│   │   └── vendors/       # Biblioteki zewnętrzne
│   ├── index.njk          # Strona główna
│   ├── contact.njk        # Kontakt
│   ├── pricing.njk        # Cennik
│   ├── 404.njk            # Strona błędu
│   └── sitemap.njk        # Sitemap XML
├── static/                # Pliki kopiowane 1:1 (CNAME, robots.txt)
├── dist/                  # Output buildu (gitignored)
├── .eleventy.js           # Konfiguracja 11ty
├── package.json
├── .env.example           # Przykładowa konfiguracja
├── .gitignore
└── README.md
```

## 🔐 Zmienne środowiskowe

### Lokalnie (.env)

```bash
INSTAGRAM_ACCESS_TOKEN=IGQ...
INSTAGRAM_TOKEN_LAST_REFRESH=2026-01-26
```

### GitHub (Secrets)

Settings → Secrets and variables → Actions:

```
INSTAGRAM_ACCESS_TOKEN      # Instagram API token
PERSONAL_ACCESS_TOKEN       # GitHub PAT (dla auto-refresh)
INSTAGRAM_TOKEN_LAST_REFRESH # Data ostatniego odświeżenia
```

## 📚 Dokumentacja

- [INSTAGRAM_SETUP.md](INSTAGRAM_SETUP.md) - Konfiguracja Instagram API
- [GITHUB_PAGES_SETUP.md](GITHUB_PAGES_SETUP.md) - Deploy i automatyzacja
- [ENV_SETUP.md](ENV_SETUP.md) - Zmienne środowiskowe

## 🐛 Troubleshooting

### Build nie działa?

```bash
npm run clean
npm install
npm run build
```

### Instagram posty się nie pokazują?

1. Sprawdź czy `INSTAGRAM_ACCESS_TOKEN` jest w `.env`
2. Sprawdź czy token nie wygasł
3. Zobacz logi: `npm run build` powinno pokazać `✅ Instagram: Fetched X posts`

### GitHub Pages nie deployuje?

1. **Settings** → **Pages** → **Source** = GitHub Actions
2. Sprawdź logi w **Actions** tab
3. Sprawdź czy `main` branch jest poprawny w workflow

## 📄 Licencja

ISC

## 👤 Autor

**Piotr Bletek (bleto)**

- Email: p.bletek@gmail.com
- GitHub: [@bleto](https://github.com/bleto)

## 🔗 Linki

- 🌐 Live Site: https://bleto.github.io/hair-and-hair/
- 📱 Instagram: [@hair.and.hair.trychologia](https://www.instagram.com/hair.and.hair.trychologia/)
- 📍 Lokalizacja: Kraków, Polska
