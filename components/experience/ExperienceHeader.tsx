"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness } from "lucide-react";

export default function ExperienceHeader() {
  return (
    <div className="mx-auto max-w-4xl text-center">

      {/* Badge */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-500/5 px-5 py-3 backdrop-blur-xl"
      >
        <BriefcaseBusiness
          size={18}
          className="text-cyan-400"
        />

        <span className="text-sm font-medium text-cyan-300">
          Professional Journey
        </span>
      </motion.div>

      {/* Heading */}

      <motion.h2
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15, duration: 0.6 }}
        className="mt-8 text-5xl font-black tracking-tight text-white lg:text-7xl"
      >
        Career
        <span className="block bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-600 bg-clip-text text-transparent">
          Experience
        </span>
      </motion.h2>

      {/* Accent */}

      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 120 }}
        viewport={{ once: true }}
        transition={{ delay: 0.35, duration: 0.6 }}
        className="mx-auto mt-8 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600"
      />

      {/* Description */}

      <motion.p
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.45, duration: 0.6 }}
        className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-gray-400"
      >
        My professional journey reflects continuous growth—from industrial
        automation and maintenance engineering to procurement, international
        supplier management, ERP-driven operations, and strategic sourcing.
        Each role strengthened my technical expertise, commercial decision-making,
        and leadership capabilities.
      </motion.p>

    </div>
  );
}