import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Aronyo",
      description:
        "Aronyo is a modern, responsive, and interactive Plant selling Fullstack web application. This platform is built for users to explore, filter, and order fancy plants.",
      image: "/portfolio.jpg",
      tags: ["React", "JavaScript", "TypeScript", "node.js"],
      featured: true,
    },
    {
      id: 2,
      title: "Food Hunter",
      description:
        "Food Hunter is a modern, responsive, and interactive food ordering Fullstack web application. This platform is built for users to explore, filter, and order delicious food.",
      image: "/food-ordering-restaurant-website.jpg",
      tags: ["React", "JavaScript", "TypeScript"],
      featured: true,
    },
    {
      id: 3,
      title: "E-Commerce Platform",
      description:
        "A comprehensive e-commerce solution with advanced filtering, cart management, and secure checkout. Built with modern web technologies for optimal performance.",
      image: "/ecommerce-shopping-platform.jpg",
      tags: ["Next.js", "TypeScript", "Tailwind"],
      featured: true,
    },
  ];

  return (
    <section id="projects" className="py-3">
      <main className="min-h-screen bg-background">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <section className="py-16 px-2 sm:px-2 lg:px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl text-gray-700  font-bold mb-4">
                My{" "}
                <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Projects
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore my recent web development projects showcasing my
                expertise in the MERN stack and project management.
              </p>
            </div>
          </section>

          {/* Featured Projects Section */}
          <section className="py-0 ">
            <div className="max-w-full mx-7">
              <h2 className="text-2xl text-gray-700  font-bold text-center mb-8">
                Featured Projects
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-9">
                {projects.map((project) => (
                  <Card
                    key={project.id}
                    className="overflow-hidden border-none flex flex-row shadow-md hover:shadow-lg hover:shadow-[hsl(254,49%,86%)] transition-shadow duration-300"
                  >
                    {/* Project Image - Left Side */}
                    <div className="relative h-auto w-1/2 flex-shrink-0 bg-muted overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Project Content - Right Side */}
                    <div className="p-4 pr-4 flex-1 flex flex-col">
                      <h3 className="text-2xl font-bold mb-2 line-clamp-2">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-lg mb-8 line-clamp-2 flex-1">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="text-sm bg-purple-100"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <button className="mt-6 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200 focus:outline-none">
                        Live Demo
                      </button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </motion.div>
      </main>
    </section>
  );
}
