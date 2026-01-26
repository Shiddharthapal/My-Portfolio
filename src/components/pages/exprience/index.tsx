import {
  ExternalLink,
  Briefcase,
  CheckCircle2,
  GraduationCap,
  BookOpen,
  LockKeyholeOpen,
   Code, Trophy, Zap, Target
} from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

 interface PlatformData {
  name: string
 icon: React.ReactNode
  problemsSolved: number
  link: string
  color: string
  description: string
}

function ProblemSolvingCard({ platform }: { platform: PlatformData }) {
  return (
    <Card className="group bg-white dark:bg-[hsl(262,31%,12%)] rounded-xl  shadow-sm
      hover:shadow-lg transition-shadow hover:shadow-purple-200 px-0 py-0 border border-purple-100
      dark:border-[hsl(255,41%,19%)] dark:hover:shadow-md dark:hover:shadow-[hsl(253,27%,39%)]">
      <CardHeader className="pb-1">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-4xl text-[hsl(251,85%,75%)]">{platform.icon}</span>
        <h3 className="text-xl font-bold  text-gray-700  dark:text-[hsl(0,0%,96%)]">{platform.name}</h3>
        </div>
        <p className="text-sm text-muted-foreground mt-1">{platform.description}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Problems Solved */}
        <div>
          <p className="text-sm text-muted-foreground mb-2">Problems Solved</p>
          <p className="text-2xl font-bold text-gray-700 dark:text-[hsl(0,0%,96%)]">{platform.problemsSolved}+</p>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 dark:bg-secondary rounded-full h-2">
          <div
            className="bg-gray-700 dark:bg-[hsl(0,0%,96%)] rounded-full h-2 transition-all duration-500"
            style={{
              width: `${Math.min((platform.problemsSolved / 500) * 100, 100)}%`,
            }}
          />
        </div>

        {/* Visit Button */}
        <a href={platform.link} target="_blank" rel="noopener noreferrer" className="block w-full">
          <Button variant="outline" className="w-full group/btn bg-transparent hover:border-purple-200 dark:hover:border-[hsl(253,27%,39%)]
          hover:bg-[hsl(264,45%,96%)] dark:bg-[hsl(260,30%,14%)]
          ">
            Visit Profile
            <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </a>
      </CardContent>
    </Card>
  )
}

export default function Resume() {

const platforms: PlatformData[] = [
  {
    name: "LeetCode",
   icon: <Code className="w-8 h-8" />,
    problemsSolved: 148,
    link: "https://leetcode.com/u/shiddhartha_pal29/",
    color: "from-yellow-400 to-orange-500",
    description: "Data Structures & Algorithms",
  },
  {
    name: "Beecrowd",
    icon: <Trophy className="w-8 h-8" />,
    problemsSolved: 186,
    link: "https://judge.beecrowd.com/en/profile/645981",
    color: "from-green-400 to-emerald-500",
    description: "Basic of Programming",
  },
  {
    name: "CodeForces",
    icon: <Zap className="w-8 h-8" />,
    problemsSolved: 291,
    link: "https://codeforces.com/profile/shiddhartha_pal",
    color: "from-blue-400 to-cyan-500",
    description: "Competitive Programming",
  },
  {
    name: "CodeChef",
    icon: <Target className="w-8 h-8" />,
    problemsSolved: 110,
    link: "https://www.codechef.com/users/pal06",
    color: "from-purple-400 to-pink-500",
    description: "Focused on first solving skills with key skills",
  },
]
  return (
    <section
      id="resume"
      className="min-h-screen flex items-center justify-center bg-[hsl(264,45%,96%)] dark:bg-[hsl(260,30%,14%)] py-20"
    >
      <main className="  mx-auto pt-2 pb-14 px-4 items-center max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-7xl mx-3">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl text-gray-700 dark:text-[hsl(0,0%,96%)] font-bold mb-4">
                Experience &{" "}
                <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Education
                </span>
              </h1>
              <p className="text-gray-600 dark:text-[hsl(261,15%,70%)] text-lg max-w-2xl mx-auto">
                My professional journey and educational background that have
                shaped my career in web development and project management.
              </p>
            </div>

            <div className="w-full mb-8 mx-auto">
        {/* Header */}
          <div className=" mt-5">
           <div className="flex flex-row items-center gap-3 text-2xl text-gray-700 dark:text-[hsl(0,0%,96%)] font-bold">
             <LockKeyholeOpen className="w-6 h-6 text-[hsl(251,51%,65%)]" />
             <h2>Problem Solving</h2>
           </div>
           <p className="text-lg text-muted-foreground max-w-full pt-1 pb-4">
             I actively participate in competitive programming and solve problems on various platforms to strengthen my
             algorithmic thinking and coding skills.
           </p>
          </div>

           {/* Cards Grid */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             {platforms.map((platform) => (
               <ProblemSolvingCard key={platform.name} platform={platform} />
             ))}
           </div>
           
           {/* Stats Summary */}
            <div className="mt-4 p-6 rounded-lg bg-card  bg-white dark:bg-[hsl(262,31%,12%)] border border-purple-100
                              dark:border-[hsl(255,41%,19%)] dark:hover:shadow-md dark:hover:shadow-[hsl(253,27%,39%)]">
              <div className="grid grid-cols-3 md:grid-cols-3 gap-8 text-center">
                <div>
                  <p className="text-3xl font-bold text-primary">
                    {platforms.reduce((sum, p) => sum  + p.problemsSolved, 0)+11}+
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">Total Problems Solve</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">{platforms.length}</p>
                  <p className="text-sm text-muted-foreground mt-2">Platforms</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">4+</p>
                  <p className="text-sm text-muted-foreground mt-2">Years Experience</p>
                </div>

              </div>
            </div>
            </div>

            {/* Two Column Layout */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Work Experience Column */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[hsl(260, 30%, 14%)] flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-[hsl(251,51%,65%)]" />
                  </div>
                  <h2 className="text-2xl text-gray-700 dark:text-[hsl(0,0%,96%)]  font-bold">
                    Work Experience
                  </h2>
                </div>

                {/* Experience Card */}
                <div
                  className="bg-white dark:bg-[hsl(262,31%,12%)] rounded-lg mb-6 p-6 border border-purple-100
                 dark:border-[hsl(255,41%,19%)] shadow-sm hover:shadow-lg transition-shadow hover:shadow-purple-200
                 dark:hover:shadow-md dark:hover:shadow-[hsl(253,27%,39%)]"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-700 dark:text-[hsl(0,0%,96%)]">
                        Junior Software Engineer
                      </h3>
                      <a
                        href="https://www.decodeit.org/"
                        target="_blank"

                        rel="noopener noreferrer"
                        className="text-[hsl(251,51%,65%)] font-medium mt-1 hover:underline outline-none"
                      >
                        DecodeIT.org
                      </a>
                    </div>
                    <span
                      className="text-xs font-semibold  text-gray-700 bg-[hsl(253,100%,94%)] dark:bg-[hsl(259,30%,18%)] 
                    dark:text-[hsl(0,0%,96%)]  px-3 py-1 rounded-full"
                    >
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
                <div className=" rounded-lg  ">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full dark:bg-[hsl(260,30%,14%)] flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-[hsl(251,51%,65%)]" />
                    </div>

                    <h3 className="text-xl font-bold text-gray-700 dark:text-[hsl(0,0%,96%)]">
                      Achivement
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {[
                      {
                        title: "Recognized by Data Science Lab with a Professional Certificate for successful Full Stack Development on the AI-Medicare+ healthcare AI web application",
                       
                        year: "2025",
                      },
                      {
                        title: "Successfully completed my defense project: DIU_COURSE_TUBE (a video streaming platform)",
                        org: "Self-Study Project",
                        year: "2025",
                      },
            
                    ].map((cert, index) => (
                      <div
                        key={index}
                        className="bg-white dark:bg-[hsl(262,31%,12%)] rounded-xl  shadow-sm
                         hover:shadow-lg transition-shadow hover:shadow-purple-200 px-6 py-2 border border-purple-100
                          dark:border-[hsl(255,41%,19%)] dark:hover:shadow-md dark:hover:shadow-[hsl(253,27%,39%)]"
                      >
                        <div className="flex flex-row h-full">
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-700 dark:text-gray-300 text-md ">
                              {cert.title}
                            </h4>
                            <p className="text-sm text-gray-500 mb-1">
                              {cert.org}
                            </p>
                          </div>
                          <div className="pt-4  border-gray-100 ">
                            <span
                              className="inline-block px-2 text-xs font-semibold  text-gray-700 bg-[hsl(253,100%,94%)] 
                            dark:bg-[hsl(259,30%,18%)]  dark:text-[hsl(0,0%,96%)] rounded-full"
                            >
                              {cert.year}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Education Column */}
              <div>
                <div className="">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[hsl(260,30%,14%)] flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-[hsl(251,51%,65%)]" />
                    </div>
                    <h2 className="text-2xl text-gray-700 dark:text-[hsl(0,0%,96%)] font-bold">
                      Education
                    </h2>
                  </div>

                  {/* Education Card */}
                  <div
                    className="bg-white dark:bg-[hsl(262,31%,12%)] rounded-lg p-6  border border-purple-100
                   dark:border-[hsl(255,41%,19%)] shadow-sm hover:shadow-lg transition-shadow hover:shadow-purple-200
                   dark:hover:shadow-md dark:hover:shadow-[hsl(253,27%,39%)] mb-9"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-700 dark:text-[hsl(0,0%,96%)]">
                          Bachelor of Science
                        </h3>
                        <a 
                        href="https://daffodilvarsity.edu.bd/"
                        className="text-[hsl(251,51%,65%)] focus:outline-none hover:underline mt-1">
                          Daffofil International University
                        </a>
                      </div>
                      <div className="flex flex-col  gap-2">
                        <span
                          className="text-xs font-semibold  text-gray-700 bg-[hsl(253,100%,94%)] 
                      dark:bg-[hsl(259,30%,18%)]  dark:text-[hsl(0,0%,96%)] px-3 py-1 rounded-full
                        "
                        >
                          CGPA:  3.77 / 4.00
                        </span>
                        <span
                          className="text-xs font-semibold  text-gray-700 bg-[hsl(253,100%,94%)] 
                      dark:bg-[hsl(259,30%,18%)]  dark:text-[hsl(0,0%,96%)] px-3 py-1 rounded-full
                      blur-sm hover:blur-none transition-all duration-300 cursor-pointer
                      "
                        >
                          Jan 2022 - Jan 2026
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-500">
                      Studies BSc in Software Engineering with strong analytical
                      thinking, problem-solving skills and professional
                      experience.
                    </p>
                  </div>
                </div>
                {/* Additional Certifications */}
                <div className=" rounded-lg  ">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full dark:bg-[hsl(260,30%,14%)] flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-[hsl(251,51%,65%)]" />
                    </div>

                    <h3 className="text-xl font-bold text-gray-700 dark:text-[hsl(0,0%,96%)]">
                      Additional Certifications
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {[
                      {
                        title: "Participated in the ICPC 2024.",
                        org: "Successfully solved 3 problems",
                        year: "2024",
                      },
                      {
                        title: "Participated in the ICPC 2023.",
                        org: "Successfully solved 2 problems",
                        year: "2023",
                      },
                      {
                        title: "Participated in the ICPC 2022.",
                        org: "Solved 0 problem",
                        year: "2022",
                      },
                      {
                        title: "Take OFF Programming Contest-CPC-DIU",
                        org: "(9th position out of 874)",
                        year: "2022",
                      },
                      {
                        title: "Code Trap Programming Contest-SEC-DIU",
                        org: "(7th position out of 423)",
                        year: "2022",
                      },
                    
                      {
                        title: "Completed MERN Course",
                        org: "Self study from (Node.js, React, Express, MongoDB) docs with hands on experience",
                        year: "2024",
                      },
            
                    ].map((cert, index) => (
                      <div
                        key={index}
                        className="bg-white dark:bg-[hsl(262,31%,12%)] rounded-xl  shadow-sm
                         hover:shadow-lg transition-shadow hover:shadow-purple-200 px-6 py-2 border border-purple-100
                          dark:border-[hsl(255,41%,19%)] dark:hover:shadow-md dark:hover:shadow-[hsl(253,27%,39%)]"
                      >
                        <div className="flex flex-row h-full">
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-700 dark:text-gray-300  text-md ">
                              {cert.title}
                            </h4>
                            <p className="text-sm text-gray-500 mb-1">
                              {cert.org}
                            </p>
                          </div>
                          <div className="pt-4  border-gray-100 ">
                            <span
                              className="inline-block px-2 text-xs font-semibold  text-gray-700 bg-[hsl(253,100%,94%)] 
                            dark:bg-[hsl(259,30%,18%)]  dark:text-[hsl(0,0%,96%)] rounded-full"
                            >
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
