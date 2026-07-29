"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import clsx from "clsx";

interface SectionHeaderProps {
  badge: string;
  title: string;
  highlight: string;
  description: string;
  icon: LucideIcon;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeader({
  badge,
  title,
  highlight,
  description,
  icon: Icon,
  align = "center",
  className,
}: SectionHeaderProps) {
  const centered = align === "center";

  return (
    <div
      className={clsx(
        centered
          ? "mx-auto max-w-3xl text-center"
          : "max-w-3xl",
        className
      )}
    >
      {/* Badge */}

      <motion.div
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
        }}
        className={clsx(
          `
          inline-flex
          items-center
          gap-3
          rounded-full
          border
          border-cyan-400/20
          bg-cyan-500/5
          px-5
          py-3
          backdrop-blur-xl
          `,
          centered ? "" : ""
        )}
      >
        <Icon
          size={16}
          className="text-cyan-400"
        />

        <span className="text-sm font-medium text-cyan-300">
          {badge}
        </span>
      </motion.div>

      {/* Heading */}

      <motion.h2
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        transition={{
          delay: 0.15,
          duration: 0.7,
        }}
        className="mt-8 leading-[0.95]"
      >
        <span className="block text-5xl font-black text-white lg:text-7xl">
          {title}
        </span>

        <span
          className="
            block
            bg-gradient-to-r
            from-cyan-400
            via-sky-400
            to-blue-600
            bg-clip-text
            text-5xl
            font-black
            text-transparent
            lg:text-7xl
          "
        >
          {highlight}
        </span>
      </motion.h2>

      {/* Accent Line */}

      <motion.div
        initial={{
          width: 0,
        }}
        whileInView={{
          width: 120,
        }}
        viewport={{ once: true }}
        transition={{
          delay: 0.55,
          duration: 0.7,
        }}
        className={clsx(
          `
          mt-8
          h-1
          rounded-full
          bg-gradient-to-r
          from-cyan-400
          to-blue-600
          `,
          centered ? "mx-auto" : ""
        )}
      />

      {/* Description */}

      <motion.p
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{
          delay: 0.75,
          duration: 0.6,
        }}
        className={clsx(
          `
          mt-6
          text-lg
          leading-8
          text-gray-400
          `,
          centered ? "mx-auto max-w-2xl" : ""
        )}
      >
        {description}
      </motion.p>
    </div>
  );
}