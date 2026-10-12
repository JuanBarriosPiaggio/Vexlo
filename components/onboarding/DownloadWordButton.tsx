'use client'

import { useState } from 'react'

export default function DownloadWordButton({
  slug,
  compact = false,
  onBeforeDownload,
}: {
  slug: string
  compact?: boolean
  onBeforeDownload?: () => Promise<boolean>
}) {
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')

  async function download(e: React.MouseEvent) {
    e.preventDefault()
    e.stopPropagation()
    setBusy(true)
    setError('')
    try {
      if (onBeforeDownload) {
        const ok = await onBeforeDownload()
        if (!ok) return
      }
      const res = await fetch(`/api/onboarding/${encodeURIComponent(slug)}/document`)
      if (!res.ok) {
        setError('Could not download.')
        return
      }
      const blob = await res.blob()
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      const header = res.headers.get('Content-Disposition')
      const match = header?.match(/filename="([^"]+)"/)
      a.href = url
      a.download = match?.[1] || `${slug}-onboarding.docx`
      document.body.appendChild(a)
      a.click()
      a.remove()
      URL.revokeObjectURL(url)
    } catch {
      setError('Could not download.')
    } finally {
      setBusy(false)
    }
  }

  return (
    <span className="inline-flex flex-col items-end gap-1">
      <button
        type="button"
        onClick={download}
        disabled={busy}
        className={compact ? 'text-xs font-bold' : 'text-xs font-bold px-3 py-2 rounded-md'}
        style={
          compact
            ? { color: '#d97706' }
            : { color: '#fff', background: '#d97706' }
        }
      >
        {busy ? 'Preparing…' : 'Download Word'}
      </button>
      {error && (
        <span className="text-xs" style={{ color: '#ef4444' }}>
          {error}
        </span>
      )}
    </span>
  )
}
