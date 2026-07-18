import type { ReactNode } from "react";
import { motion } from "framer-motion";
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
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.03,
      }}
      transition={{ duration: 0.25 }}
      className={clsx(
        `
          rounded-2xl
          border
          border-cyan-400/10
          bg-cyan-500/5
          p-5
          text-center
          transition-all
          hover:border-cyan-400/35
          hover:bg-cyan-500/10
          hover:shadow-[0_0_25px_rgba(34,211,238,.18)]
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
    </motion.div>
  );
}