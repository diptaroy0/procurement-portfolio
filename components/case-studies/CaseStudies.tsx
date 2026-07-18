"use client";

import Container from "../common/Container";
import CaseStudyCard from "./CaseStudyCard";
import { caseStudies } from "./caseStudies";
import SectionHeader from "@/components/common/SectionHeader";

export default function CaseStudies() {
  return (
    <section
      id="case-studies"
      aria-labelledby="case-studies-heading"
      className="py-32"
    >
      <Container>
        <SectionHeader
  id="case-studies-heading"
  badge="Professional Experience"
  title="Featured Procurement Case Studies"
  description="Real procurement initiatives demonstrating strategic sourcing, supplier management, and measurable business outcomes."
/>

        <div className="mt-20 grid gap-10 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <CaseStudyCard
              key={study.title}
              study={study}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}