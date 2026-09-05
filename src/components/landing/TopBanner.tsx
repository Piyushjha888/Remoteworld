"use client";

import React from "react";
import { motion } from "framer-motion";

interface TopBannerProps {
  announcements?: string[];
  className?: string;
}

export default function TopBanner({
  announcements = [
    "Empowering patients and 70% off revolutionizing healthcare",
    "Connected care for peace of mind",
    "Empowering patients and 70% off revolutionizing healthcare",
    "Real-time routine management & instant support",
  ],
  className = "",
}: TopBannerProps) {
  // Combine announcements with clean separators
  const bannerText = announcements.join("   •   ");

  return (
    <div
      className={`hidden md:flex fixed top-0 left-1/2 -translate-x-1/2 z-40 items-center justify-center pointer-events-auto ${className}`}
      style={{
        width: "min(944px, calc(100vw - 320px))",
        height: "46px",
        filter:
          "drop-shadow(0 10px 24px rgba(3, 161, 172, 0.45)) drop-shadow(0 4px 10px rgba(0, 0, 0, 0.12))",
      }}
    >
      {/* Outer stylized trapezoid container matching design in Image 1 */}
      <div
        className="relative w-full h-full flex items-center justify-center overflow-hidden"
        style={{
          background:
            "linear-gradient(90deg, #32B6C3 0%, #03A1AC 35%, #01B2BD 65%, #3AC1CC 100%)",
          clipPath:
            "polygon(0 0, 100% 0, calc(100% - 24px) 100%, 24px 100%)",
        }}
      >
        {/* Subtle top gloss highlight */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none" />

        {/* Ambient subtle light sheen */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/15 to-transparent pointer-events-none" />

        {/* Marquee viewport with gradient mask on left and right edges for fade-in / fade-out */}
        <div
          className="relative w-full h-full flex items-center overflow-hidden px-8"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, rgba(0,0,0,1) 8%, rgba(0,0,0,1) 92%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, rgba(0,0,0,1) 8%, rgba(0,0,0,1) 92%, transparent 100%)",
          }}
        >
          {/* Marquee Track scrolling from right to left smoothly */}
          <motion.div
            className="flex items-center space-x-12 whitespace-nowrap text-white font-medium text-xs md:text-sm lg:text-[15px] tracking-wide select-none"
            initial={{ x: "0%" }}
            animate={{ x: "-50%" }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 25,
            }}
          >
            {/* Repeated segments for infinite seamless looping */}
            <span className="flex items-center space-x-8">
              <span>{bannerText}</span>
              <span className="opacity-60">•</span>
            </span>
            <span className="flex items-center space-x-8">
              <span>{bannerText}</span>
              <span className="opacity-60">•</span>
            </span>
            <span className="flex items-center space-x-8">
              <span>{bannerText}</span>
              <span className="opacity-60">•</span>
            </span>
            <span className="flex items-center space-x-8">
              <span>{bannerText}</span>
              <span className="opacity-60">•</span>
            </span>
          </motion.div>
        </div>

        {/* Bottom edge subtle border */}
        <div className="absolute bottom-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />
      </div>
    </div>
  );
}
