// src/pages/Dashboard.jsx
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CryptoList from '../components/CryptoList'

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />

      {/* Full-width main section */}
      <main className="w-full flex-1">
        {/* Hero Section - large, centered, clean */}
          <section className="w-full border-b border-gray-200 py-16 sm:py-24 px-4">
            <div className="max-w-[1200px] mx-auto text-center px-2">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-gray-900 leading-tight">
              CoinTrackr — Professional Crypto Insights
            </h1>
              <p className="mt-6 sm:mt-8 text-base sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Live market data for the top cryptocurrencies, delivered in a clean, professional layout.
              Track prices, view price charts, and analyze market cap and volume — all displayed in Indian Rupees (INR).
            </p>

              <div className="mt-8 sm:mt-10 flex items-center justify-center gap-4">
                <a href="#top-list" className="inline-flex items-center px-8 sm:px-16 py-3 sm:py-4 bg-indigo-600 text-white rounded-lg text-base font-semibold shadow hover:bg-indigo-700 transition-colors btn-smooth">
                Explore Markets
              </a>
            </div>

            {/* Feature row */}
            <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 text-left">
                <div className="text-sm text-gray-500">Coins</div>
                <div className="mt-3 text-3xl font-bold text-indigo-600">Top 100</div>
                <div className="mt-2 text-sm text-gray-600">Sorted by market cap</div>
              </div>
              <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 text-left">
                <div className="text-sm text-gray-500">Currency</div>
                <div className="mt-3 text-3xl font-bold text-indigo-600">INR</div>
                <div className="mt-2 text-sm text-gray-600">Local currency view</div>
              </div>
              <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 text-left">
                <div className="text-sm text-gray-500">Refresh</div>
                <div className="mt-3 text-3xl font-bold text-indigo-600">Every 5m</div>
                <div className="mt-2 text-sm text-gray-600">Automatic updates</div>
              </div>
            </div>
          </div>
        </section>

        {/* Crypto Table */}
        <section id="top-list" className="w-full px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-[1400px] mx-auto">
            <CryptoList />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Dashboard
