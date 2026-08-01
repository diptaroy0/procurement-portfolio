"use client";

import {
  Boxes,
  Building2,
  CalendarDays,
  CheckCircle2,
  Globe2,
  MapPin,
  MapPinned,
  UsersRound,
} from "lucide-react";

import {
  GlassCard,
  Tag,
} from "@/components/common";

import type { Experience } from "./experienceData";

interface ExperienceCardProps {
  experience: Experience;
}

const metricIcons = [
  Globe2,
  Boxes,
  MapPinned,
  UsersRound,
];

const metricIconStyles = [
  "bg-sky-500/15 text-cyan-400",
  "bg-teal-500/15 text-cyan-300",
  "bg-blue-500/20 text-cyan-300",
  "bg-violet-500/15 text-violet-300",
];

export default function ExperienceCard({
  experience,
}: ExperienceCardProps) {
  return (
    <article className="relative pl-16 md:pl-24">
      <div
        aria-hidden="true"
        className="
          absolute left-2 top-10 z-20
          flex h-10 w-10 items-center justify-center
          rounded-full border-4 border-[#081120]
          bg-cyan-400 shadow-[0_0_30px_rgba(34,211,238,.75)]
          md:left-8
        "
      >
        <div className="h-2.5 w-2.5 rounded-full bg-[#081120]" />
      </div>

      <GlassCard
        padding="none"
        className="
          overflow-hidden transition-all duration-300
          hover:-translate-y-1 hover:border-cyan-400/30
          hover:shadow-[0_0_45px_rgba(34,211,238,.18)]
        "
      >
        <header className="border-b border-white/10 p-6 sm:p-8 lg:p-9">
          <span
            className="
              inline-flex items-center gap-2 rounded-full
              border border-cyan-400/20 bg-cyan-500/10
              px-4 py-2 text-sm font-medium text-cyan-300
            "
          >
            <CalendarDays size={15} aria-hidden="true" />
            {experience.period}
          </span>

          <h3
            className="
              mt-6 text-2xl font-bold leading-tight text-white
              sm:text-3xl lg:text-4xl
            "
          >
            {experience.title}
          </h3>

          <div className="mt-5 flex flex-wrap items-center gap-5 text-gray-400">
            <div className="flex items-center gap-2">
              <Building2 size={18} className="text-cyan-400" />

              <span className="font-semibold text-white">
                {experience.company}
              </span>
            </div>

            {experience.location && (
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-cyan-400" />
                <span>{experience.location}</span>
              </div>
            )}
          </div>
        </header>

        <section className="px-6 py-8 sm:px-8 lg:px-9 lg:py-9">
          <h4 className="text-xl font-semibold text-white">
            Key Responsibilities
          </h4>

          <ul className="mt-6 space-y-5">
            {experience.responsibilities.map((item) => (
              <li key={item} className="flex items-start gap-4">
                <CheckCircle2
                  size={20}
                  className="mt-1 shrink-0 text-cyan-400"
                />

                <span className="leading-7 text-gray-300 lg:leading-8">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <h4 className="mb-5 text-xl font-semibold text-white">
              Technologies & Skills
            </h4>

            <div className="flex flex-wrap gap-3">
              {experience.technologies.map((tech) => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </div>
          </div>

          {experience.metrics && (
            <section className="mt-12 border-t border-white/10 pt-10">
              <h4 className="text-xl font-semibold text-white">
                Key Impact
              </h4>

              <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                {experience.metrics.map((metric, index) => {
                  const Icon = metricIcons[index] ?? Globe2;

                  const iconStyle =
                    metricIconStyles[index] ??
                    "bg-cyan-500/15 text-cyan-300";

                  return (
                    <article
                      key={metric.label}
                      className="
                        min-h-[240px]
                        rounded-[28px]
                        border border-cyan-400/30
                        bg-[#0c192b]
                        p-6
                        shadow-[0_14px_35px_rgba(0,0,0,.22)]
                        transition-colors
                        duration-300
                        hover:border-cyan-400/55
                        hover:bg-[#0d1d32]
                      "
                    >
                      <div
                        className={`
                          flex h-14 w-14 items-center justify-center
                          rounded-2xl
                          ${iconStyle}
                        `}
                      >
                        <Icon size={27} aria-hidden="true" />
                      </div>

                      <p className="mt-7 text-4xl font-black tracking-tight text-cyan-300">
                        {metric.value}
                      </p>

                      <div className="mt-5 h-px w-14 bg-gradient-to-r from-cyan-400 to-transparent" />

                      <h5 className="mt-5 text-base font-medium leading-7 text-slate-300">
                        {metric.label}
                      </h5>
                    </article>
                  );
                })}
              </div>
            </section>
          )}
        </section>
      </GlassCard>
    </article>
  );
}