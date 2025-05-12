"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function LoopingLetterAnimation() {
  const name = "SHIDDHATHA"
  const letters = Array.from(name)
  const [visible, setVisible] = useState(true)

  // Reset the animation every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)

      // After all letters have exited, reset and start again
      const timeout = setTimeout(() => {
        setVisible(true)
      }, 1500) // Wait for exit animations to complete

      return () => clearTimeout(timeout)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  // Container variants
  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
    exit: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1, // Reverse the stagger for exit
      },
    },
  }

  // Letter variants
  const letter = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    exit: {
      x: -100,
      opacity: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  }

  return (
    <div className="flex h-16 w-full items-center justify-center bg-black overflow-hidden">
      <AnimatePresence mode="wait">
        {visible && (
          <motion.div
            key="letters"
            className="flex"
            variants={container}
            initial="hidden"
            animate="visible"
            exit="exit"
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
        )}
      </AnimatePresence>
    </div>
  )
}
