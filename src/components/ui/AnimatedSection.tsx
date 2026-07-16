"use client";

import { motion, type TargetAndTransition } from "framer-motion";
import { type ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right";

interface AnimatedSectionProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

const getInitial = (direction: Direction): TargetAndTransition => {
  const map: Record<Direction, TargetAndTransition> = {
    up:    { opacity: 0, y: 60 },
    down:  { opacity: 0, y: -60 },
    left:  { opacity: 0, x: -60 },
    right: { opacity: 0, x: 60 },
  };
  return map[direction];
};

const getAnimate = (): TargetAndTransition => ({
  opacity: 1,
  y: 0,
  x: 0,
});

export default function AnimatedSection({
  children,
  direction = "up",
  delay = 0,
  duration = 0.7,
  className = "",
  once = true,
}: AnimatedSectionProps) {
  return (
    <motion.div
      initial={getInitial(direction)}
      whileInView={getAnimate()}
      viewport={{ once, margin: "-80px" }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1] as const,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
