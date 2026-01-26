# Instagram Feed - Instrukcja Konfiguracji

## Jak działa?

Strona automatycznie pobiera 6 najnowszych postów z Instagrama podczas `npm run build`. Jeśli nie skonfigurujesz API, wyświetlą się domyślne zdjęcia.

## Konfiguracja Instagram Basic Display API

### Krok 1: Utwórz Facebook App

1. Wejdź na: https://developers.facebook.com/apps/
2. Kliknij **"Create App"**
3. Wybierz typ: **"Consumer"**
4. Podaj nazwę aplikacji: `Hair & Hair Website`

### Krok 2: Dodaj Instagram Basic Display

1. W panelu aplikacji znajdź **"Instagram Basic Display"**
2. Kliknij **"Set Up"**
3. W sekcji **"User Token Generator"**:
   - Kliknij **"Add or Remove Instagram Testers"**
   - Dodaj swoje konto Instagram
4. Zaakceptuj zaproszenie w aplikacji Instagram:
   - Instagram → Ustawienia → Apps and Websites → Tester Invites

### Krok 3: Wygeneruj Access Token

1. Wróć do **User Token Generator**
2. Kliknij **"Generate Token"** przy swoim koncie
3. Skopiuj **Access Token**

### Krok 4: Dodaj Token do Projektu

#### Lokalnie (.env):

```bash
# .env (dodaj do .gitignore!)
INSTAGRAM_ACCESS_TOKEN=twój_token_tutaj
```

#### Na Netlify/Vercel:

1. **Netlify**: Site Settings → Environment Variables → Add Variable
2. **Vercel**: Settings → Environment Variables → Add

Nazwa: `INSTAGRAM_ACCESS_TOKEN`
Wartość: Twój token

### Krok 5: Odśwież Token (co 60 dni)

Long-lived tokeny wygasają po 60 dniach. Możesz:

**Opcja A: Manualne odświeżanie**

```bash
curl -i -X GET "https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=TWÓJ_TOKEN"
```

**Opcja B: Automatyczne (GitHub Actions)**
Ustaw cron job do odświeżania tokena.

## Testowanie

```bash
# Bez tokena (używa placeholderów)
npm run build

# Z tokenem
INSTAGRAM_ACCESS_TOKEN=twój_token npm run build
```

## Jak to działa technicznie?

1. **Build Time**: Podczas `npm run build`, plik `_data/instagram.js` wykonuje fetch do Instagram API
2. **Static Generation**: 11ty generuje statyczny HTML z najnowszymi postami
3. **Cache**: Posty są "zamrożone" do następnego builda
4. **Re-deploy**: Aby zaktualizować, trzeba zrobić rebuild (np. przez webhook lub manual deploy)

## Automatyczne odświeżanie (opcjonalne)

## 🔄 Automatyczne odświeżanie tokena

**✨ Dobra wiadomość!** Token Instagram automatycznie się odświeża podczas buildu.

### Jak to działa?

1. Co 30 dni (lub przy pierwszym buildzie) system automatycznie:
   - Sprawdza czy token wymaga odświeżenia
   - Odświeża token używając Instagram API
   - Wyświetla nowy token w konsoli

2. **Co zobaczysz podczas buildu**:

```bash
🔍 Sprawdzam czy token wymaga odświeżenia...
🔄 Instagram token odświeżony pomyślnie!
📝 NOWY TOKEN (ważny przez ~60 dni):
────────────────────────────────────────────────────────────────────────────────
IGQWRPabc123xyz...nowy_token_tutaj
────────────────────────────────────────────────────────────────────────────────
💡 Skopiuj powyższy token i zaktualizuj go w pliku .env
   Wygasa za: 60 dni
```

3. **Co musisz zrobić**:
   - Skopiuj nowy token z konsoli build
   - Zaktualizuj w `.env`:
     ```bash
     INSTAGRAM_ACCESS_TOKEN=nowy_token_tutaj
     INSTAGRAM_TOKEN_LAST_REFRESH=2026-01-26
     ```
   - Zaktualizuj w Netlify/Vercel dashboard

### Zmienne środowiskowe dla auto-refresh

```bash
# .env
INSTAGRAM_ACCESS_TOKEN=IGQ...          # Wymagane
INSTAGRAM_TOKEN_LAST_REFRESH=2026-01-26  # Opcjonalne (format: YYYY-MM-DD)
```

Jeśli nie ustawisz `INSTAGRAM_TOKEN_LAST_REFRESH`, system sprawdzi token przy każdym buildzie.

---

## 🤖 Automatyzacja feedu z GitHub Actions (Opcjonalne)

### GitHub Actions - codziennie o 9:00

```yaml
# .github/workflows/refresh-instagram.yml
name: Refresh Instagram Feed

on:
  schedule:
    - cron: "0 9 * * *" # Codziennie o 9:00 UTC
  workflow_dispatch: # Możliwość manualnego uruchomienia

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Trigger Netlify Build
        run: |
          curl -X POST -d {} https://api.netlify.com/build_hooks/TWÓJ_BUILD_HOOK_ID
```

### Netlify Build Hook

1. Site Settings → Build & Deploy → Build Hooks
2. **Add Build Hook**
3. Name: `Daily Instagram Refresh`
4. Skopiuj URL

## Limity API

- Instagram Basic Display: **200 requestów/godzinę**
- Long-lived token: Wygasa po **60 dniach**
- Rate limit: Bezpieczny dla statycznych stron

## Troubleshooting

### Nie ma postów?

```bash
# Sprawdź czy token działa
curl "https://graph.instagram.com/me/media?fields=id,caption&access_token=TWÓJ_TOKEN"
```

### Token wygasł?

**✨ Nie musisz tego robić ręcznie!** System automatycznie odświeża token co 30 dni.

Podczas buildu zobaczysz:

```bash
🔄 Instagram token odświeżony pomyślnie!
📝 NOWY TOKEN: IGQ...
💡 Skopiuj i zaktualizuj w .env
```

**Ręczne odświeżenie** (opcjonalne):

```bash
# Krok 5: Odśwież token (ważny przez kolejne 60 dni)
curl -X GET "https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=TWÓJ_TOKEN"
```

### Błąd 400?

Token może być nieprawidłowy lub wygasły. Wygeneruj nowy.

## Alternatywne rozwiązania

Jeśli nie chcesz konfigurować API:

### 1. SnapWidget (darmowy widget)

```html
<iframe
  src="https://snapwidget.com/embed/XXXXX"
  style="border:none; width:100%; height:500px;"
></iframe>
```

### 2. Elfsight Instagram Feed (płatny)

```html
<script src="https://apps.elfsight.com/p/platform.js"></script>
<div class="elfsight-app-xxxxx"></div>
```

### 3. Curator.io (freemium)

Gotowy widget do embedowania.

## Zalecenia

✅ **Build-time fetch** (obecne rozwiązanie) - najlepsze dla SEO i performance
❌ **Client-side widget** - gorsze SEO, wymaga JavaScript
❌ **Serverless function** - dodatkowe koszty i złożoność

## Masz pytania?

Dokumentacja API: https://developers.facebook.com/docs/instagram-basic-display-api
