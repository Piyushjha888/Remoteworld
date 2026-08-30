"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { Check, Users2, Activity, Sun, ChevronRight, ChevronLeft, Sparkles, Clock } from "lucide-react";
import AnimatedSection from "../ui/AnimatedSection";
import Image from "next/image";

export default function StorySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeMobileStep, setActiveMobileStep] = useState(0);
  const [tookMedication, setTookMedication] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);

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
    [0.1, 0.5, 0.9],
    ["#FCFCFC", "#F0F5FE", "#F4FAF9"]
  );

  const steps = [
    {
      timeLabel: "8:00 AM",
      phase: "Morning Routine",
      time: "8:00 AM — Morning Routine",
      title: "Gentle Morning Reminders",
      description:
        "A large, friendly reminder wakes up the tablet or phone. Tapping 'I took it' logs the event and reassures the family immediately.",
      stepIcon: Sun,
      stepIconColor: "text-highlight-dark",
      stepBg: "bg-highlight/15",
      accentBorder: "border-highlight/30",
      pillBg: "bg-amber-500/10 text-amber-700 border-amber-300",
      visual: (
        <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-xl border border-surface-100 max-w-sm w-full mx-auto">
          {/* Header row */}
          <div className="flex items-center space-x-4 mb-4 sm:mb-5">
            <div className="w-12 h-12 flex-shrink-0 rounded-2xl bg-highlight/20 flex items-center justify-center overflow-hidden p-2">
              <Image
                src="/logos/calender.jpg"
                alt="Morning Schedule"
                width={32}
                height={32}
                className="w-7 h-7 object-contain rounded-md"
                draggable={false}
              />
            </div>
            <div>
              <p className="text-xs text-ink-muted">Morning Schedule</p>
              <h5 className="font-bold text-base sm:text-lg text-ink leading-tight">Take Aspirin</h5>
            </div>
          </div>
          {/* Dosage card with interactive state */}
          <div className="bg-surface-50 p-3.5 sm:p-4 rounded-2xl flex items-center justify-between border border-surface-100">
            <span className="text-xs sm:text-sm font-semibold text-ink-muted">Dosage: 1 Tablet</span>
            <motion.button
              onClick={() => setTookMedication(!tookMedication)}
              className={`font-bold text-xs sm:text-sm px-3.5 sm:px-4 py-2 rounded-xl flex items-center gap-1.5 cursor-pointer shadow-sm transition-all duration-300 ${
                tookMedication
                  ? "bg-accent-alt text-white"
                  : "bg-highlight hover:bg-highlight-dark text-ink"
              }`}
              whileTap={{ scale: 0.95 }}
            >
              {tookMedication ? (
                <>
                  <Check className="w-4 h-4" /> Taken 8:02 AM
                </>
              ) : (
                <>
                  I Took It <Check className="w-4 h-4" />
                </>
              )}
            </motion.button>
          </div>
        </div>
      ),
    },
    {
      timeLabel: "1:00 PM",
      phase: "Midday Sync",
      time: "1:00 PM — Midday Sync",
      title: "Peace-of-Mind Updates",
      description:
        "No more worry-filled text tag games. Family members get a silent dashboard update confirming that the midday routine was completed.",
      stepIcon: Users2,
      stepIconColor: "text-support-blue",
      stepBg: "bg-support-blue/15",
      accentBorder: "border-support-blue/30",
      pillBg: "bg-blue-500/10 text-blue-700 border-blue-300",
      visual: (
        <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-xl border border-surface-100 max-w-sm w-full mx-auto">
          {/* Header row */}
          <div className="flex items-center justify-between border-b border-surface-100 pb-3.5 sm:pb-4 mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 flex-shrink-0 rounded-xl bg-support-blue/10 flex items-center justify-center">
                <Users2 className="w-4 h-4 text-support-blue" />
              </div>
              <span className="font-bold text-sm sm:text-base text-ink">Family Circle Sync</span>
            </div>
            <span className="text-[10px] bg-accent/20 text-accent-alt px-2.5 py-0.5 rounded-full font-bold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-alt animate-ping" />
              Live
            </span>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs sm:text-sm">
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
      timeLabel: "6:00 PM",
      phase: "Evening Rest",
      time: "6:00 PM — Health Summary",
      title: "Daily Health Snapshots",
      description:
        "Log blood pressure reading with a single tap. A simple, large graph accumulates data to show the doctor at the next checkup.",
      stepIcon: Activity,
      stepIconColor: "text-accent-alt",
      stepBg: "bg-accent/15",
      accentBorder: "border-accent/30",
      pillBg: "bg-emerald-500/10 text-emerald-700 border-emerald-300",
      visual: (
        <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-xl border border-surface-100 max-w-sm w-full mx-auto">
          {/* Header row */}
          <div className="flex items-center space-x-4 mb-4 sm:mb-5">
            <div className="w-12 h-12 flex-shrink-0 rounded-2xl bg-accent/15 flex items-center justify-center overflow-hidden p-2">
              <Image
                src="/logos/health.jpg"
                alt="Daily Vitals"
                width={32}
                height={32}
                className="w-7 h-7 object-contain rounded-md"
                draggable={false}
              />
            </div>
            <div>
              <p className="text-xs text-ink-muted">Daily Vitals</p>
              <h5 className="font-bold text-base sm:text-lg text-ink leading-tight">Blood Pressure Log</h5>
            </div>
          </div>
          <div className="flex items-center justify-between bg-surface-50 p-3.5 sm:p-4 rounded-xl border border-surface-100">
            <div>
              <span className="text-2xl sm:text-3xl font-black text-ink">120/80</span>
              <span className="text-[10px] sm:text-xs text-ink-muted block mt-0.5">Sys/Dia mmHg</span>
            </div>
            <span className="text-xs bg-accent-alt/10 text-accent-alt px-3 py-1.5 rounded-lg font-bold flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              Optimal Range
            </span>
          </div>
        </div>
      ),
    },
  ];

  const currentStep = steps[activeMobileStep];

  // Mobile swipe gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 45 && activeMobileStep < steps.length - 1) {
      setActiveMobileStep((prev) => prev + 1);
    } else if (diff < -45 && activeMobileStep > 0) {
      setActiveMobileStep((prev) => prev - 1);
    }
    setTouchStart(null);
  };

  return (
    <motion.section
      ref={containerRef}
      style={{ backgroundColor }}
      className="py-14 sm:py-20 lg:py-28 relative overflow-hidden transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Story Title Header */}
        <AnimatedSection direction="up" className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 lg:mb-20">
          <h2 className="text-brand font-semibold tracking-wide uppercase text-xs sm:text-sm mb-2 sm:mb-3">
            A Day in the Life
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink mb-4 sm:mb-6">
            Connecting care, morning to night.
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-ink-muted">
            See how RemoteWard keeps everyone coordinated, secure, and stress-free throughout the day.
          </p>
        </AnimatedSection>

        {/* ═══════════════════════════════════════════════════════
            MOBILE-ONLY CREATIVE DAY-DIAL & INTERACTIVE STAGE (< lg)
            Replaces long vertical scroll with an interactive, compact
            day-cycle story glider.
            ═══════════════════════════════════════════════════════ */}
        <div className="block lg:hidden max-w-lg mx-auto">
          
          {/* Interactive Time Dial Selector */}
          <div className="bg-white/80 backdrop-blur-md p-1.5 rounded-2xl border border-surface-200 shadow-sm flex items-center justify-between mb-6 relative">
            {steps.map((step, idx) => {
              const StepIcon = step.stepIcon;
              const isActive = activeMobileStep === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveMobileStep(idx)}
                  className={`flex-1 py-2.5 px-2 rounded-xl flex items-center justify-center gap-1.5 text-xs font-bold transition-all relative z-10 cursor-pointer ${
                    isActive ? "text-ink" : "text-ink-muted hover:text-ink"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeMobileDayDial"
                      className="absolute inset-0 bg-surface-100 border border-surface-200/80 rounded-xl shadow-xs -z-10"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <StepIcon className={`w-3.5 h-3.5 ${isActive ? step.stepIconColor : "text-ink-muted"}`} />
                  <span className="truncate">{step.timeLabel}</span>
                </button>
              );
            })}
          </div>

          {/* Interactive Day Story Stage */}
          <div
            className="bg-white/95 rounded-3xl p-5 sm:p-7 border border-surface-200/80 shadow-xl relative overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMobileStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                className="flex flex-col space-y-5"
              >
                {/* Top Badge Row */}
                <div className="flex items-center justify-between">
                  <div
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${currentStep.stepBg} ${currentStep.stepIconColor} ${currentStep.accentBorder}`}
                  >
                    <Clock className="w-3.5 h-3.5" />
                    <span>{currentStep.time}</span>
                  </div>
                  <span className="text-[11px] font-bold text-ink-muted uppercase tracking-wider">
                    Routine {activeMobileStep + 1} of 3
                  </span>
                </div>

                {/* Narrative Header */}
                <div>
                  <h4 className="text-2xl font-bold text-ink mb-2">{currentStep.title}</h4>
                  <p className="text-sm text-ink-muted leading-relaxed">
                    {currentStep.description}
                  </p>
                </div>

                {/* Live Interactive Visual Card */}
                <div className="pt-2">
                  {currentStep.visual}
                </div>

                {/* Interactive Day Navigation Controls */}
                <div className="flex items-center justify-between pt-3 border-t border-surface-100">
                  <button
                    onClick={() => setActiveMobileStep((prev) => Math.max(0, prev - 1))}
                    disabled={activeMobileStep === 0}
                    className={`p-2 rounded-xl border border-surface-200 flex items-center justify-center text-ink transition-opacity ${
                      activeMobileStep === 0 ? "opacity-30 cursor-not-allowed" : "hover:bg-surface-50 cursor-pointer"
                    }`}
                    aria-label="Previous routine"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  {/* Step progress dots */}
                  <div className="flex items-center gap-1.5">
                    {steps.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveMobileStep(i)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          activeMobileStep === i ? "w-6 bg-brand" : "w-2 bg-surface-300"
                        }`}
                        aria-label={`Go to routine ${i + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={() => setActiveMobileStep((prev) => Math.min(steps.length - 1, prev + 1))}
                    disabled={activeMobileStep === steps.length - 1}
                    className={`p-2 rounded-xl border border-surface-200 flex items-center justify-center text-ink transition-opacity ${
                      activeMobileStep === steps.length - 1 ? "opacity-30 cursor-not-allowed" : "hover:bg-surface-50 cursor-pointer"
                    }`}
                    aria-label="Next routine"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

          <p className="text-center text-xs text-ink-muted/70 mt-3 flex items-center justify-center gap-1">
            <span>← Swipe or tap times to explore the routine cycle →</span>
          </p>

        </div>


        {/* ═══════════════════════════════════════════════════════
            DESKTOP / TABLET TIMELINE LAYOUT (lg+)
            ═══════════════════════════════════════════════════════ */}
        <div className="hidden lg:block relative">
          {/* Vertical center line — desktop only */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-surface-200" />

          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              const StepIcon = step.stepIcon;

              return (
                <div key={idx} className="relative z-10">

                  {/* Timeline node icon */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-4 w-10 h-10 rounded-full bg-white border-2 border-surface-200 flex items-center justify-center shadow-md">
                    <StepIcon className={`w-5 h-5 ${step.stepIconColor}`} />
                  </div>

                  <div className="grid grid-cols-2 gap-16 items-center">

                    {/* Story text */}
                    <div className={isEven ? "text-right pr-12" : "order-2 pl-12"}>
                      <AnimatedSection direction={isEven ? "left" : "right"}>
                        <div
                          className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-bold border ${step.stepBg} ${step.stepIconColor} ${step.accentBorder} mb-4`}
                        >
                          <StepIcon className="w-3.5 h-3.5" />
                          <span>{step.time}</span>
                        </div>
                        <h4 className="text-3xl font-bold text-ink mb-4">{step.title}</h4>
                        <p className="text-lg text-ink-muted leading-relaxed max-w-xl mx-0">
                          {step.description}
                        </p>
                      </AnimatedSection>
                    </div>

                    {/* Visual card */}
                    <div className={isEven ? "pl-12" : "order-1 pr-12"}>
                      <AnimatedSection direction="up" delay={0.2}>
                        <motion.div
                          className="p-4"
                          whileHover={{ scale: 1.03, rotate: isEven ? -1 : 1 }}
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
