'use client';

import { motion } from 'framer-motion';

export default function Transition({ children }) {
  const variants = {
    hidden: {
      opacity: 0,
      x: -200,
      y: 0,
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    },
    enter: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    },
    exit: {
      opacity: 0,
      x: 0,
      y: -100,
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    },
  };
  return (
    <motion.div variants={variants} initial="hidden" animate="enter" exit="exit"  id="transition">
      {children}
    </motion.div>
  );
}
