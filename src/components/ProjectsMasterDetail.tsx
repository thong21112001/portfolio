"use client";

import React, { useState } from "react";
import { PROJECTS, Project } from "@/constants/data";
import { ExternalLink, ArrowRight, CheckCircle2, ShieldCheck, Zap, Layers } from "lucide-react";

export default function ProjectsMasterDetail() {
  const [selectedId, setSelectedId] = useState<string>(PROJECTS[0].id);

  const selectedProject = PROJECTS.find((p) => p.id === selectedId) || PROJECTS[0];

  return (
    <div className="flex-1 min-h-0 grid grid-cols-1 md:grid-cols-12 gap-3.5 overflow-hidden">
      {/* 1. Left Selector List (md:col-span-4) */}
      <div className="md:col-span-4 flex flex-col gap-2.5 overflow-y-auto custom-scrollbar pr-1">
        {PROJECTS.map((project: Project, index: number) => {
          const isSelected = project.id === selectedId;
          return (
            <button
              key={project.id}
              onClick={() => setSelectedId(project.id)}
              type="button"
              className={`w-full text-left p-3.5 rounded-xl border transition-all duration-200 flex flex-col gap-2 cursor-pointer ${
                isSelected
                  ? "bg-purple-950/25 border-primary-violet shadow-lg shadow-purple-950/30 ring-1 ring-primary-violet/50"
                  : "glass-panel border-white/5 hover:border-white/15 hover:bg-white/[0.03]"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-wider text-primary-violet font-semibold">
                  0{index + 1} • {project.subtitle.split("•")[1]?.trim() || project.subtitle}
                </span>
                {isSelected && (
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-violet opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-violet" />
                  </span>
                )}
              </div>

              <h3 className="font-heading font-bold text-sm text-white line-clamp-1">
                {project.title}
              </h3>

              <p className="text-[11px] text-gray-400 line-clamp-2 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1 mt-0.5">
                {project.techStack.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="text-[9.5px] px-1.5 py-0.5 bg-white/5 border border-white/5 text-gray-300 rounded"
                  >
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 3 && (
                  <span className="text-[9.5px] px-1 py-0.5 text-gray-500 font-mono">
                    +{project.techStack.length - 3}
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* 2. Right Detail Card (md:col-span-8) */}
      <div className="md:col-span-8 glass-panel p-4.5 sm:p-5 rounded-2xl flex flex-col justify-between overflow-y-auto custom-scrollbar gap-4 border-white/10">
        <div className="flex flex-col gap-4">
          {/* Header Row: Title & Live Demos */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/5">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-primary-violet font-bold">
                  {selectedProject.subtitle}
                </span>
                <span className="text-gray-600">•</span>
                <span className="text-[11px] text-emerald-400 font-medium flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> Production Ready
                </span>
              </div>
              <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-white mt-0.5">
                {selectedProject.title}
              </h2>
            </div>

            {/* Live Production Links Button Group */}
            {selectedProject.links?.demos && selectedProject.links.demos.length > 0 && (
              <div className="flex flex-wrap items-center gap-1.5 shrink-0">
                <span className="text-[10px] text-gray-400 uppercase tracking-wider font-mono mr-1 hidden sm:inline">
                  Live:
                </span>
                {selectedProject.links.demos.map((demo) => (
                  <a
                    key={demo.label}
                    href={demo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/25 text-xs font-medium transition-all group"
                  >
                    <span>{demo.label}</span>
                    <ExternalLink className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Project Description */}
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
            {selectedProject.description}
          </p>

          {/* System Architecture Flow Diagram */}
          <div className="bg-bg-dark/80 border border-white/5 p-3 sm:p-3.5 rounded-xl">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-gray-400 flex items-center gap-1.5">
                <WorkflowIcon className="w-3.5 h-3.5 text-accent-blue" />
                <span>System Architecture Flow</span>
              </span>
              <span className="text-[10px] text-gray-500 font-mono">End-to-End Pipeline</span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {selectedProject.architectureFlow.map((step, idx) => (
                <React.Fragment key={step}>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-gray-200 font-mono font-medium">
                    <span className="w-4 h-4 rounded-full bg-primary-violet/20 text-primary-violet text-[10px] flex items-center justify-center font-bold">
                      {idx + 1}
                    </span>
                    <span>{step}</span>
                  </div>
                  {idx < selectedProject.architectureFlow.length - 1 && (
                    <ArrowRight className="w-3.5 h-3.5 text-gray-500 shrink-0" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Key Metrics Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {selectedProject.metrics.map((metric) => (
              <div
                key={metric}
                className="px-2.5 py-2 rounded-lg bg-purple-950/20 border border-purple-500/20 flex items-center gap-2 text-xs text-purple-200"
              >
                <Zap className="w-3.5 h-3.5 text-primary-violet shrink-0" />
                <span className="font-medium text-[11.5px]">{metric}</span>
              </div>
            ))}
          </div>

          {/* Key Technical Solutions & Impact */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-gray-300 font-bold flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-accent-emerald" />
                <span>Key Technical Solutions &amp; Engineering Decisions</span>
              </h4>
              <span className="text-[10px] text-emerald-400/90 font-mono">Verified in Production</span>
            </div>

            <ul className="space-y-2">
              {selectedProject.challenges.map((challenge, index) => (
                <li
                  key={index}
                  className="text-xs text-gray-300 leading-relaxed flex items-start gap-2 bg-white/[0.02] p-2 rounded-lg border border-white/5"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    {formatChallengeText(challenge)}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer: Tech Stack Badges */}
        <div className="pt-3 border-t border-white/5">
          <div className="text-[10.5px] font-mono text-gray-400 uppercase tracking-wider mb-1.5">
            Technologies &amp; Libraries Used:
          </div>
          <div className="flex flex-wrap gap-1.5">
            {selectedProject.techStack.map((tech) => (
              <span
                key={tech}
                className="text-[10.5px] px-2 py-0.5 rounded-md bg-white/5 text-gray-200 border border-white/10 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function WorkflowIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="8" height="8" x="3" y="3" rx="2" />
      <path d="M7 11v4a2 2 0 0 0 2 2h4" />
      <rect width="8" height="8" x="13" y="13" rx="2" />
    </svg>
  );
}

/**
 * Highlights key engineering keywords and numbers in the challenge bullets
 */
function formatChallengeText(text: string) {
  const keywords = [
    "35%",
    "40%",
    "50+",
    "Redis locks",
    "Redis",
    "CQRS",
    "Unit of Work",
    "Repository",
    "Clean Architecture",
    "ZaloPay",
    "Giao Hang Nhanh",
    "Viettel Post",
    "MongoDB aggregation pipelines",
    "Role-Based Access Control (RBAC)",
    "Firebase OTP",
    "RS232/Serial port",
    "anti-tampering",
    "offline-first"
  ];

  // Regex to split by keywords
  const regex = new RegExp(`(${keywords.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi');
  const parts = text.split(regex);

  return (
    <span>
      {parts.map((part, i) => {
        const isMatch = keywords.some(k => k.toLowerCase() === part.toLowerCase());
        if (isMatch) {
          return (
            <span key={i} className="text-white font-semibold underline decoration-primary-violet/50 decoration-2">
              {part}
            </span>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </span>
  );
}
