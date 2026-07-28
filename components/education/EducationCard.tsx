"use client";

import { motion } from "framer-motion";

import { GlassCard } from "@/components/common";
import { fadeUp } from "@/lib/animations";

import type { EducationItem } from "./educationData";

interface EducationCardProps {
  education: EducationItem;
}

export default function EducationCard({
  education,
}: EducationCardProps) {
  const {
    icon: Icon,
    title,
    organization,
    period,
    description,
  } = education;

  return (
    <motion.div
      {...fadeUp}
      className="h-full"
    >
      <GlassCard
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
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-2xl
            bg-cyan-500/10
          "
        >
          <Icon
            size={30}
            className="text-cyan-400"
            aria-hidden="true"
          />
        </div>

        <h3
          className="
            mt-6
            text-2xl
            font-bold
            leading-tight
            text-white

            sm:text-3xl
          "
        >
          {title}
        </h3>

        <p className="mt-3 font-medium text-cyan-300">
          {organization}
        </p>

        <p className="mt-2 text-sm text-gray-500">
          {period}
        </p>

        <p
          className="
            mt-6
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