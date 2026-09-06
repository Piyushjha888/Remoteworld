"use client";

import { useState, useCallback, useEffect } from "react";
import { Download, UserPlus, Users, Stethoscope, Calendar, Heart, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "../ui/AnimatedSection";
import Image from "next/image";

export default function HowItWorks() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const steps = [
    {
      num: "01",
      stepLabel: "STEP 1",
      title: "Download App",
      badge: "START HERE",
      desc: "Get RemoteWard from the Google Play Store on your tablet or smartphone.",
      icon: Download,
      accentColor: "#03A1AC",
      bgLight: "bg-brand/10",
      textColor: "text-brand",
      visual: (
        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-br from-brand/15 to-brand/5 border border-brand/20 flex flex-col items-center justify-center p-3 shadow-inner relative group">
          <div className="w-12 h-12 rounded-2xl bg-brand text-white flex items-center justify-center shadow-md mb-1.5">
            <Download className="w-6 h-6 animate-bounce" />
          </div>
          <span className="text-[10px] font-black uppercase text-brand tracking-wider">Play Store</span>
        </div>
      ),
    },
    {
      num: "02",
      stepLabel: "STEP 2",
      title: "Create Profile",
      badge: "QUICK SETUP",
      desc: "Enter basic health info or link your existing digital health accounts securely.",
      icon: UserPlus,
      accentColor: "#809CE6",
      bgLight: "bg-support-blue/15",
      textColor: "text-support-blue",
      visual: (
        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-br from-support-blue/20 to-support-blue/5 border border-support-blue/25 flex flex-col items-center justify-center p-3 shadow-inner relative">
          <div className="w-12 h-12 rounded-2xl bg-support-blue text-white flex items-center justify-center shadow-md mb-1.5">
            <UserPlus className="w-6 h-6" />
          </div>
          <span className="text-[10px] font-black uppercase text-support-blue tracking-wider">ABHA Link</span>
        </div>
      ),
    },
    {
      num: "03",
      stepLabel: "STEP 3",
      title: "Add Family",
      badge: "CARE CIRCLE",
      desc: "Invite trusted family members or caregivers to join your secure health circle.",
      icon: Users,
      accentColor: "#CDBDF7",
      bgLight: "bg-support-purple/25",
      textColor: "text-support-purple",
      visual: (
        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-br from-support-purple/30 to-support-purple/10 border border-support-purple/40 flex flex-col items-center justify-center p-3 shadow-inner relative">
          <div className="w-12 h-12 rounded-2xl bg-[#9B80E6] text-white flex items-center justify-center shadow-md mb-1.5">
            <Users className="w-6 h-6" />
          </div>
          <span className="text-[10px] font-black uppercase text-[#7352D0] tracking-wider">Sync Circle</span>
        </div>
      ),
    },
    {
      num: "04",
      stepLabel: "STEP 4",
      title: "Connect Doctor",
      badge: "CLINIC SYNC",
      desc: "Optionally link with participating clinics to sync prescriptions and reports.",
      icon: Stethoscope,
      accentColor: "#E39FF6",
      bgLight: "bg-accent/15",
      textColor: "text-accent-alt",
      visual: (
        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-[#E39FF6] to-accent/5 border border-accent/30 flex flex-col items-center justify-center p-3 shadow-inner relative">
          <div className="w-12 h-12 rounded-2xl bg-[#ffff] text-white flex items-center justify-center shadow-md mb-1.5 overflow-hidden p-2">
            <Image
              src="/logos/Group1.svg"
              alt="Connect Doctor"
              width={32}
              height={32}
              className="w-7 h-7 object-contain rounded-md"
              draggable={false}
              loading="lazy"
            />
          </div>
          <span className="text-[10px] font-black uppercase text-[#710193] tracking-wider">e-Prescriptions</span>
        </div>
      ),
    },
    {
      num: "05",
      stepLabel: "STEP 5",
      title: "Book Appointment",
      badge: "REMINDERS",
      desc: "Schedule calls or checkups directly and receive easy-to-read reminders.",
      icon: Calendar,
      accentColor: "#FFB900",
      bgLight: "bg-highlight/15",
      textColor: "text-highlight-dark",
      visual: (
        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-br from-highlight/25 to-highlight/5 border border-highlight/30 flex flex-col items-center justify-center p-3 shadow-inner relative">
          <div className="w-12 h-12 rounded-2xl bg-white text-ink flex items-center justify-center shadow-md mb-1.5 font-black overflow-hidden p-2">
            <Image
              src="/logos/calender.jpg"
              alt="Book Appointment"
              width={32}
              height={32}
              className="w-7 h-7 object-contain rounded-md"
              draggable={false}
              loading="lazy"
            />
          </div>
          <span className="text-[10px] font-black uppercase text-highlight-dark tracking-wider">Schedule</span>
        </div>
      ),
    },
    {
      num: "06",
      stepLabel: "STEP 6",
      title: "Stay Connected",
      badge: "PEACE OF MIND",
      desc: "Rest easy knowing updates are shared with your circle in real time.",
      icon: Heart,
      accentColor: "#FD3C3C",
      bgLight: "bg-alert/10",
      textColor: "text-alert",
      visual: (
        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-br from-alert/20 to-alert/5 border border-alert/20 flex flex-col items-center justify-center p-3 shadow-inner relative">
          <div className="w-12 h-12 rounded-2xl bg-[#FF9D9D] text-white flex items-center justify-center shadow-md mb-1.5 overflow-hidden p-2">
            <Image
              src="/logos/heart.svg"
              alt="Stay Connected"
              width={32}
              height={32}
              className="w-7 h-7 object-contain rounded-md"
              draggable={false}
              loading="lazy"
            />
          </div>
          <span className="text-[10px] font-black uppercase text-alert tracking-wider">Real-time</span>
        </div>
      ),
    },
  ];

  const total = steps.length;

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Keyboard arrow listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

  // Touch swipe support for smooth mobile gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
    setTouchStart(null);
  };

  return (
    <section id="how-it-works" className="py-14 sm:py-20 lg:py-24 bg-[#FAF9F5] relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-brand/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <AnimatedSection direction="up" className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-brand font-semibold tracking-wide uppercase text-xs sm:text-sm mb-2 sm:mb-3">
            Getting Started
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink mb-4 sm:mb-6">
            Six simple steps to peace of mind.
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-ink-muted">
            Getting set up with RemoteWard is designed to be easy and takes just a few minutes.
          </p>
        </AnimatedSection>

        {/* ─── 3D Overlapping Deck Carousel Container ─── */}
        <div
          className="relative max-w-5xl mx-auto min-h-[510px] sm:min-h-[540px] flex items-center justify-center touch-pan-y select-none"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Navigation Chevron Left */}
          <button
            onClick={handlePrev}
            aria-label="Previous step"
            className="absolute left-1 sm:left-4 z-40 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/90 backdrop-blur-md border border-surface-200 shadow-xl flex items-center justify-center text-ink hover:text-brand hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
          </button>

          {/* Navigation Chevron Right */}
          <button
            onClick={handleNext}
            aria-label="Next step"
            className="absolute right-1 sm:right-4 z-40 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/90 backdrop-blur-md border border-surface-200 shadow-xl flex items-center justify-center text-ink hover:text-brand hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
          >
            <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
          </button>

          {/* Stacked Cards Area */}
          <div className="relative w-full h-[480px] sm:h-[510px] flex items-center justify-center">
            {steps.map((step, idx) => {
              // Calculate relative signed offset (-2, -1, 0, 1, 2)
              let offset = idx - activeIndex;
              if (offset > total / 2) offset -= total;
              if (offset < -total / 2) offset += total;

              const isCenter = offset === 0;
              const isVisible = Math.abs(offset) <= 2;

              // Responsive coordinate translations
              let xOffset = 0;
              let scale = 1;
              let zIndex = 10;
              let opacity = 0;
              let rotateY = 0;

              if (offset === 0) {
                xOffset = 0;
                scale = 1.04;
                zIndex = 30;
                opacity = 1;
                rotateY = 0;
              } else if (offset === -1) {
                xOffset = -48; // percentage offset
                scale = 0.88;
                zIndex = 20;
                opacity = 0.85;
                rotateY = 4;
              } else if (offset === 1) {
                xOffset = 48;
                scale = 0.88;
                zIndex = 20;
                opacity = 0.85;
                rotateY = -4;
              } else if (offset === -2) {
                xOffset = -85;
                scale = 0.74;
                zIndex = 10;
                opacity = 0.35;
                rotateY = 8;
              } else if (offset === 2) {
                xOffset = 85;
                scale = 0.74;
                zIndex = 10;
                opacity = 0.35;
                rotateY = -8;
              }

              if (!isVisible) {
                opacity = 0;
                scale = 0.6;
              }

              return (
                <motion.div
                  key={step.num}
                  onClick={() => {
                    if (!isCenter) setActiveIndex(idx);
                  }}
                  className={`absolute w-[290px] sm:w-[330px] md:w-[350px] h-[450px] sm:h-[480px] rounded-[2.25rem] bg-white border-2 transition-colors duration-300 flex flex-col justify-between p-6 sm:p-7 select-none ${isCenter
                    ? "border-surface-300 shadow-2xl cursor-default"
                    : "border-surface-200 shadow-md cursor-pointer hover:border-brand/40"
                    }`}
                  style={{
                    perspective: 1000,
                    willChange: "transform, opacity",
                  }}
                  initial={false}
                  animate={{
                    x: `${xOffset}%`,
                    scale,
                    zIndex,
                    opacity,
                    rotateY,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 26,
                    mass: 0.8,
                  }}
                >
                  {/* Card Top Row: Badge + Step Indicator */}
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold text-ink-muted/70 tracking-widest uppercase">
                      RemoteWard
                    </span>
                    <span className="bg-[#FFEBD6] text-[#D96B27] border border-[#FCD2B2] text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full tracking-wider">
                      {step.badge}
                    </span>
                  </div>

                  {/* Card Center Visual */}
                  <div className="flex flex-col items-center justify-center my-auto py-2">
                    <div className="mb-4">
                      {step.visual}
                    </div>

                    <h4 className="text-2xl sm:text-[26px] font-black text-ink tracking-tight mb-2 text-center">
                      {step.title}
                    </h4>
                    <p className="text-ink-muted text-xs sm:text-sm leading-relaxed text-center max-w-[260px] mx-auto">
                      {step.desc}
                    </p>
                  </div>

                  {/* Card Bottom Pill Button Bar (Replacing "ADD TO CART" with "STEP X") */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNext();
                    }}
                    className="w-full bg-[#323C3E] hover:bg-black text-white font-bold text-sm sm:text-base py-3.5 px-5 rounded-2xl flex items-center justify-between shadow-md transition-all duration-200 active:scale-98 cursor-pointer group"
                  >
                    <span className="tracking-wider uppercase font-black text-xs sm:text-sm">
                      {step.stepLabel}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-surface-200 group-hover:text-white transition-colors">
                      <span>{step.num} of 06</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </div>
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ─── Pagination Dots ─── */}
        <div className="flex justify-center items-center gap-2 mt-4 sm:mt-6">
          {steps.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${activeIndex === idx
                ? "w-8 bg-brand"
                : "w-2.5 bg-surface-300 hover:bg-surface-400"
                }`}
              aria-label={`Go to step ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
