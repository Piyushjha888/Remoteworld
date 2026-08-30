"use client";

import { useState } from "react";
import { ChevronDown, CalendarClock, Users2, Activity, type LucideIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { staggerParent, staggerChild } from "../ui/StaggerContainer";
import { useMobileCarousel, MobileCarouselDots } from "../ui/MobileCarousel";
import AnimatedSection from "../ui/AnimatedSection";

// Icon badge: large rounded-2xl background square with icon perfectly centered inside
function IconBadge({
  Icon,
  bgLight,
  iconColor,
}: {
  Icon: LucideIcon;
  bgLight: string;
  iconColor: string;
}) {
  return (
    <div className={`w-16 h-16 mb-6 flex-shrink-0 rounded-2xl ${bgLight} flex items-center justify-center transition-colors duration-300`}>
      <Icon className={`w-7 h-7 ${iconColor}`} />
    </div>
  );
}

export default function Features() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const { scrollRef, activeIndex } = useMobileCarousel();

  const toggleExpand = (cardIndex: number) => {
    setExpandedCard(expandedCard === cardIndex ? null : cardIndex);
  };

  const featureDetails = [
    {
      title: "Gentle Reminders",
      description: "Never miss a medication or appointment. Our alerts are large, friendly, and easy to acknowledge with a single tap.",
      extra: "Features high-contrast buttons, vocal announcement options, and custom repetition intervals. If critical events are missed, the app can automatically escalate notifications to designated family members or emergency contacts.",
      Icon: CalendarClock,
      bgLight: "bg-brand/10",
      iconColor: "text-brand",
      btnClass: "text-brand hover:text-brand-dark",
    },
    {
      title: "Family Circle",
      description: "Share updates securely with chosen family members or caregivers. Everyone stays on the same page without the hassle of group texts.",
      extra: "Allows you to set up check-ins, request assistance, or share logs. Perfect for keeping long-distance family members assured and aligned on medical plans.",
      Icon: Users2,
      bgLight: "bg-support-purple/20",
      iconColor: "text-support-blue",
      btnClass: "text-support-blue hover:text-support-purple",
    },
    {
      title: "Health Snapshot",
      description: "A clear, easy-to-read dashboard showing daily vitals and mood. Share it instantly with your doctor during visits.",
      extra: "Simple interface for logging blood pressure, glucose, temperature, and pain scales. Generate clean HIPAA-compliant PDF reports to show your primary care physician.",
      Icon: Activity,
      bgLight: "bg-accent/15",
      iconColor: "text-accent-alt",
      btnClass: "text-accent-alt hover:text-accent",
      popular: true,
    },
  ];

  return (
    <section id="features" className="py-14 sm:py-20 lg:py-24 bg-surface-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <AnimatedSection direction="up">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-brand font-semibold tracking-wide uppercase text-xs sm:text-sm mb-2 sm:mb-3">
              Core Benefits
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink mb-4 sm:mb-6">
              Designed with empathy, built for clarity.
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-ink-muted">
              We removed the clutter so you can focus on what matters: your health and your loved ones.
            </p>
          </div>
        </AnimatedSection>

        {/* Feature Cards — horizontal carousel on mobile, grid on md+ */}
        <motion.div
          ref={scrollRef}
          variants={staggerParent()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mobile-carousel md:grid md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10"
        >
          {featureDetails.map((feat, idx) => {
            const isExpanded = expandedCard === idx;
            return (
              <motion.div
                key={idx}
                variants={staggerChild}
                className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-surface-100 group relative overflow-hidden flex flex-col justify-between"
                whileHover={{ y: -8, scale: 1.02, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Popular badge */}
                {feat.popular && (
                  <motion.div
                    className="absolute top-0 right-0 bg-highlight text-ink text-xs font-bold px-3 py-1 rounded-bl-xl z-20"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    Popular
                  </motion.div>
                )}

                <div>
                  {/* Layered icon badge */}
                  <IconBadge
                    Icon={feat.Icon}
                    bgLight={feat.bgLight}
                    iconColor={feat.iconColor}
                  />

                  <h4 className="text-xl sm:text-2xl font-bold text-ink mb-3 sm:mb-4">{feat.title}</h4>
                  <p className="text-ink-muted text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
                    {feat.description}
                  </p>

                  {/* Expanded detail with Framer Motion height transition */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] as const }}
                        className="overflow-hidden text-ink-muted/80 text-xs sm:text-sm mb-4 sm:mb-6 border-t border-surface-100 pt-3.5 sm:pt-4 leading-relaxed"
                      >
                        {feat.extra}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <button
                  onClick={() => toggleExpand(idx)}
                  className={`font-semibold flex items-center transition-colors cursor-pointer mt-3 sm:mt-4 text-sm sm:text-base ${feat.btnClass}`}
                  aria-label={`Learn more about ${feat.title}`}
                >
                  {isExpanded ? "Show Less" : "Read More"}{" "}
                  <ChevronDown
                    className={`w-4 h-4 ml-1 transition-transform duration-300 ${isExpanded ? "rotate-180" : "rotate-0"
                      }`}
                  />
                </button>
              </motion.div>
            );
          })}
        </motion.div>
        <MobileCarouselDots count={featureDetails.length} activeIndex={activeIndex} />
      </div>
    </section>
  );
}

