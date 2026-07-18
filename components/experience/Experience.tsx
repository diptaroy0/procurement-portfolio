"use client";

import { motion } from "framer-motion";

import Container from "../ui/Container";
import ExperienceHeader from "./ExperienceHeader";
import ExperienceTimeline from "./ExperienceTimeline";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden py-32"
    >
      <Container>
        <ExperienceHeader />

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