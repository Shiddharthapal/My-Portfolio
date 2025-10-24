import { Download } from "lucide-react";

export default function Resume() {
  return (
    <section id="resume" className="py-20">
      <div className=" mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900">Resume</h1>
            <button
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
              onClick={() => window.open("/path-to-your-resume.pdf")}
            >
              <Download className="w-5 h-5" />
              Download PDF
            </button>
          </div>

          {/* Professional Summary */}
          <section className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Professional Summary
            </h2>
            <p className="text-gray-600">
              Senior Software Engineer with 5+ years of experience in full-stack
              web development. Specialized in building scalable web applications
              using modern JavaScript frameworks and cloud technologies. Strong
              background in leading development teams and implementing best
              practices for code quality and deployment processes.
            </p>
          </section>

          {/* Experience */}
          <section className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Professional Experience
            </h2>
            <div className="space-y-8">
              <div className="relative pl-8 border-l-2 border-blue-200">
                <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-0"></div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Senior Software Engineer
                  </h3>
                  <p className="text-blue-600 font-medium">
                    Tech Company • 2020 - Present
                  </p>
                  <ul className="mt-4 space-y-2 text-gray-600">
                    <li>
                      • Led development of enterprise-level web applications
                    </li>
                    <li>
                      • Managed team of 5 developers and conducted code reviews
                    </li>
                    <li>• Implemented microservices architecture</li>
                    <li>• Reduced application load time by 40%</li>
                  </ul>
                </div>
              </div>

              <div className="relative pl-8 border-l-2 border-blue-200">
                <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-0"></div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Software Developer
                  </h3>
                  <p className="text-blue-600 font-medium">
                    Digital Agency • 2018 - 2020
                  </p>
                  <ul className="mt-4 space-y-2 text-gray-600">
                    <li>• Developed responsive web applications</li>
                    <li>• Collaborated with UX designers</li>
                    <li>• Implemented CI/CD pipelines</li>
                    <li>• Optimized database queries</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Skills */}
          <section className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Technical Skills
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Frontend Development
                </h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-600">React/Next.js</span>
                      <span className="text-gray-600">95%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div
                        className="h-2 bg-blue-600 rounded-full"
                        style={{ width: "95%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-600">TypeScript</span>
                      <span className="text-gray-600">90%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div
                        className="h-2 bg-blue-600 rounded-full"
                        style={{ width: "90%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-600">CSS/Tailwind</span>
                      <span className="text-gray-600">85%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div
                        className="h-2 bg-blue-600 rounded-full"
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Backend Development
                </h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-600">Node.js</span>
                      <span className="text-gray-600">90%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div
                        className="h-2 bg-blue-600 rounded-full"
                        style={{ width: "90%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-600">PostgreSQL</span>
                      <span className="text-gray-600">85%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div
                        className="h-2 bg-blue-600 rounded-full"
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-600">AWS</span>
                      <span className="text-gray-600">80%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div
                        className="h-2 bg-blue-600 rounded-full"
                        style={{ width: "80%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Education
            </h2>
            <div className="relative pl-8 border-l-2 border-blue-200">
              <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-0"></div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Bachelor of Science in Computer Science
                </h3>
                <p className="text-blue-600 font-medium">
                  University Name • 2014 - 2018
                </p>
                <ul className="mt-4 space-y-2 text-gray-600">
                  <li>• GPA: 3.8/4.0</li>
                  <li>• Dean's List: All Semesters</li>
                  <li>• Senior Project: AI-powered Task Management System</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Certifications */}
          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Certifications
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-semibold text-gray-900">
                  AWS Certified Developer
                </h3>
                <p className="text-gray-600">Amazon Web Services • 2022</p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-semibold text-gray-900">
                  Professional Scrum Master
                </h3>
                <p className="text-gray-600">Scrum.org • 2021</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
