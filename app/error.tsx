'use client'

import { useEffect, useState } from 'react'

interface ErrorDisplayProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function ErrorDisplay({ error, reset }: ErrorDisplayProps) {
  const [isClientError, setIsClientError] = useState(false)

  useEffect(() => {
    setIsClientError(true)
  }, [])

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="text-6xl mb-4">😵</div>
      <h2 className="text-2xl font-bold mb-2">Something went wrong</h2>
      <p className="text-gray-400 max-w-md mb-6">
        {isClientError
          ? 'An unexpected error occurred. Please try again.'
          : 'Failed to load this page.'}
      </p>
      
      {process.env.NODE_ENV === 'development' && (
        <div className="bg-surface p-4 rounded-lg max-w-2xl w-full text-left mb-6">
          <p className="text-sm text-red-400 font-mono break-all">
            {error.message}
          </p>
          {error.digest && (
            <p className="text-xs text-gray-500 mt-2">
              Error ID: {error.digest}
            </p>
          )}
        </div>
      )}

      <button
        onClick={reset}
        className="px-6 py-3 bg-primary text-background font-semibold rounded-lg hover:opacity-90 transition-opacity"
      >
        Try again
      </button>
    </div>
  )
}
