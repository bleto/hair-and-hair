# 🚀 GitHub Pages + Automatyczne odświeżanie Instagram Token

## Jak to działa?

**W pełni automatyczny system** na GitHub Actions + GitHub Pages! 🎉

### 2 Workflows:

1. **🚀 Deploy to GitHub Pages** - Deploy strony po każdym pushu
2. **🔄 Refresh Instagram Token** - Automatyczne odświeżanie tokena co 14 dni

**Zero ingerencji** - wszystko działa samo!

---

## 📋 Konfiguracja (jednorazowa, ~10 minut)

### Krok 1: Włącz GitHub Pages

1. Otwórz swoje repo na GitHub
2. **Settings** → **Pages**
3. **Source**: wybierz **GitHub Actions**
4. Zapisz

### Krok 2: Wygeneruj Personal Access Token (PAT)

GitHub Actions potrzebuje tokena aby aktualizować Secrets.

**1. Wygeneruj token:**

- https://github.com/settings/tokens → **Generate new token (classic)**
- **Note**: `Instagram Token Refresh`
- **Expiration**: No expiration (lub 1 rok)
- **Scopes**: zaznacz:
  - ✅ `repo` (Full control of private repositories)
  - ✅ `workflow` (Update GitHub Action workflows)
- Kliknij: **Generate token**
- **Skopiuj token** (pokazuje się tylko raz!)

**2. Dlaczego potrzebny?**
GitHub Actions nie może domyślnie modyfikować Secrets - potrzebuje Personal Access Token z uprawnieniami `repo`.

### Krok 3: Dodaj Secrets w GitHub

Przejdź do: **Settings** → **Secrets and variables** → **Actions** → **New repository secret**

Dodaj 3 secrets:

```bash
# 1. Instagram Access Token
Name: INSTAGRAM_ACCESS_TOKEN
Value: IGQWRPabc123xyz...  # Twój token z Instagram API

# 2. GitHub Personal Access Token (z Kroku 2)
Name: PERSONAL_ACCESS_TOKEN
Value: ghp_abc123xyz...  # Token wygenerowany w Kroku 2

# 3. Data ostatniego odświeżenia (opcjonalne)
Name: INSTAGRAM_TOKEN_LAST_REFRESH
Value: 2026-01-26
```

### Krok 4: Push do GitHub

```bash
git add .
git commit -m "Add GitHub Actions workflows for auto-deploy and token refresh"
git push origin main  # lub master
```

**GitHub automatycznie:**

1. Zbuduje stronę (z nowymi postami Instagram)
2. Opublikuje na GitHub Pages
3. Ustawi harmonogram odświeżania tokena

---

## 🎯 Gotowe!

### Co działa automatycznie:

✅ **Deploy** - każdy push → automatyczny deploy
✅ **Instagram posty** - zawsze najnowsze (z buildu)
✅ **Token refresh** - co 14 dni automatycznie
✅ **GitHub Secret update** - nowy token zapisany automatycznie

### Twój URL GitHub Pages:

```
https://TWOJA-NAZWA.github.io/NAZWA-REPO/
```

Znajdziesz go w: **Settings** → **Pages** → **Your site is live at**

---

## 🧪 Testowanie

### Test 1: Sprawdź czy deploy działa

1. Zrób małą zmianę w kodzie
2. Push do GitHub
3. Zobacz: **Actions** tab → workflow **Deploy to GitHub Pages**
4. Po ~2-3 minutach: odśwież stronę

### Test 2: Ręcznie odśwież token (bez czekania 14 dni)

1. **Actions** tab
2. Workflow: **Refresh Instagram Token**
3. Kliknij: **Run workflow** → **Run workflow**
4. Sprawdź logi - powinieneś zobaczyć:

```
✅ Token refreshed successfully!
📅 Expires in: 60 days
✅ Token updated in GitHub Secrets
```

5. Sprawdź **Settings** → **Secrets** → `INSTAGRAM_ACCESS_TOKEN` został zaktualizowany (timestamp się zmienił)

### Test 3: Sprawdź harmonogram

1. **Actions** tab
2. Workflow: **Refresh Instagram Token**
3. Kliknij na nazwę workflow
4. Zobacz: **This workflow has a `schedule` trigger**
5. Next run: ~1. lub 15. dnia miesiąca

---

## 📊 Monitoring

### Gdzie sprawdzić logi?

**GitHub Actions:**

1. **Actions** tab w repo
2. Zobacz wszystkie uruchomienia workflows
3. Kliknij na konkretny run → zobacz logi

### Email powiadomienia:

GitHub wysyła email automatycznie gdy workflow fail.

**Dostosuj w:** **Settings** → **Notifications** → **GitHub Actions**

---

## 🔧 Harmonogram (Customize)

Plik: `.github/workflows/refresh-instagram-token.yml`

```yaml
schedule:
  # Domyślnie: 1. i 15. każdego miesiąca o 00:00 UTC
  - cron: '0 0 1,15 * *'

# Inne przykłady:
# Co tydzień (poniedziałek 00:00)
- cron: '0 0 * * 1'

# Co 7 dni (każda niedziela)
- cron: '0 0 */7 * *'

# Raz w miesiącu (1. dnia)
- cron: '0 0 1 * *'

# Co 30 dni (bardziej oszczędnie)
- cron: '0 0 1,30 * *'
```

**Format Cron:**

```
┌───────────── minuta (0 - 59)
│ ┌───────────── godzina (0 - 23)
│ │ ┌───────────── dzień miesiąca (1 - 31)
│ │ │ ┌───────────── miesiąc (1 - 12)
│ │ │ │ ┌───────────── dzień tygodnia (0 - 6, niedziela = 0)
│ │ │ │ │
* * * * *
```

---

## 🐛 Troubleshooting

### Workflow: "Error: Resource not accessible by integration"

**Problem:** GitHub Actions nie może aktualizować Secrets.

**Rozwiązanie:**

1. Sprawdź czy `PERSONAL_ACCESS_TOKEN` jest dodany w Secrets
2. Sprawdź czy PAT ma scope: `repo` i `workflow`
3. Wygeneruj nowy PAT jeśli wygasł

### Deploy nie działa?

**Sprawdź:**

1. ✅ GitHub Pages jest włączone? (Settings → Pages → Source: GitHub Actions)
2. ✅ Branch się zgadza? (main vs master w workflow)
3. ✅ `npm run build` działa lokalnie?
4. ✅ Folder `dist` jest generowany?

### Instagram posty nie aktualizują się?

**Sprawdź:**

1. ✅ `INSTAGRAM_ACCESS_TOKEN` jest w Secrets?
2. ✅ Token jest aktualny? (nie wygasł)
3. ✅ Workflow "Refresh Instagram Token" działa?
4. ✅ Build logi pokazują: `✅ Instagram: Fetched X posts`?

### Token refresh nie działa?

**Sprawdź:**

1. Zobacz logi workflow w Actions tab
2. Czy Instagram API zwraca błąd?
3. Czy `PERSONAL_ACCESS_TOKEN` jest poprawny?

**Ręczne odświeżenie** (fallback):

```bash
# Wygeneruj nowy token
curl -X GET "https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=TWÓJ_TOKEN"

# Zaktualizuj w GitHub Secrets ręcznie
```

### Workflow nie uruchamia się zgodnie z harmonogramem?

**Uwaga:** GitHub Actions może opóźnić scheduled workflows o 3-80 minut jeśli jest duże obciążenie.

**Rozwiązanie:** To normalne. Workflow i tak się uruchomi tego samego dnia.

---

## 💰 Koszty

**GitHub Free Plan:**

- ✅ GitHub Pages: **DARMOWE** (unlimited)
- ✅ GitHub Actions: **2000 minut/miesiąc** (wystarczy!)
- ✅ Storage: 500 MB
- ✅ Bandwidth: 100 GB/miesiąc

**Zużycie:**

- Deploy: ~2 min/deploy × 10 deployów = 20 min/miesiąc
- Token refresh: ~1 min × 2 razy = 2 min/miesiąc
- **Razem: ~22 min/miesiąc = 1.1% limitu** 🎉

---

## 🔐 Bezpieczeństwo

### Secrets są bezpieczne:

✅ Zaszyfrowane przez GitHub
✅ Nigdy nie pokazują się w logach
✅ Dostępne tylko dla workflows tego repo

### Personal Access Token:

⚠️ **WAŻNE:** PAT ma pełny dostęp do repo

- Nigdy nie commituj do kodu
- Nie udostępniaj nikomu
- Można ograniczyć do jednego repo (fine-grained token)

**Fine-grained token (bezpieczniejszy):**

1. https://github.com/settings/tokens?type=beta
2. **Repository access**: Only select repositories → wybierz swoje repo
3. **Permissions**: Secrets (Read and write)

---

## 📱 Custom Domain (Opcjonalne)

### Dodaj własną domenę do GitHub Pages:

1. Kup domenę (np. w OVH, Cloudflare)
2. Dodaj DNS records:
   ```
   Type: CNAME
   Name: www
   Value: TWOJA-NAZWA.github.io
   ```
3. GitHub: **Settings** → **Pages** → **Custom domain**
4. Wpisz: `www.twoja-domena.pl`
5. Zapisz → GitHub automatycznie ustawi HTTPS (certyfikat SSL)

---

## 🎯 Podsumowanie

### Co masz teraz:

✅ **GitHub Pages** - darmowy hosting
✅ **Auto-deploy** - każdy push → nowa wersja live
✅ **Instagram feed** - zawsze najnowsze posty
✅ **Token auto-refresh** - co 14 dni, zero ingerencji
✅ **Monitoring** - email jeśli coś pójdzie nie tak
✅ **Pełna kontrola** - wszystko w jednym repo

### Co musisz zrobić:

1. Włącz GitHub Pages (Settings → Pages → Source: GitHub Actions)
2. Wygeneruj Personal Access Token
3. Dodaj 3 Secrets w GitHub
4. Push
5. **To wszystko!** 🎉

---

## 🔗 Przydatne linki

- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [GitHub Actions Docs](https://docs.github.com/en/actions)
- [Instagram API Docs](https://developers.facebook.com/docs/instagram-basic-display-api)
- [Cron Expression Generator](https://crontab.guru/)

---

Masz pytania? Zobacz też:

- `INSTAGRAM_SETUP.md` - jak wygenerować pierwszy token Instagram
- `ENV_SETUP.md` - konfiguracja lokalna .env
- `package.json` - wszystkie npm scripts
