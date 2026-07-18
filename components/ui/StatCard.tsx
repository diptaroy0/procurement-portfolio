"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import { ReactNode } from "react";

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
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      className={clsx(
        `
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-cyan-400/15
        bg-[rgba(15,23,42,.72)]
        p-6
        backdrop-blur-2xl
        shadow-[0_15px_40px_rgba(0,0,0,.4)]
        transition-all
        duration-300
        hover:border-cyan-400/35
        hover:shadow-[0_0_35px_rgba(34,211,238,.18)]
        `,
        className
      )}
    >
      {/* Glow */}

      <div
        className="
          absolute
          -right-10
          -top-10
          h-28
          w-28
          rounded-full
          bg-cyan-400/10
          blur-3xl
        "
      />

      {/* Icon */}

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

      {/* Number */}

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

      {/* Label */}

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
    </motion.div>
  );
}