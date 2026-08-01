"use client";


import {
  Container,
  SectionHeader,
} from "@/components/common";


import ExpertiseGrid from "./ExpertiseGrid";
import TechnicalSkills from "./TechnicalSkills";

export default function CoreExpertise() {
  return (
    <section
      id="expertise"
      aria-labelledby="expertise-heading"
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
            top-16

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
            bottom-16

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
          id="expertise-heading"
          badge="Professional Expertise"
          title="Core Expertise"
          description="A comprehensive blend of procurement strategy, supply chain management, ERP workflows, industrial automation, and engineering expertise developed through real-world manufacturing projects."
        />

        <div className="mt-14 lg:mt-16">
          <ExpertiseGrid />
        </div>

        <div className="mt-20 lg:mt-24">
          <TechnicalSkills />
        </div>
      </Container>
    </section>
  );
}
