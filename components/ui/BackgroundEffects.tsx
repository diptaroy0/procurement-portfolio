"use client";

import { motion } from "framer-motion";

export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-[#081120]">

      {/* ======================================================
          BASE LAYER
      ======================================================= */}

      <div className="absolute inset-0 bg-[#081120]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#091726_0%,#081120_55%,#050B16_100%)]" />

      {/* ======================================================
          TOP LEFT GLOW
      ======================================================= */}

      <motion.div
        animate={{
          x: [0, 35, -20, 0],
          y: [0, 20, -20, 0],
          opacity: [0.16, 0.22, 0.16],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -left-72
          -top-72
          h-[760px]
          w-[760px]
          rounded-full
          bg-cyan-400/18
          blur-[220px]
        "
      />

      {/* ======================================================
          TOP RIGHT GLOW
      ======================================================= */}

      <motion.div
        animate={{
          x: [0, -35, 20, 0],
          y: [0, 25, -15, 0],
          opacity: [0.10, 0.16, 0.10],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -right-72
          -top-72
          h-[740px]
          w-[740px]
          rounded-full
          bg-blue-500/16
          blur-[220px]
        "
      />

      {/* ======================================================
          BOTTOM LEFT GLOW
      ======================================================= */}

      <motion.div
        animate={{
          x: [0, 25, -20, 0],
          y: [0, -35, 15, 0],
          opacity: [0.08, 0.13, 0.08],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -left-80
          -bottom-80
          h-[820px]
          w-[820px]
          rounded-full
          bg-blue-700/14
          blur-[220px]
        "
      />

      {/* ======================================================
          BOTTOM RIGHT GLOW
      ======================================================= */}

      <motion.div
        animate={{
          x: [0, -25, 20, 0],
          y: [0, -30, 15, 0],
          opacity: [0.08, 0.13, 0.08],
        }}
        transition={{
          duration: 34,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -right-80
          -bottom-80
          h-[820px]
          w-[820px]
          rounded-full
          bg-cyan-500/14
          blur-[220px]
        "
      />

      {/* ======================================================
          SOFT CENTER FALLOFF
          (Keeps center dark instead of bright)
      ======================================================= */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[760px]
          w-[760px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#081120]/55
          blur-[140px]
        "
      />

      {/* ======================================================
          ENGINEERING GRID
      ======================================================= */}

      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />

      {/* ======================================================
          EDGE VIGNETTE
      ======================================================= */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,.45)_100%)]" />

      {/* ======================================================
          FLOATING LIGHTS
      ======================================================= */}

      <Particle left="18%" top="18%" />

      <Particle right="22%" top="30%" delay={1} />

      <Particle left="28%" bottom="20%" delay={2} />

      <Particle right="26%" bottom="16%" delay={3} />

    </div>
  );
}

function Particle({
  left,
  right,
  top,
  bottom,
  delay = 0,
}: {
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
  delay?: number;
}) {
  return (
    <motion.div
      animate={{
        y: [0, -16, 0],
        opacity: [0.35, 1, 0.35],
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{
        left,
        right,
        top,
        bottom,
      }}
      className="
        absolute
        h-2
        w-2
        rounded-full
        bg-cyan-300
        shadow-[0_0_18px_4px_rgba(34,211,238,.45)]
      "
    />
  );
}