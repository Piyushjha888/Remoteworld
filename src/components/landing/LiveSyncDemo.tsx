"use client";

import { useState } from "react";
import { Check, Bell, Activity, User, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "../ui/AnimatedSection";

export default function LiveSyncDemo() {
  const [medTaken, setMedTaken] = useState(false);
  const [bpLogged, setBpLogged] = useState(false);
  const [logs, setLogs] = useState<Array<{ id: string; time: string; msg: string; type: "med" | "bp" }>>([]);

  const triggerMed = () => {
    if (medTaken) return;
    setMedTaken(true);
    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setLogs((prev) => [
      { id: Math.random().toString(), time: now, msg: "Dad completed: Morning Medication (Aspirin)", type: "med" },
      ...prev
    ]);
  };

  const triggerBp = () => {
    if (bpLogged) return;
    setBpLogged(true);
    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setLogs((prev) => [
      { id: Math.random().toString(), time: now, msg: "Dad logged: Blood Pressure (120/80 mmHg - Normal)", type: "bp" },
      ...prev
    ]);
  };

  const resetDemo = () => {
    setMedTaken(false);
    setBpLogged(false);
    setLogs([]);
  };

  return (
    <section id="live-sync" className="py-16 sm:py-24 bg-surface-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <AnimatedSection direction="up" className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand font-semibold tracking-wide uppercase text-sm mb-3">
            Interactive Experience
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-ink mb-6">
            See the real-time sync in action.
          </h3>
          <p className="text-xl text-ink-muted">
            Tap a check-in action on the patient app to see how instantly family members are updated.
          </p>
        </AnimatedSection>

        {/* Live Simulator View */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-stretch">
          
          {/* Patient App View */}
          <div className="bg-white rounded-3xl border border-surface-200/60 p-6 shadow-sm flex flex-col justify-between min-h-[480px]">
            <div>
              <div className="flex items-center justify-between border-b border-surface-100 pb-4 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center text-brand">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-ink text-base">Dad&apos;s App</h4>
                    <p className="text-xs text-ink-muted">Patient Mode</p>
                  </div>
                </div>
                <div className="flex items-center space-x-1.5 text-xs font-bold text-accent-alt bg-accent/15 px-3 py-1 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-accent-alt animate-pulse" />
                  <span>ONLINE</span>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-sm font-bold text-ink-muted uppercase tracking-wider mb-2">Today&apos;s Tasks</p>
                
                {/* Task 1: Medication */}
                <div className="bg-surface-50 border border-surface-200/50 rounded-2xl p-5 flex items-center justify-between">
                  <div className="space-y-1">
                    <span className="text-xs bg-highlight/20 text-highlight-dark px-2.5 py-0.5 rounded-full font-bold">8:00 AM</span>
                    <h5 className="font-bold text-ink text-base">Aspirin 75mg</h5>
                    <p className="text-xs text-ink-muted">Take with water after breakfast</p>
                  </div>
                  <motion.button
                    onClick={triggerMed}
                    disabled={medTaken}
                    className={`px-4 py-2.5 rounded-xl text-sm font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                      medTaken 
                        ? "bg-accent/15 text-accent-alt border border-accent-alt/30" 
                        : "bg-brand hover:bg-brand-dark text-white shadow-sm"
                    }`}
                    whileTap={{ scale: 0.95 }}
                  >
                    {medTaken ? (
                      <>
                        Done <Check className="w-4 h-4" />
                      </>
                    ) : (
                      "I Took It"
                    )}
                  </motion.button>
                </div>

                {/* Task 2: Blood Pressure */}
                <div className="bg-surface-50 border border-surface-200/50 rounded-2xl p-5 flex items-center justify-between">
                  <div className="space-y-1">
                    <span className="text-xs bg-support-blue/20 text-support-blue px-2.5 py-0.5 rounded-full font-bold">Daily Vital</span>
                    <h5 className="font-bold text-ink text-base">Log Blood Pressure</h5>
                    <p className="text-xs text-ink-muted">Wrap cuff around left arm & check</p>
                  </div>
                  <motion.button
                    onClick={triggerBp}
                    disabled={bpLogged}
                    className={`px-4 py-2.5 rounded-xl text-sm font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                      bpLogged 
                        ? "bg-accent/15 text-accent-alt border border-accent-alt/30" 
                        : "bg-brand hover:bg-brand-dark text-white shadow-sm"
                    }`}
                    whileTap={{ scale: 0.95 }}
                  >
                    {bpLogged ? (
                      <>
                        Logged <Check className="w-4 h-4" />
                      </>
                    ) : (
                      "Record Now"
                    )}
                  </motion.button>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-surface-100 flex justify-between items-center text-xs text-ink-muted">
              <span>Large, readable action buttons</span>
              { (medTaken || bpLogged) && (
                <button 
                  onClick={resetDemo}
                  className="text-brand font-bold hover:underline cursor-pointer"
                >
                  Reset Simulation
                </button>
              )}
            </div>
          </div>

          {/* Caregiver Dashboard / Notification Feed */}
          <div className="bg-ink rounded-3xl p-6 shadow-sm text-white flex flex-col justify-between min-h-[480px]">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-brand-light">
                    <Bell className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base">Family Portal</h4>
                    <p className="text-xs text-surface-300">Caregiver Dashboard</p>
                  </div>
                </div>
                <div className="flex items-center space-x-1.5 text-xs bg-white/10 px-3 py-1 rounded-full text-surface-200">
                  <ShieldCheck className="w-3.5 h-3.5 text-accent-alt" />
                  <span>SECURE CHANNEL</span>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-sm font-bold text-surface-300 uppercase tracking-wider mb-2">Live Updates Log</p>
                
                <AnimatePresence initial={false}>
                  {logs.length === 0 ? (
                    <motion.div
                      key="empty"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="border border-dashed border-white/20 rounded-2xl p-8 text-center text-surface-400"
                    >
                      <Bell className="w-8 h-8 text-white/20 mx-auto mb-3 animate-bounce" />
                      <p className="text-sm">Waiting for Dad to complete tasks...</p>
                      <p className="text-xs text-white/40 mt-1">Check-in triggers will appear here instantly</p>
                    </motion.div>
                  ) : (
                    logs.map((log) => (
                      <motion.div
                        key={log.id}
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-start justify-between"
                      >
                        <div className="flex items-start space-x-3">
                          <div className={`w-8.5 h-8.5 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 ${
                            log.type === "med" ? "bg-highlight/20 text-highlight" : "bg-support-blue/20 text-support-blue"
                          }`}>
                            {log.type === "med" ? <Check className="w-4.5 h-4.5" /> : <Activity className="w-4.5 h-4.5" />}
                          </div>
                          <div>
                            <p className="text-sm font-bold text-white">{log.msg}</p>
                            <p className="text-xs text-surface-400 mt-0.5">Logged via secure sync</p>
                          </div>
                        </div>
                        <span className="text-xs text-surface-400 font-medium whitespace-nowrap ml-4">{log.time}</span>
                      </motion.div>
                    ))
                  )}
                </AnimatePresence>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 text-xs text-surface-300">
              No messaging tag games or check-in anxiety.
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
