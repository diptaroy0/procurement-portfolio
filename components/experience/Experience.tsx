"use client";

import { motion } from "framer-motion";

import {
  Container,
  SectionHeader,
} from "@/components/common";

import { fadeUp } from "@/lib/animations";

import ExperienceTimeline from "./ExperienceTimeline";

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative overflow-hidden py-20 lg:py-24"
    >
      {/* Background Glow */}

      <div
        aria-hidden="true"
        className="
          absolute
          inset-0
          -z-10
          overflow-hidden
        "
      >
        <div
          className="
            absolute
            left-[-220px]
            top-20

            h-[420px]
            w-[420px]

            rounded-full

            bg-cyan-500/8

            blur-[130px]
          "
        />

        <div
          className="
            absolute
            right-[-220px]
            bottom-20

            h-[420px]
            w-[420px]

            rounded-full

            bg-blue-500/8

            blur-[140px]
          "
        />
      </div>

      <Container>
        <SectionHeader
          id="experience-heading"
          badge="Career Journey"
          title="Professional Experience"
          description="A progressive career path combining industrial automation, procurement, ERP workflows, international supplier management, and strategic sourcing."
        />

        <motion.div
          {...fadeUp}
          className="mt-14 lg:mt-16"
        >
          <ExperienceTimeline />
        </motion.div>
      </Container>
    </section>
  );
}