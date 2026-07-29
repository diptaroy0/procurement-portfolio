"use client";

import { motion } from "framer-motion";

import {
  Container,
  SectionHeader,
} from "@/components/common";
import { fadeUp } from "@/lib/animations";

import CaseStudyCard from "./CaseStudyCard";
import { caseStudies } from "./caseStudiesData";

export default function CaseStudies() {
  return (
    <section
      id="case-studies"
      aria-labelledby="case-studies-heading"
      className="relative overflow-hidden py-20 lg:py-24"
    >
      {/* Background Glow */}

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 overflow-hidden"
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
            bottom-10

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
          id="case-studies-heading"
          badge="Real Business Impact"
          title="Featured Procurement Case Studies"
          description="Selected procurement initiatives highlighting strategic sourcing, supplier relationship management, commercial negotiations, and measurable operational outcomes across industrial manufacturing projects."
        />

        <motion.div
          {...fadeUp}
          className="
            mt-14

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