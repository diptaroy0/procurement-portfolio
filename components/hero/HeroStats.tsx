"use client";

import { motion } from "framer-motion";
import {
  Globe2,
  ShoppingCart,
  Cpu,
} from "lucide-react";

const stats = [
  {
    icon: Globe2,
    value: "100+",
    label: "Global Suppliers",
  },
  {
    icon: ShoppingCart,
    value: "100+",
    label: "Purchasing Projects",
  },
  {
    icon: Cpu,
    value: "2+",
    label: "Years Experience",
  },
];

export default function HeroStats() {
  return (
    <div
      className="
        grid
        gap-5

        sm:grid-cols-3
      "
    >
      {stats.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.label}
            initial={{
              opacity: 0,
              y: 24,
              scale: 0.96,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.12,
            }}
            whileHover={{
              y: -6,
              scale: 1.02,
            }}
            className="
              group
              relative

              overflow-hidden

              rounded-3xl

              border
              border-white/10

              bg-white/[0.04]

              p-7

              backdrop-blur-xl

              transition-all
              duration-300

              hover:border-cyan-400/30
              hover:bg-white/[0.06]
              hover:shadow-[0_20px_50px_rgba(34,211,238,.12)]
            "
          >
            {/* Background Glow */}

            <div
              aria-hidden="true"
              className="
                absolute
                inset-0

                opacity-0

                bg-gradient-to-br
                from-cyan-500/10
                to-transparent

                transition-opacity
                duration-300

                group-hover:opacity-100
              "
            />

            <div className="relative z-10 flex items-center gap-5">
              <div
                className="
                  flex
                  h-14
                  w-14
                  shrink-0
                  items-center
                  justify-center

                  rounded-2xl

                  bg-gradient-to-br
                  from-cyan-500/20
                  to-blue-600/20

                  text-cyan-400

                  transition-transform
                  duration-300

                  group-hover:scale-110
                  group-hover:rotate-6
                "
              >
                <Icon
                  size={24}
                  aria-hidden="true"
                />
              </div>

              <div>
                <h3
                  className="
                    text-3xl
                    font-extrabold
                    tracking-tight
                    text-white
                  "
                >
                  {item.value}
                </h3>

                <p
                  className="
                    mt-1

                    text-sm

                    font-medium

                    text-gray-400
                  "
                >
                  {item.label}
                </p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}