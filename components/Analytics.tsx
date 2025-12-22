'use client'

import { useEffect } from 'react'

export default function Analytics() {
  useEffect(() => {
    // Check cookie consent
    const checkConsent = () => {
      const consent = localStorage.getItem('cookie-consent')
      return consent === 'accepted'
    }

    // Load analytics if consent is given
    const loadAnalytics = () => {
      if (checkConsent()) {
        // Check if script already exists
        if (document.querySelector('script[data-website-id="e2203af2-2bc8-45ef-8106-9489872f2dbf"]')) {
          return
        }

        const script = document.createElement('script')
        script.defer = true
        script.src = 'https://analytics.juanbp.com/script.js'
        script.setAttribute('data-website-id', 'e2203af2-2bc8-45ef-8106-9489872f2dbf')
        document.head.appendChild(script)
      } else {
        // Remove analytics script if consent was revoked
        const existingScript = document.querySelector('script[data-website-id="e2203af2-2bc8-45ef-8106-9489872f2dbf"]')
        if (existingScript) {
          existingScript.remove()
        }
      }
    }

    // Load on mount if consent already given
    loadAnalytics()

    // Listen for consent changes
    const handleConsentUpdate = (event: CustomEvent) => {
      if (event.detail === 'accepted') {
        loadAnalytics()
      } else if (event.detail === 'denied') {
        // Remove script if user denies
        const existingScript = document.querySelector('script[data-website-id="e2203af2-2bc8-45ef-8106-9489872f2dbf"]')
        if (existingScript) {
          existingScript.remove()
        }
      }
    }

    window.addEventListener('cookie-consent-updated', handleConsentUpdate as EventListener)

    return () => {
      window.removeEventListener('cookie-consent-updated', handleConsentUpdate as EventListener)
    }
  }, [])

  return null
}

