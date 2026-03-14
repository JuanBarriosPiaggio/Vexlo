import Link from 'next/link'
import Image from 'next/image'

const industries = [
  { label: 'Cleaning Companies', slug: 'ai-receptionist-cleaning-companies' },
  { label: 'Plumbers & Heating', slug: 'ai-receptionist-plumbers' },
  { label: 'Dental Clinics', slug: 'ai-receptionist-dentists' },
  { label: 'Estate Agents', slug: 'ai-receptionist-estate-agents' },
  { label: 'Roofing Companies', slug: 'ai-receptionist-roofing-companies' },
  { label: 'Beauty Salons & Barbers', slug: 'ai-receptionist-salons-barbers' },
  { label: 'Property Maintenance', slug: 'ai-receptionist-property-maintenance' },
]

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/Vexlo_logo.png"
                alt="Vexlo Logo"
                width={140}
                height={50}
                className="h-10 w-auto brightness-0 invert opacity-90"
              />
            </Link>
            <p className="mb-4 max-w-xs text-slate-400 leading-relaxed text-sm">
              AI receptionist and lead automation for UK local businesses. Turn missed calls into booked jobs — automatically.
            </p>
            <p className="text-xs text-slate-500">Powered by GoHighLevel &amp; AI Voice Technology</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="text-slate-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/enquiry" className="text-white font-semibold hover:text-primary-light transition-colors">
                  Book a Free Demo
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Industries</h4>
            <ul className="space-y-3 text-sm">
              {industries.map((industry) => (
                <li key={industry.slug}>
                  <Link
                    href={`/${industry.slug}`}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {industry.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/privacy" className="text-slate-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">Cookie Policy</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Vexlo. All rights reserved.</p>
          <p className="text-xs text-slate-600">AI Receptionist &amp; Automation for UK Local Businesses</p>
        </div>
      </div>
    </footer>
  )
}
