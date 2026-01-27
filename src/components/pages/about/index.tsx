import { motion } from "framer-motion";
import { Briefcase, FileText, Code, Brain } from "lucide-react";
import { useNavigate } from "react-router-dom";

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

  const scrollToSection = (sectionId) => {
    // First navigate to home if not already there
    if (window.location.pathname !== "/") {
      navigate("/");
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        performScroll(sectionId);
      }, 100);
    } else {
      performScroll(sectionId);
    }

    if (window.history.replaceState) {
      window.history.replaceState(null, "", "/");
    }
  };

  const performScroll = (sectionId) => {
    if (sectionId === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 64; // Height of fixed navbar (h-16 = 4rem = 64px)
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-2 pb-5"
    >
      <div className=" mx-auto items-center max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className=" gap-8 items-center">
            <div className="relative max-w-md  mx-auto w-[55%] sm:w-[65%]  md:w-[85%] ">
            </div>
            <div className="text-center">
              <h2 className="text-3xl text-gray-700 md:text-4xl font-bold mb-8 dark:text-[hsl(0,0%,96%)]">
                About{" "}
                <span className=" bg-gradient-to-l from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Me
                </span>{" "}
              </h2>
              <p className="text-lg text-gray-600 dark:text-[hsl(261,15%,70%)] mb-6">
                I come from a small rural village where dreams are often bigger
                than the resources around you. My father is a businessman who
                studied only up to class 5, and my mother is a homemaker who
                studied till class 9.
                <button
                  type="button"
                  onClick={() => navigate("/dream")}
                  className="ml-2 focus:outline-none inline-flex items-center text-cyan-600 hover:text-purple-600 dark:text-cyan-400 dark:hover:text-purple-400 transition-colors duration-200"
                >
                  more
                </button>
              </p>
              
              <div className="grid grid-cols-3 gap-6 mt-9">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-[hsl(264,45%,96%)] dark:bg-[hsl(260,30%,14%)] flex flex-col items-center 
                    rounded-2xl px-2 py-4 shadow-sm hover:shadow-lg dark:shadow-md  hover:shadow-[hsl(254,49%,86%)] 
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
                    <div className="text-2xl font-bold text-gray-700 dark:text-[hsl(0,0%,96%)] ">
                      {stat.count}
                      {stat.suffix}
                    </div>

                    {/* Label */}
                    <div className="text-gray-500 dark:text-[hsl(261,15%,70%)] flex flex-col items-center text-sm">
                      <div>{stat.label1}</div>
                      {stat.label2 && <div>{stat.label2}</div>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
