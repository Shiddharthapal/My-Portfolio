import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "./projects-data";

export default function ProjectsPage() {
  const isMobile = window.innerWidth < 768;

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-3 px-6 mb-10"
    >
      <main className=" mx-auto items-center w-full px-1  bg-background">
        <div>
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <section className="py-5 px-2 sm:px-2 lg:px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl text-gray-700 dark:text-[hsl(0,0%,96%)]  font-bold mb-4">
                  My{" "}
                  <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                    Projects
                  </span>
                </h1>
                <p className="text-lg text-gray-600 dark:text-[hsl(261,15%,70%)] text-muted-foreground max-w-2xl mx-auto">
                  Explore my recent web development projects showcasing my
                  expertise in the MERN stack and project management.
                </p>
              </div>
            </section>

            {/* Featured Projects Section */}
            <section className="py-0 ">
              <div className="max-w-7xl  ">
                <h2 className="text-2xl text-gray-700 dark:text-[hsl(0,0%,96%)] font-bold text-center mb-8">
                  Featured Projects
                </h2>

                <div className="flex flex-row flex-nowrap gap-6 custom-x-scrollbar scroll-smooth pb-2 overflow-x-auto">
                  {projects.map((project) => (
                    <Card
                      key={project.id}
                      className="snap-start shrink-0 min-w-[250px] sm:min-w-[350px] md:max-w-[400px] lg:max-w-[550px] overflow-hidden border-none flex flex-col md:flex-row max-h-[420px] md:max-h-[300px] shadow-md hover:shadow-lg dark:hover:shadow-md 
                    hover:shadow-[hsl(254,49%,86%)] dark:hover:shadow-[hsl(253,27%,39%)] transition-shadow duration-300"
                    >
                      {/* Project Image - Left Side */}
                      <div className="relative h-[180px] md:h-[260px] w-full md:w-1/2 flex-shrink-0 bg-muted overflow-hidden">
                        <img
                          src={project.image || project.alt}
                          alt={project.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      {/* Project Content - Right Side */}
                      <div className="pl-4 pr-2 pb-4 dark:bg-[hsl(262,31%,12%)] flex-1 flex flex-col">
                        <h3 className="text-2xl dark:text-[hsl(0,0%,96%)] font-bold mb-2 line-clamp-2">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground text-md line-clamp-2 flex-1 dark:text-[hsl(261,15%,70%)]">
                          {project.description}
                          <Link
                            to={`/project/${project.slug}`}
                            className="ml-2 focus:outline-none inline-flex items-center text-cyan-600 hover:text-purple-600 dark:text-cyan-400 dark:hover:text-purple-400 transition-colors duration-200"
                          >
                            more
                          </Link>
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mt-auto">
                          {project.tags.map((tag) => (
                            <Badge
                              key={tag}
                              variant="secondary"
                              className="text-sm bg-purple-100 dark:bg-[hsl(259,30%,18%)] dark:text-[hsl(0,0%,96%)]"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        {isMobile ? (
                          <div className="flex flex-row gap-4 mt-6">
                            {project?.projectlink && (
                              <a 
                                href={project?.projectlink} 
                                target="_blank" 
                                rel="noopener noreferrer"
                              >
                                <button className="px-4 py-2 bg-gradient-to-tl from-cyan-500 to-purple-800 text-white
                                hover:bg-gradient-to-br font-semibold rounded-xl focus:outline-none">
                                  Live 
                                </button>
                              </a>
                            )}
                            {project?.githublink && (
                              <a
                                href={project.githublink}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <button
                                  className="group flex items-center gap-2 px-4 py-2 border border-gray-300
                                  dark:border-[hsl(252,37%,55%)] text-gray-700 dark:text-[hsl(0,0%,96%)]
                                  rounded-xl focus:outline-none"
                                >
                                  <Github
                                    className="w-5 h-5 transition-transform duration-500 ease-in-out
                                    group-hover:rotate-[360deg]"
                                  />
                                  View Code
                                </button>
                              </a>
                            )}
                          </div>
                        ) : (
                          <div className="flex flex-row gap-4 mt-6">
                            {project?.projectlink && (
                              <a 
                                href={project?.projectlink} 
                                target="_blank" 
                                rel="noopener noreferrer"
                              >
                                <button className="px-4 py-2 bg-gradient-to-tl from-cyan-500 to-purple-800 text-white
                                hover:bg-gradient-to-br font-semibold rounded-xl focus:outline-none">
                                  Live
                                </button>
                              </a>
                            )}
                            {project?.githublink && (
                              <a
                                href={project.githublink}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <button
                                  className="group flex items-center gap-2 px-4 py-2 border border-gray-300
                                  dark:border-[hsl(252,37%,55%)] text-gray-700 dark:text-[hsl(0,0%,96%)]
                                  rounded-xl focus:outline-none"
                                >
                                  <Github
                                    className="w-5 h-5 transition-transform duration-500 ease-in-out
                                    group-hover:rotate-[360deg]"
                                  />
                                  View Code
                                </button>
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </section>
          </motion.div>
        </div>
      </main>
    </section>
  );
}
