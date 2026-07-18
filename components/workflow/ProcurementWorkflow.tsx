"use client";

import { motion } from "framer-motion";

import { Container, SectionHeader } from "@/components/common";
import { fadeUp } from "@/lib/animations";

import WorkflowCard from "./WorkflowCard";
import { workflow } from "./workflow";

export default function ProcurementWorkflow() {
  return (
    <section
      id="workflow"
      aria-labelledby="workflow-heading"
      className="relative overflow-hidden py-20 md:py-24 lg:py-32"
    >
      <Container>
        <SectionHeader
          id="workflow-heading"
          badge="End-to-End Process"
          title="Procurement Workflow"
          description="A structured procurement lifecycle followed to ensure quality, transparency, cost efficiency, and timely delivery throughout the sourcing process."
        />

        <motion.div
          {...fadeUp}
          className="
            mt-12
            grid
            gap-6

            sm:grid-cols-2
            lg:mt-20
            lg:grid-cols-3
            xl:grid-cols-5
          "
        >
          {workflow.map((step, index) => (
            <WorkflowCard
              key={step.title}
              index={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}