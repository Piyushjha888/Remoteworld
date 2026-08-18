"use client";

import { Quote, HeartHandshake, ShieldCheck, Users } from "lucide-react";
import AnimatedSection from "../ui/AnimatedSection";

export default function WhyWeStarted() {
  return (
    <section id="why-we-started" className="py-16 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Narrative Storytelling */}
          <div className="lg:col-span-7 space-y-6">
            <AnimatedSection direction="left">
              <h2 className="text-brand font-semibold tracking-wide uppercase text-sm mb-3">
                Our Mission & Story
              </h2>
              <h3 className="text-4xl sm:text-5xl font-bold text-ink leading-tight mb-6">
                Why we started RemoteWard.
              </h3>
            </AnimatedSection>

            <AnimatedSection direction="left" delay={0.1} className="space-y-4 text-lg text-ink-muted leading-relaxed">
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

            <AnimatedSection direction="left" delay={0.2} className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
              <div className="flex items-start space-x-3">
                <HeartHandshake className="w-5 h-5 text-brand flex-shrink-0 mt-1" />
                <div>
                  <h5 className="font-bold text-ink text-sm">Family-First</h5>
                  <p className="text-xs text-ink-muted">Keeping circles close</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <ShieldCheck className="w-5 h-5 text-accent-alt flex-shrink-0 mt-1" />
                <div>
                  <h5 className="font-bold text-ink text-sm">Quiet Peace</h5>
                  <p className="text-xs text-ink-muted">Replacing constant worry</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Users className="w-5 h-5 text-support-blue flex-shrink-0 mt-1" />
                <div>
                  <h5 className="font-bold text-ink text-sm">Unified Care</h5>
                  <p className="text-xs text-ink-muted">Connecting clinics & home</p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Column: Emotion Quote Card */}
          <div className="lg:col-span-5">
            <AnimatedSection direction="right" delay={0.2}>
              <div className="bg-surface-50 rounded-3xl p-8 sm:p-10 border-l-8 border-brand shadow-sm relative overflow-hidden">
                <Quote className="absolute -top-4 -right-4 w-32 h-32 text-brand/5 pointer-events-none" />
                
                <Quote className="w-10 h-10 text-brand mb-6" />
                
                <p className="text-xl sm:text-2xl font-medium text-ink leading-relaxed italic mb-6">
                  &quot;Healthcare isn&apos;t just about medications or clinic visits. It is about keeping families held together, ensuring independence, and providing peace of mind.&quot;
                </p>
                
                <div className="border-t border-surface-200/60 pt-6">
                  <h5 className="font-bold text-ink text-lg leading-tight">The RemoteWard Team</h5>
                  <p className="text-sm text-ink-muted mt-1">Built with empathy for chronic care coordination</p>
                </div>
              </div>
            </AnimatedSection>
          </div>

        </div>
      </div>
    </section>
  );
}
