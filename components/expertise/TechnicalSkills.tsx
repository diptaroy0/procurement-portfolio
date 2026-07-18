"use client";

import { Tag as TagIcon } from "lucide-react";

import { Tag } from "@/components/common";

import { skills } from "./skills";

export default function TechnicalSkills() {
  return (
    <div className="mx-auto max-w-6xl">
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
          <TagIcon
            size={16}
            aria-hidden="true"
          />

          Technical Skills
        </div>

        <h3
          className="
            mt-6
            text-3xl
            font-bold
            text-white

            sm:text-4xl
          "
        >
          Technologies & Tools
        </h3>

        <p
          className="
            mx-auto
            mt-4
            max-w-2xl
            leading-7
            text-gray-400

            sm:leading-8
          "
        >
          Practical experience across procurement,
          supply chain, ERP systems,
          industrial automation,
          and engineering software.
        </p>
      </div>

      {/* Skills */}

      <div
        className="
          mt-12
          flex
          flex-wrap
          justify-center
          gap-3

          sm:mt-14
          sm:gap-4
        "
      >
        {skills.map((skill) => (
          <Tag key={skill}>
            {skill}
          </Tag>
        ))}
      </div>
    </div>
  );
}