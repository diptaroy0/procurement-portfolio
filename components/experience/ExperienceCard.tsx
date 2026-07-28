"use client";

import { motion } from "framer-motion";
import {
  Building2,
  CalendarDays,
  CheckCircle2,
  MapPin,
} from "lucide-react";

import {
  GlassCard,
  StatCard,
  Tag,
} from "@/components/common";

import type { Experience } from "./experienceData";

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({
  experience,
}: ExperienceCardProps) {
  return (
    <motion.article
      layout
      className="relative pl-16 md:pl-24"
    >
      {/* Timeline Node */}

      <div
        aria-hidden="true"
        className="
          absolute
          left-2
          top-10
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

      {/* Experience Card */}

      <GlassCard
        padding="none"
        className="
          overflow-hidden
          transition-all
          duration-300

          hover:-translate-y-1
          hover:border-cyan-400/30
          hover:shadow-[0_0_45px_rgba(34,211,238,.18)]
        "
      >
        {/* Header */}

        <header
          className="
            border-b
            border-white/10

            p-6
            sm:p-8
            lg:p-9
          "
        >
          <div className="flex flex-wrap items-center gap-3">
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
                font-medium
                text-cyan-300
              "
            >
              <CalendarDays
                size={15}
                aria-hidden="true"
              />

              {experience.period}
            </span>
          </div>

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
              items-center
              gap-5

              text-gray-400
            "
          >
            <div className="flex items-center gap-2">
              <Building2
                size={18}
                className="text-cyan-400"
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
                />

                <span>{experience.location}</span>
              </div>
            )}
          </div>
        </header>

        {/* KPI */}

        {experience.metrics && (
          <section
            className="
              grid
              grid-cols-2
              gap-4

              border-b
              border-white/10

              p-6

              lg:grid-cols-4
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
          </section>
        )}

        {/* Responsibilities */}

        <section
          className="
            px-6
            py-8

            sm:px-8

            lg:px-9
            lg:py-9
          "
        >
          <h4 className="text-xl font-semibold text-white">
            Key Responsibilities
          </h4>

          <ul className="mt-6 space-y-5">
            {experience.responsibilities.map((item) => (
              <li
                key={item}
                className="flex items-start gap-4"
              >
                <CheckCircle2
                  size={20}
                  className="
                    mt-1
                    shrink-0
                    text-cyan-400
                  "
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

          {/* Skills */}

          <div className="mt-10">
            <h4 className="mb-5 text-xl font-semibold text-white">
              Technologies & Skills
            </h4>

            <div className="flex flex-wrap gap-3">
              {experience.technologies.map((tech) => (
                <Tag key={tech}>
                  {tech}
                </Tag>
              ))}
            </div>
          </div>
        </section>
      </GlassCard>
    </motion.article>
  );
}