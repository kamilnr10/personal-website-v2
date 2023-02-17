export const menuVariants = {
  open: {
    transition: { staggerChildren: 0.3, delayChildren: 0.4 },
  },
  closed: {
    transition: { staggerChildren: 0.1, staggerDirection: -1 },
  },
};

export const variants = {
  open: {
    scale: 1,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    scale: 0.2,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};
