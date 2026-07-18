"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import { GlassCard, Tag } from "@/components/common";
import { fadeUp } from "@/lib/animations";

import type { CaseStudy } from "./caseStudies";

interface CaseStudyCardProps {
  study: CaseStudy;
}

export default function CaseStudyCard({
  study,
}: CaseStudyCardProps) {
  return (
    <motion.div
      {...fadeUp}
      className="h-full"
    >
      <GlassCard
        className="
          h-full
          transition-all
          duration-300

          hover:-translate-y-2
          hover:border-cyan-400/30
          hover:shadow-[0_0_35px_rgba(34,211,238,.15)]
        "
      >
        {/* Company */}

        <p
          className="
            text-xs
            font-semibold
            uppercase
            tracking-[0.2em]
            text-cyan-300

            sm:text-sm
          "
        >
          {study.company}
        </p>

        {/* Title */}

        <h3
          className="
            mt-3
            text-2xl
            font-bold
            leading-tight
            text-white

            sm:text-3xl
          "
        >
          {study.title}
        </h3>

        {/* Content */}

        <div className="mt-8 space-y-8">
          {/* Challenge */}

          <div>
            <h4 className="text-lg font-semibold text-cyan-300">
              Challenge
            </h4>

            <p
              className="
                mt-3
                leading-7
                text-gray-400

                lg:leading-8
              "
            >
              {study.challenge}
            </p>
          </div>

          {/* Responsibilities */}

          <div>
            <h4 className="text-lg font-semibold text-cyan-300">
              Responsibilities
            </h4>

            <ul className="mt-4 space-y-3">
              {study.responsibilities.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    size={18}
                    className="mt-1 shrink-0 text-cyan-400"
                    aria-hidden="true"
                  />

                  <span className="leading-7 text-gray-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}

          <div>
            <h4 className="text-lg font-semibold text-cyan-300">
              Technologies
            </h4>

            <div className="mt-4 flex flex-wrap gap-2">
              {study.technologies.map((tech) => (
                <Tag key={tech}>
                  {tech}
                </Tag>
              ))}
            </div>
          </div>

          {/* Outcome */}

          <div>
            <h4 className="text-lg font-semibold text-cyan-300">
              Outcome
            </h4>

            <p
              className="
                mt-3
                leading-7
                text-gray-300

                lg:leading-8
              "
            >
              {study.result}
            </p>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}