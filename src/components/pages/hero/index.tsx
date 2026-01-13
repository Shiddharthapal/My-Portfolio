import { motion } from "framer-motion";

import { useState, useEffect } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [jumpOffsets, setJumpOffsets] = useState([0, 0, 0]);
  const navigate = useNavigate();
  const badges = [
    { id: 1, label: "Problem Solver", angle: 45 },
    { id: 2, label: "Full-Stack Developer", angle: 180 },
    { id: 3, label: "Project Management", angle: 315 },
  ];

  // Optional: Auto-rotate badges
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % badges.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const directions = [1, 1, 1];
    const offsets = [0, 3.33, 6.66]; // Stagger start positions for serial effect

    const interval = setInterval(() => {
      const newOffsets = offsets.map((offset, i) => {
        let newOffset = offset + directions[i] * 4;
        if (newOffset >= 10) directions[i] = -3; // Jump up to 10px
        if (newOffset <= 0) directions[i] = 3; // Jump down to 0px
        offsets[i] = newOffset;
        return newOffset;
      });
      setJumpOffsets([...newOffsets]);
    }, 300);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId) => {
    // First navigate to home if not already there
    if (window.location.pathname !== "/") {
      navigate("/");
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        performScroll(sectionId);
      }, 100);
    } else {
      performScroll(sectionId);
    }

    if (window.history.replaceState) {
      window.history.replaceState(null, "", "/");
    }
  };

  const performScroll = (sectionId) => {
    if (sectionId === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 64; // Height of fixed navbar (h-16 = 4rem = 64px)
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 "
    >
      {/*  Main Container with 2 columns */}
      <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl">
        {/* Left Side - Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <span
            className="inline-block bg-[hsl(260,60%,94%)] px-6 py-1 rounded-full text-[hsl(257,30%,50%)] font-semibold
          dark:bg-[hsl(259,30%,18%)] dark:text-[hsl(257,30%,50%)]
          "
          >
            Welcome my portfolio
          </span>
          <h1 className="text-4xl  md:text-5xl lg:text-6xl text-gray-600 dark:text-[hsl(0,0%,96%)] font-bold">
            Hi, I'm{" "}
            <span className="bg-gradient-to-l from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Shiddhartha
            </span>
          </h1>
          <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-500 dark:text-[hsl(261,15%,70%)]">
           Software Engineer | Full-Stack Developer (MERN Stack)
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-[hsl(261,15%,70%)]">
            I build modern, responsive web applications with a focus on user
            experience and performance.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              key="contact"
              onClick={() => scrollToSection("contact")}
              className="px-4 py-2 bg-gradient-to-tl from-cyan-500 to-purple-800 text-white rounded-lg hover:bg-gradient-to-br transition-colors duration-200"
            >
              Get in Touch
            </a>

            <a
              key="projects"
              onClick={() => scrollToSection("projects")}
              className="px-4 py-2 border border-[hsl(257,30%,50%)] text-gray-700 rounded-lg 
              hover:bg-[hsl(260,60%,94%)] dark:text-[hsl(0,0%,96%)] dark:hover:bg-[hsl(260,29%,20%)] transition-colors duration-200"
            >
              View Projects
            </a>
          </div>
          <div className="flex gap-4">
            <a
              href="https://github.com/Shiddharthapal"
              target="_blank"
              rel="noopener noreferrer"
              className=" focus:outline-none p-3 hover:rounded-full hover:bg-[hsl(260,60%,94%)] dark:hover:bg-[hsl(259,30%,18%)]    transition"
            >
              <Github className="w-5 h-5 text-gray-700  dark:text-[hsl(0,0%,96%)]" />
            </a>
            <a
              href="https://www.linkedin.com/in/shiddharthapal/"
              target="_blank"
              rel="noopener noreferrer"
              className=" focus:outline-none p-3 hover:rounded-full hover:bg-[hsl(260,60%,94%)] dark:hover:bg-[hsl(259,30%,18%)]     transition"
            >
              <Linkedin className="w-5 h-5 text-gray-700 dark:text-[hsl(0,0%,96%)]" />
            </a>
            <a
              href="mailto:shiddhartpal01355@gmail.com?subject=Hello&body=Hi there!"
              rel="noopener noreferrer"
              className=" focus:outline-none p-3 hover:rounded-full hover:bg-[hsl(260,60%,94%)] dark:hover:bg-[hsl(259,30%,18%)]     transition"
            >
              <Mail className="w-5 h-5 text-gray-700 dark:text-[hsl(0,0%,96%)]" />
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
          {/*  Container for the profile - no min-h-screen */}
          <div className="relative">
            {/* Outer Glow Ring */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-300 blur-2xl scale-80"
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* White Border Ring */}
            <div
              className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full border-8 border-white dark:border-[hsl(232,31%,25%)]
                shadow-2xl overflow-hidden mb-10 sm:mb-5
            bg-gradient-to-br from-blue-400 to-blue-500"
            >
              <img
                src="/about_me.jpg"
                alt="About Me"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Badges */}
            {badges.map((badge, index) => {
              const isActive = index === activeIndex;
              const isMobile = window.innerWidth < 768;

              // ✅ Responsive radius based on screen size
              const radius = isMobile ? 170 : 240;

              //calculate base angle
              let angleDeg = badge.angle;

              //modification: Left side badges move to 130°
              if (isMobile) {
                // If badge is on the left side (90° to 270°)
                if (angleDeg > 90 && angleDeg < 270) {
                  angleDeg = 130; // Fix left side badges at 130°
                }
                // Right side badges stay at their original angles
              }

              // Add rotation to the badge angle for spinning effect
              const angleRad = (angleDeg * Math.PI) / 180;
              const x = Math.cos(angleRad) * radius;
              const y = Math.sin(angleRad) * radius;

              return (
                <div
                  key={badge.id}
                  className={`absolute top-1/2 left-1/2 transition-all duration-500 ${
                    isActive ? "scale-110" : "scale-100"
                  }`}
                  style={{
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${
                      y - jumpOffsets[index]
                    }px))`,
                  }}
                >
                  <div
                    className={`
                      px-3 py-2 md:px-5 md:py-2.5 bg-white dark:bg-[hsl(223,26%,14%)] rounded-full shadow-lg
                      dark:shadow-md border-2 transition-all duration-300 
                      ${
                        isActive
                          ? "border-[hsl(257,30%,50%)]  shadow-[hsl(254,49%,86%)] dark:border-[hsl(257,66%,76%)]"
                          : "border-gray-200"
                      }
                    `}
                  >
                    <span
                      className={`
                        text-xs md:text-sm font-semibold whitespace-nowrap
                        ${
                          isActive
                            ? "text-[hsl(257,30%,50%)] dark:text-[hsl(0,0%,96%)]"
                            : "text-gray-700"
                        }
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
