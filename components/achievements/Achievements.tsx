"use client";

import Container from "../common/Container";
import AchievementCard from "./AchievementCard";
import { achievements } from "./achievements";
import SectionHeader from "@/components/common/SectionHeader";

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="relative overflow-hidden py-32"
      aria-labelledby="achievements-heading"
    >
      <Container>
        <SectionHeader
  id="achievements-heading"
  badge="Professional Highlights"
  title="Key Achievements"
  description="A snapshot of measurable procurement achievements, international supplier management, and industrial automation experience."
/>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {achievements.map((item) => (
            <AchievementCard
              key={item.title}
              number={item.number}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}