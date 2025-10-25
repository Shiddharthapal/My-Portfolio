import {
  Download,
  Briefcase,
  CheckCircle2,
  GraduationCap,
  BookOpen,
} from "lucide-react";

export default function Resume() {
  return (
    <section id="resume" className="py-20">
      <main className="min-h-screen bg-[hsl(258,50%,96%)] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4">
              Experience & <span className="text-blue-500">Education</span>
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
                <h2 className="text-2xl font-bold">Work Experience</h2>
              </div>

              {/* Experience Card */}
              <div className="bg-white rounded-lg mb-6 p-6 border border-purple-100 shadow-sm hover:shadow-lg transition-shadow hover:shadow-purple-200">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Senior Project Executive
                    </h3>
                    <p className="text-[hsl(251,51%,65%)] font-medium mt-1">
                      Programming Hero
                    </p>
                  </div>
                  <span className="text-sm font-semibold  text-gray-500 bg-[hsl(253,100%,94%)] px-3 py-1 rounded-full">
                    Nov,2023 - Aug,2025
                  </span>
                </div>

                {/* Bullet Points */}
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[hsl(251,51%,65%)] flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">
                      Lead cross-functional teams in delivering complex web
                      applications
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[hsl(251,51%,65%)] flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">
                      Mentored 3,000+ MERN stack students in React, Node.js, and
                      soft skills, boosting job readiness.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[hsl(251,51%,65%)] flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">
                      Implement agile methodologies to improve development
                      workflow and team productivity
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="bg-white rounded-lg p-6 border border-purple-100 
              shadow-sm hover:shadow-lg transition-shadow hover:shadow-purple-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Full Stack Developer
                    </h3>
                    <p className="text-[hsl(251,51%,65%)] font-medium mt-1">
                      The Virtual BD
                    </p>
                  </div>
                  <span className="text-sm font-semibold text-gray-500 bg-[hsl(253,100%,94%)] px-3 py-1 rounded-full">
                    Jan,2023 - Aug,2023
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[hsl(251,51%,65%)] flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">
                      Developed in-house SaaS product, improving user adoption
                      by 25% through optimized UI/UX.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[hsl(251,51%,65%)] flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">
                      Worked on an international project serving 20M+ users,
                      improving performance and scalability of the platform.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[hsl(251,51%,65%)] flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">
                      Implemented new features and bug fixes using React, Redux,
                      Node.js, Express, MongoDB.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[hsl(251,51%,65%)] flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">
                      Enhanced front-end performance, reducing load time by 40%
                      with Next.js optimizations.
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
                  <h2 className="text-2xl font-bold">Education</h2>
                </div>

                {/* Education Card */}
                <div className="bg-white rounded-lg p-6  border border-purple-100 shadow-sm hover:shadow-lg transition-shadow hover:shadow-purple-200 mb-9">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        Bachelor of Science
                      </h3>
                      <p className="text-[hsl(251,87%,80%)]  mt-1">
                        National University
                      </p>
                    </div>
                    <span className="text-sm font-semibold text-gray-500 bg-[hsl(253,100%,94%)] px-3 py-1 rounded-full">
                      2018 - 2022
                    </span>
                  </div>
                  <p className="text-gray-700">
                    Completed BSc in Chemistry with strong analytical thinking
                    and problem-solving skills.
                  </p>
                </div>
              </div>
              {/* Additional Certifications */}
              <div className=" rounded-lg  ">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[hsl(253,100%,94%)] flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-[hsl(251,51%,65%)]" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900">
                    Additional Certifications
                  </h3>
                </div>
                <div className="space-y-3">
                  {[
                    {
                      title: "Complete Web Development Course",
                      org: "Programming Hero",
                      year: "2022",
                    },
                    {
                      title: "Master HTML & CSS By Building Real World Project",
                      org: "Udemy",
                      year: "2022",
                    },
                    {
                      title: "Master Git And GitHub Beginner to Expert",
                      org: "Udemy",
                      year: "2022",
                    },
                    {
                      title: "Next Level Web development Course",
                      org: "Programming Hero",
                      year: "2023",
                    },
                    {
                      title: "Communications Hacks",
                      org: "10 Minutes School",
                      year: "2025",
                    },
                  ].map((cert, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl  shadow-sm hover:shadow-lg transition-shadow hover:shadow-purple-200 px-6 py-2 border border-purple-100"
                    >
                      <div className="flex flex-row h-full">
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-600 text-lg ">
                            {cert.title}
                          </h4>
                          <p className="text-sm text-gray-600 mb-1">
                            {cert.org}
                          </p>
                        </div>
                        <div className="pt-4  border-gray-100">
                          <span className="inline-block px-3 text-sm font-semibold text-gray-500 bg-[hsl(253,100%,94%)] rounded-full">
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
      </main>
    </section>
  );
}
