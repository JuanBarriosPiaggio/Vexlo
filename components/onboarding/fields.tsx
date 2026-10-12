'use client'

import { useLayoutEffect, useRef } from 'react'

export function Field({
  label,
  hint,
  children,
}: {
  label: string
  hint?: string
  children: React.ReactNode
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-bold" style={{ color: '#e8e8e8' }}>{label}</span>
      {hint && <span className="text-xs leading-snug" style={{ color: '#888' }}>{hint}</span>}
      {children}
    </label>
  )
}

const inputStyle = {
  background: '#0a0a0a',
  border: '1px solid #2a2a2a',
  color: '#fff',
} as const

export function TextInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={`px-3 py-2.5 rounded-lg text-sm outline-none w-full ${props.className || ''}`}
      style={{ ...inputStyle, ...props.style }}
    />
  )
}

export function TextArea({
  className,
  rows = 3,
  style,
  onInput,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const ref = useRef<HTMLTextAreaElement>(null)

  function fit(el: HTMLTextAreaElement | null) {
    if (!el) return
    el.style.height = 'auto'
    el.style.height = `${el.scrollHeight}px`
  }

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    fit(el)
    const onResize = () => fit(el)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [props.value])

  return (
    <textarea
      {...props}
      ref={ref}
      rows={rows}
      onInput={(e) => {
        fit(e.currentTarget)
        onInput?.(e)
      }}
      className={`px-3 py-2.5 rounded-lg text-sm outline-none w-full overflow-hidden ${className || ''}`}
      style={{ ...inputStyle, resize: 'none', ...style }}
    />
  )
}

export function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4 pb-6 mb-6" style={{ borderBottom: '1px solid #2a2a2a' }}>
      <h3 className="text-xs font-bold tracking-widest uppercase" style={{ color: '#d97706' }}>
        {title}
      </h3>
      {children}
    </div>
  )
}
