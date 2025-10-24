import { motion } from "framer-motion";

import { useState, useEffect } from "react";

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  const badges = [
    { id: 1, label: "Problem Solver", angle: 45 },
    { id: 2, label: "FullStack Developer", angle: 180 },
    { id: 3, label: "Project Management", angle: 315 },
  ];

  // Optional: Auto-rotate badges
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % badges.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-blue-50 to-white"
    >
      {/* ✅ Main Container with 2 columns */}
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl">
        {/* Left Side - Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <span className="inline-block bg-purple-100 px-6 py-1 rounded-full text-purple-800 font-semibold">
            Welcome my portfolio
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Hi, I'm{" "}
            <span className="bg-gradient-to-l from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Shiddhartha
            </span>
          </h1>
          <h2 className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300">
            FullStack Developer specializing in MERN stack
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400">
            I build modern, responsive web applications with a focus on user
            experience and performance.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Get in Touch
            </a>

            <a
              href="#projects"
              className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-200"
            >
              View Projects
            </a>
          </div>
        </motion.div>

        {/* Right Side - Profile Image with Badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative flex items-center justify-center"
        >
          {/* ✅ Container for the profile - no min-h-screen */}
          <div className="relative">
            {/* Outer Glow Ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 blur-2xl opacity-30 scale-110" />

            {/* White Border Ring */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full border-8 border-white shadow-2xl overflow-hidden bg-gradient-to-br from-blue-400 to-blue-500">
              <img
                src="/about_me.jpg"
                alt="About Me"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Badges */}
            {badges.map((badge, index) => {
              const isActive = index === activeIndex;
              // ✅ Responsive radius based on screen size
              const radius = window.innerWidth < 768 ? 170 : 240;
              const angleRad = (badge.angle * Math.PI) / 180;
              const x = Math.cos(angleRad) * radius;
              const y = Math.sin(angleRad) * radius;

              return (
                <div
                  key={badge.id}
                  className={`absolute top-1/2 left-1/2 transition-all duration-500 ${
                    isActive ? "scale-110" : "scale-100"
                  }`}
                  style={{
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  }}
                >
                  <div
                    className={`
                      px-3 py-2 md:px-5 md:py-2.5 bg-white rounded-full shadow-lg
                      border-2 transition-all duration-300
                      ${
                        isActive
                          ? "border-blue-500 shadow-blue-200"
                          : "border-gray-200"
                      }
                    `}
                  >
                    <span
                      className={`
                        text-xs md:text-sm font-semibold whitespace-nowrap
                        ${isActive ? "text-blue-600" : "text-gray-700"}
                      `}
                    >
                      {badge.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
