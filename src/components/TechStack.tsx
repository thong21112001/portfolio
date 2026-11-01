"use client";

import React from "react";
import { SKILL_CATEGORIES } from "@/constants/data";
import { Server, Code, Database, Cpu } from "lucide-react";

export default function TechStack() {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "server":
        return <Server className="w-5 h-5 text-primary-violet" />;
      case "code":
        return <Code className="w-5 h-5 text-accent-emerald" />;
      case "database":
        return <Database className="w-5 h-5 text-accent-blue" />;
      default:
        return <Cpu className="w-5 h-5 text-amber-500" />;
    }
  };

  return (
    <section id="skills" className="py-12 bg-bg-dark relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-8">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-white mb-2">
            Technical Competencies
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto">
            Categorized by real-world production capability across distributed backend architectures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.title}
              className="glass-panel p-5 rounded-2xl flex flex-col gap-3 border-white/5"
            >
              <div className="flex items-center gap-2 text-white font-semibold text-sm">
                {getCategoryIcon(category.iconName)}
                <span>{category.title}</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-gray-200 border border-white/10 font-mono"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
