"use client";

import SkillCard from "./SkillCard";
import { skills } from "@/data/skills";

export default function SkillsGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {skills.map((skill, index) => (
        <SkillCard
          key={skill.title}
          skill={skill}
          index={index}
        />
      ))}
    </div>
  );
}