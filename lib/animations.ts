export const fadeUp = {
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
  },

  viewport: {
    once: true,
  },
};

export const fadeLeft = {
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
  },

  viewport: {
    once: true,
  },
};

export const fadeRight = {
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
  },

  viewport: {
    once: true,
  },
};

export const scaleIn = {
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
  },

  viewport: {
    once: true,
  },
};