"use client";

import { Heart, Activity, Brain, Shield, UserCheck, Stethoscope, type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "../ui/AnimatedSection";
import { staggerParent, staggerChild } from "../ui/StaggerContainer";
import { useMobileCarousel, MobileCarouselDots } from "../ui/MobileCarousel";
import Image from "next/image";

interface CommunityItem {
  title: string;
  desc: string;
  Icon?: LucideIcon;
  iconSrc?: string;
  bg: string;
  color: string;
}

export default function DiseaseCommunities() {
  const { scrollRef, activeIndex } = useMobileCarousel();

  const communities: CommunityItem[] = [
    {
      title: "Sickle Cell Disease (SCD)",
      desc: "Specialized SCD tracking with pain logs, hydration indicators, and crises event reporting.",
      iconSrc: "/logos/sickle-cell.jpg",
      bg: "bg-brand/10",
      color: "text-brand",
    },
    {
      title: "Diabetes Care",
      desc: "Logging tools for blood glucose readings, insulin targets, and clinical HbA1c summaries.",
      Icon: Activity,
      bg: "bg-support-blue/15",
      color: "text-support-blue",
    },
    {
      title: "Heart Health",
      desc: "Systolic/diastolic blood pressure logging, heart rate trends, and low-sodium diet checklists.",
      iconSrc: "/logos/health.jpg",
      bg: "bg-alert/10",
      color: "text-alert",
    },
    {
      title: "Parkinson's Support",
      desc: "Simplified daily movement checklists, tremor trackers, and physical therapy reminders.",
      Icon: Brain,
      bg: "bg-support-purple/20",
      color: "text-support-blue",
    },
    {
      title: "Oncology Care",
      desc: "Symptom tracking logs, chemo/radiation reminders, and supportive emotional wellness diaries.",
      Icon: Shield,
      bg: "bg-accent/15",
      color: "text-accent-alt",
    },
    {
      title: "Chronic Care Circle",
      desc: "Designed for seniors managing multiple co-morbidities with extra-large text targets.",
      Icon: UserCheck,
      bg: "bg-highlight/15",
      color: "text-highlight-dark",
    },
  ];

  return (
    <section id="communities" className="py-14 sm:py-20 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <AnimatedSection direction="up" className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-brand font-semibold tracking-wide uppercase text-xs sm:text-sm mb-2 sm:mb-3">
            Supported Modules
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink mb-4 sm:mb-6">
            Tailored care for every chronic journey.
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-ink-muted">
            We don&apos;t believe in one-size-fits-all. RemoteWard adapts its checklist templates to fit specific medical needs.
          </p>
        </AnimatedSection>

        {/* Communities — horizontal carousel on mobile, grid on md+ */}
        <motion.div
          ref={scrollRef}
          variants={staggerParent()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mobile-carousel md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {communities.map((comm, idx) => {
            const Icon = comm.Icon;
            return (
              <motion.div
                key={idx}
                variants={staggerChild}
                className="bg-surface-50 rounded-3xl p-6 sm:p-8 border border-surface-200/60 shadow-sm hover:shadow-md hover:bg-white transition-all duration-300 flex flex-col justify-between"
                whileHover={{ y: -6, scale: 1.01 }}
              >
                <div>
                  {/* Icon Badge */}
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${comm.bg} flex items-center justify-center mb-5 sm:mb-6 overflow-hidden p-2`}>
                    {comm.iconSrc ? (
                      <Image
                        src={comm.iconSrc}
                        alt={comm.title}
                        width={40}
                        height={40}
                        className="w-full h-full object-contain rounded-xl"
                        draggable={false}
                      />
                    ) : Icon ? (
                      <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${comm.color}`} />
                    ) : null}
                  </div>

                  <h4 className="text-xl sm:text-2xl font-bold text-ink mb-2 sm:mb-3">{comm.title}</h4>
                  <p className="text-ink-muted text-sm sm:text-base leading-relaxed">{comm.desc}</p>
                </div>

                <div className="mt-5 sm:mt-6 pt-3.5 sm:pt-4 border-t border-surface-200/40 text-xs font-bold text-brand uppercase tracking-wider">
                  Template Included
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        <MobileCarouselDots count={communities.length} activeIndex={activeIndex} />
      </div>
    </section>
  );
}

