"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

import { GlassCard } from "@/components/common";
import { fadeUp } from "@/lib/animations";

interface WorkflowCardProps {
  index: number;
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function WorkflowCard({
  index,
  icon: Icon,
  title,
  description,
}: WorkflowCardProps) {
  return (
    <motion.div
      {...fadeUp}
      transition={{
        ...fadeUp.transition,
        delay: index * 0.08,
      }}
    >
      <GlassCard
        padding="md"
        className="
          h-full
          transition-all
          duration-300

          hover:-translate-y-2
          hover:border-cyan-400/30
          hover:shadow-[0_0_35px_rgba(34,211,238,.15)]
        "
      >
        <div
          className="
            mb-5
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            bg-cyan-500/10

            lg:h-16
            lg:w-16
          "
        >
          <Icon
            size={30}
            className="text-cyan-400"
            aria-hidden="true"
          />
        </div>

        <span className="text-sm font-semibold text-cyan-300">
          Step {index + 1}
        </span>

        <h3
          className="
            mt-2
            text-xl
            font-bold
            text-white

            lg:text-2xl
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-4
            leading-7
            text-gray-400

            lg:leading-8
          "
        >
          {description}
        </p>
      </GlassCard>
    </motion.div>
  );
}