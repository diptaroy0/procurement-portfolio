"use client";

import { GlassCard } from "@/components/common";

type Props = {
  number: string;
  title: string;
  description: string;
};

export default function AchievementCard({
  number,
  title,
  description,
}: Props) {
  return (
    <GlassCard>
      <p className="text-5xl font-black bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
        {number}
      </p>

      <h3 className="mt-6 text-2xl font-bold text-white">
        {title}
      </h3>

      <p className="mt-4 leading-8 text-gray-400">
        {description}
      </p>
    </GlassCard>
  );
}