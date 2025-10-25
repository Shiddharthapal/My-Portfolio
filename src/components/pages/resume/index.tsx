import {
  Download,
  Briefcase,
  CheckCircle2,
  GraduationCap,
  BookOpen,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Resume() {
  return (
    <section id="resume" className="py-20">
      <main className="min-h-screen bg-[hsl(258,50%,96%)] py-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-7xl mx-3">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl text-gray-700 font-bold mb-4">
                Experience &{" "}
                <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Education
                </span>
              </h1>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                My professional journey and educational background that have
                shaped my career in web development and project management.
              </p>
            </div>

            {/* Two Column Layout */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Work Experience Column */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[hsl(253,100%,94%)] flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-[hsl(251,51%,65%)]" />
                  </div>
                  <h2 className="text-2xl text-gray-700 font-bold">
                    Work Experience
                  </h2>
                </div>

                {/* Experience Card */}
                <div className="bg-white rounded-lg mb-6 p-6 border border-purple-100 shadow-sm hover:shadow-lg transition-shadow hover:shadow-purple-200">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-700">
                        Full Stack Developer
                      </h3>
                      <p className="text-[hsl(251,51%,65%)] font-medium mt-1">
                        DecodeIT.org
                      </p>
                    </div>
                    <span className="text-xs font-semibold  text-gray-700 bg-[hsl(253,100%,94%)] px-3 py-1 rounded-full">
                      Mar, 2025 - Present
                    </span>
                  </div>

                  {/* Bullet Points */}
                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[hsl(251,51%,65%)] flex-shrink-0 mt-0.5" />
                      <p className="text-gray-500">
                        API Development: Architected secure, scalable RESTful
                        APIs with JWT authentication, ensuring operational
                        consistency and safety.
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[hsl(251,51%,65%)] flex-shrink-0 mt-0.5" />
                      <p className="text-gray-500">
                        Asynchronous JavaScript: Leveraged Promises and
                        async/await to manage complex operations, improve
                        readability, and maintain a non-blocking event loop.
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[hsl(251,51%,65%)] flex-shrink-0 mt-0.5" />
                      <p className="text-gray-500">
                        Performance Optimization: Introduced lazy loading + code
                        splitting; reduced initial JS payload ~45% and improved
                        TTI ~35%.
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[hsl(251,51%,65%)] flex-shrink-0 mt-0.5" />
                      <p className="text-gray-500">
                        Database Management: Refactored Mongoose schemas &
                        indexes; improved heavy query runtime ~40% and
                        stabilized memory under load.
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[hsl(251,51%,65%)] flex-shrink-0 mt-0.5" />
                      <p className="text-gray-500">
                        State Management: Standardized state with Redux Toolkit;
                        lowered bugs from prop-drilling and improved developer
                        velocity ~20%.
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[hsl(251,51%,65%)] flex-shrink-0 mt-0.5" />
                      <p className="text-gray-500">
                        AI-Enhanced Workflow: Experienced in using AI agents
                        (Gemini Code Assist, Gemini CLI, Codex, Claude, V0) to
                        accelerate development and problem-solving.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Education Column */}
              <div>
                <div className="">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[hsl(253,100%,94%)] flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-[hsl(251,51%,65%)]" />
                    </div>
                    <h2 className="text-2xl text-gray-700 font-bold">
                      Education
                    </h2>
                  </div>

                  {/* Education Card */}
                  <div className="bg-white rounded-lg p-6  border border-purple-100 shadow-sm hover:shadow-lg transition-shadow hover:shadow-purple-200 mb-9">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-700">
                          Bachelor of Science
                        </h3>
                        <p className="text-[hsl(251,51%,65%)]  mt-1">
                          Daffofil International University
                        </p>
                      </div>
                      <span className="text-xs font-semibold  text-gray-700 bg-[hsl(253,100%,94%)] px-3 py-1 rounded-full">
                        2022 - 2026
                      </span>
                    </div>
                    <p className="text-gray-500">
                      Studies BSc in Software Engineering with strong analytical
                      thinking and problem-solving skills.
                    </p>
                  </div>
                </div>
                {/* Additional Certifications */}
                <div className=" rounded-lg  ">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[hsl(253,100%,94%)] flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-[hsl(251,51%,65%)]" />
                    </div>

                    <h3 className="text-xl font-bold text-gray-700">
                      Additional Certifications
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {[
                      {
                        title: "Take OFF Programming Contest-CPC-DIU",
                        org: "(11th position out of 874)",
                        year: "2022",
                      },
                      {
                        title: "Code Trap Programming Contest-SEC-DIU",
                        org: "(8th position out of 423)",
                        year: "2022",
                      },
                      {
                        title: "Complete Web Development Course",
                        org: "Self-Study Project",
                        year: "2024",
                      },
                      {
                        title:
                          "Master HTML & CSS By Building Real World Project",
                        org: "Self-Study Project",
                        year: "2024",
                      },
                      {
                        title: "Master Git And GitHub Beginner to Expert",
                        org: "Independent Project",
                        year: "2023",
                      },
                    ].map((cert, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-xl  shadow-sm hover:shadow-lg transition-shadow hover:shadow-purple-200 px-6 py-2 border border-purple-100"
                      >
                        <div className="flex flex-row h-full">
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-600 text-md ">
                              {cert.title}
                            </h4>
                            <p className="text-sm text-gray-500 mb-1">
                              {cert.org}
                            </p>
                          </div>
                          <div className="pt-4  border-gray-100">
                            <span className="inline-block px-2 text-xs font-semibold  text-gray-700 bg-[hsl(253,100%,94%)] rounded-full">
                              {cert.year}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </section>
  );
}
