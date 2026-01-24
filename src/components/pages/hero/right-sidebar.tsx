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
            Menu
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-blue-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
            aria-label="Close sidebar"
          >
            <X className="w-6 h-6 text-gray-700 dark:text-white" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Navigation
            </h3>
            <nav className="space-y-3">
              {["Home", "About", "Projects", "Skills", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onClose();
                    }}
                    className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-blue-200 dark:hover:bg-slate-700 rounded-lg transition-colors"
                  >
                    {item}
                  </a>
                )
              )}
            </nav>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Quick Links
            </h3>
            <div className="space-y-3">
              {[
                { label: "GitHub", url: "https://github.com/Shiddharthapal" },
                {
                  label: "LinkedIn",
                  url: "https://www.linkedin.com/in/shiddharthapal/",
                },
                {
                  label: "Email",
                  url: "mailto:shiddhartpal01355@gmail.com",
                },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-blue-200 dark:hover:bg-slate-700 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-blue-200 dark:border-slate-700">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © 2024 Shiddhartha. All rights reserved.
          </p>
        </div>
      </motion.div>
    </>
  );
}
