"use client";

import { Card } from "@/components/ui/card";
import { Building2, FileText, Users, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function About() {
  const stats = [
    { icon: Building2, label: "Years Experience", value: "4+" },
    { icon: FileText, label: "Projects Completed", value: "20+" },
    { icon: Users, label: "Happy Clients", value: "30+" },
    { icon: Code, label: "Lines of Code", value: "50K+" },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Card */}
          <Card className="bg-blue-50 border-0 p-8 rounded-2xl">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">About Me</h3>
              <p className="text-muted-foreground leading-relaxed">
                I am a passionate Full-Stack Developer with expertise in the
                MERN stack and extensive experience in Project Management. I've
                helped numerous clients transform their ideas into powerful web
                applications.
              </p>
              <div className="space-y-3 pt-4">
                <div className="flex justify-between">
                  <span className="font-semibold text-foreground">
                    Fullname:
                  </span>
                  <span className="text-muted-foreground">Md Abdul Hamid</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-foreground">
                    Address:
                  </span>
                  <span className="text-muted-foreground">
                    Khulna, Bangladesh
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-foreground">Email:</span>
                  <a
                    href="mailto:abhamid8586@gmail.com"
                    className="text-blue-500 hover:underline"
                  >
                    abhamid8586@gmail.com
                  </a>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-foreground">Phone:</span>
                  <a
                    href="tel:+8801985308586"
                    className="text-blue-500 hover:underline"
                  >
                    +880 1985-308586
                  </a>
                </div>
              </div>
              <Button className="bg-blue-500 hover:bg-blue-600 text-white mt-6 w-full">
                Contact Me
              </Button>
            </div>
          </Card>

          {/* Right Stats */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-foreground">
              About <span className="text-blue-500">Me</span>
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card
                    key={index}
                    className="p-6 text-center hover:shadow-lg transition"
                  >
                    <Icon className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                    <p className="text-3xl font-bold text-foreground">
                      {stat.value}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {stat.label}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
