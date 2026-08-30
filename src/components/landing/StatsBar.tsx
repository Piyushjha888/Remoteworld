"use client";

import { ShieldCheck, HeartHandshake, KeyRound, Radio } from "lucide-react";
import { motion } from "framer-motion";
import StaggerContainer, { staggerChild } from "../ui/StaggerContainer";

export default function StatsBar() {
  const stats = [
    {
      label: "Consent-First Access",
      desc: "You control who views your health logs",
      Icon: KeyRound,
      colorClass: "text-brand",
      bgClass: "bg-brand/10",
    },
    {
      label: "Secure Architecture",
      desc: "Built using standard encryption practices",
      Icon: ShieldCheck,
      colorClass: "text-accent-alt",
      bgClass: "bg-accent/15",
    },
    {
      label: "ABHA Ready",
      desc: "Compatible with Ayushman Bharat accounts",
      Icon: Radio,
      colorClass: "text-support-blue",
      bgClass: "bg-support-blue/10",
    },
    {
      label: "Care Circle Sync",
      desc: "Instantly logs updates to family members",
      Icon: HeartHandshake,
      colorClass: "text-highlight-dark",
      bgClass: "bg-highlight/15",
    },
  ];

  return (
    <section className="bg-surface-50 border-y border-surface-200/60 py-6 sm:py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerContainer className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.Icon;
            return (
              <motion.div
                key={index}
                variants={staggerChild}
                className="flex flex-col sm:flex-row items-start sm:items-center space-y-2.5 sm:space-y-0 sm:space-x-4 p-3 sm:p-3.5 rounded-2xl bg-white/70 sm:bg-transparent border border-surface-200/60 sm:border-transparent transition-all duration-300 hover:bg-white hover:shadow-sm"
              >
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${stat.bgClass} flex items-center justify-center flex-shrink-0`}>
                  <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${stat.colorClass}`} />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-ink leading-tight">{stat.label}</h4>
                  <p className="text-[11px] sm:text-xs text-ink-muted mt-0.5 sm:mt-1 leading-snug">{stat.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
