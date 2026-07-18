"use client";

import { motion } from "framer-motion";

type SectionHeaderProps = {
  id: string;
  badge: string;
  title: string;
  description: string;
  className?: string;
};

export default function SectionHeader({
  id,
  badge,
  title,
  description,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`mx-auto max-w-3xl text-center ${className}`}>
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="
          inline-flex
          items-center
          rounded-full
          border
          border-cyan-400/20
          bg-cyan-500/10
          px-5
          py-2
          text-sm
          font-medium
          tracking-wide
          text-cyan-300
        "
      >
        {badge}
      </motion.span>

      <motion.h2
        id={id}
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          delay: 0.1,
        }}
        className="
          mt-8
          text-4xl
          font-black
          text-white
          md:text-5xl
          lg:text-6xl
        "
      >
        {title}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          delay: 0.2,
        }}
        className="
          mx-auto
          mt-8
          max-w-2xl
          text-lg
          leading-9
          text-gray-400
        "
      >
        {description}
      </motion.p>
    </div>
  );
}