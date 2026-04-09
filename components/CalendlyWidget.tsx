'use client'

import { useEffect, useRef } from 'react'

interface CalendlyWidgetProps {
  url?: string
}

export default function CalendlyWidget({
  url = 'https://calendly.com/j-b-piaggio/demo-call',
}: CalendlyWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Load Calendly script
    const existing = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')
    if (!existing) {
      const script = document.createElement('script')
      script.src = 'https://assets.calendly.com/assets/external/widget.js'
      script.async = true
      document.head.appendChild(script)
    }

    // Listen for Calendly resize messages to auto-adjust height
    const handleMessage = (e: MessageEvent) => {
      if (e.origin === 'https://calendly.com' && e.data?.event === 'calendly.page_height') {
        if (containerRef.current && e.data.payload?.height) {
          containerRef.current.style.height = e.data.payload.height + 'px'
        }
      }
    }

    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  return (
    <div
      ref={containerRef}
      className="calendly-inline-widget w-full rounded-xl overflow-hidden"
      data-url={`${url}?hide_gdpr_banner=1&background_color=0a0a0a&text_color=e8e8e8&primary_color=d97706`}
      style={{ minWidth: '320px', height: '950px' }}
    />
  )
}
