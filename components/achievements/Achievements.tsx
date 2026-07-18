"use client";

import {
  Container,
  SectionHeader,
} from "@/components/common";

import AchievementCard from "./AchievementCard";
import { achievements } from "./achievements";

export default function Achievements() {
  return (
    <section
      id="achievements"
      aria-labelledby="achievements-heading"
      className="relative overflow-hidden py-20 md:py-24 lg:py-32"
    >
      <Container>
        <SectionHeader
          id="achievements-heading"
          badge="Professional Highlights"
          title="Key Achievements"
          description="A snapshot of measurable procurement achievements, international supplier management, and industrial automation expertise."
        />

        <div
          className="
            mt-12
            grid
            grid-cols-1
            gap-6
            sm:grid-cols-2
            lg:mt-16
            lg:gap-8
            xl:grid-cols-4
            xl:mt-20
          "
        >
          {achievements.map((achievement) => (
            <AchievementCard
              key={achievement.title}
              number={achievement.number}
              title={achievement.title}
              description={achievement.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}