"use client";

import { ArrowRight, ShieldCheck, HeartHandshake, Check, Users } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import Logo from "../ui/Logo";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: [0.25, 0.4, 0.25, 1] as const } },
});

const fadeLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0, transition: { type: "spring" as const, stiffness: 120, damping: 20, delay } },
});

const scaleIn = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.85, rotate: 6 },
  animate: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.9, delay, ease: [0.25, 0.4, 0.25, 1] as const } },
});

export default function Hero() {
  return (
    <section id="home" className="hero-gradient min-h-[90vh] flex items-start pt-24 sm:pt-32 lg:pt-40 relative overflow-hidden">
      {/* Top Left Logo */}
      <div className="absolute top-6 left-6 lg:top-8 lg:left-12 z-50">
        <Logo textClass="text-2xl sm:text-3xl" />
      </div>

      {/* Decorative Background Elements */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[150px] bg-brand/15 opacity-40 rounded-full blur-3xl pointer-events-none"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      <div className="absolute top-20 left-10 w-32 h-32 bg-support-purple opacity-20 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-brand opacity-10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Hero Text */}
        <div className="space-y-6 sm:space-y-8 max-w-2xl mt-4 lg:mt-0">
          {/* Title */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-ink"
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
            className="flex flex-col sm:flex-row gap-4 pt-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <motion.a
              href="https://play.google.com/store/apps/details?id=com.application.remoteward"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-highlight hover:bg-highlight-dark text-ink font-bold text-base sm:text-lg px-6 py-4 rounded-xl text-center shadow-lg flex items-center justify-center"
              whileHover={{ scale: 1.04, y: -3 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              Get Started Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.a>
            <motion.a
              href="#interactive-tool"
              className="bg-white border-2 border-brand text-brand hover:bg-brand hover:text-white font-bold text-base sm:text-lg px-6 py-4 rounded-xl text-center transition-colors flex items-center justify-center"
              whileHover={{ scale: 1.04, y: -3 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              Is this for me?
            </motion.a>
          </motion.div>

          {/* Trust Signals */}
          <motion.div
            className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs sm:text-sm text-ink-muted"
            {...fadeUp(0.8)}
          >
            <div className="flex items-center">
              <ShieldCheck className="w-5 h-5 text-accent-alt mr-1.5" /> Secure & Private
            </div>
            <div className="flex items-center">
              <HeartHandshake className="w-5 h-5 text-brand mr-1.5" /> Loved by Families
            </div>
          </motion.div>
        </div>

        {/* Hero Imagery */}
        <motion.div
          className="relative w-full h-[320px] sm:h-[450px] lg:h-[550px] mt-8 lg:mt-0 animate-float max-w-lg mx-auto"
          {...scaleIn(0.3)}
        >
          <div className="absolute inset-0 bg-brand/5 rounded-[2.5rem] transform rotate-3 scale-105"></div>
          <Image
            src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Smiling mature adult looking at phone"
            width={800}
            height={800}
            className="relative z-10 w-full h-full object-cover rounded-[2.5rem] shadow-2xl border-4 sm:border-8 border-white"
            unoptimized
            loading="eager"
          />

          {/* Floating UI Element — matches "Medication Taken" card from screenshots */}
          <motion.div
            className="absolute -left-2 sm:-left-8 top-1/4 bg-white p-3 sm:p-4 rounded-2xl shadow-xl z-20 flex items-center space-x-3 sm:space-x-4 border border-surface-200"
            {...fadeLeft(0.8)}
          >
            {/* Centered icon badge */}
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 rounded-xl bg-accent/20 flex items-center justify-center">
              <Check className="w-5 h-5 sm:w-6 sm:h-6 text-accent-alt" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-ink">Medication Taken</p>
              <p className="text-[10px] sm:text-xs text-ink-muted">9:00 AM Today</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
