import type { Variants, Transition } from "framer-motion";

/** Common easing for smooth UI entrances */
export const EASE: Transition["ease"] = [0.22, 1, 0.36, 1];

/** Scroll-in defaults to reuse on motion elements */
export const baseMotion = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, amount: 0.5 },
} as const;

/** Simple ready-to-use variants */
export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { ease: EASE } },
};

export const slideRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { ease: EASE } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { ease: EASE } },
};

/** Slide up from top (negative y) */
export const slideUp: Variants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { ease: EASE } },
};

/** Optional: slide down from bottom (positive y) */
export const slideDown: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { ease: EASE } },
};

/** Stagger container for sequencing multiple children */
export const staggerContainer: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

/** Factory: fade up with configurable offset/duration/delay */
export const makeFadeUp = (
  offset = 24,
  duration = 0.6,
  delay = 0
): Variants => ({
  hidden: { opacity: 0, y: offset },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration, delay, ease: EASE },
  },
});

/** Factory: slide by axis with distance */
export const makeSlide = (
  axis: "x" | "y" = "y",
  distance = 50,
  duration = 0.6,
  delay = 0
): Variants => {
  const hidden = axis === "x" ? { x: distance } : { y: distance };
  const visible = axis === "x" ? { x: 0 } : { y: 0 };
  return {
    hidden: { opacity: 0, ...hidden },
    visible: {
      opacity: 1,
      ...visible,
      transition: { duration, delay, ease: EASE },
    },
  };
};

/** Transition helper: index-based staggering (grid/lists) */
export const withDelay = (
  index: number,
  base: number = 0.2,
  duration: number = 0.5,
  ease: Transition["ease"] = EASE
): Transition => ({
  delay: index * base,
  duration,
  ease,
});

/** Shorthand to build transitions without index math */
export const t = (
  delay = 0,
  duration = 0.6,
  ease: Transition["ease"] = EASE
): Transition => ({ delay, duration, ease });

/** Micro-interactions (optional) */
export const hoverLift: Variants = {
  rest: { y: 0, scale: 1 },
  hover: { y: -3, scale: 1.02, transition: { duration: 0.2, ease: EASE } },
};

export const tapPress: Variants = {
  rest: { scale: 1 },
  tap: { scale: 0.98, transition: { duration: 0.12, ease: EASE } },
};
