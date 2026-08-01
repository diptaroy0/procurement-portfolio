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
    <GlassCard>
      <h2 className="text-3xl font-bold text-white">
        {experience.title}
      </h2>

      <p className="mt-3 text-gray-300">
        {experience.company}
      </p>

      <p className="mt-2 text-gray-400">
        {experience.period}
      </p>

      <ul className="mt-6 list-disc pl-5 text-gray-300">
        {experience.responsibilities.map((r) => (
          <li key={r}>{r}</li>
        ))}
      </ul>
    </GlassCard>
  );
}