"use client";

import { useState, useEffect } from "react";
import { ArrowRight, ShieldCheck, HeartHandshake } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../ui/Logo";
import TopBanner from "./TopBanner";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: [0.25, 0.4, 0.25, 1] as const } },
});

const scaleIn = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.85, rotate: 6 },
  animate: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.9, delay, ease: [0.25, 0.4, 0.25, 1] as const } },
});

export default function Hero() {
  const heroImages = [
    "/homepageScreens/flow1.jpg",
    "/homepageScreens/flow2.png",
    "/homepageScreens/flow3.png",
    "/homepageScreens/flow4.png",
    "/homepageScreens/flow5.png",
    "/homepageScreens/flow6.jpg",
    "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <section id="home" className="hero-gradient min-h-[85vh] lg:min-h-[90vh] flex items-start pt-20 sm:pt-24 lg:pt-32 pb-8 sm:pb-12 relative overflow-hidden">
      {/* Top Marquee Announcement Banner (Desktop & Tablet only) */}
      <TopBanner />

      {/* Top Left Logo matching Image 1 */}
      <div className="absolute top-5 left-5 sm:top-6 sm:left-8 lg:top-7 lg:left-12 z-50">
        <Logo imgClassName="h-10 sm:h-12 lg:h-14 w-auto" />
      </div>

      {/* Ambient top radiant glow behind banner */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[240px] bg-gradient-to-b from-[#47C2CB]/25 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-20 left-10 w-48 h-48 bg-support-purple opacity-20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-brand opacity-15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Hero Text */}
        <div className="space-y-5 sm:space-y-7 max-w-2xl mt-4 lg:mt-0">
          {/* Title */}
          <motion.h1
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-ink"
            {...fadeUp(0.1)}
          >
            Healthcare, <br />
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-dark inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              held together.
            </motion.span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-base sm:text-lg md:text-xl text-ink-muted leading-relaxed"
            {...fadeUp(0.4)}
          >
            Stay connected to your care team and family. RemoteWard brings peace of mind, routine management, and instant support right to your fingertips—designed simply, for everyone.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 w-full sm:w-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <motion.a
              href="https://play.google.com/store/apps/details?id=com.application.remoteward"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-brand to-brand-dark hover:brightness-110 text-white font-bold text-base sm:text-lg px-6 py-3.5 sm:py-4 rounded-xl text-center shadow-lg flex items-center justify-center cursor-pointer transition-all"
              whileHover={{ scale: 1.04, y: -3 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              Get Started Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.a>
            <motion.a
              href="#how-it-works"
              className="bg-white border-2 border-brand text-brand hover:bg-brand hover:text-white font-bold text-base sm:text-lg px-6 py-3.5 sm:py-4 rounded-xl text-center transition-colors flex items-center justify-center cursor-pointer shadow-sm"
              whileHover={{ scale: 1.04, y: -3 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              How It Works
            </motion.a>
          </motion.div>

          {/* Trust Signals */}
          <motion.div
            className="pt-2 sm:pt-4 flex flex-wrap items-center gap-x-6 gap-y-2.5 text-xs sm:text-sm text-ink-muted"
            {...fadeUp(0.8)}
          >
            <div className="flex items-center">
              <ShieldCheck className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-accent-alt mr-1.5" /> Secure & Private
            </div>
            <div className="flex items-center">
              <HeartHandshake className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-brand mr-1.5" /> Loved by Families
            </div>
          </motion.div>
        </div>

        {/* Hero Imagery */}
        <motion.div
          className="relative w-full h-[320px] sm:h-[450px] lg:h-[550px] mt-8 lg:mt-0 animate-float max-w-lg mx-auto"
          {...scaleIn(0.3)}
        >
          {/* Floating Medication Taken Status Badge matching Image 1 */}
          <motion.div
            className="absolute -top-3.5 -left-3.5 sm:-top-5 sm:-left-5 z-40 bg-white/95 backdrop-blur-md px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-2xl shadow-[0_12px_32px_rgba(0,0,0,0.12)] border border-gray-100/90 flex items-center space-x-3 pointer-events-none"
            initial={{ opacity: 0, y: 15, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.6, type: "spring", stiffness: 300 }}
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#E6F8F0] flex items-center justify-center text-[#10B981] flex-shrink-0">
              <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="pr-1">
              <p className="text-xs sm:text-sm font-semibold text-ink leading-tight">Medication Taken</p>
              <p className="text-[10px] sm:text-xs text-ink-muted leading-tight mt-0.5">9:00 AM Today</p>
            </div>
          </motion.div>

          <div className="absolute inset-0 bg-brand/5 rounded-[2.5rem] transform rotate-3 scale-105"></div>
          <div className="relative z-10 w-full h-full rounded-[2.5rem] shadow-2xl border-4 sm:border-8 border-white overflow-hidden bg-white">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full h-full relative"
              >
                <Image
                  src={heroImages[currentSlide]}
                  alt="Hero illustration slider"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 500px"
                  className="object-cover"
                  priority={currentSlide === 0}
                  loading={currentSlide === 0 ? "eager" : "lazy"}
                />
              </motion.div>
            </AnimatePresence>

            {/* Navigation Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-30 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
              {heroImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    currentSlide === idx ? "bg-brand-light w-6" : "bg-white/60 hover:bg-white"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
