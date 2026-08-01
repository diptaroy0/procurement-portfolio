import { experiences } from "./experienceData";
import ExperienceCard from "./ExperienceCard";

export default function ExperienceTimeline() {
  return (
    <div className="relative mx-auto max-w-6xl">
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-6 top-0 w-px bg-gradient-to-b from-cyan-400 via-cyan-500/70 to-transparent md:left-12"
      />
      <div className="space-y-12 lg:space-y-16">
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
