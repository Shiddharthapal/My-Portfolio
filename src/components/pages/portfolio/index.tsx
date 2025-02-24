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
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform with shopping cart, payment integration, and admin dashboard.",
    image: "/blog-placeholder-1.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    category: "Full Stack",
    demoLink: "https://demo-ecommerce.com",
    codeLink: "https://github.com/username/ecommerce",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates and team features.",
    image: "/blog-placeholder-2.jpg",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io"],
    category: "Web App",
    demoLink: "https://demo-taskmanager.com",
    codeLink: "https://github.com/username/taskmanager",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A personal portfolio website built with modern technologies and animations.",
    image: "/blog-placeholder-3.jpg",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    category: "Frontend",
    demoLink: "https://demo-portfolio.com",
    codeLink: "https://github.com/username/portfolio",
  },
];

const categories = ["All", "Full Stack", "Web App", "Frontend"];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
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
