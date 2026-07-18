"use client";

import ExpertiseCard from "./ExpertiseCard";
import { expertise } from "./expertise";

export default function ExpertiseGrid() {
  return (
    <div
      className="
        grid
        gap-8
        md:grid-cols-2
        xl:grid-cols-4
      "
    >
      {expertise.map((item) => (
        <ExpertiseCard
          key={item.title}
          icon={item.icon}
          title={item.title}
          skills={item.skills}
        />
      ))}
    </div>
  );
}