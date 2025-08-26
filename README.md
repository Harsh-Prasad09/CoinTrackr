# CoinTrackr

Small React app that displays live cryptocurrency prices (via CoinGecko). Built with Tailwind CSS and Recharts.

## Quick start

1. Install dependencies

```powershell
npm install
```

2. Start development server

```powershell
npm run dev
```

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

## Notes
- This project is a front-end only demo. No user data is stored.
- Charts use `recharts` and scale responsively; the modal adjusts height on small screens.

## License
MIT License

Copyright (c) 2025 Harsh Prasad

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
