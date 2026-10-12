import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Onboarding',
  robots: { index: false, follow: false },
}

export default function OnboardingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a' }}>
      <style>{`
        iframe[src*="leadconnectorhq.com"],
        iframe[src*="chat-widget"],
        [id*="chat-widget"],
        [class*="chat-widget"],
        [id*="lc_text-widget"],
        [class*="lc_text-widget"] {
          display: none !important;
          visibility: hidden !important;
          pointer-events: none !important;
        }
      `}</style>
      {children}
    </div>
  )
}
