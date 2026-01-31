"use client";

import { motion } from "framer-motion";

interface HalfRectIconProps {
  onClick?: () => void;
  isVisible?: boolean;
}

export default function HalfRectIcon({
  onClick,
  isVisible = true,
}: HalfRectIconProps) {
  return (
  <motion.button
  initial={{ opacity: 0, scale: 0.8 }}
  animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
  transition={{ type: "spring", stiffness: 200, damping: 12 }}
  onClick={onClick}
  className="fixed top-14 right-4 z-50 w-14 h-14
    bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400
    rounded-full shadow-[0_8px_0_rgba(0,0,0,0.25)]
    flex items-center justify-center group"
  aria-label="Play video"
  whileHover={{ y: -2 }}
  whileTap={{ y: 4, scale: 0.95 }}
>
  <div className="relative flex items-center justify-center ">
    {/* Gooey glow */}
    <motion.div
      className="absolute w-full h-full rounded-full  bg-pink-300 blur-xl opacity-70"
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
    />

    {/* Cartoon Play Icon */}
    <motion.svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="white"
      className="relative z-10 drop-shadow-md"
      animate={{ rotate: [0, -5, 5, 0] }}
      transition={{ duration: 2.5, repeat: Infinity }}
    >
      <path d="M8 6v12l10-6z" />
    </motion.svg>

    {/* Sparkles */}
    <motion.span
      className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-300 rounded-full"
      animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    />
    <motion.span
      className="absolute -bottom-1 left-0 w-1.5 h-1.5 bg-white rounded-full"
      animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
      transition={{ duration: 1.8, repeat: Infinity, delay: 0.5 }}
    />
  </div>
</motion.button>


  );
}
