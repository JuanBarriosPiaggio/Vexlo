import Link from 'next/link'

export default function Footer() {
  return (
    <footer
      className="flex flex-col md:flex-row items-center justify-between gap-4 px-6 md:px-10 py-7"
      style={{ background: '#0a0a0a', borderTop: '1px solid #2a2a2a' }}
    >
      <div className="font-display text-xl tracking-widest text-white">
        VEXLO<span style={{ color: '#d97706' }}>.</span>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-6 text-xs" style={{ color: '#888' }}>
        <Link href="/services" className="hover:text-white transition-colors">Services</Link>
        <Link href="/about" className="hover:text-white transition-colors">About</Link>
        <Link href="/enquiry" className="hover:text-white transition-colors">Enquiry</Link>
        <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
      </div>

      <div className="text-xs text-center md:text-right" style={{ color: '#888' }}>
        AI automation for UK trades &amp; clinics · vexlo.co.uk · hello@mail.vexlo.co.uk
      </div>
    </footer>
  )
}
