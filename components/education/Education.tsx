"use client";

import { motion } from "framer-motion";

import {
  Container,
  SectionHeader,
  GlassCard,
  Tag,
} from "@/components/common";
import { fadeUp } from "@/lib/animations";

import EducationCard from "./EducationCard";
import {
  education,
  certifications,
} from "./education";

export default function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="relative overflow-hidden py-20 md:py-24 lg:py-32"
    >
      <Container>
        <SectionHeader
          id="education-heading"
          badge="Education & Professional Growth"
          title="Education & Certifications"
          description="Engineering education, postgraduate study, and continuous professional development in procurement, supply chain, and industrial automation."
        />

        <motion.div
          {...fadeUp}
          className="
            mt-12
            grid
            gap-6

            lg:mt-20
            lg:grid-cols-2
            lg:gap-8
          "
        >
          {education.map((item) => (
            <EducationCard
              key={item.title}
              education={item}
            />
          ))}
        </motion.div>

        <motion.div
          {...fadeUp}
          className="mt-12 lg:mt-16"
        >
          <GlassCard>
            <h3 className="text-2xl font-bold text-white">
              Professional Development
            </h3>

            <div className="mt-8 flex flex-wrap gap-3">
              {certifications.map((cert) => (
                <Tag key={cert.title}>
                  {cert.title} • {cert.status}
                </Tag>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </Container>
    </section>
  );
}