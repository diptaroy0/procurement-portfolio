"use client";

import { motion } from "framer-motion";
import { BrainCircuit } from "lucide-react";

export default function SkillsHeader() {
  return (
    <div className="mx-auto max-w-3xl text-center">

      {/* Badge */}

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="
          inline-flex
          items-center
          gap-3
          rounded-full
          border
          border-cyan-400/20
          bg-cyan-500/5
          px-5
          py-3
          backdrop-blur-xl
        "
      >
        <BrainCircuit
          size={17}
          className="text-cyan-400"
        />

        <span className="text-sm font-medium text-cyan-300">
          Core Competencies
        </span>
      </motion.div>

      {/* Heading */}

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.15,
          duration: 0.7,
        }}
        className="mt-8 leading-[0.95]"
      >
        <span className="block text-5xl font-black text-white lg:text-7xl">
          Technical
        </span>

        <span className="block bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-600 bg-clip-text text-5xl font-black text-transparent lg:text-7xl">
          Expertise
        </span>
      </motion.h2>

      {/* Accent */}

      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 120 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.55,
          duration: 0.7,
        }}
        className="
          mx-auto
          mt-8
          h-1
          rounded-full
          bg-gradient-to-r
          from-cyan-400
          to-blue-600
        "
      />

      {/* Description */}

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.75,
          duration: 0.6,
        }}
        className="
          mx-auto
          mt-8
          max-w-2xl
          text-lg
          leading-9
          text-gray-400
        "
      >
        A combination of engineering knowledge, procurement expertise,
        ERP workflow management and industrial automation skills developed
        through hands-on experience in manufacturing and supply chain operations.
      </motion.p>

    </div>
  );
}