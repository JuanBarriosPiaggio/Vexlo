'use client'

import { useRouter } from 'next/navigation'

export default function LogoutButton() {
  const router = useRouter()
  async function logout() {
    await fetch('/api/onboarding/logout', { method: 'POST' })
    router.push('/onboarding')
    router.refresh()
  }
  return (
    <button
      type="button"
      onClick={logout}
      className="text-xs font-bold"
      style={{ color: '#888' }}
    >
      Sign out
    </button>
  )
}
