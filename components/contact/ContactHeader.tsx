"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function ContactHeader() {
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
        <Send
          size={16}
          aria-hidden="true"
          focusable="false"
          className="text-cyan-400"
        />

        <span className="text-sm font-medium text-cyan-300">
          Let's Connect
        </span>
      </motion.div>

      {/* Heading */}

      <motion.h2
        id="contact-heading"
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
          Let's Build
        </span>

        <span className="block bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-600 bg-clip-text text-5xl font-black text-transparent lg:text-7xl">
          Something Exceptional
        </span>
      </motion.h2>

      {/* Accent */}

      <motion.div
        aria-hidden="true"
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
        Whether you're looking for procurement expertise, strategic sourcing,
        ERP implementation support, or industrial automation solutions, I'd be
        happy to discuss how I can contribute to your organization.
      </motion.p>

    </div>
  );
}