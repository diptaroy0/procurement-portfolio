"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Star,
} from "lucide-react";

import GlassCard from "@/components/ui/GlassCard";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: (project: Project) => void;
}

export default function ProjectCard({
  project,
  index,
  onClick,
}: ProjectCardProps) {
  return (
    <motion.div
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
        duration: 0.7,
        delay: index * 0.12,
      }}
    >
      <GlassCard
        padding="none"
        className="
          group
          h-full
          cursor-pointer
          overflow-hidden
        "
      >
        <button
          type="button"
          onClick={() => onClick(project)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              onClick(project);
            }
          }}
          className="block h-full w-full text-left"
        >
          {/* ==========================================
              IMAGE
          ========================================== */}

          <div className="relative h-56 overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="
                object-cover
                transition-transform
                duration-700
                group-hover:scale-105
              "
            />

            {/* Overlay */}

            <div className="absolute inset-0 bg-gradient-to-t from-[#081120] via-[#081120]/20 to-transparent" />

            {/* Category */}

            <div className="absolute left-6 top-6">
              <span
                className="
                  rounded-full
                  border
                  border-cyan-400/20
                  bg-cyan-500/10
                  px-4
                  py-2
                  text-sm
                  text-cyan-300
                  backdrop-blur-xl
                "
              >
                {project.category}
              </span>
            </div>

            {/* Featured */}

            {project.featured && (
              <div
                className="
                  absolute
                  right-6
                  top-6
                  flex
                  items-center
                  gap-2
                  rounded-full
                  bg-yellow-400/20
                  px-3
                  py-2
                  text-xs
                  font-semibold
                  text-yellow-300
                  backdrop-blur-xl
                "
              >
                <Star size={14} fill="currentColor" />
                Featured
              </div>
            )}
          </div>

          {/* ==========================================
              CONTENT
          ========================================== */}

          <div className="space-y-6 p-8">
            <div className="flex items-start justify-between gap-4">
              <h3
                className="
                  text-2xl
                  font-bold
                  leading-tight
                  text-white
                  transition-colors
                  duration-300
                  group-hover:text-cyan-300
                "
              >
                {project.title}
              </h3>

              <ArrowUpRight
                size={22}
                className="
                  shrink-0
                  text-cyan-400
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </div>

            <p className="leading-8 text-slate-400">
              {project.shortDescription}
            </p>

            {/* Technologies */}

            <div className="flex flex-wrap gap-2">
              {project.technologies
                .slice(0, 4)
                .map((tech) => (
                  <span
                    key={tech}
                    className="
                      rounded-full
                      border
                      border-cyan-400/20
                      bg-cyan-500/10
                      px-3
                      py-1
                      text-xs
                      font-medium
                      text-cyan-300
                    "
                  >
                    {tech}
                  </span>
                ))}
            </div>

            {/* Divider */}

            <div className="border-t border-white/5 pt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-cyan-400">
                  <CheckCircle2 size={18} />

                  <span className="text-sm">
                    View Complete Case Study
                  </span>
                </div>

                <ArrowUpRight
                  size={18}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />
              </div>
            </div>
          </div>
        </button>
      </GlassCard>
    </motion.div>
  );
}