"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
  className?: string;
}

export default function FadeIn({
  children,
  direction = "up",
  delay = 0,
  duration = 0.7,
  distance = 40,
  once = true,
  className,
}: FadeInProps) {
  const variants = {
    up: {
      opacity: 0,
      y: distance,
    },

    down: {
      opacity: 0,
      y: -distance,
    },

    left: {
      opacity: 0,
      x: distance,
    },

    right: {
      opacity: 0,
      x: -distance,
    },
  };

  return (
    <motion.div
      initial={variants[direction]}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{
        once,
        amount: 0.2,
      }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}