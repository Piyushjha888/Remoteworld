"use client";

import { useState, useEffect } from "react";
import { Users, Handshake, HelpCircle, type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

/* ── Reusable icon circle with layout morph active indicator ── */
function NavCircle({
  id,
  label,
  Icon,
  iconSrc,
  active,
  onClick,
}: {
  id: string;
  label: string;
  Icon?: LucideIcon;
  iconSrc?: string;
  active: boolean;
  onClick: (id: string) => void;
}) {
  return (
    <button
      onClick={() => onClick(id)}
      className="relative z-10 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer group"
      aria-label={label}
      title={label}
      style={{
        width: active ? 68 : 58,
        height: active ? 68 : 58,
        backgroundColor: "#323C3E",
      }}
    >
      {/* Morphing active ring */}
      {active && (
        <motion.div
          layoutId="activeRing"
          className="absolute rounded-full border-4 pointer-events-none"
          style={{
            top: -4,
            left: -4,
            right: -4,
            bottom: -4,
            borderColor: "#03A1AC",
            boxShadow: "0 6px 20px rgba(3,161,172,0.4)",
          }}
          transition={{ type: "spring", stiffness: 350, damping: 28 }}
        />
      )}
      {iconSrc ? (
        <Image
          src={iconSrc}
          alt={label}
          width={active ? 26 : 23}
          height={active ? 26 : 23}
          className="relative z-20 object-contain transition-all duration-300"
          style={{
            width: active ? 26 : 23,
            height: active ? 26 : 23,
            filter: active ? "brightness(1.2)" : "brightness(0.95) invert(0.95)",
          }}
          draggable={false}
        />
      ) : Icon ? (
        <Icon
          className="transition-colors duration-300 relative z-20"
          style={{
            width: active ? 26 : 23,
            height: active ? 26 : 23,
            color: active ? "#03A1AC" : "#f4f4fbff",
          }}
        />
      ) : null}
    </button>
  );
}

/* ── Tight connector WITHIN a pair (wide bridge) ── */
function PairBridge() {
  return (
    <div
      className="relative z-0"
      style={{
        width: 16,
        height: 42,
        backgroundColor: "#323c3ef5",
        marginLeft: -9,
        marginRight: -9,
        borderRadius: 6,
      }}
    />
  );
}

function PinchBridge() {
  return (
    <div
      className="relative z-0"
      style={{
        width: 18,
        height: 22,
        backgroundColor: "#323c3ef5",
        marginLeft: -6,
        marginRight: -6,
        borderRadius: 5,
      }}
    />
  );
}

export default function Navbar() {
  const [rawActiveSection, setRawActiveSection] = useState("home");
  const pathname = usePathname();
  const router = useRouter();

  const activeSection = pathname === "/" ? rawActiveSection : "";

  useEffect(() => {
    if (pathname !== "/") {
      return;
    }

    const handleScroll = () => {
      // If we are at the very top of the page, force highlight the Home tab
      if (window.scrollY < 120) {
        setRawActiveSection("home");
        return;
      }

      // If scrolled near the bottom of the page, highlight FAQ
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100) {
        setRawActiveSection("faq");
        return;
      }

      const scrollPos = window.scrollY + 350;

      const getAbsoluteTop = (id: string) => {
        const el = document.getElementById(id);
        if (!el) return Infinity;
        return el.getBoundingClientRect().top + window.scrollY;
      };

      const faqTop = getAbsoluteTop("faq");
      const partnersTop = Math.min(getAbsoluteTop("partners"), getAbsoluteTop("partner-with-us"));
      const aboutTop = Math.min(getAbsoluteTop("about-us"), getAbsoluteTop("why-we-started"));

      if (scrollPos >= faqTop) {
        setRawActiveSection("faq");
      } else if (scrollPos >= partnersTop) {
        setRawActiveSection("partners");
      } else if (scrollPos >= aboutTop) {
        setRawActiveSection("about-us");
      } else {
        setRawActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const handleNav = (id: string) => {
    if (pathname !== "/") {
      router.push(id === "home" ? "/" : `/#${id}`);
      return;
    }

    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

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

        {/* ═══════ LEFT PAIR: HOME & ABOUT US ═══════ */}
        <NavCircle
          id="home"
          label="Home"
          iconSrc="/logos/home.jpg"
          active={activeSection === "home"}
          onClick={handleNav}
        />
        <PairBridge />
        <NavCircle
          id="about-us"
          label="About Us"
          Icon={Users}
          active={activeSection === "about-us"}
          onClick={handleNav}
        />

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
            background: "linear-gradient(135deg, #4285F4 0%, #EA4335 33%, #FBBC05 66%, #34A853 100%)",
            padding: 3.5,
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <div
            className="w-full h-full rounded-full flex items-center justify-center transition-colors duration-300 group-hover:bg-[#2c2c30]"
            style={{ backgroundColor: "#323C3E" }}
          >
            {/* Circular white background badge */}
            <div
              className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-105"
            >
              <svg
                viewBox="0 0 466 511.98"
                className="w-5 h-5 ml-0.5"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="#EA4335" d="M199.9 237.8 1.4 470.17c7.22 24.57 30.16 41.81 55.8 41.81 11.16 0 20.93-2.79 29.3-8.37l244.16-139.46L199.9 237.8z" />
                <path fill="#FBBC04" d="m433.91 205.1-104.65-60-111.61 110.22 113.01 108.83 104.64-58.6c18.14-9.77 30.7-29.3 30.7-50.23-1.4-20.93-13.95-40.46-32.09-50.22z" />
                <path fill="#34A853" d="M199.42 273.45 329.27 145.1 87.9 8.37C79.53 2.79 68.36 0 57.2 0 30.7 0 6.98 18.14 1.4 41.86l198.02 231.59z" />
                <path fill="#4285F4" d="M1.39 41.86C0 46.04 0 51.63 0 57.2v397.64c0 5.57 0 9.76 1.4 15.34l216.27-214.86L1.39 41.86z" />
              </svg>
            </div>
          </div>
        </motion.a>

        {/* ─── pinch → right ─── */}
        <PinchBridge />

        {/* ═══════ RIGHT PAIR: PARTNERS & FAQ ═══════ */}
        <NavCircle
          id="partners"
          label="Partners"
          Icon={Handshake}
          active={activeSection === "partners"}
          onClick={handleNav}
        />
        <PairBridge />
        <NavCircle
          id="faq"
          label="FAQ"
          Icon={HelpCircle}
          active={activeSection === "faq"}
          onClick={handleNav}
        />

      </div>
    </motion.nav>
  );
}
