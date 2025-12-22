import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary-dark to-primary overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-20 animate-pulse"></div>
      
      {/* Gradient orbs for depth */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-accent/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-primary-light/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-accent-light/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl drop-shadow-lg">
              Automate Your Business Operations
            </h1>
          </div>
          <p className="mt-6 text-lg leading-8 text-blue-100 drop-shadow-md">
            Transform your UK SMB with intelligent automation. Reduce manual work, eliminate errors, and scale efficiently. Focus on what matters most—growing your business.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/enquiry"
              className="group relative rounded-xl bg-accent px-8 py-4 text-base font-semibold text-white shadow-lg shadow-accent/50 hover:shadow-xl hover:shadow-accent/60 transition-all transform hover:scale-105 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent flex items-center gap-2 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-accent-light to-accent opacity-0 group-hover:opacity-100 transition-opacity"></span>
              <span className="relative">Get Started</span>
              <ArrowRight size={20} className="relative group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/services"
              className="group text-base font-semibold leading-6 text-white hover:text-blue-100 transition-colors flex items-center gap-2"
            >
              Learn more
              <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}


