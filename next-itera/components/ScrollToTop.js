'use client';
import React, { useEffect, useState } from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import '../styles/ScrollToTop.css';

export default function ScrollToTop() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const isBrowser = () => typeof window !== 'undefined';
  const goToTop = () => {
    if (!isBrowser) return;
    document.documentElement.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };



  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };
    window.addEventListener('scroll', updatePosition);
    return () => window.removeEventListener('scroll', updatePosition);
  }, []);


  return (
    <AnimatePresence>
      {scrollPosition > 100 && (
 
        <motion.button
          onClick={goToTop}
          className="scrollToTop-btn"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 0.6 } }}
          exit={{ y: 100, opacity: 0, transition: { duration: 0.6 } }}
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 1 }}
        ></motion.button>
      )}
    </AnimatePresence>
  );
}
