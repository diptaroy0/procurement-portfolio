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
            whileHover={{ y: -5 }}
            className="
              group
              flex
              items-center
              gap-4
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
            <div
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-xl
                bg-gradient-to-br
                from-cyan-500/20
                via-cyan-400/10
                to-blue-600/20
                text-cyan-400
                transition-transform
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

            <div>
              <p className="text-sm text-gray-400">
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
          </motion.div>
        );
      })}
    </div>
  );
}