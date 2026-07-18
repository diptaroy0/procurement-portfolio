import { SectionHeader } from "@/components/common";

import ExpertiseGrid from "./ExpertiseGrid";
import TechnicalSkills from "./TechnicalSkills";

export default function CoreExpertise() {
  return (
    <section
      id="expertise"
      className="relative py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          id="expertise-heading"
          badge="Professional Expertise"
          title="Core Expertise"
          description="Engineering precision combined with strategic procurement, supply chain management, ERP systems, and industrial automation to deliver reliable, efficient, and cost-effective business solutions."
        />

        {/* Expertise Cards */}

        <div className="mt-16">
          <ExpertiseGrid />
        </div>

        {/* Technical Skills */}

        <div className="mt-20">
          <TechnicalSkills />
        </div>
      </div>
    </section>
  );
}