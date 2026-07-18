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
    <div className="max-w-xl lg:max-w-2xl">
      {/* Availability */}

      <motion.div {...fadeDown} className="mb-8">
        <IconBadge icon={Circle} iconSize={10}>
          {profile.availability}
        </IconBadge>
      </motion.div>

      {/* Heading */}

      <motion.h1
        id="hero-heading"
        {...fadeUp}
        className="leading-[0.95]"
      >
        <span
          className="
            block
            text-5xl
            font-black
            tracking-tight
            text-white
            sm:text-6xl
            xl:text-8xl
          "
        >
          {profile.headline.line1}
        </span>

        <span
          className="
            block
            text-5xl
            font-black
            tracking-tight
            text-white
            sm:text-6xl
            xl:text-8xl
          "
        >
          {profile.headline.line2}
        </span>

        <span
          className="
            mt-5
            block
            bg-gradient-to-r
            from-cyan-300
            via-sky-400
            to-blue-500
            bg-clip-text
            text-5xl
            font-black
            tracking-tight
            text-transparent
            sm:text-6xl
            xl:text-8xl
          "
        >
          {profile.headline.line3}
        </span>

        <span
          className="
            block
            bg-gradient-to-r
            from-cyan-300
            via-sky-400
            to-blue-500
            bg-clip-text
            text-5xl
            font-black
            tracking-tight
            text-transparent
            sm:text-6xl
            xl:text-8xl
          "
        >
          {profile.headline.line4}
        </span>
      </motion.h1>

      {/* Accent Line */}

      <motion.div
        initial={{ width: 0 }}
        animate={{ width: 120 }}
        transition={{
          duration: 0.7,
          delay: 0.5,
        }}
        className="mt-10 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600"
      />

      {/* Summary */}

      <motion.p
        {...fadeUp}
        transition={{
          ...fadeUp.transition,
          delay: 0.2,
        }}
        className="
          mt-10
          text-base
          leading-8
          text-gray-300
          sm:text-lg
          sm:leading-9
        "
      >
        {profile.summary}
      </motion.p>

      {/* Description */}

      <motion.p
        {...fadeIn}
        transition={{
          ...fadeIn.transition,
          delay: 0.4,
        }}
        className="
          mt-8
          text-base
          leading-8
          text-gray-400
          sm:text-lg
          sm:leading-9
        "
      >
        {profile.description}
      </motion.p>

      {/* Buttons */}

      <motion.div
        {...fadeUp}
        transition={{
          ...fadeUp.transition,
          delay: 0.6,
        }}
        className="mt-12"
      >
        <HeroButtons />
      </motion.div>
    </div>
  );
}