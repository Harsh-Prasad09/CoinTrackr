// src/components/CryptoList.jsx
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ChartModal from './ChartModal'
import ErrorMessage from './ErrorMessage'

const CryptoList = () => {
  const [cryptos, setCryptos] = useState([])
  const [filteredCryptos, setFilteredCryptos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedCrypto, setSelectedCrypto] = useState(null)
  const [chartData, setChartData] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('market_cap_rank')
  const [sortOrder, setSortOrder] = useState('asc')
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(10)
  const [chartRange, setChartRange] = useState('30d')

  const API_KEY = import.meta.env.VITE_COINGECKO_API_KEY
  const BASE_URL = import.meta.env.VITE_COINGECKO_BASE_URL || 'https://api.coingecko.com/api/v3'

  const fetchCryptoData = async () => {
    try {
      setError(null)
      setLoading(true)
      const response = await axios.get(
        `${BASE_URL}/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h,24h,7d,30d`,
        { headers: { 'X-CG-Demo-API-Key': API_KEY } }
      )
      setCryptos(response.data)
      setFilteredCryptos(response.data)
    } catch (err) {
      setError('Failed to fetch cryptocurrency data. Please check your internet connection.')
    } finally {
      setLoading(false)
    }
  }

  const fetchChartData = async (cryptoId) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/coins/${cryptoId}/market_chart?vs_currency=inr&days=30&interval=daily`,
        { headers: { 'X-CG-Demo-API-Key': API_KEY } }
      )
      const formattedData = response.data.prices.map(([timestamp, price]) => ({
        date: new Date(timestamp).toLocaleDateString(),
        price: parseFloat(price.toFixed(2))
      }))
      setChartData(formattedData)
    } catch (err) {
      console.error('Chart data error:', err)
    }
  }

  useEffect(() => {
    fetchCryptoData()
    const interval = setInterval(fetchCryptoData, 300000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (selectedCrypto) {
      fetchChartData(selectedCrypto.id)
      setShowModal(true)
    }
  }, [selectedCrypto])

  // search + sort
  useEffect(() => {
    let filtered = cryptos.filter(c =>
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.symbol.toLowerCase().includes(searchTerm.toLowerCase())
    )
    filtered.sort((a, b) => {
      let aValue = a[sortBy], bValue = b[sortBy]
      if (typeof aValue === 'string') aValue = aValue.toLowerCase()
      if (typeof bValue === 'string') bValue = bValue.toLowerCase()
      return sortOrder === 'asc' ? (aValue > bValue ? 1 : -1) : (aValue < bValue ? 1 : -1)
    })
    setFilteredCryptos(filtered)
    setCurrentPage(1)
  }, [cryptos, searchTerm, sortBy, sortOrder])

  // pagination
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = filteredCryptos.slice(indexOfFirstItem, indexOfLastItem)
  const totalPages = Math.ceil(filteredCryptos.length / itemsPerPage)

  // formatters
  const formatPrice = (price) => new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: price < 1 ? 4 : 2,
    maximumFractionDigits: price < 1 ? 6 : 2
  }).format(price)

  const formatMarketCap = (cap) => {
    if (cap >= 1e12) return `₹${(cap / 1e12).toFixed(2)}T`
    if (cap >= 1e9) return `₹${(cap / 1e9).toFixed(2)}B`
    if (cap >= 1e6) return `₹${(cap / 1e6).toFixed(2)}M`
    if (cap >= 1e3) return `₹${(cap / 1e3).toFixed(2)}K`
    return `₹${cap?.toFixed(2) || 'N/A'}`
  }

  const formatVolume = (vol) => {
    if (vol >= 1e9) return `₹${(vol / 1e9).toFixed(2)}B`
    if (vol >= 1e6) return `₹${(vol / 1e6).toFixed(2)}M`
    if (vol >= 1e3) return `₹${(vol / 1e3).toFixed(2)}K`
    return `₹${vol?.toFixed(2) || 'N/A'}`
  }

  const formatChange = (change) => {
    if (change === null || change === undefined) return <span className="text-gray-400 text-sm">N/A</span>
    const isPositive = change >= 0
    return (
      <span className={`px-2 py-0.5 rounded-md text-xs font-bold ${isPositive
        ? 'bg-emerald-100 text-emerald-700'
        : 'bg-red-100 text-red-700'}`}>
        {isPositive ? '↑' : '↓'} {Math.abs(change).toFixed(2)}%
      </span>
    )
  }

  if (loading) {
    return (
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Loading Cryptocurrencies...</h2>
        <div className="animate-pulse space-y-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-10 bg-gray-200 rounded-md"></div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      {/* Controls */}
      <div className="px-6 py-4 border-b border-gray-100 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Top 100 Cryptocurrencies</h2>
          <p className="text-left text-sm text-gray-500">Live prices in INR</p>
        </div>
        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Search Coin"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-3 py-2 border border-gray-400 rounded-md text-sm focus:ring-2 focus:ring-indigo-500"
          />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-2 border border-gray-400 rounded-md text-sm focus:ring-2 focus:ring-indigo-500"
          >
            <option value="market_cap_rank">Rank</option>
            <option value="name">Name</option>
            <option value="current_price">Price</option>
            <option value="market_cap">Market Cap</option>
            <option value="price_change_percentage_24h">24h Change</option>
            <option value="total_volume">Volume</option>
          </select>
          <button
            onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
            className="p-2 border border-gray-400 rounded-md hover:bg-gray-50"
          >
            {sortOrder === 'asc' ? '↑' : '↓'}
          </button>
        </div>
      </div>

      {error && (
        <div className="p-6">
          <ErrorMessage message={error} onRetry={fetchCryptoData} />
        </div>
      )}

      {!error && (
        <>
          {/* Table */}
          {/* Desktop / Tablet Table */}
          <div className="hidden sm:block overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 font-semibold text-gray-600">Rank & Coin</th>
                  <th className="px-6 py-3 font-semibold text-gray-600">Price</th>
                  <th className="px-6 py-3 font-semibold text-gray-600 text-center">1h</th>
                  <th className="px-6 py-3 font-semibold text-gray-600 text-center">24h</th>
                  <th className="px-6 py-3 font-semibold text-gray-600 text-center">7d</th>
                  <th className="px-6 py-3 font-semibold text-gray-600">Market Cap</th>
                  <th className="px-6 py-3 font-semibold text-gray-600">Volume</th>
                  <th className="px-6 py-3 font-semibold text-gray-600 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map(c => (
                  <tr key={c.id} className="border-t hover:bg-gray-50">
                    <td className="px-6 py-4 flex items-center gap-3">
                      <span className="text-gray-500 font-medium">#{c.market_cap_rank}</span>
                      <img src={c.image} alt={c.name} className="h-8 w-8 rounded-full" />
                      <div>
                        <div className="font-semibold text-gray-900">{c.name}</div>
                        <div className="text-xs text-gray-500 uppercase">{c.symbol}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-900">{formatPrice(c.current_price)}</td>
                    <td className="px-6 py-4 text-center">{formatChange(c.price_change_percentage_1h_in_currency)}</td>
                    <td className="px-6 py-4 text-center">{formatChange(c.price_change_percentage_24h)}</td>
                    <td className="px-6 py-4 text-center">{formatChange(c.price_change_percentage_7d_in_currency)}</td>
                    <td className="px-6 py-4">{formatMarketCap(c.market_cap)}</td>
                    <td className="px-6 py-4">{formatVolume(c.total_volume)}</td>
                    <td className="px-6 py-4 text-center">
                      <button
                        onClick={() => setSelectedCrypto(c)}
                        className="px-4 py-2 bg-indigo-600 text-white rounded-md text-xs hover:bg-indigo-700"
                      >
                        View Chart
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card List */}
          <div className="sm:hidden px-4 py-2 space-y-3">
            {currentItems.map(c => (
              <div key={c.id} className="bg-gray-50 border rounded-lg p-3 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <img src={c.image} alt={c.name} className="h-10 w-10 rounded-full" />
                  <div className="min-w-0">
                    <div className="text-sm font-semibold truncate">{c.name} <span className="text-xs text-gray-500 uppercase">{c.symbol}</span></div>
                    <div className="text-xs text-gray-500">#{c.market_cap_rank} • {formatMarketCap(c.market_cap)}</div>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <div className="text-sm font-medium">{formatPrice(c.current_price)}</div>
                  <button
                    onClick={() => setSelectedCrypto(c)}
                    className="px-3 py-1 bg-indigo-600 text-white rounded-md text-xs hover:bg-indigo-700"
                  >
                    Chart
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="px-6 py-4 flex items-center justify-between border-t text-sm">
            <div className="text-gray-600">
              Showing {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, filteredCryptos.length)} of {filteredCryptos.length}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
                disabled={currentPage === 1}
                className="px-3 py-1 border rounded-md disabled:opacity-50"
              >
                Previous
              </button>
              <button
                onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-3 py-1 border rounded-md disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        </>
      )}

      {/* Chart Modal */}
      <ChartModal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false)
          setSelectedCrypto(null)
        }}
        title={selectedCrypto ? `${selectedCrypto.name} (${selectedCrypto.symbol.toUpperCase()}) - Price Chart` : ''}
        data={chartData}
        formatPrice={formatPrice}
        gradientId="cryptoGradient"
        chartRange={chartRange}
        setChartRange={setChartRange}
      />
    </div>
  )
}

export default CryptoList
