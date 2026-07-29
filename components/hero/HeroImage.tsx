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
        items-center
        justify-center

        lg:justify-end

        lg:translate-x-8
        xl:translate-x-10
        2xl:translate-x-12
      "
    >
      {/* ==========================================
          MAIN AMBIENT GLOW
      ========================================== */}

      <motion.div
        aria-hidden="true"
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.16, 0.24, 0.16],
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

          bg-cyan-400/20

          blur-[100px]

          sm:h-[450px]
          sm:w-[450px]

          md:h-[520px]
          md:w-[520px]

          lg:h-[600px]
          lg:w-[600px]
          lg:blur-[120px]
        "
      />

      {/* ==========================================
          RADIAL LIGHT
      ========================================== */}

      <div
        aria-hidden="true"
        className="
          absolute
          left-1/2
          top-1/2

          h-[420px]
          w-[420px]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-[radial-gradient(circle,rgba(34,211,238,.18)_0%,transparent_72%)]

          pointer-events-none
        "
      />

      {/* ==========================================
          OUTER RING
      ========================================== */}

      <div
        aria-hidden="true"
        className="
          absolute
          left-1/2
          top-1/2

          h-[300px]
          w-[300px]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          border
          border-cyan-400/15

          bg-gradient-to-b
          from-cyan-400/10
          via-cyan-400/5
          to-transparent

          backdrop-blur-sm

          sm:h-[360px]
          sm:w-[360px]

          md:h-[420px]
          md:w-[420px]

          lg:h-[480px]
          lg:w-[480px]
        "
      />

      {/* ==========================================
          INNER GLOW
      ========================================== */}

      <div
        aria-hidden="true"
        className="
          absolute
          left-1/2
          top-1/2

          h-[250px]
          w-[250px]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-cyan-300/10

          blur-[70px]

          sm:h-[300px]
          sm:w-[300px]

          md:h-[340px]
          md:w-[340px]

          lg:h-[380px]
          lg:w-[380px]
        "
      />

      {/* ==========================================
          FLOATING CARDS
      ========================================== */}

      <div aria-hidden="true">
        <FloatingCards />
      </div>

      {/* ==========================================
          PORTRAIT
      ========================================== */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.94,
          rotate: -2,
          y: 20,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          rotate: 0,
          y: [0, -8, 0],
        }}
        whileHover={{
          scale: 1.03,
          y: -6,
        }}
        transition={{
          opacity: {
            duration: 0.8,
          },
          scale: {
            duration: 0.8,
          },
          rotate: {
            duration: 0.8,
          },
          y: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="
          relative
          z-20

          flex
          justify-center

          transform-gpu
          will-change-transform
        "
      >
        <Image
          src="/images/dipta.png"
          alt="Dipta Roy - Procurement & Supply Chain Professional"
          width={520}
          height={700}
          priority
          loading="eager"
          draggable={false}
          decoding="async"
          sizes="
            (max-width:640px) 290px,
            (max-width:768px) 340px,
            (max-width:1024px) 400px,
            (max-width:1280px) 470px,
            500px
          "
          className="
            h-auto
            w-[290px]

            object-contain
            select-none

            drop-shadow-[0_50px_100px_rgba(0,0,0,.65)]

            transition-all
            duration-500

            sm:w-[340px]
            md:w-[400px]
            lg:w-[470px]
            xl:w-[500px]
          "
        />
      </motion.div>
    </motion.div>
  );
}