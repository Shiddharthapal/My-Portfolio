import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Github,
  Linkedin,
  MessageCircle,
  Check,
  Loader2,
} from "lucide-react";

import { Button } from "@/components/ui/button";

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const formdata = {
    name: "Shiddhartha Pal",
    email: "shiddhartpal01355@gmail.com",
    phone: "+8801860680768",
    Location: "Bagerhat, Bangladesh",
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setSubmitStatus("success");
      // Reset form after successful submission
      setFormData({ name: "", email: "", subject: "", message: "" });
      // Clear success message after 3 seconds
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "An error occurred"
      );
      // Clear error message after 3 seconds
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-2 dark:bg-gray-900">
      <main className="min-h-screen bg-background">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold mb-4">
                Get In{" "}
                <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Touch
                </span>
              </h1>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Feel free to reach out for opportunities, collaborations, or
                just to say hi! I'm always open to discussing new projects and
                ideas.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
              <div className="min-h-screen rounded-2xl border border-gray-300  relative">
                {/* Split Background - Vertical Split */}
                <div className="absolute inset-0 flex flex-col overflow-hidden rounded-2xl">
                  <div className="h-1/3 bg-gradient-to-br from-blue-300 to-purple-600"></div>
                  <div className="h-1/2 bg-white"></div>
                </div>

                {/* Content Container */}
                <div className="relative z-10 min-h-screen flex items-center justify-center px-6 pt-10">
                  <div className="w-full max-w-2xl">
                    {/* Gradient Header */}

                    {/* Main Card */}
                    <div className="bg-white  rounded-2xl p-8 shadow-2xl">
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Contact Information
                      </h2>

                      <p className="text-gray-600 mb-6 leading-relaxed">
                        Feel free to reach out for opportunities,
                        collaborations, or just to say hi! I'm always open to
                        discussing new projects and ideas.
                      </p>

                      {/* Contact Details */}
                      <div className="space-y-6 mb-4">
                        {/* Email */}
                        <div className="flex items-start gap-4">
                          <div className="bg-[hsl(260,60%,94%)] p-3 rounded-full flex-shrink-0">
                            <Mail className="w-5 h-5 text-[hsl(251,51%,65%)]" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-0">
                              Email
                            </h3>
                            <a
                              href={formdata.email}
                              className="text-[hsl(251,51%,65%)] text-lg hover:underline"
                            >
                              {formdata.email.replace("mailto:", "")}
                            </a>
                          </div>
                        </div>

                        {/* Phone */}
                        <div className="flex items-start gap-4">
                          <div className="bg-[hsl(260,60%,94%)] p-3 rounded-full flex-shrink-0">
                            <Phone className="w-5 h-5 text-[hsl(251,51%,65%)]" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-0">
                              Phone
                            </h3>
                            <a
                              href={formdata.phone}
                              className="text-[hsl(251,51%,65%)] text-lg hover:underline"
                            >
                              {formdata.phone.replace("tel:", "")}
                            </a>
                          </div>
                        </div>

                        {/* Location */}
                        <div className="flex items-start gap-4">
                          <div className="bg-[hsl(260,60%,94%)] p-3 rounded-full flex-shrink-0">
                            <MapPin className="w-5 h-5 text-[hsl(251,51%,65%)]" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-0">
                              Location
                            </h3>
                            <p className="text-[hsl(251,51%,65%)] text-lg">
                              {formdata.Location}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Social Links */}
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-4">
                          Connect with me
                        </h3>
                        <div className="flex gap-4">
                          <a
                            href="https://github.com/Shiddharthapal"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[hsl(260,60%,94%)] focus:outline-none p-4 rounded-full hover:bg-[hsl(251,85%,75%)] transition"
                          >
                            <Github className="w-5 h-5 text-gray-700 hover:text-white" />
                          </a>
                          <a
                            href="https://www.linkedin.com/in/shiddharthapal/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[hsl(260,60%,94%)] focus:outline-none p-4 rounded-full hover:bg-[hsl(251,85%,75%)] transition"
                          >
                            <Linkedin className="w-5 h-5 text-gray-700 hover:text-white" />
                          </a>
                          <a
                            href="https://wa.me/01860680768"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[hsl(260,60%,94%)] focus:outline-none p-4 rounded-full hover:bg-[hsl(251,85%,75%)] transition"
                          >
                            <MessageCircle className="w-5 h-5 text-gray-700 hover:text-white" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Section - Contact Form */}
              <div className="flex flex-col border border-gray-400 rounded-2xl">
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h2 className="text-3xl font-bold text-foreground mb-8">
                    Send me a message
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name and Email Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your name"
                          className="w-full px-4 py-2 border border-input rounded-lg bg-[hsl(270,20%,98%)] text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-[hsl(248,44%,57%)]"
                          required
                          disabled={isLoading}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter your email"
                          className="w-full px-4 py-2 border border-input rounded-lg bg-[hsl(270,20%,98%)] text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-[hsl(248,44%,57%)]"
                          required
                          disabled={isLoading}
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Enter subject line"
                        className="w-full px-4 py-2 border border-input rounded-lg bg-[hsl(270,20%,98%)] text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-[hsl(248,44%,57%)]"
                        required
                        disabled={isLoading}
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Enter your message"
                        rows={6}
                        className="w-full px-4 py-3 border border-input rounded-lg bg-[hsl(270,20%,98%)] text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-[hsl(248,44%,57%)] resize-none"
                        required
                        disabled={isLoading}
                      />
                    </div>

                    {/* Status Messages */}
                    {submitStatus === "success" && (
                      <div className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-lg">
                        <Check className="w-5 h-5 text-green-600" />
                        <p className="text-green-700 font-medium">
                          Message sent successfully!
                        </p>
                      </div>
                    )}

                    {submitStatus === "error" && (
                      <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-lg">
                        <p className="text-red-700 font-medium">
                          {errorMessage}
                        </p>
                      </div>
                    )}

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <span>✈️</span>
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </section>
  );
}
