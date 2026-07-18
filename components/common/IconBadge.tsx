import type { LucideIcon } from "lucide-react";
import clsx from "clsx";

interface IconBadgeProps {
  icon: LucideIcon;
  children: React.ReactNode;
  className?: string;
  iconClassName?: string;
  iconSize?: number;
}

export default function IconBadge({
  icon: Icon,
  children,
  className,
  iconClassName,
  iconSize = 16,
}: IconBadgeProps) {
  return (
    <div
      className={clsx(
        `
          inline-flex
          items-center
          gap-2
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
      <Icon
        size={iconSize}
        className={clsx("shrink-0", iconClassName)}
      />

      <span>{children}</span>
    </div>
  );
}