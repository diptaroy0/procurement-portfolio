"use client";

import { motion } from "framer-motion";

import { fadeUp } from "@/lib/animations";

import { info } from "./info";

export default function AboutInfo() {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {info.map((item) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.title}
            {...fadeUp}
            whileHover={{
              y: -6,
              scale: 1.02,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
              group
              relative
              overflow-hidden
              rounded-2xl
              border
              border-cyan-400/15
              bg-[rgba(15,23,42,.78)]
              p-5
              backdrop-blur-2xl
              transition-all
              duration-300
              hover:border-cyan-400/40
              hover:shadow-[0_0_30px_rgba(34,211,238,.15)]
            "
          >
            {/* Hover Glow */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-r
                from-cyan-500/0
                via-cyan-400/5
                to-blue-500/0
                opacity-0
                transition-opacity
                duration-300
                group-hover:opacity-100
              "
            />

            <div className="relative flex items-center gap-4">

              {/* Icon */}

              <div
                className="
                  flex
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-gradient-to-br
                  from-cyan-500/20
                  via-cyan-400/10
                  to-blue-600/20
                  text-cyan-400
                  transition-all
                  duration-300
                  group-hover:scale-110
                  group-hover:rotate-6
                "
              >
                <Icon
                  size={20}
                  aria-hidden="true"
                />
              </div>

              {/* Content */}

              <div className="min-w-0">

                <p
                  className="
                    text-xs
                    font-medium
                    uppercase
                    tracking-wider
                    text-gray-500
                  "
                >
                  {item.title}
                </p>

                <p
                  className="
                    mt-1
                    text-sm
                    font-semibold
                    leading-6
                    text-white

                    sm:text-[15px]
                  "
                >
                  {item.value}
                </p>

              </div>

            </div>
          </motion.div>
        );
      })}
    </div>
  );
}