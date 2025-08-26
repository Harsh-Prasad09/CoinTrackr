// src/components/ChartModal.jsx
import React from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

const ChartModal = ({ isOpen, onClose, title, data, formatPrice, gradientId, chartRange = '30d', setChartRange }) => {
  if (!isOpen) return null

  let filteredData = data
  let periodLabel = '30 Days'
  if (chartRange === '7d') {
    filteredData = data.slice(-7)
    periodLabel = '7 Days'
  }

  const validPrices = filteredData.filter(d => d.price !== null && d.price !== undefined)
  const highest = validPrices.length ? Math.max(...validPrices.map(d => d.price)) : 0
  const lowest = validPrices.length ? Math.min(...validPrices.map(d => d.price)) : 0

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
  <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl sm:max-w-4xl md:max-w-6xl overflow-hidden animate-fade-in mx-2">
        
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
          <button
            onClick={onClose}
            className="p-2 text-gray-500 hover:text-gray-800 rounded-md transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Range Controls */}
        <div className="flex justify-end items-center px-6 py-3">
          <div className="flex gap-2">
            <button
              className={`px-4 py-2 rounded-md text-sm font-medium ${chartRange === '7d'
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              onClick={() => setChartRange('7d')}
            >
              7 Days
            </button>
            <button
              className={`px-4 py-2 rounded-md text-sm font-medium ${chartRange === '30d'
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              onClick={() => setChartRange('30d')}
            >
              30 Days
            </button>
          </div>
        </div>

        {/* Chart */}
          <div className="px-4 sm:px-6 pb-6 sm:pb-8">
          <div className="h-[300px] sm:h-[400px] bg-gray-50 rounded-xl p-3 sm:p-4 shadow-inner">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={filteredData} margin={{ top: 20, right: 30, left: 10, bottom: 20 }}>
                <XAxis 
                  dataKey="date"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#6B7280' }}
                />
                <YAxis 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#6B7280' }}
                />
                <Tooltip 
                  formatter={(value) => [formatPrice(value), 'Price']}
                  contentStyle={{ 
                    backgroundColor: 'white',
                    border: '1px solid #E5E7EB',
                    borderRadius: '8px',
                    fontSize: '14px',
                    padding: '8px 12px'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="price" 
                  stroke={`url(#${gradientId})`}
                  strokeWidth={3}
                  dot={false}
                />
                <defs>
                  <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#4F46E5" />
                    <stop offset="100%" stopColor="#F59E0B" />
                  </linearGradient>
                </defs>
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="bg-white rounded-lg border p-4 text-center shadow-sm">
              <p className="text-xs text-gray-500">Data Points</p>
              <p className="text-lg font-semibold text-gray-900">{filteredData.length}</p>
            </div>
            <div className="bg-white rounded-lg border p-4 text-center shadow-sm">
              <p className="text-xs text-gray-500">Highest</p>
              <p className="text-lg font-semibold text-gray-900">{formatPrice(highest)}</p>
            </div>
            <div className="bg-white rounded-lg border p-4 text-center shadow-sm">
              <p className="text-xs text-gray-500">Lowest</p>
              <p className="text-lg font-semibold text-gray-900">{formatPrice(lowest)}</p>
            </div>
            <div className="bg-white rounded-lg border p-4 text-center shadow-sm">
              <p className="text-xs text-gray-500">Period</p>
              <p className="text-lg font-semibold text-gray-900">{periodLabel}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChartModal
