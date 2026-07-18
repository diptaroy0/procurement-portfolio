"use client";

import Container from "../common/Container";
import EducationCard from "./EducationCard";
import { education, certifications } from "./education";
import SectionHeader from "@/components/common/SectionHeader";

export default function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="py-32"
    >
      <Container>
        <SectionHeader
  id="education-heading"
  badge="Education & Professional Growth"
  title="Education & Certifications"
  description="Engineering education, postgraduate study, and continuous professional development in procurement and supply chain."
/>

        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          {education.map((item) => (
            <EducationCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              organization={item.organization}
              period={item.period}
              description={item.description}
            />
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-cyan-400/15 bg-[rgba(15,23,42,.72)] p-8 backdrop-blur-xl">
          <h3 className="text-2xl font-bold text-white">
            Professional Development
          </h3>

          <div className="mt-8 flex flex-wrap gap-4">
            {certifications.map((cert) => (
              <span
                key={cert.title}
                className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-cyan-300"
              >
                {cert.title} • {cert.status}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}