'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Script from 'next/script'

const WIDGET_SELECTORS = [
  'iframe[src*="leadconnectorhq.com"]',
  'iframe[src*="chat-widget"]',
  '[id*="chat-widget"]',
  '[class*="chat-widget"]',
  '[id*="lc_text-widget"]',
  '[class*="lc_text-widget"]',
].join(', ')

function removeChatWidgets() {
  document.querySelectorAll(WIDGET_SELECTORS).forEach((el) => {
    if (el.closest('main')) return
    el.remove()
  })
}

export default function ChatWidget() {
  const pathname = usePathname()
  const onOnboarding = pathname.startsWith('/onboarding')

  useEffect(() => {
    if (!onOnboarding) return
    removeChatWidgets()
    const interval = window.setInterval(removeChatWidgets, 400)
    const stop = window.setTimeout(() => window.clearInterval(interval), 8000)
    return () => {
      window.clearInterval(interval)
      window.clearTimeout(stop)
    }
  }, [onOnboarding])

  if (onOnboarding) return null

  return (
    <Script
      id="leadconnector-loader"
      src="https://widgets.leadconnectorhq.com/loader.js"
      strategy="afterInteractive"
      data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
      data-widget-id="69e3a18206d5d5421be1022e"
    />
  )
}
