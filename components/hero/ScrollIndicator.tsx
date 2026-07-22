"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.8, duration: 0.6 }}
      className="
        hidden
        md:flex
        flex-col
        items-center
        justify-center
      "
    >
      {/* Label */}

      <motion.span
        animate={{
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          mb-3
          text-[11px]
          font-medium
          uppercase
          tracking-[0.45em]
          text-cyan-300/70
          select-none
        "
      >
        Scroll
      </motion.span>

      {/* Mouse */}

      <motion.div
        animate={{
          y: [0, 6, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          relative
          flex
          h-16
          w-9
          items-start
          justify-center

          rounded-full
          border
          border-cyan-400/35

          bg-white/5
          p-2

          backdrop-blur-xl
        "
      >
        <motion.div
          animate={{
            y: [0, 22, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            h-3
            w-3
            rounded-full

            bg-cyan-400

            shadow-[0_0_12px_rgba(34,211,238,.8)]
          "
        />
      </motion.div>

      {/* Arrow */}

      <motion.div
        animate={{
          y: [0, 5, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="mt-3"
      >
        <ChevronDown
          size={18}
          className="text-cyan-400"
          aria-hidden="true"
        />
      </motion.div>
    </motion.div>
  );
}