"use client";

import type { Experience } from "./experienceData";

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({
  experience,
}: ExperienceCardProps) {
  return (
    <article className="relative pl-16 md:pl-24">
      {/* Timeline Node */}
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

      {/* Simple Card */}
      <div className="rounded-3xl bg-white p-8 text-black">
        <h2 className="text-3xl font-bold">
          {experience.title}
        </h2>

        <p className="mt-2">
          {experience.company}
        </p>

        <p className="mt-1 text-gray-600">
          {experience.period}
        </p>
      </div>
    </article>
  );
}