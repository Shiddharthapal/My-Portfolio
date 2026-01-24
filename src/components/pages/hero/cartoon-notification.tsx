"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import HalfRectIcon from "./half-react-icon";

interface CartoonNotificationProps {
  onMenuOpen?: () => void;
}

export default function CartoonNotification({
  onMenuOpen,
}: CartoonNotificationProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Welcome Notification */}
      <motion.div
        initial={{ opacity: 0, x: 50, y: -50 }}
        animate={isVisible ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: 50, y: -50 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="fixed top-8 right-8 z-50"
      >
        <div className="relative">
          {/* Cartoon bubble with tail */}
          <div className="bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-3xl p-6 shadow-xl border-4 border-yellow-500 relative">
            {/* Tail */}
            <div className="absolute -bottom-4 right-8 w-6 h-6 bg-yellow-400 border-4 border-yellow-500 rounded-full"></div>
            
            {/* Content */}
            <div className="text-center">
              <div className="text-4xl mb-2">👋</div>
              <p className="font-bold text-gray-800 text-lg">Welcome!</p>
              <p className="text-gray-700 text-sm mt-1">Let's build something awesome!</p>
            </div>

            {/* Sparkles */}
            <motion.div
              className="absolute -top-2 -right-2 text-2xl"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              ✨
            </motion.div>
            <motion.div
              className="absolute -bottom-2 -left-2 text-xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ⭐
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Menu Button (shows after notification vanishes) */}
      <HalfRectIcon onClick={onMenuOpen} isVisible={!isVisible} />
    </>
  );
}
