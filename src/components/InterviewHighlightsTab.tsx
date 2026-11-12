"use client";

import React from "react";
import { INTERVIEW_HIGHLIGHTS, TechnicalHighlight } from "@/constants/data";
import { Lock, Database, Layers, RefreshCw, AlertCircle, CheckCircle2, TrendingUp } from "lucide-react";

export default function InterviewHighlightsTab() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "lock":
        return <Lock className="w-4 h-4 text-blue-600" />;
      case "database":
        return <Database className="w-4 h-4 text-indigo-600" />;
      case "layers":
        return <Layers className="w-4 h-4 text-blue-600" />;
      default:
        return <RefreshCw className="w-4 h-4 text-emerald-600" />;
    }
  };

  return (
    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-3.5">
      {INTERVIEW_HIGHLIGHTS.map((item: TechnicalHighlight) => (
        <div
          key={item.id}
          className="glass-panel p-4.5 rounded-2xl flex flex-col justify-between gap-3.5 border-slate-200/90 hover:border-blue-300 hover:shadow-md transition-all duration-150 shadow-sm"
        >
          {/* Card Header */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full border font-semibold inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 border-blue-200 shadow-2xs">
                {getIcon(item.iconName)}
                <span>{item.category}</span>
              </span>

              <span className="text-[10.5px] text-slate-500 font-mono font-medium">Tech Deep Dive</span>
            </div>

            <h3 className="font-heading font-extrabold text-base sm:text-lg text-slate-900 mt-1">
              {item.title}
            </h3>
            <p className="text-xs text-blue-600 font-mono font-bold">
              {item.subtitle}
            </p>
          </div>

          {/* Problem, Solution & Impact (STAR Structure with Distinct Daylight Tones) */}
          <div className="space-y-2.5">
            {/* The Challenge / Bottleneck */}
            <div className="bg-amber-50/70 border border-amber-200/80 p-3 rounded-xl shadow-2xs">
              <div className="flex items-center gap-1.5 text-[10.5px] font-mono uppercase text-amber-800 font-bold mb-1">
                <AlertCircle className="w-3.5 h-3.5 text-amber-700" />
                <span>The Challenge / Bottleneck</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                {item.problem}
              </p>
            </div>

            {/* Architectural Solution */}
            <div className="bg-blue-50/60 border border-blue-200/80 p-3 rounded-xl shadow-2xs">
              <div className="flex items-center gap-1.5 text-[10.5px] font-mono uppercase text-blue-800 font-bold mb-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                <span>Architectural Solution</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                {item.solution}
              </p>
            </div>

            {/* Quantifiable Impact */}
            <div className="bg-emerald-50/80 border border-emerald-200 p-3 rounded-xl shadow-2xs">
              <div className="flex items-center gap-1.5 text-[10.5px] font-mono uppercase text-emerald-800 font-bold mb-1">
                <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                <span>Quantifiable Impact</span>
              </div>
              <p className="text-xs text-slate-900 font-semibold leading-relaxed">
                {item.impact}
              </p>
            </div>
          </div>

          {/* Tags */}
          <div className="pt-2 border-t border-slate-200/80 flex flex-wrap gap-1.5">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 border border-slate-200 text-slate-700 font-mono font-medium hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
