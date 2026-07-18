"use client";

import { motion } from "framer-motion";

import {
  Building2,
  CalendarDays,
  CheckCircle2,
  MapPin,
} from "lucide-react";

import { GlassCard, Tag, StatCard } from "@/components/common";
import type { Experience } from "./experience";

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({
  experience,
}: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="relative pl-24"
    >
      {/* Timeline Node */}
      <div
        className="
          absolute
          left-8
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
        "
      >
        <div className="h-2.5 w-2.5 rounded-full bg-[#081120]" />
      </div>

      {/* Experience Card */}
      <GlassCard
        padding="none"
        className="
          mx-auto
          max-w-5xl
          overflow-hidden
          hover:border-cyan-400/35
          hover:shadow-[0_0_45px_rgba(34,211,238,.18)]
        "
      >
        {/* Header */}
        <header className="border-b border-cyan-400/10 p-9">
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
            <CalendarDays size={15} />
            {experience.period}
          </span>

          <h3 className="mt-7 text-4xl font-bold text-white">
            {experience.title}
          </h3>

          <div className="mt-5 flex flex-wrap gap-8 text-gray-400">
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
          <div className="grid gap-5 p-8 md:grid-cols-2 xl:grid-cols-4">
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
        <div className="px-9 pb-9">
          <h4 className="mb-6 text-xl font-semibold text-white">
            Key Responsibilities
          </h4>

          <ul className="space-y-5">
            {experience.responsibilities.map((item) => (
              <li
                key={item}
                className="flex items-start gap-4"
              >
                <CheckCircle2
                  size={19}
                  className="mt-1 shrink-0 text-cyan-400"
                />

                <span className="leading-8 text-gray-300">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          {/* Technologies */}
          <div className="mt-10 flex flex-wrap gap-3">
            {experience.technologies.map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}