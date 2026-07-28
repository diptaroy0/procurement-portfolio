"use client";

import { Wrench } from "lucide-react";

import { Tag } from "@/components/common";

import { skills } from "./skills";

export default function TechnicalSkills() {
  return (
    <section
      aria-labelledby="technical-skills-heading"
      className="mx-auto max-w-6xl"
    >
      {/* Header */}

      <div className="text-center">
        <div
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
            font-medium
            text-cyan-300
          "
        >
          <Wrench
            size={16}
            aria-hidden="true"
          />

          Technologies & Tools
        </div>

        <h3
          id="technical-skills-heading"
          className="
            mt-6

            text-3xl
            font-bold
            text-white

            sm:text-4xl
          "
        >
          Technical Skills
        </h3>

        <p
          className="
            mx-auto
            mt-4
            max-w-3xl

            leading-7
            text-gray-400

            sm:leading-8
          "
        >
          Practical experience with procurement systems, ERP platforms,
          industrial automation technologies, engineering software, and
          cross-functional business tools used in modern manufacturing
          environments.
        </p>
      </div>

      {/* Skills */}

      <div
        className="
          mt-14

          flex
          flex-wrap
          justify-center

          gap-3

          sm:gap-4
        "
      >
        {skills.map((skill) => (
          <Tag key={skill}>
            {skill}
          </Tag>
        ))}
      </div>
    </section>
  );
}