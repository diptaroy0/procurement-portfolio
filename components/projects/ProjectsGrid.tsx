"use client";

import { useState } from "react";

import ProjectCard from "./ProjectCard";
import ProjectModal from "@/components/ui/ProjectModal";

import { projects, type Project } from "@/data/projects";

export default function ProjectsGrid() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <div
        className="
          grid
          gap-8
          md:grid-cols-2
          xl:grid-cols-2
        "
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            onClick={handleOpenProject}
          />
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        open={selectedProject !== null}
        onClose={handleCloseProject}
      />
    </>
  );
}