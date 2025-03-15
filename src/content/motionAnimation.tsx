"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function LoopingLetterAnimation() {
  const name = "SHIDDHATHA";
  const letters = Array.from(name);
  const [key, setKey] = useState(0);

  // Reset the animation every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setKey((prevKey) => prevKey + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Container variants
  const container = {
    hidden: { opacity: 1 }, // Start with container visible
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  // Letter variants
  const letter = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <div className="flex h-16 w-full items-center justify-center bg-black overflow-hidden">
      <motion.div
        key={key} // Key changes every 5 seconds to reset the animation
        className="flex"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {letters.map((char, index) => (
          <motion.span
            key={index}
            variants={letter}
            className="text-2xl md:text-3xl font-bold text-white tracking-wider mx-1"
          >
            {char}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}
