"use client";

import { motion } from "framer-motion";
import {
  Globe,
  BriefcaseBusiness,
  Award,
  Database,
} from "lucide-react";

import { profile } from "@/data/profile";

const icons = {
  globe: Globe,
  briefcase: BriefcaseBusiness,
  award: Award,
  database: Database,
};

export default function HeroStats() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2 }}
      className="mt-14 grid grid-cols-2 gap-5 lg:grid-cols-4"
    >
      {profile.statistics.map((item, index) => {
        const Icon =
          icons[item.icon as keyof typeof icons];

        return (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.2 + index * 0.15,
            }}
            whileHover={{
              y: -8,
              scale: 1.03,
            }}
            className="
              group
              rounded-3xl
              border
              border-white/10
              bg-white/5
              p-6
              backdrop-blur-xl
              transition-all
              duration-300
              hover:border-cyan-400/40
              hover:shadow-[0_0_35px_rgba(34,211,238,.18)]
            "
          >
            <div
              className="
                mb-5
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-2xl
                bg-gradient-to-br
                from-cyan-500/20
                to-blue-600/20
                text-cyan-400
                transition-transform
                duration-300
                group-hover:rotate-6
                group-hover:scale-110
              "
            >
              <Icon size={22} />
            </div>

            <p className="text-4xl font-bold gradient-text">
              {item.value}
            </p>

            <p className="mt-2 text-sm leading-6 text-gray-400">
              {item.label}
            </p>
          </motion.div>
        );
      })}
    </motion.div>
  );
}