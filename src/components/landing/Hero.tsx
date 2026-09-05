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
  // Authentic application flow illustrations (hospital building photo removed completely)
  const heroImages = [
    "/homepageScreens/flow1.jpg",
    "/homepageScreens/flow2.png",
    "/homepageScreens/flow3.png",
    "/homepageScreens/flow4.png",
    "/homepageScreens/flow6.jpg",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <section id="home" className="hero-gradient min-h-[88vh] lg:min-h-[92vh] flex flex-col justify-start relative overflow-hidden">
      {/* Top Marquee Announcement Banner (Desktop & Tablet only) */}
      <TopBanner />

      {/* Top Header Row with Aligned, Prominent RemoteWard Logo */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 sm:pt-7 lg:pt-9 pb-2 relative z-30 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="inline-block"
        >
          <Logo imgClassName="h-12 sm:h-14 md:h-16 lg:h-20 w-auto" />
        </motion.div>
      </div>

      {/* Ambient top radiant glow behind banner */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[240px] bg-gradient-to-b from-[#47C2CB]/25 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-20 left-10 w-48 h-48 bg-support-purple opacity-20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-brand opacity-15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center flex-1 my-auto">
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

          <div className="absolute inset-0 bg-brand/5 rounded-[2.5rem] transform rotate-3 scale-105" />
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
                  priority
                  loading="eager"
                />
              </motion.div>
            </AnimatePresence>

            {/* Navigation Dots matching Image 2 */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center space-x-2 z-30 bg-black/40 backdrop-blur-md px-3.5 py-2 rounded-full border border-white/10">
              {heroImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    currentSlide === idx ? "bg-[#01B2BD] w-7" : "bg-white/60 hover:bg-white w-2.5"
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
