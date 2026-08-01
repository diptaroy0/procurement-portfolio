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
          transition-all
          duration-300
          hover:-translate-y-0.5
          hover:border-cyan-400/40
          hover:bg-cyan-500/20
          hover:text-white
        `,
        className
      )}
    >
      {children}
    </span>
  );
}