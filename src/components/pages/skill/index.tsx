"use client";

import { useState } from "react";
import SkillCard from "./skill-card";
import { motion } from "framer-motion";

const SKILLS_DATA = {
  all: [
    { name: "ReactJs", icon: "code", category: "frontend" },
    { name: "Redux", icon: "workflow", category: "frontend" },
    { name: "Hooks", icon: "webhook", category: "frontend" },
    { name: "Astro", icon: "rocket", category: "frontend" },
    { name: "NextJs", icon: "code", category: "frontend" },
    { name: "JavaScript", icon: "squareterminal", category: "frontend" },
    { name: "TypeScript", icon: "squareterminal", category: "frontend" },
    { name: "HTML/CSS", icon: "fileterminal", category: "frontend" },
    { name: "Tailwind CSS", icon: "paintbrush", category: "frontend" },
    { name: "Styled Component", icon: "paintbrush", category: "frontend" },
    { name: "Framer Motion", icon: "code", category: "frontend" },
    { name: "Webpack", icon: "code", category: "frontend" },
    { name: "Node.js", icon: "code", category: "backend" },
    { name: "REST APIs", icon: "workflow", category: "backend" },
    { name: "MongoDB", icon: "box", category: "backend" },
    { name: "Mongoose", icon: "box", category: "backend" },
    { name: "MySQL", icon: "box", category: "backend" },
    { name: "JWT/RBAC", icon: "lock", category: "backend" },
    { name: "Redis", icon: "code", category: "backend" },
    { name: "Rate Limit", icon: "infinity", category: "backend" },
    { name: "Aggregation Pipeline", icon: "code", category: "backend" },
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
    { name: "VS Code", icon: "setting", category: "tools" },
    { name: "Problem Solving", icon: "code", category: "softskills" },
    { name: "Communication", icon: "users", category: "softskills" },
    { name: "Team Work", icon: "users", category: "softskills" },
    { name: "Team Leadership", icon: "users", category: "softskills" },
    { name: "Decision Making", icon: "users", category: "softskills" },
    { name: "Adaptability", icon: "users", category: "softskills" },
    { name: "Quick Learning", icon: "code", category: "softskills" },
  ],
  frontend: [
    { name: "ReactJs", icon: "code", category: "frontend" },
    { name: "Redux", icon: "workflow", category: "frontend" },
    { name: "Hooks", icon: "webhook", category: "frontend" },
    { name: "Astro", icon: "rocket", category: "frontend" },
    { name: "NextJs", icon: "code", category: "frontend" },
    { name: "JavaScript", icon: "squareterminal", category: "frontend" },
    { name: "TypeScript", icon: "squareterminal", category: "frontend" },
    { name: "HTML/CSS", icon: "fileterminal", category: "frontend" },
    { name: "Tailwind CSS", icon: "paintbrush", category: "frontend" },
    { name: "Styled Component", icon: "paintbrush", category: "frontend" },
    { name: "Framer Motion", icon: "code", category: "frontend" },
    { name: "Webpack", icon: "code", category: "frontend" },
  ],
  backend: [
    { name: "Node.js", icon: "code", category: "backend" },
    { name: "REST APIs", icon: "workflow", category: "backend" },
    { name: "MongoDB", icon: "box", category: "backend" },
    { name: "Mongoose", icon: "box", category: "backend" },
    { name: "MySQL", icon: "box", category: "backend" },
    { name: "JWT", icon: "lock", category: "backend" },
    { name: "Redis", icon: "code", category: "backend" },
    { name: "Rate Limit", icon: "infinity", category: "backend" },
    { name: "Aggregation Pipeline", icon: "code", category: "backend" },
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
    { name: "VS Code", icon: "setting", category: "tools" },
  ],
  softskills: [
    { name: "Problem Solving", icon: "code", category: "softskills" },
    { name: "Communication", icon: "users", category: "softskills" },
    { name: "Team Work", icon: "users", category: "softskills" },
    { name: "Team Leadership", icon: "users", category: "softskills" },
    { name: "Decision Making", icon: "users", category: "softskills" },
    { name: "Adaptability", icon: "users", category: "softskills" },
    { name: "Quick Learning", icon: "code", category: "softskills" },
  ],
};

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState("all");

  const tabs = ["All", "Frontend", "Backend", "Tools", "SoftSkills"];
  const skills = SKILLS_DATA[activeTab as keyof typeof SKILLS_DATA];

  return (
    <section
      id="skills"
      className=" flex items-center justify-center bg-[hsl(264,45%,96%)] dark:bg-[hsl(260,30%,14%)] mt-6 py-20"
    >
      <div className=" sm:mx-5 2xl:mx-auto  items-center max-w-7xl px-1">
        {" "}
        {/* Use flex + justify-center instead of mx-auto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl text-gray-700 dark:text-[hsl(0,0%,96%)] font-bold mb-4">
              My{" "}
              <span className="bg-gradient-to-l from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Skills
              </span>
            </h1>
            <p className="text-gray-600 dark:text-[hsl(261,15%,70%)] text-lg max-w-2xl mx-auto">
              I've worked with a range of technologies in the web development
              world, from back-end to front-end and project management.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex items-center  gap-2 flex-wrap bg-[hsl(270,33%,96%)] dark:bg-[hsl(259,31%,12%)] rounded-lg p-1.5">
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
          {/* Skills Grid */}
          <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {skills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
