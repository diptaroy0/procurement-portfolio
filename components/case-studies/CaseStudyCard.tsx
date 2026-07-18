"use client";

import { CheckCircle2 } from "lucide-react";
import { GlassCard } from "@/components/common";

type Props = {
  study: {
    title: string;
    company: string;
    challenge: string;
    responsibilities: string[];
    technologies: string[];
    result: string;
  };
};

export default function CaseStudyCard({ study }: Props) {
  return (
    <GlassCard>
      <p className="text-sm uppercase tracking-widest text-cyan-300">
        {study.company}
      </p>

      <h3 className="mt-3 text-3xl font-bold text-white">
        {study.title}
      </h3>

      <div className="mt-8 space-y-6">
        <div>
          <h4 className="text-lg font-semibold text-cyan-300">
            Challenge
          </h4>

          <p className="mt-2 leading-8 text-gray-400">
            {study.challenge}
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-cyan-300">
            Responsibilities
          </h4>

          <ul className="mt-3 space-y-2">
            {study.responsibilities.map((item) => (
              <li key={item} className="flex gap-3">
                <CheckCircle2
                  size={18}
                  className="mt-1 text-cyan-400"
                  aria-hidden="true"
                />

                <span className="text-gray-300">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-cyan-300">
            Technologies
          </h4>

          <div className="mt-3 flex flex-wrap gap-2">
            {study.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-cyan-500/10 px-3 py-2 text-sm text-cyan-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-cyan-300">
            Outcome
          </h4>

          <p className="mt-2 leading-8 text-gray-300">
            {study.result}
          </p>
        </div>
      </div>
    </GlassCard>
  );
}