'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginForm() {
  const router = useRouter()
  const [mode, setMode] = useState<'client' | 'admin'>('client')
  const [slug, setSlug] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const res = await fetch('/api/onboarding/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          role: mode,
          slug: mode === 'client' ? slug.trim().toLowerCase() : undefined,
          password,
        }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error || 'Could not sign in.')
        return
      }
      router.push(data.redirect)
      router.refresh()
    } catch {
      setError('Something went wrong. Try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <div className="flex rounded-lg p-1" style={{ background: '#111111', border: '1px solid #2a2a2a' }}>
        {(['client', 'admin'] as const).map((id) => (
          <button
            key={id}
            type="button"
            onClick={() => setMode(id)}
            className="flex-1 py-2 text-xs font-bold tracking-wide uppercase rounded-md transition-colors"
            style={{
              background: mode === id ? '#d97706' : 'transparent',
              color: mode === id ? '#fff' : '#888',
            }}
          >
            {id === 'client' ? 'I am a client' : 'I am Vexlo'}
          </button>
        ))}
      </div>

      {mode === 'client' && (
        <label className="flex flex-col gap-1.5">
          <span className="text-xs font-bold" style={{ color: '#888' }}>Project code</span>
          <input
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            autoComplete="username"
            placeholder="e.g. tenanclean"
            className="px-4 py-3 rounded-lg text-sm outline-none"
            style={{ background: '#111111', border: '1px solid #2a2a2a', color: '#fff' }}
            required
          />
        </label>
      )}

      <label className="flex flex-col gap-1.5">
        <span className="text-xs font-bold" style={{ color: '#888' }}>Password</span>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete={mode === 'admin' ? 'current-password' : 'current-password'}
          className="px-4 py-3 rounded-lg text-sm outline-none"
          style={{ background: '#111111', border: '1px solid #2a2a2a', color: '#fff' }}
          required
        />
      </label>

      {error && (
        <p className="text-sm" style={{ color: '#ef4444' }}>{error}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="py-3.5 rounded text-sm font-bold tracking-wide text-white hover:brightness-110 disabled:opacity-60"
        style={{ background: '#d97706' }}
      >
        {loading ? 'Signing in…' : 'Sign in'}
      </button>

      <p className="text-xs leading-relaxed" style={{ color: '#888' }}>
        {mode === 'client'
          ? 'Use the project code and password Vexlo sent you. Only you can see your onboarding details.'
          : 'Admin access is for Vexlo only.'}
      </p>
    </form>
  )
}
