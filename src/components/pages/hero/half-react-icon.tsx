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
      initial={{ opacity: 0, x: 20 }}
      animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      onClick={onClick}
      className="fixed top-14 right-0 z-50 w-6 h-16 bg-gradient-to-r from-blue-500
       to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-xl transition-all
        duration-300 flex items-center justify-center group rounded-l-md"
      aria-label="Open menu"
    >
      {/* Half rectangle visible, half outside */}
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Visible part indicator */}
        <motion.div
          className="absolute left-0 top-0 w-8 h-full bg-gradient-to-r from-blue-400 to-transparent"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* Icon element */}
        <motion.svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-white relative z-10"
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          {/* Custom design - opening indicator */}
          <path d="M9 6L15 12L9 18" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="5" y1="8" x2="5" y2="16" strokeLinecap="round" />
        </motion.svg>

        {/* Tooltip */}
        <motion.div
          className="absolute right-full mr-3 bg-gray-900 text-white text-xs font-medium px-3 py-1 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity"
        >
          Open
        </motion.div>
      </div>
    </motion.button>
  );
}
