import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Github } from "lucide-react";

export default function ProjectsPage() {
  const isMobile = window.innerWidth < 768;
  const projects = [
    {
      id: 1,
      title: "MediCare+",
      description:
        "MediCare+ is a modern, responsive, and interactive Medical Center Fullstack web application. This platform is built for users to take live medication from home.",
      image: "/MediCare+.png",
      alt: "MediCare+",
      tags: [
        "Node.js",
        "React",
        "REST APIs",
        "MongoDB",
        "TypeScript",
        "JavaScript",
        "Web RTC",
        "Bunny CDN",
        "Astro",
      ],
      link: "https://github.com/Shiddharthapal/MediCare-",
      featured: true,
    },
    {
      id: 2,
      title: "Contest Tracker",
      description:
        "Contest Tracker is a responsive, and interactive contest tracking Fullstack web application. It's built for users to explore their details that are merge from different platform like codeforces (api available).",
      image: "/ContestTracker.png",
      alt: "Contest Tracker",
      tags: [
        "React",
        "Node.js",
        "REST APIs",
        "MongoDB",
        "Tailwind CSS",
        "Astro",
      ],
      link: "https://github.com/Shiddharthapal/Codeforces-Portfolio",
      featured: true,
    },
    {
      id: 3,
      title: "Ant-Tube",
      description:
        "A modern video streaming platform featuring video uploads, playback, comments, and user subscriptions. Built with Node.js, React, Astro for seamless performance and engaging user experience.",
      image: "/image.png",
      tags: ["Astro", "React", "Node.js", "TypeScript", "Tailwind CSS"],
      link: "https://drive.google.com/drive/folders/1tpMSZa72x5wwZ4W79UjPbVEgezsRb9Tw?usp=sharing",
      featured: true,
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-3 px-6"
    >
      <main className=" mx-auto items-center max-w-7xl  bg-background">
        <div>
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <section className="py-16 px-2 sm:px-2 lg:px-4">
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

                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-9 lg:gap-7">
                  {projects.map((project) => (
                    <Card
                      key={project.id}
                      className="overflow-hidden border-none flex flex-row shadow-md hover:shadow-lg dark:hover:shadow-md 
                    hover:shadow-[hsl(254,49%,86%)] dark:hover:shadow-[hsl(253,27%,39%)] transition-shadow duration-300"
                    >
                      {/* Project Image - Left Side */}
                      <div className="relative h-auto w-1/2 flex-shrink-0 bg-muted overflow-hidden">
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
                        <p className="text-muted-foreground text-md  line-clamp-2 flex-1 dark:text-[hsl(261,15%,70%)]">
                          {project.description}
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
                          <div className="flex flex-col gap-4 mt-6">
                            <button
                              className=" px-4 py-2 bg-gradient-to-tl from-cyan-500 to-purple-800 text-white
                          hover:bg-gradient-to-br font-semibold transition-colors duration-300 rounded-xl focus:outline-none "
                            >
                              Live Demo
                            </button>
                            <a
                              href={project?.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <button
                                className="flex items-center gap-2 px-4 py-2 bg-transparent border border-gray-300 focus:outline-none
                         dark:border-[hsl(252,37%,55%)] hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-[hsl(0,0%,96%)] 
                         font-semibold rounded-xl transition-all duration-300   "
                              >
                                <Github className="w-5 h-5" />
                                View Code
                              </button>
                            </a>
                          </div>
                        ) : (
                          <div className="flex flex-row gap-4 mt-6">
                            <button
                              className=" px-4 py-2 bg-gradient-to-tl from-cyan-500 to-purple-800 text-white
                          hover:bg-gradient-to-br font-semibold transition-colors duration-300 rounded-xl focus:outline-none "
                            >
                              Live Demo
                            </button>
                            <a
                              href={project?.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <button
                                className="flex items-center gap-2 px-4 py-2 bg-transparent border border-gray-300 focus:outline-none
                         dark:border-[hsl(252,37%,55%)] hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-[hsl(0,0%,96%)] 
                         font-semibold rounded-xl transition-all duration-300 "
                              >
                                <Github className="w-5 h-5" />
                                View Code
                              </button>
                            </a>
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
