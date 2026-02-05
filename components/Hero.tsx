import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'
import HeroContactForm from '@/components/HeroContactForm'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow"></div>
        <div className="absolute top-[10%] right-[-10%] w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] mix-blend-screen animate-pulse-slow delay-1000"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-primary-dark/5 rounded-full blur-[120px] mix-blend-screen"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm mb-8 animate-fade-in">
            <span className="flex h-2 w-2 rounded-full bg-primary shadow-[0_0_10px_rgba(0,255,163,0.8)]"></span>
            <span className="text-sm font-medium text-primary-light">Next Gen Business Automation</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
            Automate Your Future <br />
            <span className="text-gradient drop-shadow-[0_0_15px_rgba(0,255,163,0.3)]">With Intelligent AI</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10">
            Transform your operations with AI-driven automation. Reduce manual work, eliminate errors, and scale efficiently with Vexlo&apos;s cutting-edge technology.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in">
            <Link
                href="/enquiry"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary text-black font-bold shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:bg-primary-light hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
                <Sparkles size={20} />
                Start Automating
            </Link>
            <Link
                href="/services"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 hover:border-primary/30 transition-all duration-300 flex items-center justify-center gap-2"
            >
                Explore Services
                <ArrowRight size={18} />
            </Link>
            </div>
        </div>

        {/* Contact Form Container */}
        <div className="mt-10 animate-fade-in delay-300">
           <HeroContactForm />
        </div>
      </div>
    </section>
  )
}
