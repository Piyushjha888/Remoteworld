"use client";

import { Shield, Key, EyeOff, ClipboardCheck } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "../ui/AnimatedSection";
import StaggerContainer, { staggerChild } from "../ui/StaggerContainer";

export default function SecurityMission() {
  const pillars = [
    {
      title: "Consent-First Control",
      desc: "Patients must explicitly invite and approve caregivers. Access to medical logs can be updated or revoked instantly at any time.",
      Icon: Key,
      bg: "bg-brand/10",
      color: "text-brand",
    },
    {
      title: "Encrypted Data Transmission",
      desc: "All health records and logging history are encrypted in transit and at rest using standard security protocols.",
      Icon: EyeOff,
      bg: "bg-support-blue/15",
      color: "text-support-blue",
    },
    {
      title: "Digital Health Compatible",
      desc: "Designed to align with modern health registries like the Ayushman Bharat Digital Mission (ABDM) and secure ABHA lockers.",
      Icon: ClipboardCheck,
      bg: "bg-accent/15",
      color: "text-accent-alt",
    },
  ];

  return (
    <section id="security-mission" className="py-16 sm:py-24 bg-surface-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <AnimatedSection direction="up" className="text-center max-w-3xl mx-auto mb-16">
          <div className="w-12 h-12 rounded-full bg-brand/10 text-brand flex items-center justify-center mx-auto mb-4">
            <Shield className="w-6 h-6 animate-pulse-slow" />
          </div>
          <h2 className="text-brand font-semibold tracking-wide uppercase text-sm mb-3">
            Security & Privacy
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-ink mb-6">
            Privacy designed into every routine.
          </h3>
          <p className="text-xl text-ink-muted">
            Health information is deeply personal. RemoteWard provides secure architecture so you decide who is in your circle.
          </p>
        </AnimatedSection>

        {/* Pillars Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.Icon;
            return (
              <motion.div
                key={idx}
                variants={staggerChild}
                className="bg-white rounded-3xl p-8 border border-surface-200/60 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                whileHover={{ y: -4 }}
              >
                <div>
                  {/* Icon Badge */}
                  <div className={`w-14 h-14 rounded-2xl ${pillar.bg} flex items-center justify-center mb-6`}>
                    <Icon className={`w-6 h-6 ${pillar.color}`} />
                  </div>

                  <h4 className="text-2xl font-bold text-ink mb-3">{pillar.title}</h4>
                  <p className="text-ink-muted text-base leading-relaxed">{pillar.desc}</p>
                </div>

                <div className="mt-6 flex items-center text-xs font-bold text-ink-muted uppercase tracking-wider">
                  <Shield className="w-3.5 h-3.5 text-accent-alt mr-1.5" />
                  Secure Protocol
                </div>
              </motion.div>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
