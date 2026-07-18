"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import { useEffect } from "react";

export interface Project {
  title: string;
  description: string;
  image: string;

  technologies: string[];

  challenge: string;
  solution: string;
  impact: string;

  github?: string;
  live?: string;
}

interface ProjectModalProps {
  project: Project | null;
  open: boolean;
  onClose: () => void;
}

export default function ProjectModal({
  project,
  open,
  onClose,
}: ProjectModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && project && (
        <>
          {/* Overlay */}

          <motion.div
            className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}

          <motion.div
            className="fixed inset-0 z-[1000] flex items-center justify-center p-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{
                scale: 0.92,
                opacity: 0,
                y: 40,
              }}
              animate={{
                scale: 1,
                opacity: 1,
                y: 0,
              }}
              exit={{
                scale: 0.95,
                opacity: 0,
              }}
              transition={{
                duration: 0.35,
              }}
              onClick={(e) => e.stopPropagation()}
              className="
                relative
                max-h-[92vh]
                w-full
                max-w-5xl
                overflow-y-auto
                rounded-[32px]
                border
                border-cyan-400/20
                bg-[#0B1524]/95
                backdrop-blur-3xl
                shadow-[0_30px_90px_rgba(0,0,0,.6)]
              "
            >
              {/* Close */}

              <button
                onClick={onClose}
                className="
                  absolute
                  right-6
                  top-6
                  z-20
                  rounded-full
                  bg-white/5
                  p-3
                  transition
                  hover:bg-cyan-500/20
                "
              >
                <X size={22} />
              </button>

              {/* Image */}

              <div className="relative h-[320px] w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#081120] via-transparent to-transparent" />
              </div>

              {/* Content */}

              <div className="space-y-8 p-10">
                <div>
                  <h2 className="text-4xl font-bold text-white">
                    {project.title}
                  </h2>

                  <p className="mt-4 text-lg leading-8 text-slate-300">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}

                <div>
                  <p className="mb-4 text-lg font-semibold text-cyan-400">
                    Technologies
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="
                          rounded-full
                          border
                          border-cyan-400/20
                          bg-cyan-500/10
                          px-4
                          py-2
                          text-sm
                          text-cyan-300
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Grid */}

                <div className="grid gap-8 md:grid-cols-3">
                  <div>
                    <p className="mb-3 text-lg font-semibold text-cyan-400">
                      Challenge
                    </p>

                    <p className="text-slate-300">
                      {project.challenge}
                    </p>
                  </div>

                  <div>
                    <p className="mb-3 text-lg font-semibold text-cyan-400">
                      Solution
                    </p>

                    <p className="text-slate-300">
                      {project.solution}
                    </p>
                  </div>

                  <div>
                    <p className="mb-3 text-lg font-semibold text-cyan-400">
                      Impact
                    </p>

                    <p className="text-slate-300">
                      {project.impact}
                    </p>
                  </div>
                </div>

                {/* Buttons */}

                <div className="flex flex-wrap gap-4 pt-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-xl
                        border
                        border-white/10
                        bg-white/5
                        px-6
                        py-3
                        transition
                        hover:border-cyan-400/30
                        hover:bg-cyan-500/10
                      "
                    >
                      <FaGithub className="text-lg" />
                      GitHub
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-xl
                        bg-gradient-to-r
                        from-cyan-500
                        to-blue-600
                        px-6
                        py-3
                        font-semibold
                        text-white
                        transition
                        hover:shadow-[0_10px_30px_rgba(34,211,238,.35)]
                      "
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}