// src/components/Header.jsx
import React from 'react'

const Header = () => {
  return (
    <header className="w-full bg-sky-100 border-b border-gray-200 sticky top-0 z-40">

      <div className="w-full px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <a href="/" className="flex items-center gap-3 group btn-smooth">
            <img
              src="/CoinTrackr-LOGO.png"
              alt="CoinTrackr Logo"
              className="h-9 w-auto rounded-none transition-transform duration-150 group-hover:scale-[1.02]"
            />
            <span className="text-xl font-semibold text-gray-900">CoinTrackr</span>
          </a>

          {/* Meta */}
          <div className="flex items-center gap-4 text-sm">
            <span className="hidden sm:inline text-gray-600">Cryptocurrency • INR</span>

            {/* Live badge (subtle animation only on the dot) */}
            <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md border border-gray-400 btn-smooth">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-700 opacity-40"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
              </span>
              <span className="font-medium text-gray-800">Live</span>
            </span>

            {/* Action (optional) */}
            <a
              href="#top-list"
              className="hidden sm:inline-flex items-center rounded-md px-3 py-1.5 text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-700 transition-colors btn-smooth"
            >
              View Markets
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
