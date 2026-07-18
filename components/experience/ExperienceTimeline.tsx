"use client";

import ExperienceCard from "./ExperienceCard";
import { experiences } from "./experience";

export default function ExperienceTimeline() {
  return (
    <div className="relative mx-auto max-w-6xl">
      {/* Timeline Line */}
      <div
        aria-hidden="true"
        className="
          absolute
          left-5
          top-0
          h-full
          w-px
          bg-gradient-to-b
          from-cyan-400
          via-cyan-500/70
          to-transparent
        "
      />

      {/* Timeline Items */}
      <div className="space-y-14">
        {experiences.map((experience) => (
          <ExperienceCard
            key={`${experience.company}-${experience.title}`}
            experience={experience}
          />
        ))}
      </div>
    </div>
  );
}