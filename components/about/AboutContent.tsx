"use client";

import { motion } from "framer-motion";

import AboutInfo from "./AboutInfo";
import AboutHighlights from "./AboutHighlights";

export default function AboutContent() {
  return (
    <div className="max-w-2xl">
      {/* Section Badge */}

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-6 inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-500/5 px-5 py-3 backdrop-blur-xl"
      >
        <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-cyan-400" />

        <span className="text-sm font-medium tracking-wide text-cyan-300">
          About Me
        </span>
      </motion.div>

      {/* Heading */}

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-black leading-tight text-white lg:text-6xl"
      >
        Where Engineering
        <br />

        <span className="gradient-text">
          Meets Strategic
        </span>

        <br />

        <span className="gradient-text">
          Procurement
        </span>
      </motion.h2>

      {/* Accent */}

      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 120 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mt-8 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600"
      />

      {/* Introduction */}

      <motion.p
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="mt-8 text-lg leading-[2.1rem] text-gray-300"
      >
        I am an Electrical & Electronic Engineer specializing in
        Procurement, Supply Chain Management, Industrial Automation,
        ERP-based procurement operations, and international supplier
        development. My work combines engineering precision with
        commercial decision-making to build efficient, reliable, and
        cost-effective supply chain solutions.
      </motion.p>

      {/* Experience */}

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.45 }}
        className="mt-6 text-lg leading-[2.1rem] text-gray-400"
      >
        Throughout my professional career, I have collaborated with
        more than <span className="font-semibold text-cyan-300">100 international suppliers</span>,
        managed procurement activities exceeding{" "}
        <span className="font-semibold text-cyan-300">USD&nbsp;3 Million</span>,
        and contributed to sourcing, negotiation, supplier relationship
        management, and ERP-driven procurement processes.
        I am currently pursuing a
        <span className="font-semibold text-white">
          {" "}
          Professional MBA in Supply Chain Management
        </span>{" "}
        at the Bangladesh University of Professionals (BUP).
      </motion.p>

      {/* Section Label */}

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.55 }}
        className="mt-12 mb-5"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
          Core Information
        </p>
      </motion.div>

      {/* Information */}

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.6 }}
      >
        <AboutInfo />
      </motion.div>

      {/* Section Label */}

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.75 }}
        className="mt-14 mb-5"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
          Career Highlights
        </p>
      </motion.div>

      {/* Highlights */}

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.8 }}
      >
        <AboutHighlights />
      </motion.div>
    </div>
  );
}