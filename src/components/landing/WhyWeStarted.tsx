"use client";

import { Quote, HeartHandshake, ShieldCheck, Users } from "lucide-react";
import AnimatedSection from "../ui/AnimatedSection";

export default function WhyWeStarted() {
  return (
    <section id="why-we-started" className="py-14 sm:py-20 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Narrative Storytelling */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <AnimatedSection direction="left">
              <h2 className="text-brand font-semibold tracking-wide uppercase text-xs sm:text-sm mb-2 sm:mb-3">
                Our Mission & Story
              </h2>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink leading-tight mb-4 sm:mb-6">
                Why we started RemoteWard.
              </h3>
            </AnimatedSection>

            <AnimatedSection direction="left" delay={0.1} className="space-y-3 sm:space-y-4 text-base sm:text-lg text-ink-muted leading-relaxed">
              <p>
                RemoteWard was born out of a simple, personal challenge: watching our own aging parents struggle to manage chronic conditions, multiple daily pills, and blood pressure checks from hundreds of miles away.
              </p>
              <p>
                We realized that the hardest part of caregiving isn&apos;t the treatment itself—it&apos;s the constant, low-grade anxiety of not knowing. The text tag games, missed phone calls, and lost paper logs made simple daily routines stressful for the entire family.
              </p>
              <p>
                We built RemoteWard to act as a gentle bridge. It&apos;s designed with extreme simplicity (large text, high-contrast, zero clutter) for patients, while giving long-distance caregivers the calm reassurance they need.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="left" delay={0.2} className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-3 sm:pt-4">
              <div className="flex items-start space-x-3 bg-surface-50 sm:bg-transparent p-3 sm:p-0 rounded-2xl sm:rounded-none">
                <HeartHandshake className="w-5 h-5 text-brand flex-shrink-0 mt-0.5 sm:mt-1" />
                <div>
                  <h5 className="font-bold text-ink text-sm sm:text-base">Family-First</h5>
                  <p className="text-xs text-ink-muted">Keeping circles close</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 bg-surface-50 sm:bg-transparent p-3 sm:p-0 rounded-2xl sm:rounded-none">
                <ShieldCheck className="w-5 h-5 text-accent-alt flex-shrink-0 mt-0.5 sm:mt-1" />
                <div>
                  <h5 className="font-bold text-ink text-sm sm:text-base">Quiet Peace</h5>
                  <p className="text-xs text-ink-muted">Replacing constant worry</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 bg-surface-50 sm:bg-transparent p-3 sm:p-0 rounded-2xl sm:rounded-none">
                <Users className="w-5 h-5 text-support-blue flex-shrink-0 mt-0.5 sm:mt-1" />
                <div>
                  <h5 className="font-bold text-ink text-sm sm:text-base">Unified Care</h5>
                  <p className="text-xs text-ink-muted">Connecting clinics & home</p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Column: Emotion Quote Card */}
          <div className="lg:col-span-5 mt-4 lg:mt-0">
            <AnimatedSection direction="right" delay={0.2}>
              <div className="bg-surface-50 rounded-3xl p-6 sm:p-8 md:p-10 border-l-8 border-brand shadow-sm relative overflow-hidden">
                <Quote className="absolute -top-4 -right-4 w-28 sm:w-32 h-28 sm:h-32 text-brand/5 pointer-events-none" />
                
                <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-brand mb-4 sm:mb-6" />
                
                <p className="text-lg sm:text-xl md:text-2xl font-medium text-ink leading-relaxed italic mb-5 sm:mb-6">
                  &quot;Healthcare isn&apos;t just about medications or clinic visits. It is about keeping families held together, ensuring independence, and providing peace of mind.&quot;
                </p>
                
                <div className="border-t border-surface-200/60 pt-4 sm:pt-6">
                  <h5 className="font-bold text-ink text-base sm:text-lg leading-tight">The RemoteWard Team</h5>
                  <p className="text-xs sm:text-sm text-ink-muted mt-1">Built with empathy for chronic care coordination</p>
                </div>
              </div>
            </AnimatedSection>
          </div>

        </div>
      </div>
    </section>
  );
}
