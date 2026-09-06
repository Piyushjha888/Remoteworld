"use client";

import Image from "next/image";
import { Quote, HeartHandshake, ShieldCheck, Users } from "lucide-react";
import AnimatedSection from "../ui/AnimatedSection";

const GOVERNMENT_LOGOS = [
  {
    name: "Government of India",
    src: "/GovernmentSVG/Government.svg",
    width: 41,
    height: 41,
  },
  {
    name: "National Health Authority",
    src: "/GovernmentSVG/NHA.svg",
    width: 55,
    height: 41,
  },
  {
    name: "Indian Oil",
    src: "/GovernmentSVG/Indiaoil.svg",
    width: 55,
    height: 28,
  },
  {
    name: "IISc Bangalore",
    src: "/GovernmentSVG/ISCBanglore.svg",
    width: 29,
    height: 28,
  },
  {
    name: "Sickle Cell Mission",
    src: "/GovernmentSVG/Sicklecell.svg",
    width: 43,
    height: 42,
  },
];

// Repeat logos to guarantee a wide, seamless infinite loop
const REPEATED_LOGOS = [
  ...GOVERNMENT_LOGOS,
  ...GOVERNMENT_LOGOS,
  ...GOVERNMENT_LOGOS,
  ...GOVERNMENT_LOGOS,
];

function GovernmentLogosMarquee({ className = "" }: { className?: string }) {
  return (
    <div
      className={`group/marquee marquee-container relative w-full overflow-hidden py-3 sm:py-5 select-none ${className}`}
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
      }}
    >
      <div className="flex items-center w-max animate-marquee-slow group-hover/marquee:[animation-play-state:paused]">
        {/* Track 1 */}
        <div className="flex items-center space-x-8 sm:space-x-12 md:space-x-14 pr-8 sm:pr-12 md:pr-14 shrink-0">
          {REPEATED_LOGOS.map((logo, idx) => (
            <div
              key={`logo-1-${idx}`}
              className="shrink-0 flex items-center justify-center h-12 sm:h-14 relative z-10 hover:z-20"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                unoptimized
                className="h-8 sm:h-9 md:h-10 w-auto max-w-[120px] object-contain shrink-0 cursor-pointer
                           grayscale-0 opacity-100
                           sm:grayscale sm:opacity-50
                           sm:hover:grayscale-0 sm:hover:opacity-100 sm:hover:scale-130
                           transition-all duration-300 ease-out"
              />
            </div>
          ))}
        </div>

        {/* Track 2 (Duplicate for seamless loop) */}
        <div className="flex items-center space-x-8 sm:space-x-12 md:space-x-14 pr-8 sm:pr-12 md:pr-14 shrink-0" aria-hidden="true">
          {REPEATED_LOGOS.map((logo, idx) => (
            <div
              key={`logo-2-${idx}`}
              className="shrink-0 flex items-center justify-center h-12 sm:h-14 relative z-10 hover:z-20"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                unoptimized
                className="h-8 sm:h-9 md:h-10 w-auto max-w-[120px] object-contain shrink-0 cursor-pointer
                           grayscale-0 opacity-100
                           sm:grayscale sm:opacity-50
                           sm:hover:grayscale-0 sm:hover:opacity-100 sm:hover:scale-130
                           transition-all duration-300 ease-out"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function WhyWeStarted() {
  return (
    <section id="about-us" className="scroll-mt-12 py-14 sm:py-20 lg:py-24 bg-white overflow-hidden">
      {/* Fallback anchor for backward compatibility */}
      <div id="why-we-started" className="sr-only" />
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

            {/* Taglines Grid: Mobile custom layout (Family-First full width & centered, Quiet Peace & Unified Care half-half) */}
            <AnimatedSection direction="left" delay={0.2} className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-6 pt-3 sm:pt-4">
              {/* 1. Family-First: Full width on mobile (col-span-2), 1 column on sm+. Centered text on mobile! */}
              <div className="col-span-2 sm:col-span-1 flex items-center justify-center sm:justify-start sm:items-start space-x-3 bg-surface-50 sm:bg-transparent p-3 sm:p-0 rounded-2xl sm:rounded-none">
                <HeartHandshake className="w-5 h-5 text-brand flex-shrink-0 sm:mt-1" />
                <div className="text-center sm:text-left">
                  <h5 className="font-bold text-ink text-sm sm:text-base">Family-First</h5>
                  <p className="text-xs text-ink-muted">Keeping circles close</p>
                </div>
              </div>

              {/* 2. Quiet Peace: First half of 2nd line on mobile, 1 column on sm+ */}
              <div className="col-span-1 flex items-start space-x-2.5 sm:space-x-3 bg-surface-50 sm:bg-transparent p-3 sm:p-0 rounded-2xl sm:rounded-none">
                <ShieldCheck className="w-5 h-5 text-accent-alt flex-shrink-0 mt-0.5 sm:mt-1" />
                <div>
                  <h5 className="font-bold text-ink text-xs sm:text-sm md:text-base">Quiet Peace</h5>
                  <p className="text-[11px] sm:text-xs text-ink-muted leading-tight mt-0.5">Replacing constant worry</p>
                </div>
              </div>

              {/* 3. Unified Care: Second half of 2nd line on mobile, 1 column on sm+ */}
              <div className="col-span-1 flex items-start space-x-2.5 sm:space-x-3 bg-surface-50 sm:bg-transparent p-3 sm:p-0 rounded-2xl sm:rounded-none">
                <Users className="w-5 h-5 text-support-blue flex-shrink-0 mt-0.5 sm:mt-1" />
                <div>
                  <h5 className="font-bold text-ink text-xs sm:text-sm md:text-base">Unified Care</h5>
                  <p className="text-[11px] sm:text-xs text-ink-muted leading-tight mt-0.5">Connecting clinics & home</p>
                </div>
              </div>
            </AnimatedSection>

            {/* Mobile Only: Marquee directly below taglines */}
            <AnimatedSection direction="left" delay={0.25} className="block lg:hidden pt-3">
              <GovernmentLogosMarquee />
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

      {/* Desktop Only: Full-Width Marquee spanning the entire section width */}
      <AnimatedSection direction="up" delay={0.2} className="hidden lg:block pt-12 lg:pt-16 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-surface-200/70 to-transparent" />
        </div>
        <GovernmentLogosMarquee />
      </AnimatedSection>
    </section>
  );
}
