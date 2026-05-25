# Static site (GitHub Pages)

Self-contained HTML/CSS/JS version of the Button effect project — no build step required.

## Files

| File | Description |
|------|-------------|
| `index.html` | Home page with the glass button and cursor animation |
| `welcome.html` | Bouquet page with flower meanings |
| `css/styles.css` | All styles |
| `js/home.js` | Cursor ring animation on the home button |
| `assets/` | Background and bouquet images |

## Deploy to GitHub Pages

### Option A — Publish the `docs/` folder (recommended)

1. Push this repository to GitHub.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Choose your default branch and set the folder to **`/docs`**.
5. Save. Your site will be at `https://<username>.github.io/<repo-name>/`.

### Option B — Site at repository root

Copy everything inside `docs/` to the root of the repo (or use `docs/` as the only content in a dedicated repo), then enable Pages with the **`/` (root)** folder.

## Preview locally

Open `index.html` in a browser, or run a simple server from this folder:

```bash
npx serve .
```

Then visit the URL shown (usually `http://localhost:3000`).

## Note on paths

Links and assets use relative paths (`welcome.html`, `assets/...`), so they work on GitHub project pages (`/repo-name/`) without extra configuration.
