"use client";

import React from "react";
import { SKILL_CATEGORIES } from "@/constants/data";
import { Server, Code, Database, Cpu } from "lucide-react";

export default function TechStack() {
  // Extract all skills flatly for marquee
  const techList = [
    { name: "NestJS", color: "#e0234e" },
    { name: "TypeScript", color: "#3178c6" },
    { name: "C#", color: "#178600" },
    { name: ".NET 8", color: "#512bd4" },
    { name: "Node.js", color: "#339933" },
    { name: "MongoDB", color: "#47a248" },
    { name: "PostgreSQL", color: "#4169e1" },
    { name: "SQL Server", color: "#cc2927" },
    { name: "Redis", color: "#dc382d" },
    { name: "Docker", color: "#2496ed" },
    { name: "PM2", color: "#2b037a" },
    { name: "Nginx", color: "#009639" },
    { name: "Git", color: "#f05032" },
    { name: "AWS S3", color: "#ff9900" },
    { name: "ZaloPay", color: "#0070e0" },
    { name: "Swagger", color: "#85ea2d" },
  ];

  // Divide into two arrays for opposite marquee speeds/directions
  const row1 = [...techList];
  const row2 = [...techList].reverse();

  const getCategoryIcon = (title: string) => {
    switch (title.toLowerCase()) {
      case "backend frameworks":
        return <Server className="w-5 h-5 text-primary-violet" />;
      case "programming languages":
        return <Code className="w-5 h-5 text-accent-emerald" />;
      case "databases & storage":
        return <Database className="w-5 h-5 text-accent-blue" />;
      default:
        return <Cpu className="w-5 h-5 text-amber-500" />;
    }
  };

  return (
    <section id="skills" className="py-20 bg-bg-dark relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-violet/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
            Tech Stack & Skills
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            A comprehensive breakdown of core technologies, databases, frameworks, and deployment workflows I specialize in.
          </p>
        </div>

        {/* Marquee Row 1 (Left to Right) */}
        <div className="w-full overflow-hidden mb-8 relative py-4">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-bg-dark to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-bg-dark to-transparent z-10 pointer-events-none" />
          <div className="flex w-max animate-marquee space-x-6">
            {/* Duplicate to make it infinite */}
            {[...row1, ...row1].map((tech, idx) => (
              <div
                key={`${tech.name}-${idx}`}
                className="flex items-center space-x-2 px-6 py-3 glass-panel rounded-full text-white text-sm font-medium border-white/5 shadow-md shadow-black/10"
              >
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: tech.color }}
                />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Marquee Row 2 (Right to Left) */}
        <div className="w-full overflow-hidden mb-16 relative py-4">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-bg-dark to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-bg-dark to-transparent z-10 pointer-events-none" />
          <div className="flex w-max animate-marquee-reverse space-x-6">
            {[...row2, ...row2].map((tech, idx) => (
              <div
                key={`${tech.name}-${idx}`}
                className="flex items-center space-x-2 px-6 py-3 glass-panel rounded-full text-white text-sm font-medium border-white/5 shadow-md shadow-black/10"
              >
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: tech.color }}
                />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Skill Details Bento Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.title}
              className="glass-panel p-6 rounded-2xl border-white/5 relative group hover:border-white/10 transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2.5 bg-white/5 rounded-xl">
                  {getCategoryIcon(category.title)}
                </div>
                <h3 className="font-heading font-semibold text-lg text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    {/* Animated Progress Indicator */}
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary-violet to-accent-blue rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
