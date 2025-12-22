'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setShowBanner(false)
    // Trigger a custom event to notify analytics component
    window.dispatchEvent(new CustomEvent('cookie-consent-updated', { detail: 'accepted' }))
  }

  const handleDeny = () => {
    localStorage.setItem('cookie-consent', 'denied')
    setShowBanner(false)
    // Trigger a custom event to notify analytics component
    window.dispatchEvent(new CustomEvent('cookie-consent-updated', { detail: 'denied' }))
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900 text-white p-4 shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm">
              We use cookies and analytics to enhance your experience and analyse site usage. You can choose to accept or deny tracking.{' '}
              <a href="/privacy" className="underline hover:text-gray-300">
                Learn more
              </a>
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={handleAccept}
              className="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-white hover:bg-accent-light transition-colors"
            >
              Accept
            </button>
            <button
              onClick={handleDeny}
              className="rounded-md bg-gray-700 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-600 transition-colors"
            >
              Deny
            </button>
            <button
              onClick={() => setShowBanner(false)}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}


