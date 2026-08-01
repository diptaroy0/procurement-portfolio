"use client";

import {
  Building2,
  CalendarDays,
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
    <article className="relative pl-16 md:pl-24">
      {/* Timeline Dot */}

      <div
        aria-hidden="true"
        className="
          absolute
          left-2
          top-10
          h-10
          w-10
          rounded-full
          bg-cyan-400
          md:left-8
        "
      />

      <GlassCard padding="none">
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
            <CalendarDays size={15} />
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
                <span
                  className="
                    mt-2
                    h-2.5
                    w-2.5
                    shrink-0
                    rounded-full
                    bg-cyan-400
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

          {/* Technologies */}

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
    </article>
  );
}