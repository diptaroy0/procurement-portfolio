"use client";

import { LucideIcon, CheckCircle2 } from "lucide-react";
import { GlassCard } from "@/components/common";

type Props = {
  icon: LucideIcon;
  title: string;
  skills: string[];
};

export default function ExpertiseCard({
  icon: Icon,
  title,
  skills,
}: Props) {
  return (
    <GlassCard>
      <div
        className="
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          bg-cyan-500/10
        "
      >
        <Icon
          className="text-cyan-400"
          size={30}
          aria-hidden="true"
        />
      </div>

      <h3 className="mt-6 text-2xl font-bold text-white">
        {title}
      </h3>

      <ul className="mt-8 space-y-4">
        {skills.map((skill) => (
          <li
            key={skill}
            className="flex items-center gap-3"
          >
            <CheckCircle2
              size={18}
              className="text-cyan-400"
              aria-hidden="true"
            />

            <span className="text-gray-300">
              {skill}
            </span>
          </li>
        ))}
      </ul>
    </GlassCard>
  );
}