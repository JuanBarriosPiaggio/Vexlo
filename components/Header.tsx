import Link from 'next/link'

export default function Header() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-5"
      style={{ background: 'linear-gradient(to bottom, rgba(10,10,10,0.95) 0%, transparent 100%)' }}
    >
      <Link
        href="/"
        className="font-display text-2xl tracking-widest text-white transition-opacity hover:opacity-70"
      >
        VEXLO<span style={{ color: '#d97706' }}>.</span>
      </Link>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium" style={{ color: '#888' }}>
        <Link href="/#how" className="transition-colors hover:text-white">How It Works</Link>
        <Link href="/#features" className="transition-colors hover:text-white">Features</Link>
        <Link href="/services" className="transition-colors hover:text-white">Services</Link>
        <Link href="/about" className="transition-colors hover:text-white">About</Link>
      </div>

      <Link
        href="/#book"
        className="text-xs font-bold tracking-widest uppercase px-5 py-2.5 rounded text-white transition-all duration-200 hover:brightness-110 hover:-translate-y-px"
        style={{ background: '#d97706' }}
      >
        Book Free Demo
      </Link>
    </nav>
  )
}
