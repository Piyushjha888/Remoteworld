"use client";

import { Download, UserPlus, Users, Stethoscope, Calendar, Heart } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "../ui/AnimatedSection";
import { staggerParent, staggerChild } from "../ui/StaggerContainer";
import { useMobileCarousel, MobileCarouselDots } from "../ui/MobileCarousel";

export default function HowItWorks() {
  const { scrollRef, activeIndex } = useMobileCarousel();

  const steps = [
    {
      num: "01",
      title: "Download App",
      desc: "Get RemoteWard from the Google Play Store on your tablet or smartphone.",
      Icon: Download,
      bg: "bg-brand/10",
      color: "text-brand",
    },
    {
      num: "02",
      title: "Create Profile",
      desc: "Enter basic health info or link your existing digital health accounts securely.",
      Icon: UserPlus,
      bg: "bg-support-blue/15",
      color: "text-support-blue",
    },
    {
      num: "03",
      title: "Add Family",
      desc: "Invite trusted family members or caregivers to join your secure health circle.",
      Icon: Users,
      bg: "bg-support-purple/25",
      color: "text-support-purple",
    },
    {
      num: "04",
      title: "Connect Doctor",
      desc: "Optionally link with participating clinics to sync prescriptions and reports.",
      Icon: Stethoscope,
      bg: "bg-accent/15",
      color: "text-accent-alt",
    },
    {
      num: "05",
      title: "Book Appointment",
      desc: "Schedule calls or checkups directly and receive easy-to-read reminders.",
      Icon: Calendar,
      bg: "bg-highlight/15",
      color: "text-highlight-dark",
    },
    {
      num: "06",
      title: "Stay Connected",
      desc: "Rest easy knowing updates are shared with your circle in real time.",
      Icon: Heart,
      bg: "bg-alert/10",
      color: "text-alert",
    },
  ];

  return (
    <section id="how-it-works-flow" className="py-16 sm:py-24 bg-surface-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <AnimatedSection direction="up" className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand font-semibold tracking-wide uppercase text-sm mb-3">
            Getting Started
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-ink mb-6">
            Six simple steps to peace of mind.
          </h3>
          <p className="text-xl text-ink-muted">
            Getting set up with RemoteWard is designed to be easy and takes just a few minutes.
          </p>
        </AnimatedSection>

        {/* Steps — horizontal carousel on mobile, grid on sm+ */}
        <motion.div
          ref={scrollRef}
          variants={staggerParent()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mobile-carousel md:grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {steps.map((step, idx) => {
            const Icon = step.Icon;
            return (
              <motion.div
                key={idx}
                variants={staggerChild}
                className="bg-white rounded-3xl p-8 border border-surface-200/60 shadow-sm relative overflow-hidden flex flex-col justify-between"
                whileHover={{ y: -6 }}
              >
                <div>
                  {/* Step Number in background */}
                  <div className="absolute top-4 right-6 text-5xl font-black text-ink-muted/10">
                    {step.num}
                  </div>

                  {/* Icon Badge */}
                  <div className={`w-14 h-14 rounded-2xl ${step.bg} flex items-center justify-center mb-6`}>
                    <Icon className={`w-6 h-6 ${step.color}`} />
                  </div>

                  <h4 className="text-2xl font-bold text-ink mb-3">{step.title}</h4>
                  <p className="text-ink-muted text-base leading-relaxed">{step.desc}</p>
                </div>

                {/* Sub-indicator dot at bottom */}
                <div className="mt-6 flex items-center">
                  <div className={`w-2.5 h-2.5 rounded-full ${step.color} mr-2`} />
                  <span className="text-xs font-bold text-ink-muted uppercase tracking-wider">
                    Step {step.num}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        <MobileCarouselDots count={steps.length} activeIndex={activeIndex} />
      </div>
    </section>
  );
}

