"use client";

import { LucideIcon } from "lucide-react";
import { GlassCard } from "@/components/common";

type Props = {
  icon: LucideIcon;
  title: string;
  organization: string;
  period: string;
  description: string;
};

export default function EducationCard({
  icon: Icon,
  title,
  organization,
  period,
  description,
}: Props) {
  return (
    <GlassCard>
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10">
        <Icon
          size={30}
          className="text-cyan-400"
          aria-hidden="true"
        />
      </div>

      <h3 className="mt-6 text-2xl font-bold text-white">
        {title}
      </h3>

      <p className="mt-2 text-cyan-300">
        {organization}
      </p>

      <p className="mt-1 text-sm text-gray-500">
        {period}
      </p>

      <p className="mt-6 leading-8 text-gray-400">
        {description}
      </p>
    </GlassCard>
  );
}