import type { ReactNode } from "react";
import clsx from "clsx";

interface StatCardProps {
  value: ReactNode;
  label: string;
  className?: string;
}

export default function StatCard({
  value,
  label,
  className,
}: StatCardProps) {
  return (
    <div
      className={clsx(
        `
          rounded-2xl
          border
          border-cyan-400/10
          bg-cyan-500/5
          p-5
          text-center
        `,
        className
      )}
    >
      <p className="text-3xl font-bold text-cyan-400">
        {value}
      </p>

      <p className="mt-2 text-sm text-gray-400">
        {label}
      </p>
    </div>
  );
}