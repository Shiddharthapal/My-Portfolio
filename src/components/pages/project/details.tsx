import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Github } from "lucide-react";
import { useMemo } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { projects } from "./projects-data";
import { projectData } from "./projects-description";
import { Button } from "@/components/ui/button";

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

  const description = projectdata?.description ?? project?.description ?? "";

  const descriptionBlocks = useMemo(() => {
    if (!description) return [];

    const isHeading = (line: string) =>
      line.length <= 48 && !/[.!?]$/.test(line);

    return description
      .split(/\n\s*\n/)
      .map((block) => block.trim())
      .filter(Boolean)
      .map((block) => {
        const lines = block
          .split("\n")
          .map((line) => line.trim())
          .filter(Boolean);

        if (lines.length === 0) {
          return { type: "paragraph", text: "" } as const;
        }

        const isListOnly = lines.every((line) => line.startsWith("-"));
        const hasHeadingWithList =
          lines.length > 1 &&
          !lines[0].startsWith("-") &&
          lines.slice(1).every((line) => line.startsWith("-"));

        if (isListOnly) {
          return {
            type: "list",
            items: lines.map((line) => line.replace(/^-+\s*/, "")),
          } as const;
        }

        if (hasHeadingWithList) {
          return {
            type: "sectionList",
            heading: lines[0],
            items: lines.slice(1).map((line) => line.replace(/^-+\s*/, "")),
          } as const;
        }

        if (lines.length > 1 && isHeading(lines[0])) {
          return {
            type: "sectionText",
            heading: lines[0],
            text: lines.slice(1).join(" "),
          } as const;
        }

        return { type: "paragraph", text: lines.join(" ") } as const;
      })
      .filter((block) =>
        block.type === "paragraph" ? block.text.length > 0 : true
      );
  }, [description]);

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
    <section className="min-h-screen flex items-center justify-center bg-purple-100 dark:bg-[hsl(259,30%,18%)] px-6 py-8">
      <main className="mx-auto max-w-5xl pt-10 w-full">
        <div className="mb-3 flex items-center justify-between">
          <Button
            type="button"
            onClick={() => navigate(-1)}
            className="focus:outline-none bg-[hsl(262,31%,12%)] hover:bg-[hsl(259,30%,18%)] hover:text-purple-600
             text-[hsl(0,0%,96%)] dark:hover:text-purple-400 transition-colors duration-200"
          >
            Back
          </Button>
        </div>

        <Card className="overflow-hidden border-none shadow-md dark:bg-[hsl(262,31%,12%)]">
          <div className="">
            
            <div className="p-6 flex flex-col gap-4">
              <h1 className="text-3xl font-bold text-gray-700 dark:text-[hsl(0,0%,96%)]">
                {project.title}
              </h1>
              <div className="flex flex-col gap-4 text-muted-foreground dark:text-[hsl(261,15%,70%)]">
                {descriptionBlocks.map((block, index) => {
                  if (block.type === "paragraph") {
                    return <p key={index}>{block.text}</p>;
                  }

                  if (block.type === "list") {
                    return (
                      <ul key={index} className="space-y-2">
                        {block.items.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-purple-500" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    );
                  }

                  if (block.type === "sectionList") {
                    return (
                      <div key={index} className="space-y-2">
                        <h2 className="text-lg font-semibold text-gray-700 dark:text-[hsl(0,0%,96%)]">
                          {block.heading}
                        </h2>
                        <ul className="space-y-2">
                          {block.items.map((item) => (
                            <li key={item} className="flex items-start gap-2">
                              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-purple-500" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  }

                  if (block.type === "sectionText") {
                    return (
                      <div key={index} className="space-y-2">
                        <h2 className="text-lg font-semibold text-gray-700 dark:text-[hsl(0,0%,96%)]">
                          {block.heading}
                        </h2>
                        <p>{block.text}</p>
                      </div>
                    );
                  }

                  return null;
                })}
              </div>

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
                {project?.projectlink && (<a href={project?.projectlink} target="_blank" rel="noopener noreferrer">
                  <button className="px-4 py-2 bg-gradient-to-tl from-cyan-500 to-purple-800 text-white
                   font-semibold rounded-xl focus:outline-none">
                    Live Demo
                  </button>
                </a>
                )}

                {project?.githublink && (<a href={project.githublink} target="_blank" rel="noopener noreferrer">
                  <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-[hsl(252,37%,55%)] text-gray-700
                   dark:text-[hsl(0,0%,96%)] rounded-xl focus:outline-none">
                    <Github className="w-5 h-5" />
                    View Code
                  </button>
                </a>
                )}
              </div>
            </div>
          </div>
        </Card>
      </main>
    </section>
  );
}
