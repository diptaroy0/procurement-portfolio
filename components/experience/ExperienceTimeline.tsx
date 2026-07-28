"use client";

import ExperienceCard from "./ExperienceCard";
import { experiences } from "./experienceData";

export default function ExperienceTimeline() {
  return (
    <div className="relative mx-auto max-w-6xl">
      {/* Timeline Line */}

      <div
        aria-hidden="true"
        className="
          absolute
          left-6
          top-0
          bottom-0
          w-px

          bg-gradient-to-b
          from-cyan-400
          via-cyan-500/70
          to-transparent

          md:left-12
        "
      />

      {/* Timeline Items */}

      <div className="space-y-10 lg:space-y-14">
        {experiences.map((experience) => (
          <ExperienceCard
            key={`${experience.company}-${experience.title}-${experience.period}`}
            experience={experience}
          />
        ))}
      </div>
    </div>
  );
}