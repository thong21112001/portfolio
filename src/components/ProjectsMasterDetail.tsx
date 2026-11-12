"use client";

import React, { useState } from "react";
import { PROJECTS, Project } from "@/constants/data";
import { ExternalLink, ArrowRight, CheckCircle2, ShieldCheck, Zap, Layers } from "lucide-react";

export default function ProjectsMasterDetail() {
  const [selectedId, setSelectedId] = useState<string>(PROJECTS[0].id);

  const selectedProject = PROJECTS.find((p) => p.id === selectedId) || PROJECTS[0];

  return (
    <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-3.5">
      {/* 1. Left Selector List (md:col-span-4) */}
      <div className="md:col-span-4 flex flex-col gap-2.5">
        {PROJECTS.map((project: Project, index: number) => {
          const isSelected = project.id === selectedId;
          return (
            <button
              key={project.id}
              onClick={() => setSelectedId(project.id)}
              type="button"
              className={`w-full text-left p-3.5 rounded-xl border transition-all duration-150 flex flex-col gap-2 cursor-pointer relative overflow-hidden ${
                isSelected
                  ? "bg-gradient-to-br from-blue-50/90 via-white to-indigo-50/60 border-blue-500 ring-1 ring-blue-500/20 shadow-md"
                  : "bg-white/80 hover:bg-white border-slate-200/90 hover:border-blue-300 text-slate-700 shadow-2xs"
              }`}
            >
              {/* Blue indicator bar on the left for selected state */}
              {isSelected && (
                <span className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600 rounded-r" />
              )}

              <div className="flex items-center justify-between">
                <span className="text-[10.5px] font-mono uppercase tracking-wider text-blue-600 font-bold">
                  0{index + 1} • {project.subtitle.split("•")[1]?.trim() || project.subtitle}
                </span>
                {isSelected && (
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600" />
                  </span>
                )}
              </div>

              <h3 className="font-heading font-bold text-sm text-slate-900 line-clamp-1">
                {project.title}
              </h3>

              <p className="text-[11.5px] text-slate-600 line-clamp-2 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1 mt-0.5">
                {project.techStack.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="text-[9.5px] px-1.5 py-0.5 bg-slate-100 border border-slate-200/90 text-slate-700 rounded font-mono font-medium"
                  >
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 3 && (
                  <span className="text-[9.5px] px-1 py-0.5 text-slate-500 font-mono">
                    +{project.techStack.length - 3}
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* 2. Right Detail Card (md:col-span-8) */}
      <div className="md:col-span-8 glass-panel p-4.5 sm:p-5 rounded-2xl flex flex-col justify-between gap-4 border-slate-200/90 shadow-sm">
        <div className="flex flex-col gap-4">
          {/* Header Row: Perfectly Balanced 2-Side Layout */}
          <div className="flex flex-col gap-2.5 pb-3 border-b border-slate-200/80">
            {/* Top Row: Subtitle + Status Badge on Left, Live Links on Right */}
            <div className="flex flex-wrap items-center justify-between gap-2.5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-blue-600 font-bold">
                  {selectedProject.subtitle}
                </span>
                <span className="text-slate-300">•</span>
                <span className="text-[11px] text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full font-semibold inline-flex items-center gap-1 shadow-2xs">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Production Ready
                </span>
              </div>

              {/* Live Production Links Button Group - Perfectly aligned to the right */}
              {selectedProject.links?.demos && selectedProject.links.demos.length > 0 && (
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="text-[10.5px] text-slate-500 uppercase tracking-wider font-mono font-semibold">
                    Live:
                  </span>
                  {selectedProject.links.demos.map((demo) => (
                    <a
                      key={demo.label}
                      href={demo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-600 text-blue-700 hover:text-white border border-blue-200 transition-all text-xs font-semibold shadow-2xs group"
                    >
                      <span>{demo.label}</span>
                      <ExternalLink className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Main Project Title - Full width, clean, sharp */}
            <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-slate-900 tracking-tight">
              {selectedProject.title}
            </h2>
          </div>

          {/* Project Description */}
          <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed">
            {selectedProject.description}
          </p>

          {/* System Architecture Flow Diagram */}
          <div className="bg-slate-50/90 border border-slate-200 p-3 sm:p-3.5 rounded-xl shadow-2xs">
            <div className="flex items-center justify-between mb-2.5">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-700 font-bold flex items-center gap-1.5">
                <WorkflowIcon className="w-3.5 h-3.5 text-blue-600" />
                <span>System Architecture Flow</span>
              </span>
              <span className="text-[10px] text-slate-500 font-mono">End-to-End Pipeline</span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {selectedProject.architectureFlow.map((step, idx) => (
                <React.Fragment key={step}>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white border border-slate-200/90 shadow-2xs text-xs text-slate-800 font-mono font-medium">
                    <span className="w-4 h-4 rounded-full bg-blue-600 text-white text-[10px] flex items-center justify-center font-bold">
                      {idx + 1}
                    </span>
                    <span>{step}</span>
                  </div>
                  {idx < selectedProject.architectureFlow.length - 1 && (
                    <ArrowRight className="w-3.5 h-3.5 text-blue-500 shrink-0" />
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
                className="px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 flex items-center gap-2 text-xs text-slate-800 font-medium shadow-2xs"
              >
                <Zap className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span className="font-semibold text-[11.5px]">{metric}</span>
              </div>
            ))}
          </div>

          {/* Key Technical Solutions & Impact */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-900 font-bold flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-blue-600" />
                <span>Key Technical Solutions &amp; Engineering Decisions</span>
              </h4>
              <span className="text-[10px] text-emerald-700 font-mono font-semibold bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                Verified in Production
              </span>
            </div>

            <ul className="space-y-2">
              {selectedProject.challenges.map((challenge, index) => (
                <li
                  key={index}
                  className="text-xs text-slate-700 leading-relaxed flex items-start gap-2 bg-slate-50/80 p-2.5 rounded-lg border border-slate-200/80 shadow-2xs"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    {formatChallengeText(challenge)}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer: Tech Stack Badges */}
        <div className="pt-3 border-t border-slate-200/80">
          <div className="text-[10.5px] font-mono text-slate-500 uppercase tracking-wider mb-1.5 font-semibold">
            Technologies &amp; Libraries Used:
          </div>
          <div className="flex flex-wrap gap-1.5">
            {selectedProject.techStack.map((tech) => (
              <span
                key={tech}
                className="text-[10.5px] px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200/90 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 transition-colors font-medium"
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
    "40%",
    "50+",
    "35%",
    "NestJS",
    "MongoDB Aggregation Pipelines",
    "MongoDB",
    "Redis",
    "ZaloPay",
    "GHN",
    "Viettel Post",
    ".NET 8",
    "CQRS",
    "Clean Architecture",
    "RBAC",
    "Firebase OTP SMS",
    "Firebase OTP",
    "Firebase Storage",
    "AWS S3",
    "Unit of Work",
    "Repository",
    "DRY",
    "Swagger",
    "SQL Server",
    "EF Core",
    "RS232/Serial port",
    "anti-tampering",
    "offline-first"
  ];

  const regex = new RegExp(`(${keywords.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi');
  const parts = text.split(regex);

  return (
    <span>
      {parts.map((part, i) => {
        const isMatch = keywords.some(k => k.toLowerCase() === part.toLowerCase());
        if (isMatch) {
          return (
            <span key={i} className="bg-blue-50 text-blue-800 px-1 py-0.2 rounded font-semibold border border-blue-100">
              {part}
            </span>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </span>
  );
}
