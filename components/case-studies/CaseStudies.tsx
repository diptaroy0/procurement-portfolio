"use client";

import { motion } from "framer-motion";

import { Container, SectionHeader } from "@/components/common";
import { fadeUp } from "@/lib/animations";

import CaseStudyCard from "./CaseStudyCard";
import { caseStudies } from "./caseStudiesData";

export default function CaseStudies() {
  return (
    <section
      id="case-studies"
      aria-labelledby="case-studies-heading"
      className="relative overflow-hidden py-20 md:py-24 lg:py-32"
    >
      <Container>
        <SectionHeader
          id="case-studies-heading"
          badge="Professional Experience"
          title="Featured Procurement Case Studies"
          description="Real-world procurement initiatives demonstrating strategic sourcing, supplier management, commercial negotiation, and measurable business outcomes."
        />

        <motion.div
          {...fadeUp}
          className="
            mt-12
            grid
            grid-cols-1
            gap-6

            md:grid-cols-2

            lg:mt-20
            lg:gap-8

            xl:grid-cols-3
          "
        >
          {caseStudies.map((study) => (
            <CaseStudyCard
              key={study.title}
              study={study}
            />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}