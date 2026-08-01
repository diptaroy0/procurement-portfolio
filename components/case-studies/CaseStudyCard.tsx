"use client";

import {
  ArrowUpRight,
  Building2,
  CheckCircle2,
  Target,
} from "lucide-react";

import { GlassCard, Tag } from "@/components/common";

import type { CaseStudy } from "./caseStudiesData";

interface CaseStudyCardProps {
  study: CaseStudy;
}

export default function CaseStudyCard({
  study,
}: CaseStudyCardProps) {
  return (
    <article className="h-full">
      <GlassCard
        className="
          group
          relative
          h-full
          overflow-hidden

          p-6

          transition-all
          duration-300

          hover:-translate-y-2
          hover:border-cyan-400/30
          hover:shadow-[0_0_40px_rgba(34,211,238,.18)]

          lg:p-8
        "
      >
        {/* Background Glow */}

        <div
          aria-hidden="true"
          className="
            absolute
            inset-0
            opacity-0
            transition-opacity
            duration-300

            group-hover:opacity-100
          "
        >
          <div
            className="
              absolute
              right-0
              top-0

              h-44
              w-44

              translate-x-12
              -translate-y-12

              rounded-full

              bg-cyan-500/10

              blur-3xl
            "
          />
        </div>

        <div className="relative z-10">
          {/* Company */}

          <div className="flex items-start justify-between">
            <div
              className="
                inline-flex
                items-center
                gap-2

                rounded-full

                border
                border-cyan-400/20

                bg-cyan-500/10

                px-3
                py-1.5

                text-xs
                font-semibold
                uppercase
                tracking-wider

                text-cyan-300
              "
            >
              <Building2
                size={14}
                aria-hidden="true"
              />

              {study.company}
            </div>

            <ArrowUpRight
              size={20}
              aria-hidden="true"
              className="
                text-cyan-400/40

                transition-all
                duration-300

                group-hover:translate-x-1
                group-hover:-translate-y-1
                group-hover:text-cyan-300
              "
            />
          </div>

          {/* Title */}

          <h3
            className="
              mt-6

              text-2xl
              font-bold

              leading-tight
              text-white
            "
          >
            {study.title}
          </h3>

          <div
            className="
              mt-5

              h-px
              w-16

              bg-gradient-to-r
              from-cyan-400
              to-transparent
            "
          />

          {/* Challenge */}

          <section className="mt-8">
            <div className="flex items-center gap-2">
              <Target
                size={18}
                className="text-cyan-400"
              />

              <h4 className="font-semibold text-cyan-300">
                Challenge
              </h4>
            </div>

            <p
              className="
                mt-4

                leading-7
                text-gray-400

                lg:leading-8
              "
            >
              {study.challenge}
            </p>
          </section>

          {/* Responsibilities */}

          <section className="mt-8">
            <h4 className="font-semibold text-cyan-300">
              Key Responsibilities
            </h4>

            <ul className="mt-4 space-y-3">
              {study.responsibilities.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    size={18}
                    aria-hidden="true"
                    className="
                      mt-1
                      shrink-0

                      text-cyan-400

                      transition-transform
                      duration-300

                      group-hover:scale-110
                    "
                  />

                  <span className="leading-7 text-gray-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* Technologies */}

          <section className="mt-8">
            <h4 className="font-semibold text-cyan-300">
              Technologies & Skills
            </h4>

            <div className="mt-4 flex flex-wrap gap-2">
              {study.technologies.map((tech) => (
                <Tag key={tech}>
                  {tech}
                </Tag>
              ))}
            </div>
          </section>

          {/* Result */}

          <section className="mt-8">
            <h4 className="font-semibold text-cyan-300">
              Business Outcome
            </h4>

            <p
              className="
                mt-4

                leading-7

                text-gray-300

                lg:leading-8
              "
            >
              {study.result}
            </p>
          </section>
        </div>
      </GlassCard>
    </article>
  );
}
