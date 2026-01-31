import React, { useState } from "react";
import {
  ArrowUp,
  Phone,
  Mail,
  MapPin,
  Github,
  Linkedin,
  MessageCircle,
} from "lucide-react";

export default function PortfolioFooter() {
  const [hoveredLink, setHoveredLink] = useState(null);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: Mail, href:"mailto:shiddhartpal01355@gmail.com?subject=Hello&body=Hi there!", label: "Mail" },
    {
      icon: MessageCircle,
      href: "https://wa.me/8801860680768",
      label: "WhatsApp",
    },
    {
      icon: Phone,
      href:"tel:01860680768",
      label: "Phone",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center dark:bg-[hsl(262,31%,12%)] bg-[hsl(270,20%,98%)]">
      <footer className="w-full max-w-7xl mx-auto px-6 md:px-10 py-7">
        {/* Scroll to Top Button */}
        <div className="flex justify-center mb-4">
          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full border border-[hsl(251,85%,75%)] bg-transparent text-gray-700 dark:dark:text-[hsl(0,0%,96%)] 
             hover:bg-[hsl(251,85%,75%)]
             hover:text-white hover:-translate-y-1 hover:shadow-lg hover:shadow-[hsl(251,85%,75%)] transition-all duration-300 flex items-center justify-center"
            aria-label="Scroll to top"
          >
            <ArrowUp size={24} />
          </button>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-6">
          {/* Brand Section */}
          <div>
            <h2 className="text-3xl font-bold mb-1 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Shiddhartha.
            </h2>
            <p className="text-[hsl(261,7%,46%)] text-md font-medium leading-relaxed dark:text-[hsl(261,15%,70%)]">
              Experienced software engineer crafting modern, high-performance full-stack web applications with a user-centric approach.
          
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-bold mb-2 bg-clip-text text-gray-700 dark:text-[hsl(0,0%,96%)] ">
              Quick Links
            </h2>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    onMouseEnter={() => setHoveredLink(index)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className="text-[hsl(261,7%,46%)] dark:text-[hsl(261,15%,70%)] hover:text-[hsl(251,85%,75%)] font-medium transition-all duration-300 inline-block"
                    style={{
                      transform:
                        hoveredLink === index
                          ? "translateX(5px)"
                          : "translateX(0)",
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="text-xl font-bold mb-2 text-gray-700 dark:text-[hsl(0,0%,96%)]  bg-clip-text ">
              Get in Touch
            </h2>

            {/* Social Links */}
            <div className="flex gap-4 mt-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center dark:text-[hsl(0,0%,96%)]  hover:bg-[hsl(251,85%,75%)]
                     hover:text-white hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/40 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-4 border-t border-slate-700/50 text-center text-[hsl(261,7%,46%)] dark:text-[hsl(261,15%,70%)] text-sm">
          <p>&copy; 2025 Shiddhartha. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
