import clsx from "clsx";
import type { ReactNode } from "react";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
  padding?: "none" | "sm" | "md" | "lg";
};

export default function GlassCard({
  children,
  className,
  padding = "lg",
}: GlassCardProps) {
  return (
    <div
      className={clsx(
        "rounded-[28px]",
        "border border-cyan-400/15",
        "bg-[rgba(15,23,42,.84)]",
        "backdrop-blur-lg",
        "shadow-[0_20px_60px_rgba(0,0,0,.45)]",
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
