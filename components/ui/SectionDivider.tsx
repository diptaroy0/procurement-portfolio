"use client";

import clsx from "clsx";

interface SectionDividerProps {
  width?: "sm" | "md" | "lg" | "full";
  align?: "left" | "center" | "right";
  className?: string;
}

export default function SectionDivider({
  width = "md",
  align = "center",
  className,
}: SectionDividerProps) {
  const widths = {
    sm: "w-20",
    md: "w-32",
    lg: "w-48",
    full: "w-full",
  };

  const aligns = {
    left: "mr-auto",
    center: "mx-auto",
    right: "ml-auto",
  };

  return (
    <div
      className={clsx(
        "mt-8 h-[3px] rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-600",
        widths[width],
        aligns[align],
        className
      )}
    />
  );
}