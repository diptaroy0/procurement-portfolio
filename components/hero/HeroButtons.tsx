"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

import { site } from "@/data/site";

const primaryButton =
  "group inline-flex h-14 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 px-9 text-base font-semibold text-white shadow-[0_15px_35px_rgba(14,165,233,.28)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_50px_rgba(14,165,233,.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400";

const secondaryButton =
  "group inline-flex h-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-6 text-base font-medium text-slate-200 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400";

export default function HeroButtons() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        delay: 0.7,
      }}
      className="flex flex-wrap items-center gap-4
lg:gap-5"
    >
      {/* Resume */}

      <a
        href="/resume/Resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    download="Resume.pdf"
        title="Download CV"
        className={primaryButton}
      >
        <Download
          size={20}
          aria-hidden="true"
          className="mr-3 shrink-0 transition-transform duration-300 group-hover:-translate-y-1"
        />

        View Resume

        <ArrowRight
          size={18}
          className="ml-3 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
        />
      </a>

      {/* LinkedIn */}

      <Link
        href={site.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        title="Visit LinkedIn Profile"
        aria-label="Visit LinkedIn Profile"
        className={secondaryButton}
      >
        <FaLinkedin
          className="
            mr-2.5
            shrink-0
            text-[20px]
            transition-transform
            duration-300
            group-hover:scale-110
          "
        />

        LinkedIn
      </Link>

      {/* GitHub */}

      <Link
        href={site.github}
        target="_blank"
        rel="noopener noreferrer"
        title="Visit GitHub Profile"
        aria-label="Visit GitHub Profile"
        className={secondaryButton}
      >
        <FaGithub
          className="
            mr-2.5
            shrink-0
            text-[20px]
            transition-transform
            duration-300
            group-hover:rotate-6
          "
        />

        GitHub
      </Link>
    </motion.div>
  );
}