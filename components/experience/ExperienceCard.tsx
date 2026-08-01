"use client";

import {
  Building2,
  CalendarDays,
  MapPin,
} from "lucide-react";

import GlassCard from "@/components/common/GlassCard";

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

        <header className="border-b border-white/10 p-8">
          <span
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-cyan-500/10
              px-4
              py-2
              text-cyan-300
            "
          >
            <CalendarDays size={16} />

            {experience.period}
          </span>

          <h2 className="mt-6 text-3xl font-bold text-white">
            {experience.title}
          </h2>

          <div className="mt-6 flex flex-wrap gap-6 text-gray-300">
            <div className="flex items-center gap-2">
              <Building2
                size={18}
                className="text-cyan-400"
              />

              {experience.company}
            </div>

            {experience.location && (
              <div className="flex items-center gap-2">
                <MapPin
                  size={18}
                  className="text-cyan-400"
                />

                {experience.location}
              </div>
            )}
          </div>
        </header>

        {/* Responsibilities */}

        <section className="p-8">
          <h3 className="mb-6 text-xl font-bold text-white">
            Key Responsibilities
          </h3>

          <ul className="space-y-4">
            {experience.responsibilities.map((item) => (
              <li
                key={item}
                className="text-gray-300"
              >
                • {item}
              </li>
            ))}
          </ul>
        </section>
      </GlassCard>
    </article>
  );
}