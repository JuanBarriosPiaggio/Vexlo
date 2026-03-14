import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Phone, MessageSquare, Star, CheckCircle } from 'lucide-react'
import HeroContactForm from '@/components/HeroContactForm'

export default function Hero() {
  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-primary text-sm font-medium mb-6">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
              24/7 AI Receptionist & Automation
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
              Turn Missed Calls Into <span className="text-primary">Booked Jobs</span> Automatically
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Stop losing customers to voicemail. Vexlo answers every call, texts back instantly, and books appointments 24/7 — so you can focus on the work that pays.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                href="/enquiry"
                className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-white bg-primary rounded-xl hover:bg-primary-dark transition-all shadow-lg shadow-blue-500/20 hover:shadow-xl hover:-translate-y-0.5"
              >
                Book a Free Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-all hover:border-slate-300"
              >
                See How It Works
              </Link>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Answers 24/7</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Instant Text-Back</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Google Reviews</span>
              </div>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="relative lg:h-[600px] w-full flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[500px] aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-slate-200 border border-slate-100">
              <Image 
                src="https://images.unsplash.com/photo-1523961131990-a629ce8752dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Professional receptionist on phone"
                fill
                className="object-cover"
                priority
              />
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">New Lead Captured</p>
                    <p className="text-xs text-slate-500">Just now • from Missed Call</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Form Overlay (Mobile only or specific layout? Let's hide form here and put it below or use modal) 
                Actually, putting the form IN the hero is good for conversion. 
                Let's replace the image with the Form on desktop? Or put form below?
                The design requested "Aesthetically appealing". 
                Side-by-side Text + Image is very standard and appealing. 
                Let's keep the image and make the CTA open the form or scroll to it.
                Wait, the previous design had the form IN the hero.
                Let's put the form below the hero text on mobile, or replace the image with the form on the right side?
                Let's replace the image with the form for maximum conversion? No, image builds trust.
                Let's stick to Text + Image for aesthetics, and have the CTA go to /enquiry page.
            */}
          </div>
        </div>
      </div>
    </section>
  )
}
