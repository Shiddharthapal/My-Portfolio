"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";

interface RightSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RightSidebar({ isOpen, onClose }: RightSidebarProps) {
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
        />
      )}

      {/* Sidebar */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 right-0 h-screen w-1/3 bg-gradient-to-b from-blue-50 to-purple-50 dark:from-slate-900 dark:to-slate-800 shadow-2xl z-50 flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-blue-200 dark:border-slate-700">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            Video Resume
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-blue-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
            aria-label="Close sidebar"
          >
            <X className="w-6 h-6  text-gray-700 dark:text-white focus:outline-none" />
          </button>
        </div>

        {/* Content */}
        <div className="p-2 md:p-6">
          <div className="w-full overflow-hidden rounded-xl shadow-lg aspect-video bg-black/5 dark:bg-white/5">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/NZ7Pq2msfWk?autoplay=1&mute=1&playsinline=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-blue-200 dark:border-slate-700">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © 2026 Shiddhartha. All rights reserved.
          </p>
        </div>
      </motion.div>
    </>
  );
}
