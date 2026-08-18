"use client";

import { useState } from "react";
import { User, Users, Bell, Share2, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "../ui/AnimatedSection";

export default function InteractiveQuiz() {
  const [step, setStep] = useState(1);

  // Simple progress bar percentage mapping
  const getProgressWidth = () => {
    if (step === 1) return "33%";
    if (step === 2) return "66%";
    return "100%";
  };

  const stepVariants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] as const } },
    exit: { opacity: 0, x: -50, transition: { duration: 0.3 } },
  };

  return (
    <section id="interactive-tool" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      {/* Scroll anchor offset for navbar link */}
      <div id="how-it-works" className="absolute -top-20" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection direction="up" delay={0.1}>
          <div className="bg-surface-50 rounded-3xl p-8 md:p-12 shadow-sm border border-surface-200 text-center relative overflow-hidden">
            {/* Progress bar */}
            <div className="absolute top-0 left-0 w-full h-2 bg-surface-200">
              <motion.div
                id="quiz-progress"
                className="h-full bg-brand"
                initial={{ width: "0%" }}
                animate={{ width: getProgressWidth() }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </div>

            <div className="mb-8 mt-4">
              <h2 className="text-3xl font-bold text-ink mb-4">Discover Your Care Style</h2>
              <p className="text-ink-muted text-lg">
                Answer a few quick questions to see how RemoteWard fits into your life.
              </p>
            </div>

            {/* Question Container with Animation */}
            <div className="min-h-[280px] flex flex-col justify-center relative">
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    variants={stepVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="w-full"
                  >
                    <h3 className="text-2xl font-semibold mb-6">
                      Who are you primarily looking for support for?
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                      <motion.button
                        onClick={() => setStep(2)}
                        className="p-6 border-2 border-surface-200 bg-white rounded-xl hover:border-brand hover:bg-brand/5 text-xl font-medium text-left flex items-center justify-between group cursor-pointer"
                        whileHover={{ scale: 1.03, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        Myself
                        <User className="text-surface-300 group-hover:text-brand w-6 h-6 transition-colors" />
                      </motion.button>
                      <motion.button
                        onClick={() => setStep(2)}
                        className="p-6 border-2 border-surface-200 bg-white rounded-xl hover:border-brand hover:bg-brand/5 text-xl font-medium text-left flex items-center justify-between group cursor-pointer"
                        whileHover={{ scale: 1.03, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        A Loved One
                        <Users className="text-surface-300 group-hover:text-brand w-6 h-6 transition-colors" />
                      </motion.button>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    variants={stepVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="w-full"
                  >
                    <h3 className="text-2xl font-semibold mb-6">
                      What is the most important feature for you?
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                      <motion.button
                        onClick={() => setStep(3)}
                        className="p-6 border-2 border-surface-200 bg-white rounded-xl hover:border-brand hover:bg-brand/5 text-lg font-medium text-left flex items-center justify-between group cursor-pointer"
                        whileHover={{ scale: 1.03, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        Reminders (Meds/Appts)
                        <Bell className="text-surface-300 group-hover:text-brand w-6 h-6 transition-colors" />
                      </motion.button>
                      <motion.button
                        onClick={() => setStep(3)}
                        className="p-6 border-2 border-surface-200 bg-white rounded-xl hover:border-brand hover:bg-brand/5 text-lg font-medium text-left flex items-center justify-between group cursor-pointer"
                        whileHover={{ scale: 1.03, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        Sharing updates with family
                        <Share2 className="text-surface-300 group-hover:text-brand w-6 h-6 transition-colors" />
                      </motion.button>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    variants={stepVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="w-full"
                  >
                    <motion.div
                      className="w-16 h-16 bg-accent-alt/20 text-accent-alt rounded-full flex items-center justify-center mx-auto mb-6"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
                    >
                      <Sparkles className="w-8 h-8 animate-pulse-slow" />
                    </motion.div>
                    <h3 className="text-3xl font-bold mb-4 text-brand-dark">
                      RemoteWard is perfect for you!
                    </h3>
                    <p className="text-lg text-ink-muted mb-8 max-w-xl mx-auto">
                      We&apos;ve tailored the app to make daily routines stress-free and keep everyone in the loop effortlessly. The design is large, clear, and easy to navigate.
                    </p>
                    <motion.a
                      href="https://play.google.com/store/apps/details?id=com.application.remoteward"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center bg-highlight hover:bg-highlight-dark text-ink font-bold text-lg px-8 py-4 rounded-xl shadow-md cursor-pointer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      Download the App Now
                    </motion.a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
