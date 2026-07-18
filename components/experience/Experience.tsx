"use client";

import { motion } from "framer-motion";

import { Container, SectionHeader } from "@/components/common";
import { fadeUp } from "@/lib/animations";

import ExperienceTimeline from "./ExperienceTimeline";

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative overflow-hidden py-20 md:py-24 lg:py-32"
    >
      <Container>
        <SectionHeader
          id="experience-heading"
          badge="Professional Journey"
          title="Work Experience"
          description="A progression of roles demonstrating continuous growth in procurement, supply chain management, ERP systems, and industrial automation."
        />

        <motion.div
          {...fadeUp}
          className="mt-12 lg:mt-20"
        >
          <ExperienceTimeline />
        </motion.div>
      </Container>
    </section>
  );
}