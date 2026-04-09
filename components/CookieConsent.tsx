'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) setShowBanner(true)
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setShowBanner(false)
    window.dispatchEvent(new CustomEvent('cookie-consent-updated', { detail: 'accepted' }))
  }

  const handleDeny = () => {
    localStorage.setItem('cookie-consent', 'denied')
    setShowBanner(false)
    window.dispatchEvent(new CustomEvent('cookie-consent-updated', { detail: 'denied' }))
  }

  if (!showBanner) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 px-6 py-4"
      style={{ background: '#111111', borderTop: '1px solid #2a2a2a' }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-xs flex-1" style={{ color: '#888' }}>
          We use cookies and analytics to improve your experience.{' '}
          <a href="/privacy" style={{ color: '#d97706', textDecoration: 'underline' }}>
            Learn more
          </a>
        </p>
        <div className="flex items-center gap-3">
          <button
            onClick={handleAccept}
            className="px-4 py-2 rounded text-xs font-bold text-white transition-colors duration-200 hover:brightness-110"
            style={{ background: '#d97706' }}
          >
            Accept
          </button>
          <button
            onClick={handleDeny}
            className="px-4 py-2 rounded text-xs font-semibold transition-colors duration-200 hover:text-white"
            style={{ background: '#1a1a1a', border: '1px solid #2a2a2a', color: '#888' }}
          >
            Deny
          </button>
          <button
            onClick={() => setShowBanner(false)}
            className="transition-colors duration-200 hover:text-white"
            style={{ color: '#888' }}
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  )
}
