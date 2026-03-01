import { motion } from "framer-motion";
import { Briefcase, FileText, Brain } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ScrollFadeText } from "../scrollFadeText";

export default function About() {
  const navigate = useNavigate();
  const stats = [
    {
      icon: Briefcase,
      count: 2,
      suffix: "+",
      label1: "Years",
      label2: "Experience",
      color: "text-[hsl(251,85%,75%)]",
      bgColor: "bg-purple-50",
    },
    {
      icon: FileText,
      count: 3,
      suffix: "+",
      label1: "Projects",
      label2: "Completed",
      color: "text-[hsl(251,85%,75%)]",
    },
    {
      icon: Brain,
      count: 746,
      suffix: "+",
      label1: "Problems Solve",
      label2: "",
      color: "text-[hsl(251,85%,75%)]",
      bgColor: "bg-purple-50",
    }
  ];

  return (
    <section
      id="about"
      className="flex items-center justify-center px-3 sm:px-4 lg:px-6 py-10"
    >
      <div className="mx-auto max-w-7xl items-center   px-1 sm:px-3">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="gap-8 items-center">
            <ScrollFadeText
              text="SHIDDHARTHA"
               initialSize={72}
            maxScale={2.5}
            scrollRange={500}
              className="mb-5 sm:mb-8 max-w-full overflow-hidden"
            />
            <div className="text-center ">
              <h2 className="text-3xl text-gray-700 md:text-4xl font-bold mb-6 sm:mb-8 dark:text-[hsl(0,0%,96%)]">
                About{" "}
                <span className=" bg-gradient-to-l from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Me
                </span>{" "}
              </h2>
              <p
                className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-[hsl(261,15%,70%)] mb-6 text-muted-foreground max-w-full pt-1 pb-2 sm:pb-4 text-left sm:text-justify"
              >
                I come from a small rural village where dreams are often bigger
                than the resources around you. My father is a businessman who
                studied only up to class 5, and my mother is a homemaker who
                studied till
                <button
                  type="button"
                  onClick={() => navigate("/dream")}
                  className="ml-2 mt-1 sm:mt-0 focus:outline-none inline-flex items-center text-cyan-600 hover:text-purple-600 dark:text-cyan-400 dark:hover:text-purple-400 transition-colors duration-200"
                >
                  more
                </button>
              </p>
              
              <div className="mt-7 sm:mt-9 overflow-x-auto md:overflow-visible custom-x-scrollbar">
                <div className="flex flex-nowrap gap-4 w-max md:w-full md:grid md:grid-cols-3 md:gap-6">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className="bg-[hsl(264,45%,96%)] dark:bg-[hsl(260,30%,14%)] flex flex-col items-center 
                      rounded-2xl px-3 py-4 w-[220px] sm:w-[240px] md:w-full md:max-w-none shadow-sm hover:shadow-lg dark:shadow-md  hover:shadow-[hsl(254,49%,86%)] 
                       dark:hover:shadow-[hsl(253,27%,39%)] transition-all 
                      duration-300 transform hover:-translate-y-1"
                    >
                      {/* Icon */}
                      <div
                        className={`${stat.bgColor} dark:bg-[hsl(260,30%,14%)] w-10 h-6 rounded-xl flex items-center justify-center mb-2`}
                      >
                        <stat.icon className={`w-6 h-6 ${stat.color}`} />
                      </div>

                      {/* Count */}
                      <div className="text-xl sm:text-2xl font-bold text-gray-700 dark:text-[hsl(0,0%,96%)] ">
                        {stat.count}
                        {stat.suffix}
                      </div>

                      {/* Label */}
                      <div className="text-gray-500 dark:text-[hsl(261,15%,70%)] flex flex-col items-center text-xs sm:text-sm">
                        <div>{stat.label1}</div>
                        {stat.label2 && <div>{stat.label2}</div>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
