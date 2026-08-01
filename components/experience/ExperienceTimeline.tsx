"use client";

import { experiences } from "./experienceData";
import ExperienceCard from "./ExperienceCard";

export default function ExperienceTimeline() {
  return (
    <div className="relative mx-auto max-w-6xl">
      {/* Static Vertical Line */}
      <div
        aria-hidden="true"
        className="
          absolute
          left-6
          top-0
          bottom-0
          w-px
          bg-cyan-400/40
          md:left-12
        "
      />

      {/* Timeline Items */}
      <div className="space-y-12 lg:space-y-16">
        {experiences.map((experience) => (
          <div
            key={`${experience.company}-${experience.title}-${experience.period}`}
          >
            <ExperienceCard experience={experience} />
          </div>
        ))}
      </div>
    </div>
  );
}