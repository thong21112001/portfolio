"use client";

import React, { useState } from "react";
import { PROJECTS, Project } from "@/constants/data";
import { ExternalLink, CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";
import { GithubIcon } from "@/components/icons";

export default function ProjectsSection() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    if (expandedProject === id) {
      setExpandedProject(null);
    } else {
      setExpandedProject(id);
    }
  };

  return (
    <section id="projects" className="py-20 bg-bg-dark relative border-t border-white/5">
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-accent-emerald/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Practical production-grade software solutions I have engineered, along with the main technical challenges solved.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project: Project) => {
            const isExpanded = expandedProject === project.id;
            return (
              <div
                key={project.id}
                className="glass-panel p-6 rounded-2xl border-white/5 flex flex-col justify-between hover:border-white/10 transition-all duration-300 relative group"
              >
                <div>
                  {/* Top Bar */}
                  <div className="mb-4">
                    <span className="text-[11px] font-bold tracking-widest text-primary-violet uppercase">
                      {project.subtitle}
                    </span>
                    <h3 className="font-heading font-bold text-xl text-white mt-1 group-hover:text-primary-violet transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-gray-400 text-sm font-sans mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2.5 py-1 bg-white/5 rounded-md text-gray-300 font-medium border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  {(project.links?.github || project.links?.demo || project.links?.demos) && (
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                      {project.links?.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 text-xs font-semibold px-3 py-1.5 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white rounded-lg border border-white/5 hover:border-white/10 transition-all duration-300"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                          <span>GitHub</span>
                        </a>
                      )}
                      {project.links?.demo && (
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 text-xs font-semibold px-3 py-1.5 bg-primary-violet/10 hover:bg-primary-violet/20 text-primary-violet hover:text-white rounded-lg border border-primary-violet/20 hover:border-primary-violet/30 transition-all duration-300"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Live Demo</span>
                        </a>
                      )}
                      {project.links?.demos?.map((d) => (
                        <a
                          key={d.url}
                          href={d.url}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 text-xs font-semibold px-3 py-1.5 bg-primary-violet/10 hover:bg-primary-violet/20 text-primary-violet hover:text-white rounded-lg border border-primary-violet/20 hover:border-primary-violet/30 transition-all duration-300"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>{d.label}</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                {/* Challenges Dropdown */}
                <div className="border-t border-white/5 pt-4 mt-auto">
                  <button
                    onClick={() => toggleExpand(project.id)}
                    className="flex justify-between items-center w-full text-xs font-semibold text-gray-400 hover:text-white transition-colors py-1 focus:outline-none"
                  >
                    <span>{isExpanded ? "Hide Technical Solutions" : "Show Technical Solutions"}</span>
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>

                  {isExpanded && (
                    <div className="mt-4 space-y-3 animate-fade-in">
                      {project.challenges.map((challenge, index) => (
                        <div key={index} className="flex items-start space-x-2.5">
                          <CheckCircle2 className="w-4 h-4 text-accent-emerald shrink-0 mt-0.5" />
                          <p className="text-xs text-gray-300 font-sans leading-relaxed">
                            {challenge}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
