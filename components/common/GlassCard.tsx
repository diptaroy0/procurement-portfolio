"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import { ReactNode } from "react";

type GlassCardProps = {
  children: ReactNode;
  className?: string;

  hover?: boolean;
  animate?: boolean;

  padding?: "none" | "sm" | "md" | "lg";
};

export default function GlassCard({
  children,
  className,

  hover = true,
  animate = true,

  padding = "lg",
}: GlassCardProps) {
  const content = (
    <div
      className={clsx(
        "rounded-[32px]",
        "border border-cyan-400/15",
        "bg-[rgba(15,23,42,.72)]",
        "backdrop-blur-2xl",
        "shadow-[0_20px_60px_rgba(0,0,0,.45)]",

        {
          "p-0": padding === "none",
          "p-5": padding === "sm",
          "p-6": padding === "md",
          "p-8": padding === "lg",
        },

        className
      )}
    >
      {children}
    </div>
  );

  if (!animate) return content;

  return (
    <motion.div
      whileHover={
        hover
          ? {
              y: -8,
              scale: 1.02,
            }
          : undefined
      }
      transition={{
        duration: 0.25,
      }}
    >
      {content}
    </motion.div>
  );
}