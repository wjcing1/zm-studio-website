// Animation configurations for Framer Motion

export const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  viewport: { once: true, amount: 0.25 }
};
