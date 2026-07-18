"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

import { GlassCard } from "@/components/common";

type Props = {
  index: number;
  icon: LucideIcon;
  title: string;
  description: string;
};

export default function WorkflowCard({
  index,
  icon: Icon,
  title,
  description,
}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.08,
      }}
    >
      <GlassCard padding="md">
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10">
          <Icon
            size={28}
            className="text-cyan-400"
            aria-hidden="true"
          />
        </div>

        <span className="text-sm font-semibold text-cyan-300">
          Step {index + 1}
        </span>

        <h3 className="mt-2 text-xl font-bold text-white">
          {title}
        </h3>

        <p className="mt-4 leading-7 text-gray-400">
          {description}
        </p>
      </GlassCard>
    </motion.div>
  );
}