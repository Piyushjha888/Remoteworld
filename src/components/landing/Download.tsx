"use client";

import { CheckCircle2, Apple, Play } from "lucide-react";
import PhoneMockup from "../ui/PhoneMockup";
import { motion } from "framer-motion";
import AnimatedSection from "../ui/AnimatedSection";
import StaggerContainer, { staggerChildLeft } from "../ui/StaggerContainer";

export default function Download() {
  return (
    <section id="download" className="py-16 sm:py-24 bg-brand relative overflow-hidden text-white">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circles" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circles)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
        
        {/* Left Content column */}
        <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
          <AnimatedSection direction="left" delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Ready for simpler, safer days?
            </h2>
          </AnimatedSection>

          <AnimatedSection direction="left" delay={0.25}>
            <p className="text-xl text-surface-100 opacity-90 leading-relaxed">
              Join thousands of families using RemoteWard to stay connected and organized. The app is free to download and sets up in under 2 minutes.
            </p>
          </AnimatedSection>

          {/* Staggered Bullet List */}
          <StaggerContainer className="space-y-4 text-lg text-left max-w-md mx-auto lg:mx-0">
            <motion.li variants={staggerChildLeft} className="flex items-center">
              <div className="w-8 h-8 rounded-lg bg-highlight/20 flex items-center justify-center mr-3 flex-shrink-0">
                <CheckCircle2 className="w-5 h-5 text-highlight" />
              </div>
              Large text and high-contrast buttons
            </motion.li>
            <motion.li variants={staggerChildLeft} className="flex items-center">
              <div className="w-8 h-8 rounded-lg bg-highlight/20 flex items-center justify-center mr-3 flex-shrink-0">
                <CheckCircle2 className="w-5 h-5 text-highlight" />
              </div>
              Voice-guided setup available
            </motion.li>
            <motion.li variants={staggerChildLeft} className="flex items-center">
              <div className="w-8 h-8 rounded-lg bg-highlight/20 flex items-center justify-center mr-3 flex-shrink-0">
                <CheckCircle2 className="w-5 h-5 text-highlight" />
              </div>
              24/7 human support hotline
            </motion.li>
          </StaggerContainer>

          {/* Download Buttons with spring scale hover triggers */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            {/* App Store Button */}
            <motion.a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-ink hover:bg-black text-white px-6 py-3 rounded-xl flex items-center justify-center space-x-3 border border-surface-400/30 cursor-pointer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Apple className="w-8 h-8" />
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="text-lg font-bold leading-none">App Store</div>
              </div>
            </motion.a>

            {/* Google Play Button */}
            <motion.a
              href="https://play.google.com/store/apps/details?id=com.application.remoteward"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-ink hover:bg-black text-white px-6 py-3 rounded-xl flex items-center justify-center space-x-3 border border-surface-400/30 cursor-pointer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Play className="w-7 h-7" />
              <div className="text-left">
                <div className="text-xs">GET IT ON</div>
                <div className="text-lg font-bold leading-none">Google Play</div>
              </div>
            </motion.a>
          </motion.div>
        </div>

        {/* Phone Mockup with 3D animation */}
        <div className="lg:w-1/2 flex justify-center perspective-1000">
          <AnimatedSection direction="right" delay={0.2} className="w-full flex justify-center">
            <motion.div 
              className="mockup-3d"
              whileHover={{ rotateY: 0, rotateX: 0 }}
              transition={{ duration: 0.5 }}
            >
              <PhoneMockup />
            </motion.div>
          </AnimatedSection>
        </div>

      </div>
    </section>
  );
}
