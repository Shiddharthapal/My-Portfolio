import { useState } from "react";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  demoLink: string;
  codeLink: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Video Streaming Platform",
    description:
      "A full-featured Video Streaming Platform with videos, user dashboard LogIn and LogOut feature.",
    image: "/public/videoStream.webp",
    technologies: [
      "React",
      "TypeScript",
      "MongoDB",
      "Redux",
      "HTML5",
      "Tailwind CSS",
      "Bunny CDN",
    ],
    category: "Full Stack",
    demoLink: "Loading...",
    codeLink: "Invalid URL",
  },
  {
    id: 2,
    title: "E-Commerce Web App",
    description:
      "A collaborative task management application with real-time updates and team features.",
    image: "/public/preview.webp",
    technologies: ["React", "TypeScript", "HTML5", "Tailwind CSS"],
    category: "Web App",
    demoLink: "Loading...",
    codeLink: "Invalid URL",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A personal portfolio website built with modern technologies.",
    image: "/blog-placeholder-3.jpg",
    technologies: ["React", "TypeScript", "Tailwind CSS", "HTML5"],
    category: "Frontend",
    demoLink: "Loading...",
    codeLink: "Invalid URL",
  },
];

const categories = ["All", "Full Stack", "Web App", "Frontend"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-16 bg-primary">
      <h1 className="text-4xl font-bold text-white mb-8 text-center">
        My Projects
      </h1>

      {/* Category Filter */}
      <div className="flex justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full ${
              selectedCategory === category
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            } transition duration-300`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="relative h-48">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-4">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                >
                  Live Demo
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 text-gray-800 px-4 py-2 rounded hover:bg-gray-200 transition duration-300"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
