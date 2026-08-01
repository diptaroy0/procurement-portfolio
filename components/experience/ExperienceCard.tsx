"use client";

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

      <GlassCard>
        <h2 className="text-3xl font-bold text-white">
          {experience.title}
        </h2>

        <p className="mt-3 text-gray-300">
          {experience.company}
        </p>
      </GlassCard>
    </article>
  );
}