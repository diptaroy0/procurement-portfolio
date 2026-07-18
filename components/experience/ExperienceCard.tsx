"use client";

import { motion } from "framer-motion";
import {
  Building2,
  CalendarDays,
  CheckCircle2,
  MapPin,
} from "lucide-react";

import { GlassCard, Tag, StatCard } from "@/components/common";
import { fadeUp } from "@/lib/animations";

import type { Experience } from "./experience";

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({
  experience,
}: ExperienceCardProps) {
  return (
    <motion.div
      {...fadeUp}
      className="relative pl-16 md:pl-24"
    >
      {/* Timeline Node */}

      <div
        aria-hidden="true"
        className="
          absolute
          left-2
          top-8
          z-20

          flex
          h-10
          w-10
          items-center
          justify-center

          rounded-full
          border-4
          border-[#081120]
          bg-cyan-400

          shadow-[0_0_30px_rgba(34,211,238,.75)]

          md:left-8
        "
      >
        <div className="h-2.5 w-2.5 rounded-full bg-[#081120]" />
      </div>

      {/* Card */}

      <GlassCard
        padding="none"
        className="
          overflow-hidden

          hover:border-cyan-400/35
          hover:shadow-[0_0_45px_rgba(34,211,238,.18)]
        "
      >
        {/* Header */}

        <header
          className="
            border-b
            border-cyan-400/10

            p-6
            sm:p-8
            lg:p-9
          "
        >
          <span
            className="
              inline-flex
              items-center
              gap-2

              rounded-full
              border
              border-cyan-400/20
              bg-cyan-500/10

              px-4
              py-2

              text-sm
              text-cyan-300
            "
          >
            <CalendarDays
              size={15}
              aria-hidden="true"
            />

            {experience.period}
          </span>

          <h3
            className="
              mt-6

              text-2xl
              font-bold
              leading-tight
              text-white

              sm:text-3xl
              lg:text-4xl
            "
          >
            {experience.title}
          </h3>

          <div
            className="
              mt-5

              flex
              flex-wrap
              gap-4

              text-gray-400

              md:gap-8
            "
          >
            <div className="flex items-center gap-2">
              <Building2
                size={18}
                className="text-cyan-400"
                aria-hidden="true"
              />

              <span className="font-semibold text-white">
                {experience.company}
              </span>
            </div>

            {experience.location && (
              <div className="flex items-center gap-2">
                <MapPin
                  size={18}
                  className="text-cyan-400"
                  aria-hidden="true"
                />

                <span>{experience.location}</span>
              </div>
            )}
          </div>
        </header>

        {/* Metrics */}

        {experience.metrics && (
          <div
            className="
              grid
              grid-cols-2
              gap-4

              p-6

              lg:grid-cols-4
              lg:gap-5
              lg:p-8
            "
          >
            {experience.metrics.map((metric) => (
              <StatCard
                key={metric.label}
                value={metric.value}
                label={metric.label}
              />
            ))}
          </div>
        )}

        {/* Responsibilities */}

        <div
          className="
            px-6
            pb-6

            sm:px-8
            sm:pb-8

            lg:px-9
            lg:pb-9
          "
        >
          <h4 className="mb-6 text-xl font-semibold text-white">
            Key Responsibilities
          </h4>

          <ul className="space-y-4 lg:space-y-5">
            {experience.responsibilities.map((item) => (
              <li
                key={item}
                className="flex items-start gap-4"
              >
                <CheckCircle2
                  size={19}
                  className="mt-1 shrink-0 text-cyan-400"
                  aria-hidden="true"
                />

                <span
                  className="
                    leading-7
                    text-gray-300

                    lg:leading-8
                  "
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>

          {/* Technologies */}

          <div
            className="
              mt-8
              flex
              flex-wrap
              gap-3

              lg:mt-10
            "
          >
            {experience.technologies.map((tech) => (
              <Tag key={tech}>
                {tech}
              </Tag>
            ))}
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}