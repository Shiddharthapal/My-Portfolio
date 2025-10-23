"use client";

import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Get In <span className="text-blue-500">Touch</span>
          </h2>
          <p className="text-muted-foreground">
            Have a project in mind? Let's work together to bring your ideas to
            life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
            <Mail className="w-8 h-8 text-blue-500 mx-auto mb-3" />
            <h3 className="font-semibold text-foreground mb-2">Email</h3>
            <a
              href="mailto:abhamid8586@gmail.com"
              className="text-blue-500 hover:underline text-sm"
            >
              abhamid8586@gmail.com
            </a>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
            <Phone className="w-8 h-8 text-blue-500 mx-auto mb-3" />
            <h3 className="font-semibold text-foreground mb-2">Phone</h3>
            <a
              href="tel:+8801985308586"
              className="text-blue-500 hover:underline text-sm"
            >
              +880 1985-308586
            </a>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
            <MapPin className="w-8 h-8 text-blue-500 mx-auto mb-3" />
            <h3 className="font-semibold text-foreground mb-2">Location</h3>
            <p className="text-muted-foreground text-sm">Khulna, Bangladesh</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 h-auto">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
