import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Vexlo</h3>
            <p className="mb-4 max-w-md">
              Automating business operations for UK SMBs. Save time, reduce errors, and scale your business with intelligent automation solutions.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail size={18} />
                <a href="mailto:info@vexlo.co.uk" className="hover:text-white transition-colors">
                  info@vexlo.co.uk
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={18} />
                <a href="tel:+441234567890" className="hover:text-white transition-colors">
                  +44 123 456 7890
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={18} />
                <span>United Kingdom</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/enquiry" className="hover:text-white transition-colors">
                  Get Started
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Vexlo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}


