'use client'

import { useEffect } from 'react'

interface CalendlyWidgetProps {
  url?: string
}

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void
    }
  }
}

export default function CalendlyWidget({
  url = 'https://calendly.com/j-b-piaggio/demo-call',
}: CalendlyWidgetProps) {
  useEffect(() => {
    const existing = document.querySelector(
      'script[src="https://assets.calendly.com/assets/external/widget.js"]'
    )
    if (existing) return

    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://assets.calendly.com/assets/external/widget.css'
    document.head.appendChild(link)

    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.head.appendChild(script)
  }, [])

  const open = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url })
    }
  }

  return (
    <button
      onClick={open}
      className="group inline-flex items-center gap-3 px-10 py-5 rounded text-base font-bold tracking-wide text-white transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5"
      style={{ background: '#d97706', boxShadow: '0 8px 30px rgba(217,119,6,0.3)' }}
    >
      <span>📅</span>
      Book Your Free 15-Min Demo
      <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
    </button>
  )
}
