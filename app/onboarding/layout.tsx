import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Onboarding',
  robots: { index: false, follow: false },
}

export default function OnboardingLayout({ children }: { children: React.ReactNode }) {
  return <div style={{ minHeight: '100vh', background: '#0a0a0a' }}>{children}</div>
}
