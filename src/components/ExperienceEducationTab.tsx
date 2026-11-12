"use client";

import React from "react";
import { EXPERIENCE, EDUCATION, CORE_ENGINEERING_FOCUS, PERSONAL_INFO } from "@/constants/data";
import { Briefcase, GraduationCap, ExternalLink, Star, BookOpen, CheckCircle, Code2, Globe } from "lucide-react";
import { GithubIcon } from "@/components/icons";

export default function ExperienceEducationTab() {
  const username = "thong21112001";

  return (
    <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-3.5">
      {/* 1. Left: Professional Experience Timeline (md:col-span-7) */}
      <div className="md:col-span-7 glass-panel p-4.5 sm:p-5 rounded-2xl flex flex-col gap-4 border-slate-200/90 shadow-sm">
        <div className="flex items-center justify-between pb-2 border-b border-slate-200/80">
          <div className="flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-blue-600" />
            <h3 className="font-heading font-bold text-base text-slate-900">
              Work Experience Timeline
            </h3>
          </div>
          <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 font-semibold shadow-2xs">
            100% CV Aligned
          </span>
        </div>

        <div className="relative border-l-2 border-blue-200 pl-4 sm:pl-5 space-y-6 ml-1.5 my-1">
          {EXPERIENCE.map((exp, idx) => (
            <div key={exp.id} className="relative group">
              {/* Dot indicator */}
              <span
                className={`absolute -left-[23px] sm:-left-[27px] top-1 flex items-center justify-center w-3.5 h-3.5 rounded-full border-2 border-white shadow-xs ${
                  idx === 0
                    ? "bg-blue-600 ring-4 ring-blue-100"
                    : "bg-slate-400"
                }`}
              />

              <div className="flex flex-col gap-1">
                <div className="flex flex-wrap items-baseline justify-between gap-1">
                  <span className="font-heading font-bold text-sm sm:text-base text-slate-900 group-hover:text-blue-600 transition-colors">
                    {exp.role}
                  </span>
                  <span className="text-[11.5px] font-mono text-blue-600 font-bold bg-blue-50 px-2 py-0.5 rounded border border-blue-200/80">
                    {exp.period}
                  </span>
                </div>

                <div className="text-xs font-bold text-slate-700">
                  {exp.company}
                </div>

                <ul className="mt-2 space-y-2">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="text-xs text-slate-700 flex items-start gap-2 leading-relaxed bg-slate-50/70 p-2 rounded-lg border border-slate-200/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-1.5" />
                      <div>{renderExperienceBullet(desc)}</div>
                    </li>
                  ))}
                </ul>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-1.5 mt-2.5">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200 font-mono font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Right: Education, Core Engineering Focus & GitHub Activity (md:col-span-5) */}
      <div className="md:col-span-5 flex flex-col gap-3.5">
        {/* Education Card */}
        <div className="glass-panel p-4 rounded-2xl flex flex-col gap-2.5 border-slate-200/90 shadow-sm shrink-0">
          <div className="flex items-center justify-between pb-1 border-b border-slate-200/80">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-blue-600" />
              <h4 className="font-heading font-bold text-sm text-slate-900">
                Education
              </h4>
            </div>
            {EDUCATION[0].gpa && (
              <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-2xs">
                GPA: {EDUCATION[0].gpa}
              </span>
            )}
          </div>

          <div>
            <div className="text-xs font-bold text-slate-900">
              {EDUCATION[0].degree}
            </div>
            <div className="text-[11.5px] text-slate-500 font-medium">
              {EDUCATION[0].school} • {EDUCATION[0].period}
            </div>
          </div>

          <p className="text-xs text-slate-700 leading-relaxed bg-slate-50 p-2.5 rounded-lg border border-slate-200/80">
            {EDUCATION[0].details}
          </p>
        </div>

        {/* Core Engineering Focus Card (Replacing Old Certifications) */}
        <div className="glass-panel p-4 rounded-2xl flex flex-col gap-2.5 border-slate-200/90 shadow-sm shrink-0">
          <div className="flex items-center justify-between pb-1 border-b border-slate-200/80">
            <div className="flex items-center gap-2">
              <Code2 className="w-4 h-4 text-indigo-600" />
              <h4 className="font-heading font-bold text-sm text-slate-900">
                Core Engineering Focus
              </h4>
            </div>
            <span className="text-[10px] font-mono text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">
              Key Pillars
            </span>
          </div>

          <div className="space-y-2">
            {CORE_ENGINEERING_FOCUS.map((focus) => (
              <div
                key={focus.title}
                className="p-2.5 rounded-lg bg-slate-50/80 border border-slate-200 text-xs text-slate-800 flex flex-col gap-0.5 shadow-2xs"
              >
                <div className="flex items-center gap-1.5 font-bold text-slate-900">
                  <CheckCircle className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>{focus.title}</span>
                </div>
                <p className="text-[11px] text-slate-600 pl-5 leading-normal">
                  {focus.description}
                </p>
              </div>
            ))}
          </div>

          {/* Quick Portfolio & GitHub Links */}
          <div className="grid grid-cols-2 gap-2 pt-1 border-t border-slate-200/80">
            <a
              href={PERSONAL_INFO.portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-1.5 px-2.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 text-[11px] font-semibold flex items-center justify-center gap-1.5 transition-colors"
            >
              <Globe className="w-3 h-3" />
              <span>Live Portfolio</span>
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="py-1.5 px-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 text-[11px] font-semibold flex items-center justify-center gap-1.5 transition-colors"
            >
              <GithubIcon className="w-3 h-3" />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        {/* GitHub & Engineering Activity Card */}
        <div className="glass-panel p-4 rounded-2xl flex flex-col justify-between gap-3 border-slate-200/90 shadow-sm flex-1 min-h-[140px]">
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <GithubIcon className="w-4 h-4 text-blue-600" />
                <span className="font-heading font-bold text-sm text-slate-900">
                  Engineering Activity
                </span>
              </div>
              <span className="text-[10.5px] font-mono text-slate-500 font-semibold">@{username}</span>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              Actively designing production RESTful APIs, distributed locking patterns, and modular architectures with NestJS, TypeScript, and .NET 8.
            </p>

            <div className="grid grid-cols-2 gap-2 mb-3">
              <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 text-center shadow-2xs">
                <div className="flex items-center justify-center gap-1 text-blue-600 text-xs font-bold">
                  <Star className="w-3.5 h-3.5" />
                  <span className="text-slate-900">21+</span>
                </div>
                <span className="text-[9.5px] text-slate-500 font-mono uppercase tracking-wider font-semibold">
                  Stars Earned
                </span>
              </div>
              <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 text-center shadow-2xs">
                <div className="flex items-center justify-center gap-1 text-indigo-600 text-xs font-bold">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span className="text-slate-900">13+</span>
                </div>
                <span className="text-[9.5px] text-slate-500 font-mono uppercase tracking-wider font-semibold">
                  Repositories
                </span>
              </div>
            </div>
          </div>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2 px-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-xs group cursor-pointer"
          >
            <span>Explore GitHub Repositories</span>
            <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 text-white" />
          </a>
        </div>
      </div>
    </div>
  );
}

function renderExperienceBullet(desc: string) {
  const colonIndex = desc.indexOf(":");
  if (colonIndex !== -1) {
    const title = desc.substring(0, colonIndex + 1);
    const rest = desc.substring(colonIndex + 1);
    return (
      <span className="leading-relaxed">
        <strong className="text-slate-900 font-bold">{title}</strong>
        <span className="text-slate-700">{rest}</span>
      </span>
    );
  }
  return <span className="text-slate-700 leading-relaxed">{desc}</span>;
}
