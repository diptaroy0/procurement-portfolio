"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { CheckCircle2 } from "lucide-react";

import { GlassCard } from "@/components/common";
import { fadeUp } from "@/lib/animations";

interface ExpertiseCardProps {
  icon: LucideIcon;
  title: string;
  skills: string[];
}

export default function ExpertiseCard({
  icon: Icon,
  title,
  skills,
}: ExpertiseCardProps) {
  return (
    <motion.div
      {...fadeUp}
      className="h-full"
    >
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
        {/* Icon */}

        <div
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            bg-cyan-500/10

            sm:h-16
            sm:w-16
          "
        >
          <Icon
            size={28}
            className="text-cyan-400 sm:h-8 sm:w-8"
            aria-hidden="true"
          />
        </div>

        {/* Title */}

        <h3
          className="
            mt-5
            text-xl
            font-bold
            text-white

            sm:mt-6
            sm:text-2xl
          "
        >
          {title}
        </h3>

        {/* Skill List */}

        <ul
          className="
            mt-6
            space-y-3

            sm:mt-8
            sm:space-y-4
          "
        >
          {skills.map((skill) => (
            <li
              key={skill}
              className="flex items-center gap-3"
            >
              <CheckCircle2
                size={18}
                className="text-cyan-400"
                aria-hidden="true"
              />

              <span
                className="
                  text-sm
                  text-gray-300

                  sm:text-base
                "
              >
                {skill}
              </span>
            </li>
          ))}
        </ul>
      </GlassCard>
    </motion.div>
  );
}