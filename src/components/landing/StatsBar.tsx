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
    <section className="bg-surface-50 border-y border-surface-200/60 py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.Icon;
            return (
              <motion.div
                key={index}
                variants={staggerChild}
                className="flex items-center space-x-4 p-3 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-sm"
              >
                <div className={`w-12 h-12 rounded-xl ${stat.bgClass} flex items-center justify-center flex-shrink-0`}>
                  <Icon className={`w-6 h-6 ${stat.colorClass}`} />
                </div>
                <div>
                  <h4 className="text-base font-bold text-ink leading-tight">{stat.label}</h4>
                  <p className="text-xs text-ink-muted mt-0.5">{stat.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
