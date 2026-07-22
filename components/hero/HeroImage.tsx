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

          h-[360px]
          w-[360px]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full
          bg-cyan-400/15
          blur-[90px]

          sm:h-[430px]
          sm:w-[430px]

          md:h-[500px]
          md:w-[500px]

          lg:h-[560px]
          lg:w-[560px]
          lg:blur-[140px]
        "
      />

      {/* ======================================================
          OUTER RING
      ======================================================= */}

      <div
        className="
          absolute
          left-1/2
          top-1/2

          h-[290px]
          w-[290px]

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

          sm:h-[350px]
          sm:w-[350px]

          md:h-[410px]
          md:w-[410px]

          lg:h-[470px]
          lg:w-[470px]
        "
      />

      {/* ======================================================
          INNER GLOW
      ======================================================= */}

      <div
        className="
          absolute
          left-1/2
          top-1/2

          h-[240px]
          w-[240px]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full
          bg-cyan-300/10
          blur-[65px]

          sm:h-[300px]
          sm:w-[300px]

          md:h-[330px]
          md:w-[330px]

          lg:h-[360px]
          lg:w-[360px]
          lg:blur-[85px]
        "
      />

      {/* ======================================================
          FLOATING CARDS
      ======================================================= */}

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
        className="
          relative
          z-20
          flex
          justify-center
        "
      >
        <Image
          src="/images/dipta.png"
          alt="Dipta Roy - Procurement & Supply Chain Professional"
          width={520}
          height={700}
          priority
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

            drop-shadow-[0_40px_80px_rgba(0,0,0,.60)]

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