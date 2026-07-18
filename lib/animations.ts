import type { MotionProps } from "framer-motion";

/* ==========================================================
   Hero Animations
========================================================== */

export const heroLeft: MotionProps = {
  initial: {
    opacity: 0,
    x: -60,
  },

  animate: {
    opacity: 1,
    x: 0,
  },

  transition: {
    duration: 0.8,
    ease: "easeOut",
  },
};

export const heroRight: MotionProps = {
  initial: {
    opacity: 0,
    x: 60,
  },

  animate: {
    opacity: 1,
    x: 0,
  },

  transition: {
    duration: 0.9,
    ease: "easeOut",
  },
};

/* ==========================================================
   Scroll Animations
========================================================== */

export const fadeUp: MotionProps = {
  initial: {
    opacity: 0,
    y: 40,
  },

  whileInView: {
    opacity: 1,
    y: 0,
  },

  transition: {
    duration: 0.7,
    ease: "easeOut",
  },

  viewport: {
    once: true,
    amount: 0.2,
  },
};

export const fadeDown: MotionProps = {
  initial: {
    opacity: 0,
    y: -40,
  },

  whileInView: {
    opacity: 1,
    y: 0,
  },

  transition: {
    duration: 0.7,
    ease: "easeOut",
  },

  viewport: {
    once: true,
    amount: 0.2,
  },
};

export const fadeLeft: MotionProps = {
  initial: {
    opacity: 0,
    x: 50,
  },

  whileInView: {
    opacity: 1,
    x: 0,
  },

  transition: {
    duration: 0.7,
    ease: "easeOut",
  },

  viewport: {
    once: true,
    amount: 0.2,
  },
};

export const fadeRight: MotionProps = {
  initial: {
    opacity: 0,
    x: -50,
  },

  whileInView: {
    opacity: 1,
    x: 0,
  },

  transition: {
    duration: 0.7,
    ease: "easeOut",
  },

  viewport: {
    once: true,
    amount: 0.2,
  },
};

export const fadeIn: MotionProps = {
  initial: {
    opacity: 0,
  },

  whileInView: {
    opacity: 1,
  },

  transition: {
    duration: 0.6,
    ease: "easeOut",
  },

  viewport: {
    once: true,
    amount: 0.2,
  },
};

export const scaleIn: MotionProps = {
  initial: {
    opacity: 0,
    scale: 0.95,
  },

  whileInView: {
    opacity: 1,
    scale: 1,
  },

  transition: {
    duration: 0.6,
    ease: "easeOut",
  },

  viewport: {
    once: true,
    amount: 0.2,
  },
};

export const zoomIn: MotionProps = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },

  whileInView: {
    opacity: 1,
    scale: 1,
  },

  transition: {
    duration: 0.5,
    ease: "easeOut",
  },

  viewport: {
    once: true,
    amount: 0.2,
  },
};

export const rotateIn: MotionProps = {
  initial: {
    opacity: 0,
    rotate: -6,
    scale: 0.95,
  },

  whileInView: {
    opacity: 1,
    rotate: 0,
    scale: 1,
  },

  transition: {
    duration: 0.6,
    ease: "easeOut",
  },

  viewport: {
    once: true,
    amount: 0.2,
  },
};

export const fadeUpSlow: MotionProps = {
  initial: {
    opacity: 0,
    y: 60,
  },

  whileInView: {
    opacity: 1,
    y: 0,
  },

  transition: {
    duration: 1,
    ease: "easeOut",
  },

  viewport: {
    once: true,
    amount: 0.2,
  },
};