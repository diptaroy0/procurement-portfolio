"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

import { GlassCard } from "@/components/common";

interface StatCardProps {
  value: string;
  label: string;
  icon?: ReactNode;
  delay?: number;
  className?: string;
}

export default function StatCard({
  value,
  label,
  icon,
  delay = 0,
  className,
}: StatCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay,
      }}
    >
      <GlassCard
        padding="md"
        className={clsx(className)}
      >
        {icon && (
          <div
            className="
              mb-5
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-xl
              bg-gradient-to-br
              from-cyan-500/20
              to-blue-600/20
              text-cyan-400
              transition-transform
              duration-300
              group-hover:scale-110
              group-hover:rotate-6
            "
          >
            {icon}
          </div>
        )}

        <h3
          className="
            text-4xl
            font-black
            bg-gradient-to-r
            from-cyan-400
            via-sky-400
            to-blue-500
            bg-clip-text
            text-transparent
          "
        >
          {value}
        </h3>

        <p
          className="
            mt-2
            text-sm
            tracking-wide
            text-gray-400
          "
        >
          {label}
        </p>
      </GlassCard>
    </motion.div>
  );
}