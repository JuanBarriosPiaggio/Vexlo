'use client'

import { useEffect } from 'react'

interface CalendlyWidgetProps {
  url?: string
}

export default function CalendlyWidget({
  url = 'https://calendly.com/j-b-piaggio/demo-call',
}: CalendlyWidgetProps) {
  useEffect(() => {
    const existing = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')
    if (existing) return

    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.head.appendChild(script)
  }, [])

  return (
    <div
      className="calendly-inline-widget w-full rounded-xl overflow-hidden"
      data-url={url}
      style={{ minWidth: '320px', height: '700px' }}
    />
  )
}
