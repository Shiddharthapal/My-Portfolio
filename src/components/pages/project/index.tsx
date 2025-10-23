"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with payment integration and admin dashboard",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "🛒",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management tool with real-time updates and team features",
      tags: ["Next.js", "Firebase", "Tailwind CSS"],
      image: "✓",
    },
    {
      title: "Social Media Platform",
      description:
        "Social networking platform with messaging, notifications, and user profiles",
      tags: ["MERN", "Socket.io", "JWT"],
      image: "👥",
    },
    {
      title: "Analytics Dashboard",
      description:
        "Real-time analytics dashboard with data visualization and reporting",
      tags: ["React", "D3.js", "Express", "PostgreSQL"],
      image: "📊",
    },
    {
      title: "AI Chat Application",
      description:
        "AI-powered chatbot with natural language processing and learning capabilities",
      tags: ["Next.js", "OpenAI", "TypeScript"],
      image: "🤖",
    },
    {
      title: "Video Streaming Service",
      description:
        "Video streaming platform with adaptive bitrate and user recommendations",
      tags: ["Node.js", "FFmpeg", "AWS S3"],
      image: "🎬",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            My <span className="text-blue-500">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects showcasing my skills and
            experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 h-40 flex items-center justify-center">
                <span className="text-6xl">{project.image}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 bg-transparent"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-blue-500 hover:bg-blue-600 text-white"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
