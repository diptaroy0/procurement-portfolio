"use client";

import { motion } from "framer-motion";

import { profile } from "@/data/profile";

import HeroButtons from "./HeroButtons";

export default function HeroContent() {
  return (
    <div className="max-w-2xl">

      {/* Badge */}

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 inline-flex items-center gap-3 rounded-full border border-cyan-400/25 bg-cyan-500/5 px-5 py-3 backdrop-blur-xl"
      >
        <span className="h-2.5 w-2.5 rounded-full bg-cyan-400 animate-pulse" />

        <span className="text-sm font-medium text-cyan-300">
          {profile.availability}
        </span>
      </motion.div>

      {/* Heading */}

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.7 }}
        className="leading-[0.95]"
      >
        <span className="block text-6xl font-black tracking-tight text-white lg:text-8xl">
          {profile.headline.line1}
        </span>

        <span className="block text-6xl font-black tracking-tight text-white lg:text-8xl">
          {profile.headline.line2}
        </span>

        <span className="mt-5 block bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-6xl font-black tracking-tight text-transparent lg:text-8xl">
          {profile.headline.line3}
        </span>

        <span className="block bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-6xl font-black tracking-tight text-transparent lg:text-8xl">
          {profile.headline.line4}
        </span>
      </motion.h1>

      {/* Accent Line */}

      <motion.div
        initial={{ width: 0 }}
        animate={{ width: 120 }}
        transition={{ delay: 0.7, duration: 0.7 }}
        className="mt-10 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600"
      />

      {/* Main Paragraph */}

      <motion.p
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-10 text-lg leading-[2.35rem] text-gray-300"
      >
        {profile.summary}
      </motion.p>

      {/* Secondary Paragraph */}

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.75 }}
        className="mt-8 text-lg leading-[2.35rem] text-gray-400"
      >
        {profile.description}
      </motion.p>

      {/* Buttons */}

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.95 }}
        className="mt-12"
      >
        <HeroButtons />
      </motion.div>

    </div>
  );
}