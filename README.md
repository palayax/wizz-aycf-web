# Wizz AYCF Route Finder — Mobile Web v5.2.0

A mobile-friendly web app for searching Wizz Air All-You-Can-Fly routes. Works on any device.

## What's New in v5.2.0

- **🌍 ANY city option** — Origin and Destination pickers now include an "ANY" entry at the top of each list; selecting it (or selecting nothing) means "no restriction" on that end
- **🔀 Layover search** — When there's no direct flight for an origin→destination→date, optionally search for a 1-stop connection through a hub airport
- **📅 Expanded Search Range** — Exact Date, +1/+2/+3 day windows, or "All Available" (scans 14 days forward)
- **🗂️ Sort Cities By** — Order the city pickers by name or by country, with the choice remembered on your device
- **🎫 Book buttons** — Every result row links straight to the Wizz Multipass booking page for that flight (or each leg, for layovers)
- **🧹 Removed the LLM prompt generator** — The old "LLM Flight & Hostel Search" section is gone; the app is purely a flight finder now

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

### Origin / Destination

Pick one or more cities on each side, or leave a side unset — or pick **🌍 ANY** — to mean "no restriction" there. City lists can be sorted **A→Z by name** or **grouped by country**, per the "Sort Cities By" control; your choice is saved in the browser (`localStorage`) for next time. Priority Cities configured in Settings (⚙️) always float to the top of both lists regardless of sort order.

### Search Range

| Option | Meaning |
|--------|---------|
| **Exact Date Only** | Just the selected departure date |
| **Exact Date +1/+2/+3 Day(s)** | Selected date plus the next 1–3 days |
| **All Available** | Scans 14 days forward from the selected date |

### Layover

Off by default. When set to **Yes**, any origin→destination→date combination that has no direct flight is retried as a 1-stop connection through a hub airport:

- Layover time must be between 90 minutes and 24 hours
- Up to 25 candidate hub airports are probed per route
- Both same-day and overnight (next-day) second legs are considered
- The best 10 connections per route are kept and shown

Layover search requires specific destination cities — with **ANY** destination there's always a direct flight somewhere, so the layover pass is skipped automatically. Each leg of a layover connection is a separate booking (self-transfer), not a protected connection — mind the connection time and airport if you book one.

### Booking links

Every result row has a **🎫 Book** button (layover rows get separate **Leg 1** / **Leg 2** buttons) linking to the Wizz Multipass booking page with the origin, destination, date, and flight number pre-filled in the query string. Multipass doesn't publish a documented deep-link format, so those parameters may be ignored by their single-page app — but the link reliably lands you on the correct AYCF booking page to finish manually.

## Disclaimer

Not affiliated with Wizz Air. Use responsibly.
