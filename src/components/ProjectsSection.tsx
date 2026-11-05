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
    <section id="projects" className="py-20 bg-bg-dark relative border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-zinc-100 mb-4">
            Featured Projects
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-sm">
            Practical production-grade software solutions I have engineered, along with the main technical challenges solved.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project: Project) => {
            const isExpanded = expandedProject === project.id;
            return (
              <div
                key={project.id}
                className="glass-panel p-6 rounded-2xl border-white/[0.07] flex flex-col justify-between hover:border-white/15 transition-all duration-150 relative group"
              >
                <div>
                  {/* Top Bar */}
                  <div className="mb-4">
                    <span className="text-[11px] font-bold tracking-widest text-sky-400 uppercase font-mono">
                      {project.subtitle}
                    </span>
                    <h3 className="font-heading font-bold text-xl text-zinc-100 mt-1 group-hover:text-sky-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-zinc-300 text-sm font-sans mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2.5 py-1 bg-zinc-900/90 rounded-md text-zinc-300 font-medium border border-white/[0.08] font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  {(project.links?.github || project.links?.demo || project.links?.demos) && (
                    <div className="flex flex-wrap items-center gap-2 mb-6">
                      {project.links?.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 bg-zinc-900/90 hover:bg-zinc-800 text-zinc-300 hover:text-white rounded-lg border border-white/[0.08] transition-colors"
                        >
                          <GithubIcon className="w-3.5 h-3.5 text-zinc-400" />
                          <span>GitHub</span>
                        </a>
                      )}
                      {project.links?.demo && (
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 bg-sky-500/10 hover:bg-sky-500/20 text-sky-300 rounded-lg border border-sky-500/25 transition-colors"
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
                          className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 bg-sky-500/10 hover:bg-sky-500/20 text-sky-300 rounded-lg border border-sky-500/25 transition-colors"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>{d.label}</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                {/* Challenges Dropdown */}
                <div className="border-t border-white/[0.06] pt-4 mt-auto">
                  <button
                    onClick={() => toggleExpand(project.id)}
                    className="flex justify-between items-center w-full text-xs font-semibold text-zinc-400 hover:text-zinc-200 transition-colors py-1 focus:outline-none cursor-pointer"
                  >
                    <span>{isExpanded ? "Hide Technical Solutions" : "Show Technical Solutions"}</span>
                    {isExpanded ? <ChevronUp className="w-4 h-4 text-zinc-400" /> : <ChevronDown className="w-4 h-4 text-zinc-400" />}
                  </button>

                  {isExpanded && (
                    <div className="mt-4 space-y-2.5 animate-fade-in">
                      {project.challenges.map((challenge, index) => (
                        <div key={index} className="flex items-start space-x-2.5 bg-zinc-950/50 p-2.5 rounded-lg border border-white/[0.06]">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <p className="text-xs text-zinc-300 font-sans leading-relaxed">
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
