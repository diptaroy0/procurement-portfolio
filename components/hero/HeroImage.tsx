"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { heroRight } from "@/lib/animations";

import FloatingCards from "./FloatingCards";

export default function HeroImage() {
  return (
    <motion.div
      {...heroRight}
      className="
        relative
        flex
        justify-center
        lg:justify-end
        lg:translate-x-20
        xl:translate-x-28
        lg:-translate-y-24
        xl:-translate-y-36
      "
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
          h-[380px]
          w-[380px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-400/15
          blur-[100px]

          sm:h-[460px]
          sm:w-[460px]

          md:h-[520px]
          md:w-[520px]

          lg:h-[620px]
          lg:w-[620px]
          lg:blur-[150px]
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
          h-[300px]
          w-[300px]
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

          sm:h-[360px]
          sm:w-[360px]

          md:h-[420px]
          md:w-[420px]

          lg:h-[500px]
          lg:w-[500px]
        "
      />

      {/* ======================================================
          PORTRAIT LIGHT
      ======================================================= */}

      <div
        className="
          absolute
          left-1/2
          top-[48%]
          h-[260px]
          w-[260px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-300/10
          blur-[70px]

          sm:h-[320px]
          sm:w-[320px]

          md:h-[340px]
          md:w-[340px]

          lg:h-[380px]
          lg:w-[380px]
          lg:blur-[90px]
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
          alt="Dipta Roy - Procurement & Supply Chain Professional"
          width={520}
          height={700}
          priority
          className="
            h-auto
            w-[300px]
            object-contain
            drop-shadow-[0_45px_90px_rgba(0,0,0,.65)]
            transition-all
            duration-500

            sm:w-[360px]
            md:w-[420px]
            lg:w-[510px]
          "
        />
      </motion.div>
    </motion.div>
  );
}