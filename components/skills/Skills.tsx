"use client";

import { motion } from "framer-motion";

import Container from "../common/Container";
import SkillsGrid from "./SkillsGrid";
import SectionHeader from "@/components/common/SectionHeader";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden py-32"
    >
      <Container>
        {/* Header */}
        <SectionHeader
  id="skills-heading"
  badge="Technical Toolkit"
  title="Skills & Technologies"
  description="Tools, platforms, and technologies used across procurement, automation, and software development."
/>

        {/* Grid */}
        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
          }}
          className="mt-20"
        >
          <SkillsGrid />
        </motion.div>
      </Container>
    </section>
  );
}