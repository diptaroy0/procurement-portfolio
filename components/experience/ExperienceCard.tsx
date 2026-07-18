"use client";

import { motion } from "framer-motion";
import {
  CalendarDays,
  Building2,
  MapPin,
  CheckCircle2,
} from "lucide-react";

import type { Experience } from "@/data/experience";

export default function ExperienceCard({
  experience,
}: {
  experience: Experience;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 60,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
      }}
      className="relative pl-24"
    >
      {/* Timeline Node */}

      <div
        className="
          absolute
          left-8
          top-10
          z-20
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          border-4
          border-[#081120]
          bg-cyan-400
          shadow-[0_0_30px_rgba(34,211,238,.75)]
        "
      >
        <div className="h-2.5 w-2.5 rounded-full bg-[#081120]" />
      </div>

      {/* Experience Card */}

      <motion.div
        whileHover={{
          y: -8,
        }}
        transition={{
          duration: 0.25,
        }}
        className="
          mx-auto
          max-w-5xl
          overflow-hidden
          rounded-[32px]
          border
          border-cyan-400/15
          bg-[rgba(15,23,42,.72)]
          backdrop-blur-2xl
          shadow-[0_25px_70px_rgba(0,0,0,.45)]
          transition-all
          duration-300
          hover:border-cyan-400/35
          hover:shadow-[0_0_45px_rgba(34,211,238,.18)]
        "
      >
        {/* Header */}

        <div className="border-b border-cyan-400/10 p-9">

          <span
            className="
              inline-flex
              items-center
              gap-2
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
            <CalendarDays size={15} />
            {experience.period}
          </span>

          <p className="mt-7 text-4xl font-bold text-white">
            {experience.title}
          </p>

          <div className="mt-5 flex flex-wrap gap-8 text-gray-400">

            <div className="flex items-center gap-2">

              <Building2
                size={18}
                className="text-cyan-400"
              />

              <span className="font-semibold text-white">
                {experience.company}
              </span>

            </div>

            {experience.location && (

              <div className="flex items-center gap-2">

                <MapPin
                  size={18}
                  className="text-cyan-400"
                />

                {experience.location}

              </div>

            )}

          </div>

        </div>

        {/* KPI */}

        {experience.metrics && (

          <div className="grid gap-5 p-8 md:grid-cols-2 xl:grid-cols-4">

            {experience.metrics.map((metric) => (

              <motion.div
                key={metric.label}
                whileHover={{
                  y: -6,
                  scale: 1.03,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="
                  rounded-2xl
                  border
                  border-cyan-400/10
                  bg-cyan-500/5
                  p-5
                  text-center
                  transition-all
                  hover:border-cyan-400/35
                  hover:bg-cyan-500/10
                  hover:shadow-[0_0_25px_rgba(34,211,238,.18)]
                "
              >

                <h4 className="text-3xl font-bold text-cyan-400">

                  {metric.value}

                </h4>

                <p className="mt-2 text-sm text-gray-400">

                  {metric.label}

                </p>

              </motion.div>

            ))}

          </div>

        )}

        {/* Responsibilities */}

        <div className="px-9 pb-9">

          <h4 className="mb-6 text-xl font-semibold text-white">

            Key Responsibilities

          </h4>

          <div className="space-y-5">

            {experience.responsibilities.map((item) => (

              <div
                key={item}
                className="flex items-start gap-4"
              >

                <CheckCircle2
                  size={19}
                  className="
                    mt-1
                    shrink-0
                    text-cyan-400
                  "
                />

                <span className="leading-8 text-gray-300">

                  {item}

                </span>

              </div>

            ))}

          </div>

          {/* Technologies */}

          <div className="mt-10 flex flex-wrap gap-3">

            {experience.technologies.map((tech) => (

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
                  transition-all
                  duration-300
                  hover:border-cyan-400/40
                  hover:bg-cyan-500/20
                "
              >

                {tech}

              </span>

            ))}

          </div>

        </div>

      </motion.div>

    </motion.div>
  );
}