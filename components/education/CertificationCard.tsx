"use client";

import {
  ArrowUpRight,
  BookOpen,
  CircleCheck,
} from "lucide-react";

import { GlassCard, Tag } from "@/components/common";

import type { CertificationItem } from "./educationData";

interface CertificationCardProps {
  certification: CertificationItem;
}

export default function CertificationCard({
  certification,
}: CertificationCardProps) {
  const {
    icon: Icon,
    title,
    status,
    skills,
  } = certification;

  const statusColor =
    status === "Professional Experience"
      ? "bg-emerald-500/15 border-emerald-400/30 text-emerald-300"
      : "bg-cyan-500/15 border-cyan-400/30 text-cyan-300";

  return (
    <article className="h-full">
      <GlassCard
        className="
          group
          relative
          h-full
          overflow-hidden

          transition-all
          duration-300

          hover:border-cyan-400/30
          hover:shadow-[0_0_40px_rgba(34,211,238,.18)]
        "
      >
        {/* Background Glow */}

        <div
          aria-hidden="true"
          className="
            absolute
            right-0
            top-0

            h-36
            w-36

            translate-x-10
            -translate-y-10

            rounded-full

            bg-cyan-500/10

            blur-3xl

            opacity-0

            transition-opacity
            duration-300

            group-hover:opacity-100
          "
        />

        <div className="relative z-10">
          {/* Header */}

          <div className="flex items-start justify-between">
            <div
              className="
                flex
                h-14
                w-14
                items-center
                justify-center

                rounded-2xl

                bg-cyan-500/10
              "
            >
              <Icon
                size={28}
                className="text-cyan-400"
              />
            </div>

            <ArrowUpRight
              size={20}
              className="
                text-cyan-400/40

                transition-all
                duration-300

                group-hover:-translate-y-1
                group-hover:translate-x-1
                group-hover:text-cyan-300
              "
            />
          </div>

          {/* Title */}

          <h3
            className="
              mt-6

              text-xl
              font-bold

              leading-snug

              text-white
            "
          >
            {title}
          </h3>

          {/* Divider */}

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

          {/* Status */}

          <div className="mt-6">
            <span
              className={`
                inline-flex
                items-center
                gap-2

                rounded-full

                border

                px-4
                py-2

                text-sm
                font-medium

                ${statusColor}
              `}
            >
              <CircleCheck size={15} />

              {status}
            </span>
          </div>

          {/* Skills */}

          <div className="mt-8">
            <div className="mb-4 flex items-center gap-2">
              <BookOpen
                size={18}
                className="text-cyan-400"
              />

              <h4 className="font-semibold text-cyan-300">
                Skills
              </h4>
            </div>

            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Tag key={skill}>
                  {skill}
                </Tag>
              ))}
            </div>
          </div>
        </div>
      </GlassCard>
    </article>
  );
}
