"use client";

import { motion } from "framer-motion";

import { fadeUp } from "@/lib/animations";

import ProjectCard from "./ProjectCard";
import { projects } from "./projectsData";

export default function ProjectsGrid() {
  return (
    <div
      className="
        grid
        gap-8

        md:grid-cols-2

        xl:grid-cols-2
      "
    >
      {projects.map((project, index) => (
        <motion.div
          key={project.title}
          {...fadeUp}
          transition={{
            ...fadeUp.transition,
            delay: index * 0.12,
          }}
        >
          <ProjectCard project={project} />
        </motion.div>
      ))}
    </div>
  );
}