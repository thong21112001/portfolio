"use client";

import React from "react";
import { EXPERIENCE, EDUCATION, CERTIFICATIONS, PERSONAL_INFO } from "@/constants/data";
import { Briefcase, GraduationCap, Award, ExternalLink, Star, BookOpen, CheckCircle } from "lucide-react";
import { GithubIcon } from "@/components/icons";

export default function ExperienceEducationTab() {
  const username = "thong21112001";

  return (
    <div className="flex-1 min-h-0 grid grid-cols-1 md:grid-cols-12 gap-3.5 overflow-hidden">
      {/* 1. Left: Professional Experience Timeline (md:col-span-7) */}
      <div className="md:col-span-7 glass-panel p-4.5 sm:p-5 rounded-2xl overflow-y-auto custom-scrollbar flex flex-col gap-4 border-white/10">
        <div className="flex items-center justify-between pb-2 border-b border-white/5">
          <div className="flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-primary-violet" />
            <h3 className="font-heading font-bold text-base text-white">
              Work Experience Timeline
            </h3>
          </div>
          <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
            2+ Years Production
          </span>
        </div>

        <div className="relative border-l border-white/10 pl-4 sm:pl-5 space-y-6 ml-1.5">
          {EXPERIENCE.map((exp, idx) => (
            <div key={exp.id} className="relative group">
              {/* Dot */}
              <span className={`absolute -left-[21px] sm:-left-[25px] top-1 flex items-center justify-center w-3 h-3 rounded-full border ${
                idx === 0 
                  ? "bg-primary-violet border-primary-violet ring-4 ring-primary-violet/20" 
                  : "bg-bg-dark border-white/30"
              }`} />

              <div className="flex flex-col gap-1">
                <div className="flex flex-wrap items-baseline justify-between gap-1">
                  <span className="font-heading font-bold text-sm sm:text-base text-white group-hover:text-primary-violet transition-colors">
                    {exp.role}
                  </span>
                  <span className="text-[11px] font-mono text-primary-violet/90 font-semibold">
                    {exp.period}
                  </span>
                </div>

                <div className="text-xs font-semibold text-gray-300">
                  {exp.company}
                </div>

                <ul className="mt-2 space-y-1.5">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="text-xs text-gray-300 flex items-start gap-1.5 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-violet shrink-0 mt-1.5" />
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-1.5 mt-2.5">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-gray-300 border border-white/10 font-mono"
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

      {/* 2. Right: Education, Certifications & GitHub Activity (md:col-span-5) */}
      <div className="md:col-span-5 flex flex-col gap-3.5 overflow-y-auto custom-scrollbar pr-1">
        {/* Education Card */}
        <div className="glass-panel p-4 rounded-2xl flex flex-col gap-2.5 border-white/10 shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-accent-blue" />
              <h4 className="font-heading font-bold text-sm text-white">
                Education
              </h4>
            </div>
            {EDUCATION[0].gpa && (
              <span className="text-[10.5px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                GPA {EDUCATION[0].gpa}
              </span>
            )}
          </div>

          <div>
            <div className="text-xs font-bold text-white">
              {EDUCATION[0].degree}
            </div>
            <div className="text-[11px] text-gray-400">
              {EDUCATION[0].school} • {EDUCATION[0].period}
            </div>
          </div>

          <p className="text-xs text-gray-300 leading-relaxed bg-white/[0.02] p-2 rounded-lg border border-white/5">
            {EDUCATION[0].details}
          </p>
        </div>

        {/* Certifications & Languages */}
        <div className="glass-panel p-4 rounded-2xl flex flex-col gap-2.5 border-white/10 shrink-0">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-amber-400" />
            <h4 className="font-heading font-bold text-sm text-white">
              Certifications &amp; Languages
            </h4>
          </div>

          <div className="space-y-2">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.name}
                className="flex items-center justify-between p-2 rounded-lg bg-white/5 border border-white/5 text-xs text-gray-200"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-accent-emerald shrink-0" />
                  <span className="font-medium">{cert.name}</span>
                </div>
                <span className="text-[10px] font-mono text-gray-400">{cert.date}</span>
              </div>
            ))}
          </div>
        </div>

        {/* GitHub & Engineering Activity Card (Replaces informal stats) */}
        <div className="glass-panel p-4 rounded-2xl flex flex-col justify-between gap-3 border-white/10 flex-1 min-h-[140px]">
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <GithubIcon className="w-4 h-4 text-primary-violet" />
                <span className="font-heading font-bold text-sm text-white">
                  Engineering Activity
                </span>
              </div>
              <span className="text-[10px] font-mono text-gray-400">@{username}</span>
            </div>

            <p className="text-xs text-gray-300 leading-relaxed mb-3">
              Actively designing production RESTful APIs, distributed locking patterns, and modular architectures with NestJS, TypeScript, and .NET.
            </p>

            <div className="grid grid-cols-2 gap-2 mb-3">
              <div className="p-2 rounded-lg bg-white/5 border border-white/5 text-center">
                <div className="flex items-center justify-center gap-1 text-amber-400 text-xs font-bold">
                  <Star className="w-3.5 h-3.5" />
                  <span>21+</span>
                </div>
                <span className="text-[9.5px] text-gray-400 font-mono uppercase tracking-wider">
                  Stars Earned
                </span>
              </div>
              <div className="p-2 rounded-lg bg-white/5 border border-white/5 text-center">
                <div className="flex items-center justify-center gap-1 text-accent-blue text-xs font-bold">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>13+</span>
                </div>
                <span className="text-[9.5px] text-gray-400 font-mono uppercase tracking-wider">
                  Repositories
                </span>
              </div>
            </div>
          </div>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2 px-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-xs font-medium text-white flex items-center justify-center gap-2 transition-all group"
          >
            <span>View GitHub Repositories</span>
            <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </div>
  );
}

