"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 1.8,
        duration: 0.6,
      }}
      className="hidden md:flex"
    >
      <Link
        href="#about"
        aria-label="Scroll to About section"
        className="group flex flex-col items-center justify-center"
      >
        {/* Label */}

        <motion.span
          animate={{
            opacity: [0.45, 1, 0.45],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            mb-3
            select-none

            text-[11px]
            font-medium
            uppercase
            tracking-[0.45em]

            text-cyan-300/80

            transition-colors
            duration-300

            group-hover:text-cyan-300
          "
        >
          Scroll
        </motion.span>

        {/* Mouse */}

        <motion.div
          whileHover={{
            y: -3,
            scale: 1.04,
          }}
          transition={{
            duration: 0.25,
          }}
          className="
            relative

            flex
            h-15
            w-8
            items-start
            justify-center

            rounded-full

            border
            border-white/15

            bg-white/[0.03]

            p-2

            backdrop-blur-2xl

            transition-all
            duration-300

            group-hover:border-cyan-400/35
            group-hover:bg-cyan-400/5
          "
        >
          <motion.div
            animate={{
              y: [0, 24, 0],
              opacity: [1, 0.45, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              h-2.5
              w-2.5

              rounded-full

              bg-cyan-400

              shadow-[0_0_12px_rgba(34,211,238,.8)]
            "
          />
        </motion.div>

        {/* Arrow */}

        <motion.div
          animate={{
            y: [0, 6, 0],
            scale: [1, 1.08, 1],
            opacity: [0.55, 1, 0.55],
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
            aria-hidden="true"
            className="
              text-cyan-400

              transition-transform
              duration-300

              group-hover:translate-y-1
            "
          />
        </motion.div>
      </Link>
    </motion.div>
  );
}