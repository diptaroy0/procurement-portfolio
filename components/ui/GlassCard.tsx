"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  animate?: boolean;
  delay?: number;
  padding?: "none" | "sm" | "md" | "lg";
}

export default function GlassCard({
  children,
  className,
  hover = true,
  animate = true,
  delay = 0,
  padding = "lg",
}: GlassCardProps) {
  const paddings = {
    none: "",
    sm: "p-5",
    md: "p-7",
    lg: "p-10",
  };

  return (
    <motion.div
      initial={
        animate
          ? {
              opacity: 0,
              y: 40,
            }
          : false
      }
      whileInView={
        animate
          ? {
              opacity: 1,
              y: 0,
            }
          : undefined
      }
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        delay,
      }}
      whileHover={
        hover
          ? {
              y: -10,
              scale: 1.015,
            }
          : undefined
      }
      className={clsx(
        `
        group
        relative
        overflow-hidden
        rounded-[32px]

        border
        border-cyan-400/10

        bg-gradient-to-b
        from-[#182b46]/88
        via-[#122036]/92
        to-[#0b1423]/96

        backdrop-blur-[28px]

        shadow-[0_25px_70px_rgba(0,0,0,.45)]

        transition-all
        duration-500
        `,
        hover &&
          `
          hover:-translate-y-1
          hover:border-cyan-300/30
          hover:shadow-[0_30px_70px_rgba(34,211,238,.15)]
        `,
        paddings[padding],
        className
      )}
    >
      {/* ==========================================
          TOP LIGHT
      ========================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-cyan-300/40
          to-transparent
        "
      />

      {/* ==========================================
          AMBIENT GLOW
      ========================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-28
          -top-28
          h-56
          w-56
          rounded-full
          bg-cyan-400/8
          blur-[100px]
          transition-opacity
          duration-500
          group-hover:opacity-100
          opacity-70
        "
      />

      {/* ==========================================
          BOTTOM GLOW
      ========================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -bottom-32
          -left-24
          h-56
          w-56
          rounded-full
          bg-blue-500/5
          blur-[120px]
        "
      />

      {/* ==========================================
          BORDER
      ========================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-[32px]
          border
          border-white/5
        "
      />

      {/* ==========================================
          CONTENT
      ========================================== */}

      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}