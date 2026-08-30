"use client";

import { BrainCircuit, Split, ClipboardX, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "../ui/AnimatedSection";
import { staggerParent, staggerChild } from "../ui/StaggerContainer";
import { useMobileCarousel, MobileCarouselDots } from "../ui/MobileCarousel";

export default function ProblemSection() {
  const { scrollRef, activeIndex } = useMobileCarousel();

  const problems = [
    {
      title: "Caregiver Anxiety",
      desc: "Constantly worrying if a loved one took their morning medications or recorded their blood pressure.",
      Icon: BrainCircuit,
      bgClass: "bg-alert/10",
      iconColor: "text-alert",
      badgeText: "Mental Load",
    },
    {
      title: "Group Chat Clutter",
      desc: "Sifting through chaotic family WhatsApp threads and text messages just to find a health update.",
      Icon: Split,
      bgClass: "bg-highlight/15",
      iconColor: "text-highlight-dark",
      badgeText: "Communication Gap",
    },
    {
      title: "Appointment Guesswork",
      desc: "Arriving at the clinic and struggling to recall vitals history or symptom patterns for the doctor.",
      Icon: ClipboardX,
      bgClass: "bg-support-blue/15",
      iconColor: "text-support-blue",
      badgeText: "Data Silos",
    },
  ];

  return (
    <section id="problems" className="py-14 sm:py-20 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <AnimatedSection direction="up" className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-brand font-semibold tracking-wide uppercase text-xs sm:text-sm mb-2 sm:mb-3">
            The Challenges We Face
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink mb-4 sm:mb-6">
            Caregiving shouldn&apos;t feel like guesswork.
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-ink-muted">
            Families struggle to stay aligned on health routines. RemoteWard replaces anxiety with clear, shared visibility.
          </p>
        </AnimatedSection>

        {/* Problem Cards — horizontal carousel on mobile, grid on md+ */}
        <motion.div
          ref={scrollRef}
          variants={staggerParent()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mobile-carousel md:grid md:grid-cols-3 gap-6 sm:gap-8"
        >
          {problems.map((prob, idx) => {
            const Icon = prob.Icon;
            return (
              <motion.div
                key={idx}
                variants={staggerChild}
                className="bg-surface-50 rounded-3xl p-6 sm:p-8 border border-surface-200/60 shadow-sm hover:shadow-md hover:bg-white transition-all duration-300 flex flex-col justify-between"
                whileHover={{ y: -6, scale: 1.01 }}
              >
                <div>
                  {/* Badge */}
                  <div className="flex items-center justify-between mb-5 sm:mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-ink-muted bg-surface-200/50 px-3 py-1 rounded-full">
                      {prob.badgeText}
                    </span>
                    <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-ink-muted/40" />
                  </div>

                  {/* Icon Badge */}
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${prob.bgClass} flex items-center justify-center mb-5 sm:mb-6`}>
                    <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${prob.iconColor}`} />
                  </div>

                  <h4 className="text-xl sm:text-2xl font-bold text-ink mb-2 sm:mb-3">{prob.title}</h4>
                  <p className="text-ink-muted text-sm sm:text-base leading-relaxed">{prob.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        <MobileCarouselDots count={problems.length} activeIndex={activeIndex} />
      </div>
    </section>
  );
}

