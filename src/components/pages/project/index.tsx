import { motion } from "framer-motion";

const projects = [
  {
    title: "Contest Tracker",
    description:
      "A web application to track programming contests across different platforms",
    image: "/contestTracker.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Express.js"],
    liveUrl: "https://contest-tracker.netlify.app",
    githubUrl: "https://github.com/yourusername/contest-tracker",
  },
  {
    title: "Video Streaming Platform",
    description: "A video streaming platform with real-time chat functionality",
    image: "/videoStream.webp",
    technologies: ["React", "WebRTC", "Socket.io", "Node.js"],
    liveUrl: "https://video-stream-app.netlify.app",
    githubUrl: "https://github.com/yourusername/video-stream",
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio website built with React and Astro",
    image: "/portfolio.jpg",
    technologies: ["React", "Astro", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://hamid-portfolio.netlify.app",
    githubUrl: "https://github.com/yourusername/portfolio",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
