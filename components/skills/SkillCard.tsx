"use client";

import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Boxes,
  Cpu,
  Database,
  Cog,
} from "lucide-react";

import type { Skill } from "@/data/skills";

interface Props {
  skill: Skill;
  index: number;
}

export default function SkillCard({
  skill,
  index,
}: Props) {
  const getIcon = () => {
    switch (skill.icon) {
      case "procurement":
        return <BriefcaseBusiness size={28} />;

      case "erp":
        return <Database size={28} />;

      case "automation":
        return <Cpu size={28} />;

      case "engineering":
        return <Cog size={28} />;

      default:
        return <Boxes size={28} />;
    }
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.1,
        duration: 0.7,
      }}
      whileHover={{
        y: -8,
      }}
      className="
        group
        h-full
        rounded-[30px]
        border
        border-cyan-400/15
        bg-[rgba(15,23,42,.72)]
        p-8
        backdrop-blur-2xl
        shadow-[0_20px_60px_rgba(0,0,0,.45)]
        transition-all
        duration-300
        hover:border-cyan-400/35
        hover:shadow-[0_0_40px_rgba(34,211,238,.18)]
      "
    >
      {/* Icon */}

      <div
        className="
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          border
          border-cyan-400/20
          bg-gradient-to-br
          from-cyan-500/15
          via-sky-500/10
          to-transparent
          text-cyan-400
          transition-transform
          duration-300
          group-hover:scale-110
          group-hover:rotate-6
        "
      >
        {getIcon()}
      </div>

      {/* Title */}

      <h3 className="mt-8 text-2xl font-bold text-white">
        {skill.title}
      </h3>

      {/* Divider */}

      <div className="mt-5 h-px bg-gradient-to-r from-cyan-400/40 to-transparent" />

      {/* Skills */}

      <div className="mt-8 flex flex-wrap gap-3">
        {skill.items.map((item) => (
          <span
            key={item}
            className="
              rounded-full
              border
              border-cyan-400/20
              bg-cyan-500/10
              px-4
              py-2
              text-sm
              text-cyan-300
              transition-all
              duration-300
              hover:border-cyan-400/40
              hover:bg-cyan-500/20
            "
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}