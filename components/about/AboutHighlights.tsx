"use client";

import { motion } from "framer-motion";

import { fadeUp } from "@/lib/animations";

import { highlights } from "./highlights";

export default function AboutHighlights() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {highlights.map((item) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.title}
            {...fadeUp}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            className="
              group
              rounded-3xl
              border
              border-cyan-400/15
              bg-[rgba(15,23,42,.78)]
              p-6
              backdrop-blur-2xl
              transition-all
              duration-300
              hover:border-cyan-400/40
              hover:shadow-[0_0_35px_rgba(34,211,238,.18)]
            "
          >
            <div
              className={`
                mb-5
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                bg-gradient-to-br
                ${item.color}
                text-cyan-400
                transition-all
                duration-300
                group-hover:rotate-6
                group-hover:scale-110
              `}
            >
              <Icon
                size={24}
                aria-hidden="true"
              />
            </div>

            <p className="gradient-text text-3xl font-black">
              {item.value}
            </p>

            <p className="mt-2 text-sm leading-6 text-gray-400">
              {item.title}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}