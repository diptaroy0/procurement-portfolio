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
      {projects.map((project) => (
        <div
          key={project.title}
        >
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
}
