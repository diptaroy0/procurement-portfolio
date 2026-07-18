"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import FloatingCards from "./FloatingCards";

export default function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.4,
      }}
      className="relative flex justify-center lg:justify-end lg:translate-x-32 lg:-translate-y-44"
    >
      {/* ======================================================
          MAIN AMBIENT GLOW
      ======================================================= */}

      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.14, 0.22, 0.14],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-1/2
          h-[620px]
          w-[620px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-400/15
          blur-[150px]
        "
      />

      {/* ======================================================
          RIM LIGHT
      ======================================================= */}

      <div
        className="
          absolute
          left-1/2
          top-[52%]
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          border-cyan-400/12
          bg-gradient-to-b
          from-cyan-400/10
          via-cyan-400/5
          to-transparent
          backdrop-blur-sm
        "
      />

      {/* ======================================================
          EXTRA PORTRAIT LIGHT
      ======================================================= */}

      <div
        className="
          absolute
          left-1/2
          top-[48%]
          h-[380px]
          w-[380px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-300/10
          blur-[90px]
        "
      />

      {/* Floating Cards */}

      <FloatingCards />

      {/* ======================================================
          PORTRAIT
      ======================================================= */}

      <motion.div
        whileHover={{
          scale: 1.02,
          y: -4,
        }}
        animate={{
          y: [0, -6, 0],
        }}
        transition={{
          y: {
            duration: 6.5,
            repeat: Infinity,
            ease: "easeInOut",
          },
          scale: {
            duration: 0.3,
          },
        }}
        className="relative z-20"
      >
        <Image
          src="/images/dipta.png"
          alt="Dipta Roy"
          width={520}
          height={700}
          priority
          className="
            h-auto
            w-[440px]
            object-contain
            drop-shadow-[0_45px_90px_rgba(0,0,0,.65)]
            transition-all
            duration-500
            lg:w-[510px]
          "
        />
      </motion.div>
    </motion.div>
  );
}