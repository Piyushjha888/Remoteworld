"use client";

import { Activity, Percent, Smile, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "../ui/AnimatedSection";
import { staggerParent, staggerChild } from "../ui/StaggerContainer";
import { useMobileCarousel, MobileCarouselDots } from "../ui/MobileCarousel";

export default function ImpactAnalytics() {
  const { scrollRef, activeIndex } = useMobileCarousel();

  const metrics = [
    {
      label: "Routine Adherence",
      value: "92%",
      note: "Trial Target: Daily medication routine checklist completion rates",
      Icon: Percent,
      color: "text-brand",
      bg: "bg-brand/10",
    },
    {
      label: "Peace of Mind Scale",
      value: "84%",
      note: "Survey Target: Caregivers reporting decreased daily anxiety",
      Icon: Smile,
      color: "text-accent-alt",
      bg: "bg-accent/15",
    },
    {
      label: "Vitals Logging Speed",
      value: "<1 min",
      note: "UX Target: Average time taken to log blood pressure or sugar",
      Icon: Activity,
      color: "text-support-blue",
      bg: "bg-support-blue/15",
    },
  ];

  return (
    <section id="impact-analytics" className="py-16 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <AnimatedSection direction="up" className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand font-semibold tracking-wide uppercase text-sm mb-3">
            Expected Outcomes
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-ink mb-6">
            Designed for measurable caregiver support.
          </h3>
          <p className="text-xl text-ink-muted">
            Our app features are tested to improve daily routine consistency and support independent healthy living.
          </p>
        </AnimatedSection>

        {/* Metrics — horizontal carousel on mobile, grid on md+ */}
        <motion.div
          ref={scrollRef}
          variants={staggerParent()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mobile-carousel md:grid md:grid-cols-3 gap-8"
        >
          {metrics.map((met, idx) => {
            const Icon = met.Icon;
            return (
              <motion.div
                key={idx}
                variants={staggerChild}
                className="bg-surface-50 border border-dashed border-surface-300 rounded-3xl p-8 shadow-sm flex flex-col justify-between text-center relative overflow-hidden"
              >
                {/* Placeholder Notice */}
                <div className="absolute top-3 right-3 flex items-center space-x-1 bg-surface-200/50 px-2 py-0.5 rounded text-[10px] text-ink-muted font-mono font-bold">
                  <AlertCircle className="w-3 h-3 text-brand" />
                  <span>PLACEHOLDER</span>
                </div>

                <div>
                  <div className={`w-12 h-12 rounded-full ${met.bg} ${met.color} flex items-center justify-center mx-auto mb-6`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Placeholder: replace below value with verified clinical data once trials complete */}
                  <span className="text-5xl font-black text-ink block mb-3">
                    {met.value}
                  </span>

                  <h4 className="text-xl font-bold text-ink mb-2">{met.label}</h4>
                  <p className="text-xs text-ink-muted leading-relaxed max-w-xs mx-auto">
                    {met.note}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-surface-200/60 text-[10px] text-ink-muted font-mono">
                  Telemetry ID: RW_MET_00{idx + 1}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        <MobileCarouselDots count={metrics.length} activeIndex={activeIndex} />
      </div>
    </section>
  );
}

