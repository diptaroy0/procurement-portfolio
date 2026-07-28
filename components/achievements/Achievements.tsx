"use client";

import { motion } from "framer-motion";

import {
  Container,
  SectionHeader,
} from "@/components/common";

import { fadeUp } from "@/lib/animations";

import AchievementCard from "./AchievementCard";
import { achievements } from "./achievementsData";

export default function Achievements() {
  return (
    <section
      id="achievements"
      aria-labelledby="achievements-heading"
      className="relative overflow-hidden py-20 md:py-24 lg:py-32"
    >
      {/* Background Glow */}

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 overflow-hidden"
      >
        <div
          className="
            absolute
            left-[-180px]
            bottom-10

            h-[360px]
            w-[360px]

            rounded-full
            bg-cyan-500/8

            blur-[120px]
          "
        />

        <div
          className="
            absolute
            right-[-200px]
            top-10

            h-[380px]
            w-[380px]

            rounded-full
            bg-blue-500/8

            blur-[140px]
          "
        />
      </div>

      <Container>
        <SectionHeader
          id="achievements-heading"
          badge="Professional Highlights"
          title="Key Achievements"
          description="Measurable accomplishments demonstrating procurement excellence, international supplier management, industrial automation expertise, and continuous professional growth."
        />

        <motion.div
          {...fadeUp}
          className="
            mt-14

            grid
            grid-cols-1
            gap-6

            sm:grid-cols-2

            lg:mt-20
            lg:gap-8

            xl:grid-cols-4
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
        </motion.div>
      </Container>
    </section>
  );
}