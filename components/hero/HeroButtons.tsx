"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import { site } from "@/data/site";

export default function HeroButtons() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.8,
        duration: 0.6,
      }}
      className="mt-10 flex flex-wrap gap-4"
    >
      {/* Resume */}

      <motion.a
        whileHover={{
          scale: 1.05,
          y: -3,
        }}
        whileTap={{
          scale: 0.97,
        }}
        href={site.resume}
        download
        className="
          group
          inline-flex
          items-center
          gap-2
          rounded-2xl
          bg-gradient-to-r
          from-cyan-500
          to-blue-600
          px-8
          py-4
          font-semibold
          text-white
          shadow-lg
          transition-all
          duration-300
          hover:shadow-[0_0_30px_rgba(34,211,238,.45)]
        "
      >
        <Download
          size={18}
          className="transition-transform duration-300 group-hover:-translate-y-1"
        />

        Download Resume
      </motion.a>

      {/* LinkedIn */}

      <motion.a
        whileHover={{
          scale: 1.05,
          y: -3,
        }}
        whileTap={{
          scale: 0.97,
        }}
        href={site.linkedin}
        target="_blank"
        rel="noreferrer"
        className="
          inline-flex
          items-center
          gap-2
          rounded-2xl
          border
          border-white/10
          bg-white/5
          px-7
          py-4
          font-medium
          text-white
          backdrop-blur-xl
          transition-all
          duration-300
          hover:border-cyan-400/50
          hover:bg-cyan-500/10
        "
      >
        <FaLinkedinIn
          size={18}
          className="text-cyan-400"
        />

        LinkedIn
      </motion.a>

      {/* GitHub */}

      <motion.a
        whileHover={{
          scale: 1.05,
          y: -3,
        }}
        whileTap={{
          scale: 0.97,
        }}
        href={site.github}
        target="_blank"
        rel="noreferrer"
        className="
          inline-flex
          items-center
          gap-2
          rounded-2xl
          border
          border-white/10
          bg-white/5
          px-7
          py-4
          font-medium
          text-white
          backdrop-blur-xl
          transition-all
          duration-300
          hover:border-cyan-400/50
          hover:bg-cyan-500/10
        "
      >
        <FaGithub
          size={18}
          className="text-white"
        />

        GitHub
      </motion.a>
    </motion.div>
  );
}