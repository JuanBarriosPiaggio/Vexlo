'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="absolute inset-0 bg-background/80 backdrop-blur-md border-b border-white/5 supports-[backdrop-filter]:bg-background/60"></div>
      <nav className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative h-10 w-auto">
                 {/* Using brightness/hue-rotate to make the logo green if possible, or just white for now */}
                 <Image
                    src="/Vexlo_logo.png"
                    alt="Vexlo Logo"
                    width={150}
                    height={50}
                    className="h-full w-auto brightness-0 invert sepia saturate-[500%] hue-rotate-[80deg] opacity-90 group-hover:opacity-100 transition-opacity" 
                    priority
                  />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link
              href="/"
              className="text-sm font-medium text-gray-300 hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium text-gray-300 hover:text-primary transition-colors"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-gray-300 hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="/enquiry"
              className="group rounded-lg bg-primary/10 border border-primary/20 px-4 py-2 text-sm font-bold text-primary hover:bg-primary hover:text-black hover:border-primary transition-all flex items-center gap-2"
            >
              Get Started
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-primary"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-background/95 backdrop-blur-xl border-b border-white/10 animate-fade-in shadow-2xl">
            <div className="space-y-1 px-4 pb-6 pt-4">
              <Link
                href="/"
                className="block rounded-lg px-3 py-2 text-base font-medium text-gray-300 hover:text-primary hover:bg-white/5"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/services"
                className="block rounded-lg px-3 py-2 text-base font-medium text-gray-300 hover:text-primary hover:bg-white/5"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/about"
                className="block rounded-lg px-3 py-2 text-base font-medium text-gray-300 hover:text-primary hover:bg-white/5"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/enquiry"
                className="block mt-4 rounded-lg bg-primary px-3 py-2.5 text-center text-base font-bold text-black hover:bg-primary-light"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
