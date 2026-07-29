"use client";

import { motion } from "framer-motion";

import {
  Container,
  SectionHeader,
} from "@/components/common";
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
          id="workflow-heading"
          badge="End-to-End Procurement"
          title="Procurement Workflow"
          description="A structured procurement lifecycle that ensures transparency, supplier reliability, cost optimization, quality assurance, and timely delivery across every stage of the sourcing process."
        />

        <motion.div
          {...fadeUp}
          className="
            mt-14

            grid
            gap-6

            sm:grid-cols-2

            lg:mt-20
            lg:grid-cols-3
            lg:gap-8

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