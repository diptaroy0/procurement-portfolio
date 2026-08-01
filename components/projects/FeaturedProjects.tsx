"use client";


import {
  Container,
  SectionHeader,
} from "@/components/common";

import ProjectsGrid from "./ProjectsGrid";

export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
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
          id="projects-heading"
          badge="Professional Portfolio"
          title="Featured Projects"
          description="A selection of procurement, industrial automation, and engineering initiatives demonstrating strategic sourcing, cross-functional collaboration, and measurable operational impact."
        />

        <div
          className="mt-14 lg:mt-16"
        >
          <ProjectsGrid />
        </div>
      </Container>
    </section>
  );
}
