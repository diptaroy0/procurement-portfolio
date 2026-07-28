"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

import { GlassCard } from "@/components/common";

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
    <motion.article layout className="h-full">
      <GlassCard
        className="
          group
          relative
          h-full
          overflow-hidden

          p-6

          transition-all
          duration-300

          hover:-translate-y-2
          hover:border-cyan-400/30
          hover:shadow-[0_0_45px_rgba(34,211,238,.18)]

          sm:p-8
        "
      >
        {/* Background Glow */}

        <div
          aria-hidden="true"
          className="
            absolute
            inset-0
            opacity-0
            transition-opacity
            duration-300

            group-hover:opacity-100
          "
        >
          <div
            className="
              absolute
              right-0
              top-0

              h-44
              w-44

              translate-x-10
              -translate-y-10

              rounded-full
              bg-cyan-500/10

              blur-3xl
            "
          />
        </div>

        {/* Header */}

        <div className="relative z-10 flex items-start justify-between">
          <div
            className="
              flex
              h-16
              w-16
              items-center
              justify-center

              rounded-2xl

              border
              border-cyan-400/20

              bg-gradient-to-br
              from-cyan-500/15
              via-sky-500/10
              to-transparent

              text-cyan-400

              transition-transform
              duration-300

              group-hover:scale-110
              group-hover:rotate-6
            "
          >
            <Icon
              size={30}
              aria-hidden="true"
            />
          </div>

          <ArrowUpRight
            size={22}
            className="
              text-cyan-400/40
              transition-all
              duration-300

              group-hover:translate-x-1
              group-hover:-translate-y-1
              group-hover:text-cyan-300
            "
            aria-hidden="true"
          />
        </div>

        {/* Title */}

        <h3
          className="
            mt-8

            text-2xl
            font-bold

            leading-tight
            text-white
          "
        >
          {title}
        </h3>

        {/* Divider */}

        <div
          className="
            mt-5

            h-px
            w-16

            bg-gradient-to-r
            from-cyan-400
            to-transparent
          "
        />

        {/* Skills */}

        <ul className="mt-8 space-y-4">
          {skills.map((skill) => (
            <li
              key={skill}
              className="
                flex
                items-center
                gap-3
              "
            >
              <CheckCircle2
                size={18}
                className="
                  shrink-0
                  text-cyan-400
                "
                aria-hidden="true"
              />

              <span
                className="
                  text-sm
                  leading-6
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
    </motion.article>
  );
}