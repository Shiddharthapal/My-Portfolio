import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Github } from "lucide-react";
import { useMemo } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { projects } from "./projects-data";
import { projectData } from "./projects-description";

export default function ProjectDetailsPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const project = useMemo(
    () => projects.find((item) => item.slug === slug),
    [slug]
  );

  const projectdata = useMemo(
    () => projectData.find((item) => item.slug === slug),
    [slug]
  );

  if (!project) {
    return (
      <section className="min-h-screen flex items-center justify-center px-6 py-10">
        <Card className="max-w-xl w-full p-8  text-center dark:bg-[hsl(262,31%,12%)]">
          <h2 className="text-2xl font-bold text-gray-700 dark:text-[hsl(0,0%,96%)]">
            Project not found
          </h2>
          <p className="mt-3 text-muted-foreground dark:text-[hsl(261,15%,70%)]">
            The project you are looking for does not exist.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="px-4 py-2 bg-gradient-to-tl from-cyan-500 to-purple-800 text-white font-semibold rounded-xl"
            >
              Go Back
            </button>
            <Link
              to="/project"
              className="px-4 py-2 border border-gray-300 dark:border-[hsl(252,37%,55%)] text-gray-700 dark:text-[hsl(0,0%,96%)] rounded-xl"
            >
              All Projects
            </Link>
          </div>
        </Card>
      </section>
    );
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-8">
      <main className="mx-auto max-w-5xl pt-10 w-full">
        <div className="mb-6 flex items-center justify-between">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="text-cyan-600 hover:text-purple-600 dark:text-cyan-400 dark:hover:text-purple-400 transition-colors duration-200"
          >
            ← Back
          </button>
        </div>

        <Card className="overflow-hidden border-none shadow-md dark:bg-[hsl(262,31%,12%)]">
          <div className="">
            
            <div className="p-6 flex flex-col gap-4">
              <h1 className="text-3xl font-bold text-gray-700 dark:text-[hsl(0,0%,96%)]">
                {project.title}
              </h1>
              <p className="text-muted-foreground dark:text-[hsl(261,15%,70%)]">
                {projectdata.description}
              </p>

              {project.highlights && project.highlights.length > 0 && (
                <div>
                  <h2 className="text-lg font-semibold text-gray-700 dark:text-[hsl(0,0%,96%)] mb-2">
                    Highlights
                  </h2>
                  <ul className="space-y-2 text-muted-foreground dark:text-[hsl(261,15%,70%)]">
                    {project.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-purple-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex flex-wrap gap-2">
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

              <div className="mt-2 flex items-center gap-4">
                <button className="px-4 py-2 bg-gradient-to-tl from-cyan-500 to-purple-800 text-white font-semibold rounded-xl">
                  Live Demo
                </button>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-[hsl(252,37%,55%)] text-gray-700 dark:text-[hsl(0,0%,96%)] rounded-xl">
                    <Github className="w-5 h-5" />
                    View Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </Card>
      </main>
    </section>
  );
}
