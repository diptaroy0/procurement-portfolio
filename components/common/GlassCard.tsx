"use client";

import { ReactNode } from "react";
import clsx from "clsx";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  animate?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
};

export default function GlassCard({
  children,
  className,
  hover = true,
  padding = "lg",
}: GlassCardProps) {
  return (
    <div
      className={clsx(
        "rounded-[28px]",
        "border border-cyan-400/15",

        // Removed backdrop-filter for testing
        "bg-[#0f172a]",

        "shadow-xl",

        "transition-all duration-300",

        hover &&
          "hover:-translate-y-1 hover:border-cyan-400/30",

        {
          "p-0": padding === "none",
          "p-5": padding === "sm",
          "p-6": padding === "md",
          "p-8": padding === "lg",
        },

        className
      )}
    >
      {children}
    </div>
  );
}