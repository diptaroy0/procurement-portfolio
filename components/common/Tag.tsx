import type { ReactNode } from "react";
import clsx from "clsx";

interface TagProps {
  children: ReactNode;
  className?: string;
}

export default function Tag({
  children,
  className,
}: TagProps) {
  return (
    <span
      className={clsx(
        `
          inline-flex
          items-center

          rounded-full

          border
          border-cyan-400/20

          bg-cyan-500/10

          px-4
          py-2

          text-sm
          font-medium

          text-cyan-300
        `,
        className
      )}
    >
      {children}
    </span>
  );
}