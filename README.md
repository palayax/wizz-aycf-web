# Wizz AYCF Route Finder — Mobile Web Version

A mobile-friendly, standalone web version of the Wizz Air AYCF Route Finder Chrome extension. Works on any device with a browser — phones, tablets, desktops.

## 🚀 Deploy to GitHub Pages (Step by Step)

### Option A: Quick Deploy (No Git Required)

1. **Go to GitHub** → [github.com/new](https://github.com/new)
2. **Create a new repository** named `wizz-aycf-web` (or any name you like)
3. Check **"Add a README file"** and click **Create repository**
4. In the repository, click **"Add file"** → **"Upload files"**
5. Drag and drop **all files** from this folder (`index.html`, `manifest.json`, etc.)
6. Click **"Commit changes"**
7. Go to **Settings** → **Pages** (in the left sidebar)
8. Under "Source", select **"Deploy from a branch"**
9. Select **`main`** branch and **`/ (root)`** folder
10. Click **Save**
11. Wait 1–2 minutes, then visit: `https://YOUR-USERNAME.github.io/wizz-aycf-web/`

### Option B: Using Git CLI

```bash
# 1. Create a new repo on GitHub first, then:
git init
git add .
git commit -m "Initial commit - mobile web version"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/wizz-aycf-web.git
git push -u origin main

# 2. Enable GitHub Pages in Settings → Pages → main branch → / (root)
```

### Option C: Add to Existing Extension Repository

If you want this in your existing `wizz-aycf-route-finder` repo:

1. Create a `docs/` folder in the repo
2. Put `index.html` and `manifest.json` inside `docs/`
3. In **Settings → Pages**, set source to `main` branch, `/docs` folder
4. Your site will be at: `https://vloss3.github.io/wizz-aycf-route-finder/`

---

## 📱 How to Use

### Step 1: Get Flight Data
Use the **Chrome extension** to download flight data, then click **Export JSON** in the extension.

### Step 2: Import on Mobile
1. Open the web app on your phone
2. Tap **"Import Flight Data (JSON)"**
3. Select the exported JSON file
4. Done! Your flight data is now searchable offline

### Step 3: Search
- **From Origin**: Find all flights departing from selected airports
- **To Destination**: Find routes to specific airports
- **Trip Explorer**: Find round-trip itineraries (Home → A → B → Home)

### Step 4: Install as App (Optional)
On your phone's browser:
- **iOS Safari**: Tap Share → "Add to Home Screen"
- **Android Chrome**: Tap the ⋮ menu → "Add to Home Screen" or "Install App"

---

## 🔄 Sharing Data Between Devices

1. **Export** from the Chrome extension (or from this web app)
2. Send the JSON file to your phone (email, AirDrop, cloud storage, etc.)
3. **Import** on your phone's browser

The data is stored locally in IndexedDB with a 48-hour cache (longer than the extension's 8 hours since there's no auto-download on mobile).

---

## Files

| File | Purpose |
|------|---------|
| `index.html` | Complete web app (HTML + CSS + JS in one file) |
| `manifest.json` | PWA manifest for "Add to Home Screen" |
| `README.md` | This file |

---

## What's Different from the Extension?

| Feature | Chrome Extension | Web Version |
|---------|-----------------|-------------|
| Download flights | ✅ Direct from Wizz API | ❌ Import JSON only |
| Search flights | ✅ | ✅ |
| Trip Explorer | ✅ | ✅ |
| Booking links | ✅ | ✅ |
| Mobile friendly | ❌ Side panel | ✅ Fully responsive |
| Works offline | ✅ | ✅ (after import) |
| Install as app | N/A | ✅ PWA |
| Cache duration | 8 hours | 48 hours |

---

## Disclaimer

Not affiliated with Wizz Air. Use responsibly.
