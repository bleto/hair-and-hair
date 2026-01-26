# 🔐 Jak dodać zmienną środowiskową (.env)

## Krok 1: Otwórz plik `.env`

Plik `.env` już został utworzony w głównym folderze projektu:

```
hair-and-hair/
  ├── .env          ← Ten plik
  ├── .env.example  ← Przykład
  └── ...
```

## Krok 2: Dodaj swój Instagram token

Otwórz plik `.env` w edytorze i wklej swój token:

```bash
# Instagram API Configuration
INSTAGRAM_ACCESS_TOKEN=IGQWRNabc123xyz...twój_długi_token_tutaj

# Opcjonalne - automatyczne odświeżanie tokena
INSTAGRAM_TOKEN_LAST_REFRESH=2026-01-26
```

**Gdzie znaleźć token?**

- Zobacz instrukcję w pliku: `INSTAGRAM_SETUP.md`
- Lub: https://developers.facebook.com/apps/

## Krok 3: Sprawdź czy działa

```bash
npm run build
```

Powinieneś zobaczyć:

```
✅ Instagram: Fetched 6 posts
```

Zamiast:

```
⚠️  INSTAGRAM_ACCESS_TOKEN not found. Using placeholder data.
```

### 🔄 Automatyczne odświeżanie tokena

Jeśli token wymaga odświeżenia (co 30 dni), zobaczysz:

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

**Co zrobić z nowym tokenem?**

1. Skopiuj token z konsoli
2. Zaktualizuj w `.env`:
   ```bash
   INSTAGRAM_ACCESS_TOKEN=nowy_token
   INSTAGRAM_TOKEN_LAST_REFRESH=2026-01-26
   ```
3. Zaktualizuj na hostingu (Netlify/Vercel)

---

## 🚨 WAŻNE - Bezpieczeństwo

❌ **NIGDY nie commituj pliku `.env` do Git!**
✅ Plik `.env` jest już w `.gitignore`
✅ Używaj `.env.example` do dokumentacji

## Dodawanie na hosting (Netlify/Vercel)

### Netlify:

1. Site settings → Environment variables
2. Add variable:
   - **Key**: `INSTAGRAM_ACCESS_TOKEN`
   - **Value**: Twój token

### Vercel:

1. Settings → Environment Variables
2. Add:
   - **Name**: `INSTAGRAM_ACCESS_TOKEN`
   - **Value**: Twój token

## Testowanie lokalnie vs produkcja

```bash
# Lokalnie (z .env)
npm run build

# Produkcja (Netlify/Vercel)
# Automatycznie użyje zmiennych z dashboard
```

## Inne zmienne środowiskowe

W `.env` możesz dodać inne zmienne:

```bash
INSTAGRAM_ACCESS_TOKEN=IGQ...
GOOGLE_ANALYTICS_ID=G-XXXXX
FACEBOOK_PIXEL_ID=123456
```

I użyć ich w kodzie:

```javascript
const analyticsId = process.env.GOOGLE_ANALYTICS_ID;
```

## Troubleshooting

### Token nie działa?

```bash
# Sprawdź czy plik .env istnieje
ls -la .env

# Sprawdź zawartość (TYLKO lokalnie, nie na screensharze!)
cat .env
```

### Nadal pokazuje placeholder?

1. Upewnij się że brak spacji: `INSTAGRAM_ACCESS_TOKEN=token` (nie `= token`)
2. Restart terminala
3. Usuń cache: `rm -rf _site dist .cache`
4. Build ponownie: `npm run build`

## Masz pytania?

Sprawdź: `INSTAGRAM_SETUP.md` - pełna instrukcja krok po kroku
