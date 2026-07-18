"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness } from "lucide-react";

export default function ProjectsHeader() {
  return (
    <div className="relative mx-auto max-w-4xl text-center">
      {/* Background Glow */}

      <div
        className="
          absolute
          left-1/2
          top-20
          -z-10
          h-56
          w-56
          -translate-x-1/2
          rounded-full
          bg-cyan-500/10
          blur-[100px]
        "
      />

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
        <div className="rounded-full bg-cyan-500/15 p-2">
          <BriefcaseBusiness
            size={16}
            className="text-cyan-400"
          />
        </div>

        <span className="text-sm font-semibold tracking-wide text-cyan-300">
          FEATURED PROJECTS
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
        className="mt-10"
      >
        <span className="block text-4xl font-black leading-none text-white sm:text-5xl lg:text-7xl">
          Selected
        </span>

        <span
          className="
            mt-2
            block
            bg-gradient-to-r
            from-cyan-400
            via-sky-400
            to-blue-600
            bg-clip-text
            text-4xl
            font-black
            leading-none
            text-transparent
            sm:text-5xl
            lg:text-7xl
          "
        >
          Projects
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
          h-[4px]
          rounded-full
          bg-gradient-to-r
          from-cyan-400
          via-sky-400
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
          max-w-3xl
          text-base
          leading-8
          text-slate-400
          sm:text-lg
          sm:leading-9
        "
      >
        A curated portfolio of procurement, industrial automation and ERP
        projects showcasing engineering precision, strategic sourcing,
        international supplier management and process optimization that
        delivered measurable business value.
      </motion.p>
    </div>
  );
}