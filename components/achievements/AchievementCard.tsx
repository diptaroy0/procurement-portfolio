"use client";

import {
  Boxes,
  Cpu,
  FileText,
  Globe2,
  type LucideIcon,
} from "lucide-react";

import { GlassCard } from "@/components/common";

interface AchievementCardProps {
  number: string;
  title: string;
  description: string;
}

const achievementIcons: Record<string, LucideIcon> = {
  "Global Suppliers Managed": Globe2,
  "Equipment Procured": Boxes,
  "Automation Projects": Cpu,
  "Procurement Workflow": FileText,
};

export default function AchievementCard({
  number,
  title,
  description,
}: AchievementCardProps) {
  const Icon = achievementIcons[title] ?? Globe2;

  return (
    <article className="h-full">
      <GlassCard
        className="
          relative
          h-full
          overflow-hidden
          p-6
          sm:p-8
        "
      >
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
          <Icon
            size={22}
            aria-hidden="true"
          />
        </div>

        <p
          className="
            mt-6
            text-5xl
            font-black
            text-cyan-400
            lg:text-6xl
          "
        >
          {number}
        </p>

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

        <div
          className="
            mt-5
            h-px
            w-14
            bg-cyan-400
          "
        />

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