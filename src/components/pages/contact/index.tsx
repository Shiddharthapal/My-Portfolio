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
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <main className="min-h-screen bg-background">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Section - Contact Information */}
              <div className="flex flex-col">
                {/* Gradient Header */}
                <div className="h-24 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-t-3xl mb-6" />

                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    Contact Information
                  </h2>

                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    Feel free to reach out for opportunities, collaborations, or
                    just to say hi! I'm always open to discussing new projects
                    and ideas.
                  </p>

                  {/* Contact Details */}
                  <div className="space-y-6 mb-8">
                    {/* Email */}
                    <div className="flex items-start gap-4">
                      <div className="bg-purple-100 p-3 rounded-full flex-shrink-0">
                        <Mail className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          Email
                        </h3>
                        <a
                          href="mailto:abhamid8586@gmail.com"
                          className="text-blue-500 hover:underline"
                        >
                          abhamid8586@gmail.com
                        </a>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-4">
                      <div className="bg-purple-100 p-3 rounded-full flex-shrink-0">
                        <Phone className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          Phone
                        </h3>
                        <a
                          href="tel:+8801985-308586"
                          className="text-blue-500 hover:underline"
                        >
                          +8801985-308586
                        </a>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-start gap-4">
                      <div className="bg-purple-100 p-3 rounded-full flex-shrink-0">
                        <MapPin className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          Location
                        </h3>
                        <p className="text-blue-500">Khulna, Bangladesh</p>
                      </div>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div>
                    <h3 className="font-semibold text-foreground mb-4">
                      Connect with me
                    </h3>
                    <div className="flex gap-4">
                      <a
                        href="#"
                        className="bg-purple-100 p-4 rounded-full hover:bg-purple-200 transition"
                      >
                        <Github className="w-6 h-6 text-purple-600" />
                      </a>
                      <a
                        href="#"
                        className="bg-purple-100 p-4 rounded-full hover:bg-purple-200 transition"
                      >
                        <Linkedin className="w-6 h-6 text-purple-600" />
                      </a>
                      <a
                        href="#"
                        className="bg-purple-100 p-4 rounded-full hover:bg-purple-200 transition"
                      >
                        <MessageCircle className="w-6 h-6 text-purple-600" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Section - Contact Form */}
              <div className="flex flex-col">
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
                          className="w-full px-4 py-3 border border-input rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                          className="w-full px-4 py-3 border border-input rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                        className="w-full px-4 py-3 border border-input rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                        className="w-full px-4 py-3 border border-input rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
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
