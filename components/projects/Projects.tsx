"use client";

import { motion } from "framer-motion";

import ProjectsHeader from "./ProjectsHeader";
import ProjectsGrid from "./ProjectsGrid";

export default function Projects() {
  return (
    <section
      id="projects"
      className="
        relative
        scroll-mt-32
        py-24
        lg:py-32
      "
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}

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
            duration: 0.7,
          }}
        >
          <ProjectsHeader />
        </motion.div>

        {/* Projects Grid */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{ once: true }}
          transition={{
            delay: 0.2,
            duration: 0.8,
          }}
          className="mt-16"
        >
          <ProjectsGrid />
        </motion.div>
      </div>
    </section>
  );
}