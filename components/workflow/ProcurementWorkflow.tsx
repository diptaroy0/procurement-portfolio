"use client";

import Container from "../common/Container";
import WorkflowCard from "./WorkflowCard";
import { workflow } from "./workflow";
import SectionHeader from "@/components/common/SectionHeader";

export default function ProcurementWorkflow() {
  return (
    <section
      id="workflow"
      aria-labelledby="workflow-heading"
      className="py-32"
    >
      <Container>
        <SectionHeader
          id="workflow-heading"
          badge="End-to-End Process"
          title="Procurement Workflow"
          description="A structured procurement lifecycle followed to ensure quality, transparency and timely delivery across sourcing and purchasing activities."
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-5">
          {workflow.map((step, index) => (
            <WorkflowCard
              key={step.title}
              index={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}