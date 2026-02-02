# Wizz AYCF Route Finder — Mobile Web v3.0

A mobile-friendly web app for searching Wizz Air All-You-Can-Fly routes. Works on any device.

## What's New in v3.0

- **🚀 Data Collector Bookmarklet** — Download flights directly from Wizz Air without the Chrome extension
- **☁️ GitHub Storage** — Save/load flight databases to your GitHub repo with timestamps
- **🔄 Round Trip Search** — Find round trips from anywhere to anywhere in cached data
- **🗓️ Multi-Hop Trips** — Plan multi-city itineraries (A→B→C→A)
- **🔧 Built-in Debug Log** — Full logging with export capability
- **📱 Mobile First** — Designed for phones, works great on desktop too

## How It Works

### Getting Flight Data

The Wizz Air API requires authentication cookies, so direct API calls from a web app aren't possible. Instead, we use a **Data Collector bookmarklet** that runs on the Wizz Air page:

1. **Login** to [multipass.wizzair.com](https://multipass.wizzair.com)
2. **Run the bookmarklet** on the Wizz Air page (it has full cookie access)
3. The collector scrapes routes, downloads flight availability, and saves a JSON file
4. **Import the JSON** into this web app
5. Optionally **save to GitHub** for persistence across devices

### GitHub Integration

Save your flight databases to your GitHub repo:

1. Create a [Personal Access Token](https://github.com/settings/tokens/new?scopes=repo) with `repo` scope
2. Enter your GitHub owner, repo, and token in Settings (⚙️)
3. Click "Save to GitHub" — files are saved as `data/flights-YYYY-MM-DD-HHMMSS.json`
4. Click "Load from GitHub" to restore on any device

## Deploy to GitHub Pages

1. Go to [github.com/new](https://github.com/new) → create repo (e.g. `wizz-aycf-web`)
2. Upload all files: `index.html`, `manifest.json`, `icon-192.png`, `icon-512.png`
3. Settings → Pages → Source: `main` branch, `/ (root)` → Save
4. Visit `https://YOUR-USERNAME.github.io/wizz-aycf-web/`

## Files

| File | Purpose |
|------|---------|
| `index.html` | Complete app (HTML + CSS + JS) |
| `manifest.json` | PWA manifest |
| `icon-192.png` | App icon 192px |
| `icon-512.png` | App icon 512px |
| `data/` | Flight databases (created by Save to GitHub) |

## Search Modes

| Mode | Description |
|------|-------------|
| **From Origin** | All flights from selected airports |
| **To Destination** | All routes to selected airports |
| **Round Trip** | Outbound + return from any origin to any destination |
| **Multi-Hop** | Round trips with extra stops (A→B→C→A) |

## Disclaimer

Not affiliated with Wizz Air. Use responsibly.
