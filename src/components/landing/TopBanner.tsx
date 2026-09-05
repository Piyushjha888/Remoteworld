"use client";

import React from "react";
import { motion } from "framer-motion";

interface TopBannerProps {
  announcements?: string[];
  className?: string;
}

export default function TopBanner({
  announcements = [
    "Produced by Kapil Singh Rawat ",
    "And directed by Sukhdev ",
    "Devloped by Piyush jha  ",
    "Real-time routine management & instant support",
  ],
  className = "",
}: TopBannerProps) {
  // Ensure enough items so half of the track is wide enough for a smooth infinite marquee
  const items = [...announcements];
  while (items.length < 6) {
    items.push(...announcements);
  }

  return (
    <div
      className={`hidden md:flex absolute top-0 left-[calc(50%+50px)] lg:left-[calc(50%+75px)] -translate-x-1/2 z-40 items-center justify-center pointer-events-auto ${className}`}
      style={{
        width: "944px",
        maxWidth: "calc(100vw - 32px)",
        height: "46px",
        filter:
          "drop-shadow(0 10px 24px rgba(3, 161, 172, 0.45)) drop-shadow(0 4px 10px rgba(0, 0, 0, 0.12))",
      }}
    >
      {/* Outer stylized trapezoid container matching Figma dimensions W: 944, H: 46 */}
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
              "linear-gradient(to right, transparent 0%, rgba(0,0,0,1) 12%, rgba(0,0,0,1) 88%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, rgba(0,0,0,1) 12%, rgba(0,0,0,1) 88%, transparent 100%)",
          }}
        >
          {/* Marquee Track scrolling from right to left smoothly */}
          <motion.div
            className="flex items-center shrink-0 whitespace-nowrap text-white font-medium text-xs md:text-sm lg:text-[14px] tracking-wide select-none"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: Math.max(30, items.length * 6),
            }}
          >
            {/* Primary block */}
            <div className="flex items-center space-x-10 pr-10 shrink-0">
              {items.map((text, idx) => (
                <span key={idx} className="flex items-center space-x-10">
                  <span>{text}</span>
                  <span className="opacity-60 text-xs">|</span>
                </span>
              ))}
            </div>

            {/* Duplicated block for seamless loop */}
            <div className="flex items-center space-x-10 pr-10 shrink-0" aria-hidden="true">
              {items.map((text, idx) => (
                <span key={`dup-${idx}`} className="flex items-center space-x-10">
                  <span>{text}</span>
                  <span className="opacity-60 text-xs">|</span>
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom edge subtle border */}
        <div className="absolute bottom-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />
      </div>
    </div>
  );
}
