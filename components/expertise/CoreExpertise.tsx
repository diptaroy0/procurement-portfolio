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
      className="relative py-20 md:py-24 lg:py-28"
    >
      <Container>
        <SectionHeader
          id="expertise-heading"
          badge="Professional Expertise"
          title="Core Expertise"
          description="Engineering precision combined with strategic procurement, supply chain management, ERP systems, and industrial automation to deliver reliable, efficient, and cost-effective business solutions."
        />

        <div className="mt-12 lg:mt-16">
          <ExpertiseGrid />
        </div>

        <div className="mt-16 lg:mt-20">
          <TechnicalSkills />
        </div>
      </Container>
    </section>
  );
}