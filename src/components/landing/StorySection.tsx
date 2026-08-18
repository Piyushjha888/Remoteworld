"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Check, Users2, Activity, ShieldCheck, Sun, Moon } from "lucide-react";
import AnimatedSection from "../ui/AnimatedSection";

export default function StorySection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const backgroundColor = useTransform(
    smoothProgress,
    [0.1, 0.4, 0.7, 0.9],
    ["#FCFCFC", "#F0F5FE", "#F4FAF9", "#F7F6FC"]
  );

  const steps = [
    {
      time: "8:00 AM — Morning Routine",
      title: "Gentle Morning Reminders",
      description:
        "A large, friendly reminder wakes up the tablet or phone. Tapping 'I took it' logs the event and reassures the family immediately.",
      stepIcon: Sun,
      stepIconColor: "text-highlight",
      stepBg: "bg-highlight/10",
      accentBorder: "border-highlight/30",
      visual: (
        <div className="bg-white rounded-3xl p-6 shadow-xl border border-surface-100 max-w-sm w-full mx-auto">
          {/* Header row matching screenshot */}
          <div className="flex items-center space-x-4 mb-5">
            <div className="w-12 h-12 flex-shrink-0 rounded-2xl bg-highlight/20 flex items-center justify-center">
              <Sun className="w-5 h-5 text-highlight-dark" />
            </div>
            <div>
              <p className="text-xs text-ink-muted">Morning Schedule</p>
              <h5 className="font-bold text-lg text-ink leading-tight">Take Aspirin</h5>
            </div>
          </div>
          {/* Dosage card matching screenshot */}
          <div className="bg-surface-50 p-4 rounded-2xl flex items-center justify-between border border-surface-100">
            <span className="text-sm font-semibold text-ink-muted">Dosage: 1 Tablet</span>
            <motion.button
              className="bg-highlight hover:bg-highlight-dark text-ink font-bold text-sm px-4 py-2 rounded-xl flex items-center gap-1.5"
              whileTap={{ scale: 0.95 }}
            >
              I Took It <Check className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      ),
    },
    {
      time: "1:00 PM — Midday Sync",
      title: "Peace-of-Mind Updates",
      description:
        "No more worry-filled text tag games. Family members get a silent dashboard update confirming that the midday routine was completed.",
      stepIcon: Users2,
      stepIconColor: "text-support-blue",
      stepBg: "bg-support-blue/10",
      accentBorder: "border-support-blue/30",
      visual: (
        <div className="bg-white rounded-3xl p-6 shadow-xl border border-surface-100 max-w-sm w-full mx-auto">
          {/* Header row matching screenshot */}
          <div className="flex items-center justify-between border-b border-surface-100 pb-4 mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 flex-shrink-0 rounded-xl bg-support-blue/10 flex items-center justify-center">
                <Users2 className="w-4 h-4 text-support-blue" />
              </div>
              <span className="font-bold text-base text-ink">Family Circle Sync</span>
            </div>
            <span className="text-[10px] bg-accent/20 text-accent-alt px-2 py-0.5 rounded-full font-bold">Live</span>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-ink-muted">Mom&apos;s Checklist</span>
              <span className="font-semibold text-accent-alt flex items-center gap-1">
                <Check className="w-4 h-4" /> All Done
              </span>
            </div>
            <div className="bg-support-blue/5 p-3 rounded-xl border border-support-blue/10 text-xs text-support-blue font-medium text-center">
              &quot;Notification sent to Sarah &amp; John at 1:12 PM&quot;
            </div>
          </div>
        </div>
      ),
    },
    {
      time: "6:00 PM — Health Summary",
      title: "Daily Health Snapshots",
      description:
        "Log blood pressure reading with a single tap. A simple, large graph accumulates data to show the doctor at the next checkup.",
      stepIcon: Activity,
      stepIconColor: "text-accent-alt",
      stepBg: "bg-accent/10",
      accentBorder: "border-accent/30",
      visual: (
        <div className="bg-white rounded-3xl p-6 shadow-xl border border-surface-100 max-w-sm w-full mx-auto">
          {/* Header row matching screenshot */}
          <div className="flex items-center space-x-4 mb-5">
            <div className="w-12 h-12 flex-shrink-0 rounded-2xl bg-accent/15 flex items-center justify-center">
              <Activity className="w-5 h-5 text-accent-alt" />
            </div>
            <div>
              <p className="text-xs text-ink-muted">Daily Vitals</p>
              <h5 className="font-bold text-lg text-ink leading-tight">Blood Pressure Log</h5>
            </div>
          </div>
          <div className="flex items-center justify-between bg-surface-50 p-4 rounded-xl border border-surface-100">
            <div>
              <span className="text-3xl font-black text-ink">120/80</span>
              <span className="text-xs text-ink-muted block mt-0.5">Sys/Dia mmHg</span>
            </div>
            <span className="text-xs bg-accent-alt/10 text-accent-alt px-3 py-1.5 rounded-lg font-bold">
              Optimal Range
            </span>
          </div>
        </div>
      ),
    },
    {
      time: "10:00 PM — Safe & Sound",
      title: "Secure Over-the-Night Care",
      description:
        "Sleep peacefully. Data is stored with state-of-the-art encryption, ensuring complete privacy, security, and safety.",
      stepIcon: Moon,
      stepIconColor: "text-brand",
      stepBg: "bg-brand/10",
      accentBorder: "border-brand/30",
      visual: (
        <div className="bg-white rounded-3xl p-6 shadow-xl border border-surface-100 max-w-sm w-full mx-auto text-center">
          <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-brand/10 flex items-center justify-center">
            <ShieldCheck className="w-6 h-6 text-brand" />
          </div>
          <h5 className="font-bold text-lg text-ink mb-1">HIPAA Encrypted</h5>
          <p className="text-xs text-ink-muted mb-4">Your private data stays fully protected</p>
          <div className="w-full h-1.5 bg-surface-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-brand rounded-full"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <motion.section
      ref={containerRef}
      style={{ backgroundColor }}
      className="py-20 sm:py-32 relative overflow-hidden transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Story Title Header */}
        <AnimatedSection direction="up" className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-brand font-semibold tracking-wide uppercase text-sm mb-3">
            A Day in the Life
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-ink mb-6">
            Connecting care, morning to night.
          </h3>
          <p className="text-xl text-ink-muted">
            See how RemoteWard keeps everyone coordinated, secure, and stress-free throughout the day.
          </p>
        </AnimatedSection>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Vertical center line — desktop only */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-surface-200 hidden lg:block" />

          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              const StepIcon = step.stepIcon;

              return (
                <div key={idx} className="relative z-10">

                  {/* Timeline node icon — desktop only */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-4 w-10 h-10 rounded-full bg-white border-2 border-surface-200 flex items-center justify-center shadow-md hidden lg:flex">
                    <StepIcon className={`w-5 h-5 ${step.stepIconColor}`} />
                  </div>

                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center`}>

                    {/* Story text */}
                    <div className={isEven ? "lg:text-right lg:pr-12" : "lg:order-2 lg:pl-12"}>
                      <AnimatedSection direction={isEven ? "left" : "right"}>
                        <div
                          className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-bold border ${step.stepBg} ${step.stepIconColor} ${step.accentBorder} mb-4`}
                        >
                          <StepIcon className="w-3.5 h-3.5" />
                          <span>{step.time}</span>
                        </div>
                        <h4 className="text-3xl font-bold text-ink mb-4">{step.title}</h4>
                        <p className="text-lg text-ink-muted leading-relaxed max-w-xl mx-auto lg:mx-0">
                          {step.description}
                        </p>
                      </AnimatedSection>
                    </div>

                    {/* Visual card */}
                    <div className={isEven ? "lg:pl-12" : "lg:order-1 lg:pr-12"}>
                      <AnimatedSection direction="up" delay={0.2}>
                        <motion.div
                          className="p-4"
                          whileHover={{ scale: 1.04, rotate: isEven ? -1 : 1 }}
                          transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        >
                          {step.visual}
                        </motion.div>
                      </AnimatedSection>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
