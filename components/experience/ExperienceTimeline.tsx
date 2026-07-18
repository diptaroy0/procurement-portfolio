"use client";

import ExperienceCard from "./ExperienceCard";
import { experience } from "@/data/experience";

export default function ExperienceTimeline() {
  return (
    <div className="relative mx-auto max-w-6xl">

      <div
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

      <div className="space-y-14">

        {experience.map((item) => (

          <ExperienceCard
            key={`${item.company}-${item.title}`}
            experience={item}
          />

        ))}

      </div>

    </div>
  );
}