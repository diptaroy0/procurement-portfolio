"use client";

import { motion } from "framer-motion";

export default function GlowBackground() {
  return (
    <>
      {/* Right Ambient Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="
          pointer-events-none
          absolute
          right-[-260px]
          top-1/2
          h-[650px]
          w-[650px]
          -translate-y-1/2
          rounded-full
          bg-cyan-500/8
          blur-[170px]
        "
      />

      {/* Left Ambient Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.2,
          duration: 1,
        }}
        className="
          pointer-events-none
          absolute
          left-[-220px]
          bottom-[-120px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-blue-600/8
          blur-[150px]
        "
      />
    </>
  );
}