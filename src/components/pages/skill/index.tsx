"use client";

import { useRef, useState } from "react";
import SkillCard from "./skill-card";
import { motion } from "framer-motion";

const SKILLS_DATA = {
  coreskills: [
    { name: "React.js", icon: "code", category: "frontend" },
    { name: "Redux", icon: "workflow", category: "frontend" },
    { name: "Node.js", icon: "code", category: "backend" },
    { name: "REST APIs", icon: "workflow", category: "backend" },
    { name: "MongoDB", icon: "box", category: "backend" },
    { name: "Next.js", icon: "code", category: "frontend" },
    { name: "Astro", icon: "rocket", category: "frontend" },
    { name: "TypeScript", icon: "squareterminal", category: "frontend" },
    { name: "MySQL", icon: "box", category: "backend" },
  ],
  frontend: [
    { name: "React.Js", icon: "code", category: "frontend" },
    { name: "Redux", icon: "workflow", category: "frontend" },
    { name: "Hooks", icon: "webhook", category: "frontend" },
    { name: "Astro", icon: "rocket", category: "frontend" },
    { name: "NextJs", icon: "code", category: "frontend" },
    { name: "JavaScript", icon: "squareterminal", category: "frontend" },
    { name: "TypeScript", icon: "squareterminal", category: "frontend" },
    { name: "HTML/CSS", icon: "fileterminal", category: "frontend" },
    { name: "Tailwind CSS", icon: "paintbrush", category: "frontend" },
    { name: "Framer Motion", icon: "code", category: "frontend" },
  ],
  backend: [
    { name: "Node.js", icon: "code", category: "backend" },
    { name: "REST APIs", icon: "workflow", category: "backend" },
    { name: "MongoDB", icon: "box", category: "backend" },
    { name: "Mongoose", icon: "box", category: "backend" },
    { name: "MySQL", icon: "box", category: "backend" },
    { name: "JWT", icon: "lock", category: "backend" },
    { name: "Redis", icon: "code", category: "backend" },
  ],
  tools: [
    { name: "Web RTC", icon: "video", category: "tools" },
    { name: "Git", icon: "gitmerge", category: "tools" },
    { name: "GitHub", icon: "gitmerge", category: "tools" },
    { name: "GitHub Actions", icon: "gitmerge", category: "tools" },
    { name: "AI Agent", icon: "bot", category: "tools" },
    { name: "AWS", icon: "cloud", category: "tools" },
    { name: "Bunny CDN", icon: "cloud", category: "tools" },
    { name: "CI/CD", icon: "gitmerge", category: "tools" },
    { name: "Postman", icon: "setting", category: "tools" },
    { name: "Vercel", icon: "setting", category: "tools" },
    { name: "Netlify", icon: "setting", category: "tools" },
  ],
  softskills: [
    { name: "Problem Solving", icon: "code", category: "softskills" },
    { name: "Communication", icon: "users", category: "softskills" },
    { name: "Team Work", icon: "users", category: "softskills" },
    { name: "Decision Making", icon: "users", category: "softskills" },
  ],
};

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState("coreskills");
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const tabs = ["CoreSkills", "Frontend", "Backend", "Tools", "SoftSkills"];
  const skills = SKILLS_DATA[activeTab as keyof typeof SKILLS_DATA];

  return (
    <section
      id="skills"
      className=" flex items-center justify-center bg-[hsl(264,45%,96%)] dark:bg-[hsl(260,30%,14%)] mt-6 pt-8 pb-12 px-3"
    >
      <div className=" sm:mx-5 2xl:mx-auto  items-center w-full px-1">
        {" "}
        {/* Use flex + justify-center instead of mx-auto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-4xl text-gray-700 dark:text-[hsl(0,0%,96%)] font-bold mb-4">
              My{" "}
              <span className="bg-gradient-to-l from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Skills
              </span>
            </h1>
            <p className="text-gray-600 dark:text-[hsl(261,15%,70%)] text-lg max-w-2xl mx-auto px-4"
            style={{ textAlign: "center" }}
            >
              I've worked with a range of technologies in the web development
              world, from back-end to front-end and project management.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-3 lg:mb-5">
            <div className="inline-flex items-center  gap-1 lg:gap-2 flex-wrap bg-[hsl(270,33%,96%)] dark:bg-[hsl(259,31%,12%)] rounded-lg p-1.5">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab.toLowerCase())}
                  className={`text-md font-medium text-gray-600 px-3 py-1 rounded-lg transition-all ${
                    activeTab === tab.toLowerCase()
                      ? "bg-white dark:bg-[hsl(260,29%,10%)] focus:outline-none  text-gray-600 dark:text-[hsl(0,0%,96%)] shadow-sm"
                      : "text-gray-400 dark:text-[hsl(261,15%,70%)] hover:text-gray-600 ]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Skills Grid (desktop) / Slider (mobile, tablet) */}
          <div
            ref={sliderRef}
            onWheel={(event) => {
              if (!sliderRef.current) return;
              if (window.innerWidth >= 1024) return;
              if (Math.abs(event.deltaY) < Math.abs(event.deltaX)) return;
              event.preventDefault();
              sliderRef.current.scrollBy({
                left: event.deltaY,
                behavior: "auto",
              });
            }}
            className="flex gap-6 custom-x-scrollbar scroll-smooth pb-2
            lg:grid lg:grid-cols-6 lg:gap-6 lg:overflow-visible"
          >
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="snap-start shrink-0 basis-[calc(50%-0.75rem)] md:basis-[calc(25%-0.75rem)] lg:basis-auto lg:shrink"
              >
                <SkillCard skill={skill} />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
