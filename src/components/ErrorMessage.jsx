// src/components/ErrorMessage.jsx
import React from 'react'

const ErrorMessage = ({ message, onRetry }) => {
  return (
    <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-red-500 text-white text-sm font-bold">
          !
        </div>
        <div>
          <h3 className="font-semibold text-red-700">Error loading data</h3>
          <p className="text-sm text-red-600">{message}</p>
        </div>
      </div>
      {onRetry && (
        <button
          onClick={onRetry}
          className="ml-4 px-4 py-2 bg-indigo-600 text-white rounded-md text-sm hover:bg-indigo-700 transition-colors"
        >
          Retry
        </button>
      )}
    </div>
  )
}

export default ErrorMessage
