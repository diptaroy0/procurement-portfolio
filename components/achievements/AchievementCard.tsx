"use client";

import { ArrowUpRight } from "lucide-react";

import { GlassCard } from "@/components/common";

interface AchievementCardProps {
  number: string;
  title: string;
  description: string;
}

export default function AchievementCard({
  number,
  title,
  description,
}: AchievementCardProps) {
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

          sm:p-8
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

        {/* Icon */}

        <div
          className="
            inline-flex

            rounded-xl

            border
            border-cyan-400/20

            bg-cyan-500/10

            p-3

            text-cyan-300
          "
        >
          <ArrowUpRight size={22} />
        </div>

        {/* KPI */}

        <p
          className="
            mt-6

            bg-gradient-to-r
            from-cyan-300
            via-sky-400
            to-blue-500

            bg-clip-text

            text-5xl
            font-black

            text-transparent

            lg:text-6xl
          "
        >
          {number}
        </p>

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
