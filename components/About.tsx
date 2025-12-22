'use client'

import Image from 'next/image'
import { CheckCircle2, Code, Zap, Target, Award } from 'lucide-react'

export default function About() {
  return (
    <section className="py-24 sm:py-32 bg-gradient-to-br from-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            About Vexlo
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Meet the expert behind your automation success
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-start">
            {/* Profile Section */}
            <div className="flex flex-col items-center lg:items-start">
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl mb-6">
                <Image
                  src="/juan-profile.jpg"
                  alt="Juan Sebastian B. - Engineering Manager & Automation Expert"
                  width={192}
                  height={192}
                  className="object-cover w-full h-full"
                  onError={(e) => {
                    // Fallback to logo if profile image not found
                    const target = e.target as HTMLImageElement
                    target.src = '/Vexlo_logo.png'
                  }}
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Juan Sebastian B.</h3>
              <p className="text-lg text-primary font-semibold mb-4">Engineering Manager & Automation Expert</p>
              <p className="text-gray-600 text-center lg:text-left">
                16+ years of experience transforming businesses through intelligent automation and technical innovation.
              </p>
            </div>

            {/* Expertise Section */}
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Why You Can Trust Me With Your Automation Needs</h4>
                <p className="text-gray-600 leading-relaxed mb-6">
                  As a methodical, innovative, and vision-driven Engineering Manager with over 16 years of experience, 
                  I&apos;ve successfully transformed businesses from struggling with manual processes to thriving with 
                  intelligent automation. My approach combines deep technical expertise with a practical understanding 
                  of what UK SMBs actually need.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <Code className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Technical Excellence</h5>
                    <p className="text-sm text-gray-600">
                      Proven track record of building robust, scalable automation solutions
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <Zap className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Innovation Focus</h5>
                    <p className="text-sm text-gray-600">
                      Stay ahead with cutting-edge AI and automation technologies
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <Target className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Results-Driven</h5>
                    <p className="text-sm text-gray-600">
                      Transformed apps from precarious states to stable, popular solutions
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <Award className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Proven Leadership</h5>
                    <p className="text-sm text-gray-600">
                      Exceptional ability to form and motivate high-performance teams
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Achievements */}
          <div className="mt-16 pt-12 border-t border-gray-200">
            <h4 className="text-xl font-semibold text-gray-900 mb-6 text-center">What Sets Me Apart</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20">
                <div className="text-4xl font-bold text-primary mb-2">16+</div>
                <div className="text-gray-700 font-medium">Years Experience</div>
                <div className="text-sm text-gray-600 mt-2">Engineering & Leadership</div>
              </div>
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-gray-700 font-medium">Client Focus</div>
                <div className="text-sm text-gray-600 mt-2">Your Success is My Priority</div>
              </div>
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20">
                <div className="text-4xl font-bold text-primary mb-2">AI/LLM</div>
                <div className="text-gray-700 font-medium">Expertise</div>
                <div className="text-sm text-gray-600 mt-2">Cutting-Edge Automation</div>
              </div>
            </div>
          </div>

          {/* Testimonial Quote */}
          <div className="mt-16 p-8 rounded-2xl bg-primary/5 border border-primary/20">
            <blockquote className="text-lg text-gray-700 italic mb-4">
              &quot;Juan has demonstrated exceptional leadership skills in difficult circumstances. He is a polished 
              and accomplished technical expert with the unusual ability to form and motivate a high-performance team. 
              He transformed our Android App from a precarious and unpopular state to one of consistent ability, 
              stability and popularity.&quot;
            </blockquote>
            <p className="text-sm font-semibold text-gray-900">— David De Villiers, Former Colleague</p>
          </div>

          {/* Commitment Section */}
          <div className="mt-12 p-8 rounded-2xl bg-white border-2 border-primary/30 shadow-lg">
            <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <CheckCircle2 className="h-6 w-6 text-primary" />
              My Commitment to Your Business
            </h4>
            <p className="text-gray-700 leading-relaxed">
              I understand that every UK SMB has unique challenges and opportunities. That&apos;s why I take a 
              methodical, consultative approach to understand your specific needs before proposing any automation 
              solution. Whether you need to streamline sales processes, automate operations, or integrate multiple 
              systems, I have the technical expertise and business acumen to deliver results that matter.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              My goal is simple: help you save time, reduce errors, and scale efficiently so you can focus on 
              what you do best—growing your business. With 16+ years of experience transforming businesses through 
              technology, you can trust that your automation needs are in capable hands.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

