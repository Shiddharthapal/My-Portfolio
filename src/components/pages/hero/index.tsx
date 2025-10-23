"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
            Welcome to my portfolio
          </div>

          <div>
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-2">
              Hi, I'm <span className="text-blue-500">Hamid</span>
            </h1>
            <p className="text-2xl text-muted-foreground font-semibold">
              FullStack Developer
            </p>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
            I am a passionate full stack developer specialized in MERN stack
            with extensive experience in project management. I love building
            efficient, user-friendly applications and leading teams to success.
          </p>

          <div className="flex gap-4 pt-4">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 h-auto">
              Get in Touch
            </Button>
            <Button
              variant="outline"
              className="px-6 py-2 h-auto bg-transparent"
            >
              View Projects
            </Button>
          </div>

          <div className="flex gap-4 pt-4">
            <a href="#" className="p-2 hover:bg-blue-100 rounded-lg transition">
              <Github className="w-6 h-6 text-foreground" />
            </a>
            <a href="#" className="p-2 hover:bg-blue-100 rounded-lg transition">
              <Linkedin className="w-6 h-6 text-foreground" />
            </a>
            <a href="#" className="p-2 hover:bg-blue-100 rounded-lg transition">
              <Mail className="w-6 h-6 text-foreground" />
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-80 h-80 rounded-full bg-blue-400 overflow-hidden border-8 border-white shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-6xl mb-2">👨‍💻</div>
                <p className="font-semibold">FullStack Developer</p>
              </div>
            </div>
          </div>

          {/* Floating Tags */}
          <div className="absolute top-20 right-0 bg-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium">
            Problem Solver
          </div>
          <div className="absolute bottom-32 left-0 bg-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium">
            Project Management
          </div>
        </div>
      </div>
    </section>
  );
}
