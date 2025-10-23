"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState("all");

  const skills = {
    frontend: [
      { name: "ReactJS", icon: "⚛️" },
      { name: "NextJS", icon: "▲" },
      { name: "TypeScript", icon: "TS" },
      { name: "Tailwind CSS", icon: "🎨" },
    ],
    backend: [
      { name: "Node.js", icon: "🟢" },
      { name: "Express", icon: "⚡" },
      { name: "MongoDB", icon: "🍃" },
      { name: "PostgreSQL", icon: "🐘" },
    ],
    tools: [
      { name: "Git", icon: "📦" },
      { name: "Docker", icon: "🐳" },
      { name: "AWS", icon: "☁️" },
      { name: "Vercel", icon: "▲" },
    ],
  };

  const filters = ["all", "frontend", "backend", "tools"];

  const getSkillsToDisplay = () => {
    if (activeFilter === "all") {
      return [...skills.frontend, ...skills.backend, ...skills.tools];
    }
    return skills[activeFilter as keyof typeof skills] || [];
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            My <span className="text-blue-500">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I've worked with a range of technologies in the web development
            world, from back-end to front-end and project management.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {filters.map((filter) => (
            <Button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              variant={activeFilter === filter ? "default" : "outline"}
              className={
                activeFilter === filter
                  ? "bg-blue-500 hover:bg-blue-600 text-white"
                  : ""
              }
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </Button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {getSkillsToDisplay().map((skill, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:shadow-lg hover:scale-105 transition-all cursor-pointer"
            >
              <div className="text-4xl mb-3">{skill.icon}</div>
              <p className="font-semibold text-foreground">{skill.name}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
