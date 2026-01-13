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
      count: 741,
      suffix: "+",
      label1: "Problem Solve",
      label2: "",
      color: "text-[hsl(251,85%,75%)]",
      bgColor: "bg-purple-50",
    },
    {
      icon: Code,
      count: 52,
      suffix: "K+",
      label1: "Lines of Code",
      label2: "",
      color: "text-[hsl(251,85%,75%)]",
      bgColor: "bg-purple-50",
    },
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
      className="min-h-screen flex items-center justify-center px-2 py-5"
    >
      <div className=" mx-auto items-center max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative max-w-md  mx-auto w-[55%] sm:w-[65%] mt-4 md:w-[85%] ">
              <div
                className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-purple-800
              dark: rounded-lg translate-x-6 translate-y-6"
              ></div>

              <motion.img
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                src="/about.jpg"
                alt="About Me"
                className="rounded-lg shadow-lg w-full relative z-10"
              />
            </div>
            <div>
              <h2 className="text-3xl text-gray-700 md:text-4xl font-bold mb-8 dark:text-[hsl(0,0%,96%)]">
                About{" "}
                <span className=" bg-gradient-to-l from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Me
                </span>{" "}
              </h2>
              <p className="text-lg text-gray-600 dark:text-[hsl(261,15%,70%)] mb-6">
                I’m a passionate Software Engineer with a strong foundation
                in problem solving with strong DSA and experience in MERN. I am
                also skilled in using AI tools like AI agents etc.
              </p>
              <div className="max-w-md bg-white dark:bg-[hsl(260,29%,10%)] rounded-lg">
                {/* Fullname */}
                <div className="flex text-lg mb-3">
                  <div className="w-32 text-gray-700 dark:text-[hsl(0,0%,96%)] font-medium">
                    Fullname:
                  </div>
                  <div className="flex-1 text-gray-600 dark:text-[hsl(0,0%,96%)]">
                    Shiddhartha Pal
                  </div>
                </div>

                {/* Address */}
                <div className="flex text-lg mb-3">
                  <div className="w-32 text-gray-700 dark:text-[hsl(0,0%,96%)] font-medium">
                    Address:
                  </div>
                  <div className="flex-1 text-gray-600 dark:text-[hsl(0,0%,96%)]">
                    Dhaka, Bangladesh
                  </div>
                </div>

                {/* Email */}
                <div className="flex text-lg mb-3">
                  <div className="w-32 text-gray-700 dark:text-[hsl(0,0%,96%)] font-medium">
                    Email:
                  </div>
                  <a
              href="mailto:shiddhartpal01355@gmail.com?subject=Hello&body=Hi there!"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-[hsl(251,85%,75%)]  focus:outline-none hover:underline   transition"
            >
                    shiddhartpal01355@gmail.com
       
                  </a>
                </div>

                {/* Phone */}
                <div className="flex text-lg mb-8">
                  <div className="w-32 text-gray-700 dark:text-[hsl(0,0%,96%)] font-medium">
                    Phone:
                  </div>
                  <div className="flex-1 text-[hsl(251,85%,75%)]">
                    +8801860680768
                  </div>
                </div>

                {/* Contact Button */}
                <button
                  key="contact"
                  onClick={() => scrollToSection("contact")}
                  className="px-8 py-3 bg-gradient-to-tl from-cyan-500 to-purple-800 text-white 
                  rounded-lg hover:bg-gradient-to-br transition-colors duration-200 focus:outline-none"
                >
                  Contact Me
                </button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-9">
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
