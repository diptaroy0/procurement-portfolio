"use client";

import { motion } from "framer-motion";

import { Container, SectionHeader } from "@/components/common";
import ExperienceTimeline from "./ExperienceTimeline";


export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative overflow-hidden py-32"
    >
      <Container>
        <SectionHeader
          id="experience-heading"
          badge="Professional Journey"
          title="Work Experience"
          description="A progression of roles demonstrating growth in procurement, supply chain management, and industrial automation."
        />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20"
        >
          <ExperienceTimeline />
        </motion.div>
      </Container>
    </section>
  );
}