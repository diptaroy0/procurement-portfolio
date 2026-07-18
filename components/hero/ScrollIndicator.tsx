"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2 }}
      className="
        absolute
        left-1/2
        -translate-x-1/2
        bottom-[-30px]
        hidden
        lg:flex
        flex-col
        items-center
      "
    >
      <motion.span
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="mb-3 text-[11px] uppercase tracking-[0.45em] text-cyan-300/70"
      >
        Scroll
      </motion.span>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="
          flex
          h-16
          w-9
          items-start
          justify-center
          rounded-full
          border
          border-cyan-400/40
          bg-white/5
          p-2
          backdrop-blur-xl
        "
      >
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="
            h-3
            w-3
            rounded-full
            bg-cyan-400
            shadow-[0_0_12px_rgba(34,211,238,.8)]
          "
        />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 5, 0],
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="mt-3"
      >
        <ChevronDown
          size={18}
          className="text-cyan-400"
        />
      </motion.div>
    </motion.div>
  );
}