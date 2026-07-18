"use client";

import { motion } from "framer-motion";

import AboutInfo from "./AboutInfo";
import AboutHighlights from "./AboutHighlights";

export default function AboutContent() {
  return (
    <div className="max-w-2xl">

      {/* Section Badge */}

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-6 inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-500/5 px-5 py-3 backdrop-blur-xl"
      >
        <span className="h-2.5 w-2.5 rounded-full bg-cyan-400 animate-pulse"></span>

        <span className="text-sm font-medium text-cyan-300">
          About Me
        </span>
      </motion.div>

      {/* Heading */}

      <motion.h2
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .6 }}
        className="text-5xl font-black leading-tight text-white lg:text-6xl"
      >
        Building Efficient
        <br />

        <span className="gradient-text">
          Procurement &
        </span>

        <br />

        <span className="gradient-text">
          Supply Chain Solutions
        </span>
      </motion.h2>

      {/* Accent */}

      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 120 }}
        viewport={{ once: true }}
        transition={{ duration: .7, delay: .2 }}
        className="mt-8 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600"
      />

      {/* Paragraph 1 */}

      <motion.p
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .6, delay: .25 }}
        className="mt-8 text-lg leading-[2.2rem] text-gray-300"
      >
        I am an Electrical & Electronic Engineer with professional experience
        in Procurement, Supply Chain Management, Industrial Automation,
        International Supplier Management and ERP-based procurement operations.

        My passion lies in optimizing sourcing strategies, reducing procurement
        costs and building long-term supplier relationships while ensuring
        engineering compliance and operational efficiency.
      </motion.p>

      {/* Paragraph 2 */}

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: .7, delay: .45 }}
        className="mt-6 text-lg leading-[2.2rem] text-gray-400"
      >
        Having worked with over 100 international supplier organizations and
        managed procurement activities worth more than USD 3 Million, I combine
        engineering knowledge with commercial decision-making to deliver
        measurable business value.
      </motion.p>

      {/* Personal Information */}

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .7, delay: .55 }}
        className="mt-10"
      >
        <AboutInfo />
      </motion.div>

      {/* Highlights */}

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .7, delay: .7 }}
        className="mt-12"
      >
        <AboutHighlights />
      </motion.div>

    </div>
  );
}