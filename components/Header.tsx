'use client'

import Link from 'next/link'
import { useEffect, useId, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/#how', label: 'How It Works' },
  { href: '/#features', label: 'Features' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/google-reviews', label: 'Reviews' },
  { href: '/listings', label: 'Listings' },
  { href: '/articles', label: 'Articles' },
  { href: '/about', label: 'About' },
] as const

export default function Header() {
  const [open, setOpen] = useState(false)
  const menuId = useId()
  const pathname = usePathname()
  const isListings = pathname === '/listings'

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-5"
        style={{ background: 'linear-gradient(to bottom, rgba(10,10,10,0.95) 0%, transparent 100%)' }}
      >
        <Link
          href="/"
          className="transition-opacity hover:opacity-70"
          aria-label="Vexlo home"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/vexlo_logo.png"
            alt="Vexlo"
            className="h-10 w-auto"
          />
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium" style={{ color: '#888' }}>
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} className="transition-colors hover:text-white">
              {label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="md:hidden p-2 -mr-1 rounded transition-colors hover:bg-white/5"
            style={{ color: '#e8e8e8' }}
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen(v => !v)}
          >
            {open ? <X className="w-6 h-6" strokeWidth={2} /> : <Menu className="w-6 h-6" strokeWidth={2} />}
          </button>

          {isListings ? (
            <a
              href="#audit-form"
              className="text-xs font-bold tracking-widest uppercase px-4 md:px-5 py-2.5 rounded text-white transition-all duration-200 hover:brightness-110 hover:-translate-y-px whitespace-nowrap"
              style={{ background: '#d97706' }}
            >
              Get Free Audit →
            </a>
          ) : (
            <Link
              href="/enquiry"
              className="text-xs font-bold tracking-widest uppercase px-4 md:px-5 py-2.5 rounded text-white transition-all duration-200 hover:brightness-110 hover:-translate-y-px whitespace-nowrap"
              style={{ background: '#d97706' }}
            >
              Book Free Demo
            </Link>
          )}
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id={menuId}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className={`fixed inset-0 z-40 md:hidden transition-[visibility,opacity] duration-200 ${
          open ? 'visible opacity-100' : 'invisible opacity-0 pointer-events-none'
        }`}
      >
        <button
          type="button"
          className="absolute inset-0 bg-black/60"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
        />
        <div
          className="absolute left-0 right-0 top-0 flex flex-col gap-1 px-6 pt-24 pb-8 border-b"
          style={{
            background: '#0a0a0a',
            borderColor: '#2a2a2a',
            boxShadow: '0 24px 48px rgba(0,0,0,0.5)',
          }}
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="py-3 text-base font-medium transition-colors hover:text-white border-b last:border-b-0"
              style={{ color: '#888', borderColor: '#2a2a2a' }}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          {isListings ? (
            <a
              href="#audit-form"
              className="mt-2 py-3 text-base font-bold transition-colors"
              style={{ color: '#d97706' }}
              onClick={() => setOpen(false)}
            >
              Get Free Audit →
            </a>
          ) : (
            <Link
              href="/enquiry"
              className="mt-2 py-3 text-base font-bold transition-colors"
              style={{ color: '#d97706' }}
              onClick={() => setOpen(false)}
            >
              Book Free Demo →
            </Link>
          )}
        </div>
      </div>
    </>
  )
}
