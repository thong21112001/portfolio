"use client";

import React from "react";
import { 
  SKILL_CATEGORIES, 
  CORE_KEY_SKILLS, 
  CORE_ENGINEERING_FOCUS 
} from "@/constants/data";
import { 
  Server, 
  Database, 
  Workflow, 
  Terminal, 
  Layers, 
  ShieldCheck, 
  Zap,
  CheckCircle2,
  Sparkles
} from "lucide-react";

export default function CoreCompetenciesTab() {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "server":
        return <Server className="w-4 h-4 text-blue-600" />;
      case "database":
        return <Database className="w-4 h-4 text-indigo-600" />;
      case "integrations":
        return <Workflow className="w-4 h-4 text-emerald-600" />;
      case "terminal":
      default:
        return <Terminal className="w-4 h-4 text-amber-600" />;
    }
  };

  const getCategoryTheme = (iconName: string) => {
    switch (iconName) {
      case "server":
        return {
          border: "border-l-4 border-l-blue-600",
          badgeBg: "bg-blue-50 text-blue-700 border-blue-200",
          dot: "bg-blue-600"
        };
      case "database":
        return {
          border: "border-l-4 border-l-indigo-600",
          badgeBg: "bg-indigo-50 text-indigo-700 border-indigo-200",
          dot: "bg-indigo-600"
        };
      case "integrations":
        return {
          border: "border-l-4 border-l-emerald-600",
          badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
          dot: "bg-emerald-600"
        };
      case "terminal":
      default:
        return {
          border: "border-l-4 border-l-amber-500",
          badgeBg: "bg-amber-50 text-amber-700 border-amber-200",
          dot: "bg-amber-500"
        };
    }
  };

  const isKeySkill = (skill: string) => {
    return CORE_KEY_SKILLS.some((keySkill) =>
      skill.toLowerCase().includes(keySkill.toLowerCase())
    );
  };

  return (
    <div className="flex-1 flex flex-col gap-4">
      {/* 1. Header Card */}
      <div className="glass-panel p-4 sm:p-5 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-slate-200/90 shadow-sm">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-blue-600 font-bold flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-blue-600" />
              <span>Technical Arsenal</span>
            </span>
            <span className="text-slate-300">•</span>
            <span className="text-[11px] text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full font-semibold inline-flex items-center gap-1 shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> 100% CV Aligned
            </span>
          </div>
          <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-slate-900 mt-1">
            Core Competencies &amp; Technical Skills
          </h2>
          <p className="text-xs sm:text-[13px] text-slate-600 mt-0.5 leading-relaxed">
            Hands-on technical stack utilized in production systems: NestJS, TypeScript, .NET 8, MongoDB aggregation, Redis concurrency, and resilient third-party integrations.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <div className="px-3 py-1.5 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold flex items-center gap-1.5 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Key Skills Highlighted</span>
          </div>
        </div>
      </div>

      {/* 2. 4 Domain Bento Grid (2x2 Grid) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {SKILL_CATEGORIES.map((cat) => {
          const theme = getCategoryTheme(cat.iconName);
          return (
            <div
              key={cat.title}
              className={`glass-panel p-4.5 rounded-2xl flex flex-col justify-between gap-3.5 border-slate-200/90 hover:border-blue-300 hover:shadow-md transition-all ${theme.border}`}
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between pb-2 border-b border-slate-200/80 mb-3">
                  <div className="flex items-center gap-2">
                    {getCategoryIcon(cat.iconName)}
                    <h3 className="font-heading font-bold text-sm sm:text-base text-slate-900">
                      {cat.title}
                    </h3>
                  </div>
                  <span className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded border ${theme.badgeBg}`}>
                    {cat.skills.length} Skills
                  </span>
                </div>

                {/* Skills Badges List */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => {
                    const isKey = isKeySkill(skill);
                    return (
                      <span
                        key={skill}
                        className={`text-xs px-2.5 py-1 rounded-lg border transition-all ${
                          isKey
                            ? "bg-blue-50 text-blue-800 border-blue-200 font-semibold shadow-2xs hover:bg-blue-100 ring-1 ring-blue-500/15"
                            : "bg-slate-100 text-slate-700 border-slate-200 font-medium hover:bg-slate-200/80"
                        }`}
                      >
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Category Footer Indicator */}
              <div className="pt-2 border-t border-slate-200/70 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span className="flex items-center gap-1.5">
                  <span className={`w-1.5 h-1.5 rounded-full ${theme.dot}`} />
                  <span>Production Verified</span>
                </span>
                <span className="text-slate-400">RESTful / Distributed</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* 3. Core Engineering Focus Pillars */}
      <div className="glass-panel p-4 sm:p-4.5 rounded-2xl border-slate-200/90 shadow-sm flex flex-col gap-3">
        <div className="flex items-center justify-between pb-2 border-b border-slate-200/80">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-blue-600" />
            <h3 className="font-heading font-bold text-sm sm:text-base text-slate-900">
              Core Engineering Focus &amp; Architectural Strengths
            </h3>
          </div>
          <span className="text-[10.5px] font-mono text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200 font-semibold">
            Key Pillars
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {CORE_ENGINEERING_FOCUS.map((focus) => (
            <div
              key={focus.title}
              className="bg-slate-50/80 border border-slate-200 p-3 rounded-xl flex flex-col gap-1 shadow-2xs hover:border-blue-200 transition-colors"
            >
              <div className="flex items-center gap-1.5 font-bold text-xs text-slate-900">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>{focus.title}</span>
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed pl-5">
                {focus.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

