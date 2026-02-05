'use client'

import Image from 'next/image'
import { CheckCircle2, Code, Zap, Target, Award } from 'lucide-react'

export default function About() {
  return (
    <section className="py-24 sm:py-32 relative">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] -z-10"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            About Vexlo
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Meet the expert behind your automation success
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-start">
            {/* Profile Section */}
            <div className="flex flex-col items-center lg:items-start">
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary/50 shadow-glow mb-6 group">
                <Image
                  src="/me.jpeg"
                  alt="Juan - Engineering Manager & Automation Expert"
                  width={192}
                  height={192}
                  className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">Juan</h3>
              <p className="text-lg text-secondary font-semibold mb-4">Engineering Manager & Automation Expert</p>
              <a
                href="https://twitter.com/juan_barrios_p"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors mb-6 inline-block"
                aria-label="Follow on Twitter"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <p className="text-gray-300 text-center lg:text-left leading-relaxed">
                16+ years of experience transforming businesses through intelligent automation and technical innovation.
              </p>
            </div>

            {/* Expertise Section */}
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-white mb-4">Why You Can Trust Me With Your Automation Needs</h4>
                <p className="text-gray-400 leading-relaxed mb-6">
                  As a methodical, innovative, and vision-driven Engineering Manager with over 16 years of experience,
                  I&apos;ve successfully transformed businesses from struggling with manual processes to thriving with
                  intelligent automation. My approach combines deep technical expertise with a practical understanding
                  of what UK SMBs actually need.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: Code, title: "Technical Excellence", desc: "Proven track record of building robust, scalable automation solutions" },
                  { icon: Zap, title: "Innovation Focus", desc: "Stay ahead with cutting-edge AI and automation technologies" },
                  { icon: Target, title: "Results-Driven", desc: "Transformed apps from precarious states to stable, popular solutions" },
                  { icon: Award, title: "Proven Leadership", desc: "Exceptional ability to form and motivate high-performance teams" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/30 transition-all">
                    <item.icon className="h-6 w-6 text-primary-light flex-shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-semibold text-white mb-1">{item.title}</h5>
                      <p className="text-xs text-gray-400">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Key Achievements */}
          <div className="mt-16 pt-12 border-t border-white/10">
            <h4 className="text-xl font-semibold text-white mb-6 text-center">What Sets Me Apart</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { val: "16+", label: "Years Experience", sub: "Engineering & Leadership" },
                { val: "100%", label: "Client Focus", sub: "Your Success is My Priority" },
                { val: "AI/LLM", label: "Expertise", sub: "Cutting-Edge Automation" }
              ].map((stat, i) => (
                <div key={i} className="text-center p-6 rounded-xl bg-gradient-to-br from-primary/10 to-transparent border border-white/5 hover:border-primary/50 transition-colors">
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-secondary mb-2">{stat.val}</div>
                  <div className="text-white font-medium">{stat.label}</div>
                  <div className="text-sm text-gray-400 mt-2">{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial Quote */}
          <div className="mt-16 p-8 rounded-2xl bg-white/5 border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-secondary"></div>
            <blockquote className="text-lg text-gray-300 italic mb-4 relative z-10">
              &quot;Juan has demonstrated exceptional leadership skills in difficult circumstances. He is a polished
              and accomplished technical expert with the unusual ability to form and motivate a high-performance team.
              He transformed our Android App from a precarious and unpopular state to one of consistent ability,
              stability and popularity.&quot;
            </blockquote>
            <p className="text-sm font-semibold text-white">— David De Villiers, Former Colleague</p>
          </div>

          {/* Commitment Section */}
          <div className="mt-12 p-8 rounded-2xl glass-card border border-primary/30 shadow-lg relative">
            <div className="absolute -inset-[1px] bg-gradient-to-r from-primary to-secondary rounded-2xl opacity-20 -z-10 blur-sm"></div>
            <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <CheckCircle2 className="h-6 w-6 text-secondary" />
              My Commitment to Your Business
            </h4>
            <div className="text-gray-300 leading-relaxed space-y-4">
              <p>
                I understand that every UK SMB has unique challenges and opportunities. That&apos;s why I take a
                methodical, consultative approach to understand your specific needs before proposing any automation
                solution. Whether you need to streamline sales processes, automate operations, or integrate multiple
                systems, I have the technical expertise and business acumen to deliver results that matter.
              </p>
              <p>
                My goal is simple: help you save time, reduce errors, and scale efficiently so you can focus on
                what you do best—growing your business. With 16+ years of experience transforming businesses through
                technology, you can trust that your automation needs are in capable hands.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
