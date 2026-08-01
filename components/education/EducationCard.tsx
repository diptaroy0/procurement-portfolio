"use client";

import {
  CalendarDays,
  ChevronRight,
  Building2,
} from "lucide-react";

import { GlassCard } from "@/components/common";

import type { EducationItem } from "./educationData";

interface EducationCardProps {
  education: EducationItem;
}

export default function EducationCard({
  education,
}: EducationCardProps) {
  const {
    icon: Icon,
    title,
    organization,
    period,
    description,
  } = education;

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

            h-40
            w-40

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
                h-16
                w-16
                items-center
                justify-center

                rounded-2xl

                border
                border-cyan-400/20

                bg-cyan-500/10
              "
            >
              <Icon
                size={30}
                className="text-cyan-400"
              />
            </div>

            <ChevronRight
              size={20}
              className="
                text-cyan-400/40

                transition-all
                duration-300

                group-hover:translate-x-1
                group-hover:text-cyan-300
              "
            />
          </div>

          {/* Degree */}

          <h3
            className="
              mt-6

              text-2xl
              font-bold

              leading-tight

              text-white
            "
          >
            {title}
          </h3>

          {/* Organization */}

          <div className="mt-5 flex items-center gap-2">
            <Building2
              size={17}
              className="text-cyan-400"
            />

            <p className="font-medium text-cyan-300">
              {organization}
            </p>
          </div>

          {/* Period */}

          <div className="mt-2 flex items-center gap-2">
            <CalendarDays
              size={16}
              className="text-gray-500"
            />

            <p className="text-sm text-gray-500">
              {period}
            </p>
          </div>

          {/* Divider */}

          <div
            className="
              mt-6

              h-px
              w-20

              bg-gradient-to-r
              from-cyan-400
              to-transparent
            "
          />

          {/* Description */}

          <p
            className="
              mt-6

              leading-8

              text-gray-400
            "
          >
            {description}
          </p>
        </div>
      </GlassCard>
    </article>
  );
}
