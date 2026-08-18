"use client";

import { useRef, useState, useEffect } from "react";

/**
 * Hook that powers horizontal scroll-snap carousels on mobile.
 * Tracks which card is currently scrolled into view.
 * On desktop, the ref still works but the CSS doesn't activate scroll behavior.
 */
export function useMobileCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      const firstChild = el.firstElementChild as HTMLElement | null;
      if (!firstChild) return;
      const cardWidth = firstChild.offsetWidth;
      const gap = parseFloat(getComputedStyle(el).gap) || 16;
      const index = Math.round(el.scrollLeft / (cardWidth + gap));
      setActiveIndex(Math.max(0, index));
    };

    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return { scrollRef, activeIndex };
}

/**
 * Dot indicator strip shown below carousels on mobile.
 * Hidden on md+ via CSS (.mobile-dots is display:none at ≥768px).
 */
export function MobileCarouselDots({
  count,
  activeIndex,
}: {
  count: number;
  activeIndex: number;
}) {
  return (
    <div className="mobile-dots">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className={`mobile-dot ${activeIndex === i ? "active" : ""}`}
        />
      ))}
    </div>
  );
}
