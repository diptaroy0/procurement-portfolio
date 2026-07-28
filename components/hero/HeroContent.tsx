"use client";

import { motion } from "framer-motion";
import { Circle } from "lucide-react";

import { IconBadge } from "@/components/common";
import { profile } from "@/data/profile";
import {
  fadeDown,
  fadeIn,
  fadeUp,
} from "@/lib/animations";

import HeroButtons from "./HeroButtons";

export default function HeroContent() {
  return (
    <div className="max-w-[680px]">
      {/* ==========================================
          Availability Badge
      =========================================== */}

      <motion.div
        {...fadeDown}
        className="mb-8"
      >
        <IconBadge
          icon={Circle}
          iconSize={10}
        >
          {profile.availability}
        </IconBadge>
      </motion.div>

      {/* ==========================================
          Hero Heading
      =========================================== */}

      <motion.h1
        id="hero-heading"
        {...fadeUp}
        className="leading-[1.02]"
      >
        <span
          className="
            block
            text-5xl
            font-black
            tracking-[-0.04em]
            text-white

            sm:text-6xl

            lg:text-7xl

            xl:text-[5rem]
          "
        >
          {profile.headline.line1}
        </span>

        <span
          className="
            mt-6
            block

            bg-gradient-to-r
            from-cyan-300
            via-sky-400
            to-blue-500

            bg-clip-text

            text-5xl
            font-black
            tracking-[-0.04em]
            text-transparent

            sm:text-6xl

            lg:text-7xl

            xl:text-[5rem]
          "
        >
          {profile.headline.line2}
        </span>
      </motion.h1>

      {/* ==========================================
          Accent Line
      =========================================== */}

      <motion.div
        initial={{
          width: 0,
          opacity: 0,
        }}
        animate={{
          width: 150,
          opacity: 1,
        }}
        transition={{
          delay: 0.45,
          duration: 0.7,
        }}
        className="
          mt-12
          h-[2px]
          rounded-full

          bg-gradient-to-r
          from-cyan-400
          via-sky-400
          to-transparent
        "
      />

      {/* ==========================================
          Professional Summary
      =========================================== */}

      <motion.p
        {...fadeUp}
        transition={{
          ...fadeUp.transition,
          delay: 0.2,
        }}
        className="
          mt-10

          max-w-[650px]

          text-base
          leading-8
          text-gray-300

          sm:text-lg
          sm:leading-9

          lg:text-xl
          lg:leading-10
        "
      >
        {profile.summary}
      </motion.p>

      {/* ==========================================
          Description
      =========================================== */}

      <motion.p
        {...fadeIn}
        transition={{
          ...fadeIn.transition,
          delay: 0.4,
        }}
        className="
          mt-8

          max-w-[650px]

          text-base
          leading-8
          text-gray-400

          sm:text-lg
          sm:leading-9
        "
      >
        {profile.description}
      </motion.p>

      {/* ==========================================
          CTA Buttons
      =========================================== */}

      <motion.div
        {...fadeUp}
        transition={{
          ...fadeUp.transition,
          delay: 0.6,
        }}
        className="mt-14"
      >
        <HeroButtons />
      </motion.div>
    </div>
  );
}