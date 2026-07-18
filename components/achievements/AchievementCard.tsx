"use client";

import { motion } from "framer-motion";

import { GlassCard } from "@/components/common";
import { fadeUp } from "@/lib/animations";

interface AchievementCardProps {
  number: string;
  title: string;
  description: string;
}

export default function AchievementCard({
  number,
  title,
  description,
}: AchievementCardProps) {
  return (
    <motion.div {...fadeUp}>
      <GlassCard
        className="
          h-full
          p-6
          transition-all
          duration-300
          hover:-translate-y-2
          hover:border-cyan-400/30
          hover:shadow-[0_0_35px_rgba(34,211,238,.15)]
          sm:p-8
        "
      >
        <p
          className="
            bg-gradient-to-r
            from-cyan-300
            to-blue-500
            bg-clip-text
            text-4xl
            font-black
            text-transparent
            sm:text-5xl
          "
        >
          {number}
        </p>

        <h3 className="mt-5 text-2xl font-bold text-white">
          {title}
        </h3>

        <p className="mt-4 leading-7 text-gray-400 sm:leading-8">
          {description}
        </p>
      </GlassCard>
    </motion.div>
  );
}