"use client";

import { experiences } from "./experienceData";
import ExperienceCard from "./ExperienceCard";

export default function ExperienceTimeline() {
  return (
    <div className="space-y-12">
      {experiences.map((experience) => (
        <ExperienceCard
          key={`${experience.company}-${experience.title}-${experience.period}`}
          experience={experience}
        />
      ))}
    </div>
  );
}