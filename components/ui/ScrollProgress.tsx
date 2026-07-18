"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="
        fixed
        left-0
        top-0
        z-[100]
        h-[3px]
        w-full
        origin-left
        bg-gradient-to-r
        from-cyan-400
        via-sky-400
        to-blue-500
        shadow-[0_0_12px_rgba(34,211,238,.8)]
      "
      style={{ scaleX }}
    />
  );
}