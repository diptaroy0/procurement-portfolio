"use client";

import { motion } from "framer-motion";

import { experiences } from "./experienceData";
import ExperienceCard from "./ExperienceCard";

export default function ExperienceTimeline() {
  return (
    <div className="relative mx-auto max-w-6xl">
      {/* Vertical Timeline */}

      <motion.div
        aria-hidden="true"
        initial={{ height: 0, opacity: 0 }}
        whileInView={{ height: "100%", opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        className="
          absolute
          left-6
          top-0
          bottom-0
          w-px

          bg-gradient-to-b
          from-cyan-400
          via-cyan-500/70
          via-60%
          to-transparent

          md:left-12
        "
      />

      {/* Timeline Items */}

      <div className="space-y-12 lg:space-y-16">
        {experiences.map((experience, index) => (
          <motion.div
            key={`${experience.company}-${experience.title}-${experience.period}`}
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
              duration: 0.6,
              delay: index * 0.15,
              ease: "easeOut",
            }}
          >
            <ExperienceCard experience={experience} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}