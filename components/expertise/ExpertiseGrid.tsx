"use client";

import { motion } from "framer-motion";

import ExpertiseCard from "./ExpertiseCard";
import { expertise } from "./expertise";

export default function ExpertiseGrid() {
  return (
    <div
      className="
        grid
        grid-cols-1
        gap-6

        md:grid-cols-2

        lg:gap-8

        xl:grid-cols-4
      "
    >
      {expertise.map((item, index) => (
        <motion.div
          key={item.title}
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
            delay: index * 0.12,
            ease: "easeOut",
          }}
          className="h-full"
        >
          <ExpertiseCard
            icon={item.icon}
            title={item.title}
            skills={item.skills}
          />
        </motion.div>
      ))}
    </div>
  );
}