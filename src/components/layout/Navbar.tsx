"use client";

import { useState, useEffect } from "react";
import { Home, Compass, Play, Sparkles, HelpCircle, type LucideIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      // If we are at the very top of the page, force highlight the Home tab
      if (window.scrollY < 120) {
        setActiveSection("home");
        return;
      }

      const scrollPos = window.scrollY + 350;
      
      const getAbsoluteTop = (id: string) => {
        const el = document.getElementById(id);
        if (!el) return Infinity;
        return el.getBoundingClientRect().top + window.scrollY;
      };

      const faqTop = getAbsoluteTop("faq");
      const featuresTop = getAbsoluteTop("features");
      const quizTop = getAbsoluteTop("interactive-tool");

      if (scrollPos >= faqTop) {
        setActiveSection("faq");
      } else if (scrollPos >= featuresTop) {
        setActiveSection("features");
      } else if (scrollPos >= quizTop) {
        setActiveSection("how-it-works");
      } else {
        setActiveSection("home");
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (id: string) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  /* ── Reusable icon circle with layout morph active indicator ── */
  const NavCircle = ({ id, Icon }: { id: string; Icon: LucideIcon }) => {
    const active = id === activeSection;
    return (
      <button
        onClick={() => handleNav(id)}
        className="relative z-10 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer"
        aria-label={id}
        style={{
          width: active ? 68 : 58,
          height: active ? 68 : 58,
          backgroundColor: "#1c1c1e",
        }}
      >
        {/* Morphing active ring */}
        {active && (
          <motion.div
            layoutId="activeRing"
            className="absolute rounded-full border-4 border-white pointer-events-none"
            style={{
              top: -4,
              left: -4,
              right: -4,
              bottom: -4,
              boxShadow: "0 6px 20px rgba(0,0,0,0.35)",
            }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
          />
        )}
        <Icon
          className="transition-colors duration-300 relative z-20"
          style={{
            width: active ? 26 : 23,
            height: active ? 26 : 23,
            color: active ? "#fff" : "rgba(255,255,255,0.55)",
          }}
        />
      </button>
    );
  };

  /* ── Tight connector WITHIN a pair (wide bridge) ── */
  const PairBridge = () => (
    <div
      className="relative z-0"
      style={{
        width: 16,
        height: 42,
        backgroundColor: "#1c1c1e",
        marginLeft: -9,
        marginRight: -9,
        borderRadius: 6,
      }}
    />
  );

  const PinchBridge = () => (
    <div
      className="relative z-0"
      style={{
        width: 18,
        height: 22,
        backgroundColor: "#1c1c1e",
        marginLeft: -6,
        marginRight: -6,
        borderRadius: 5,
      }}
    />
  );

  return (
    <motion.nav
      className="fixed bottom-5 left-0 right-0 mx-auto z-50 w-fit"
      aria-label="Main navigation"
      style={{ filter: "drop-shadow(0 12px 32px rgba(0,0,0,0.35))" }}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.8, type: "spring", stiffness: 200, damping: 20 }}
    >
      <div className="flex items-center">

        {/* ═══════ LEFT PAIR ═══════ */}
        <NavCircle id="home" Icon={Home} />
        <PairBridge />
        <NavCircle id="how-it-works" Icon={Compass} />

        {/* ─── pinch → center ─── */}
        <PinchBridge />

        {/* ═══════ CENTER – PLAY STORE ═══════ */}
        <motion.a
          href="https://play.google.com/store/apps/details?id=com.application.remoteward"
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 rounded-full cursor-pointer group"
          aria-label="Download on Google Play"
          style={{
            width: 64,
            height: 64,
            background: "linear-gradient(135deg, #03A1AC 0%, #08E93C 100%)",
            padding: 3.5,
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <div
            className="w-full h-full rounded-full flex items-center justify-center transition-colors duration-300 group-hover:bg-[#2c2c30]"
            style={{ backgroundColor: "#1c1c1e" }}
          >
            <Play
              className="transition-colors duration-300 group-hover:text-white"
              style={{
                width: 26,
                height: 26,
                marginLeft: 2,
                color: "rgba(255,255,255,0.85)",
              }}
            />
          </div>
        </motion.a>

        {/* ─── pinch → right ─── */}
        <PinchBridge />

        {/* ═══════ RIGHT PAIR ═══════ */}
        <NavCircle id="features" Icon={Sparkles} />
        <PairBridge />
        <NavCircle id="faq" Icon={HelpCircle} />

      </div>
    </motion.nav>
  );
}
