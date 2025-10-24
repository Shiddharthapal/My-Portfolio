import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Aronyo",
      description:
        "Aronyo is a modern, responsive, and interactive Plant selling Fullstack web application. This platform is built for users to explore, filter, and order fancy plants.",
      image: "/plant-selling-ecommerce-website.jpg",
      tags: ["React", "JavaScript", "TypeScript"],
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
    <main className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="py-16 px-2 sm:px-2 lg:px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my recent web development projects showcasing my expertise
            in the MERN stack and project management.
          </p>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-muted overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
