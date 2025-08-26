# CoinTrackr (Market Tracker)

Small React + Vite app that displays live cryptocurrency prices (via CoinGecko) and demo stock components. Built with Tailwind CSS and Recharts.

## Quick start

1. Install dependencies

```powershell
npm install
```

2. Start development server

```powershell
npm run dev
```

Open http://localhost:5173/ in your browser.

## What I changed recently
- Improved responsive layouts for hero, list, and chart modal.
- Added smooth button interactions and in-page smooth scrolling.

## Project structure (key files)

- `index.html` — app entry HTML
- `package.json` — scripts and dependencies
- `vite.config.js`, `postcss.config.js`, `tailwind.config.js` — build config
- `.env.example` — example environment variables (CoinGecko API key)
- `src/main.jsx` — React entry
- `src/index.css` — Tailwind imports + base styles (includes new `btn-smooth` utility)
- `src/App.jsx` — root app (renders `Dashboard`)
- `src/pages/Dashboard.jsx` — main page: hero, feature cards, crypto list
- `src/components/Header.jsx` — top navigation and brand
- `src/components/Footer.jsx` — footer and links
- `src/components/CryptoList.jsx` — table (desktop) + card list (mobile), search/sort/pagination
- `src/components/ChartModal.jsx` — responsive modal with Recharts line chart
- `src/components/ErrorMessage.jsx` — small error UI component
- `public/CoinTrackr-LOGO.png` — brand image

## Environment variables
Copy `.env.example` to `.env` and add your CoinGecko key if you have one. The app defaults to the public CoinGecko endpoints if none provided.

## Notes
- This project is a front-end only demo. No user data is stored.
- Charts use `recharts` and scale responsively; the modal adjusts height on small screens.

## License
MIT
