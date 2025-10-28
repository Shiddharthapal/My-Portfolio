import { useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@/lib/theme-context";

export default function Navbar() {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navLinks = [
    { name: "Home", section: "home" },
    { name: "About", section: "about" },
    { name: "Skills", section: "skills" },
    { name: "Projects", section: "projects" },
    { name: "Exprience", section: "resume" },
    { name: "Contact", section: "contact" },
  ];

  const scrollToSection = (sectionId) => {
    setIsMobileMenuOpen(false);

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
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-border z-50">
      <div className="container"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 2xl:p-0">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection("home")}
              className="text-2xl 2xl:text-3xl  focus:outline-none font-bold bg-gradient-to-r from-purple-500 to-blue-600 bg-clip-text text-transparent cursor-pointer"
            >
              Shiddhartha.
            </button>
          </div>
          <div className="flex justify-center">
            {/* Navigation Links */}
            <div className="hidden md:flex items-center justify-end space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.section)}
                  className="focus:outline-none text-foreground text-gray-700 dark:text-white hover:text-[hsl(251,48%,55%)]
                 dark:hover:text-[hsl(251,48%,55%)] transition-colors duration-200 text-sm 2xl:text-lg  font-medium"
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* Right Side - Theme Toggle & Resume Button */}
            <div className="flex items-center space-x-4">
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-lg focus:outline-none hover:rounded-full hover:bg-[hsl(260,60%,94%)]
               dark:hover:bg-[hsl(260,29%,20%)] transition-colors duration-200 2xl:text-lg"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5 text-foreground dark:text-white" />
                ) : (
                  <Menu className="w-5 h-5 text-foreground text-gray-700 dark:text-white" />
                )}
              </button>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg focus:outline-none hover:rounded-full hover:bg-[hsl(260,60%,94%)] dark:hover:bg-[hsl(260,29%,20%)] transition-colors duration-200"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5 text-foreground dark:text-white" />
                ) : (
                  <Moon className="w-5 h-5 text-foreground text-gray-700" />
                )}
              </button>

              {/* Resume Button - Hidden on mobile */}
              <a
                href="https://drive.google.com/file/d/1n1Xp_JiZSKVS30ihKnZ7AK-UqM93i0yF/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:block"
              >
                <button
                  className="px-6 py-2 focus:outline-none bg-gradient-to-tl from-cyan-500 to-purple-800
               text-white rounded-lg hover:bg-gradient-to-br transition-colors duration-200 dark:text-black 
               font-medium text-sm 2xl:text-lg "
                >
                  Resume
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.section)}
                className="block w-full text-left px-4 py-2 text-foreground text-gray-700 dark:text-white hover:bg-[hsl(260,60%,94%)] dark:hover:bg-[hsl(260,29%,20%)] rounded-lg transition-colors duration-200 text-sm font-medium"
              >
                {link.name}
              </button>
            ))}
            {/* Resume Button in Mobile Menu */}
            <a
              href="https://drive.google.com/file/d/1n1Xp_JiZSKVS30ihKnZ7AK-UqM93i0yF/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="block sm:hidden"
            >
              <button className="w-full px-4 py-3 focus:outline-none bg-gradient-to-tl from-cyan-500 to-purple-800 text-white rounded-lg hover:bg-gradient-to-br transition-colors duration-200 dark:text-black font-medium text-sm">
                Resume
              </button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
