"use client";

import { useState } from "react";
import SkillCard from "./skill-card";

const SKILLS_DATA = {
  all: [
    { name: "Node.js", icon: "code", category: "backend" },
    { name: "REST APIs", icon: "workflow", category: "backend" },
    { name: "ReactJs", icon: "code", category: "frontend" },
    { name: "Redux", icon: "layers", category: "frontend" },
    { name: "AI Agent", icon: "bot", category: "tools" },
    { name: "JavaScript", icon: "squareterminal", category: "frontend" },
    { name: "TypeScript", icon: "squareterminal", category: "frontend" },
    { name: "HTML/CSS", icon: "fileterminal", category: "frontend" },
    { name: "Tailwind CSS", icon: "paintbrush", category: "frontend" },
    { name: "MongoDB", icon: "box", category: "backend" },
    { name: "Mongoose", icon: "box", category: "backend" },
    { name: "MySQL", icon: "box", category: "backend" },
    { name: "JWT", icon: "lock", category: "backend" },
    { name: "Git", icon: "gitmerge", category: "tools" },
    { name: "AWS", icon: "cloud", category: "tools" },
    { name: "Bunny CDN", icon: "cloud", category: "tools" },
    { name: "GitHub", icon: "gitmerge", category: "tools" },
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
  ],
  frontend: [
    { name: "ReactJs", icon: "code", category: "frontend" },
    { name: "Redux", icon: "workflow", category: "frontend" },
    { name: "JavaScript", icon: "squareterminal", category: "frontend" },
    { name: "TypeScript", icon: "squareterminal", category: "frontend" },
    { name: "HTML/CSS", icon: "fileterminal", category: "frontend" },
    { name: "Tailwind CSS", icon: "paintbrush", category: "frontend" },
  ],
  backend: [
    { name: "Node.js", icon: "code", category: "backend" },
    { name: "REST APIs", icon: "workflow", category: "backend" },
    { name: "MongoDB", icon: "zap", category: "backend" },
    { name: "Mongoose", icon: "box", category: "backend" },
    { name: "MySQL", icon: "box", category: "backend" },
    { name: "JWT", icon: "lock", category: "backend" },
  ],
  tools: [
    { name: "Git", icon: "gitmerge", category: "tools" },
    { name: "GitHub", icon: "gitmerge", category: "tools" },
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
  ],
};

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState("all");

  const tabs = ["All", "Frontend", "Backend", "Tools", "SoftSkills"];
  const skills = SKILLS_DATA[activeTab as keyof typeof SKILLS_DATA];

  return (
    <section className="w-full bg-[hsl(264,45%,96%)] px-4 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">
            My{" "}
            <span className="bg-gradient-to-l from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            I've worked with a range of technologies in the web development
            world, from back-end to front-end and project management.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center  gap-4 mb-12 flex-wrap bg-[hsl(270,33%,96%)]">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab.toLowerCase())}
              className={`text-md font-medium px-3 py-1 rounded-lg transition-all ${
                activeTab === tab.toLowerCase()
                  ? "bg-white focus:outline-none  text-gray-900 shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
          {skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
