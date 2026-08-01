"use client";

import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";

import { GlassCard } from "@/components/common";

interface WorkflowCardProps {
  index: number;
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function WorkflowCard({
  index,
  icon: Icon,
  title,
  description,
}: WorkflowCardProps) {
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

              h-40
              w-40

              translate-x-10
              -translate-y-10

              rounded-full
              bg-cyan-500/10

              blur-3xl
            "
          />
        </div>

        {/* Header */}

        <div className="relative z-10 flex items-start justify-between">
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

              bg-gradient-to-br
              from-cyan-500/15
              via-sky-500/10
              to-transparent

              text-cyan-400

              transition-transform
              duration-300

              group-hover:scale-110
              group-hover:rotate-6
            "
          >
            <Icon
              size={30}
              aria-hidden="true"
            />
          </div>

          <ArrowRight
            size={20}
            aria-hidden="true"
            className="
              text-cyan-400/40

              transition-all
              duration-300

              group-hover:translate-x-1
              group-hover:text-cyan-300
            "
          />
        </div>

        {/* Step Badge */}

        <div
          className="
            mt-7

            inline-flex
            items-center

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
          Step {index + 1}
        </div>

        {/* Title */}

        <h3
          className="
            mt-5

            text-2xl
            font-bold

            leading-tight
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
            w-14

            bg-gradient-to-r
            from-cyan-400
            to-transparent
          "
        />

        {/* Description */}

        <p
          className="
            mt-5

            leading-7
            text-gray-400

            lg:leading-8
          "
        >
          {description}
        </p>
      </GlassCard>
    </article>
  );
}
