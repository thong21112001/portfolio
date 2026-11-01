"use client";

import React from "react";
import { INTERVIEW_HIGHLIGHTS, TechnicalHighlight } from "@/constants/data";
import { Lock, Database, Layers, RefreshCw, AlertCircle, CheckCircle2, TrendingUp } from "lucide-react";

export default function InterviewHighlightsTab() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "lock":
        return <Lock className="w-4 h-4 text-primary-violet" />;
      case "database":
        return <Database className="w-4 h-4 text-accent-blue" />;
      case "layers":
        return <Layers className="w-4 h-4 text-accent-emerald" />;
      default:
        return <RefreshCw className="w-4 h-4 text-amber-400" />;
    }
  };

  const getBadgeColor = (iconName: string) => {
    switch (iconName) {
      case "lock":
        return "bg-purple-950/40 text-purple-300 border-purple-500/25";
      case "database":
        return "bg-blue-950/40 text-blue-300 border-blue-500/25";
      case "layers":
        return "bg-emerald-950/40 text-emerald-300 border-emerald-500/25";
      default:
        return "bg-amber-950/40 text-amber-300 border-amber-500/25";
    }
  };

  return (
    <div className="flex-1 min-h-0 grid grid-cols-1 md:grid-cols-2 gap-3.5 overflow-y-auto custom-scrollbar pr-1">
      {INTERVIEW_HIGHLIGHTS.map((item: TechnicalHighlight) => (
        <div
          key={item.id}
          className="glass-panel p-4.5 rounded-2xl flex flex-col justify-between gap-3.5 border-white/10 hover:border-white/20 transition-all duration-200"
        >
          {/* Card Header */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <span
                className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded border font-semibold inline-flex items-center gap-1.5 ${getBadgeColor(
                  item.iconName
                )}`}
              >
                {getIcon(item.iconName)}
                <span>{item.category}</span>
              </span>

              <span className="text-[10px] text-gray-500 font-mono">Tech Deep Dive</span>
            </div>

            <h3 className="font-heading font-extrabold text-base sm:text-lg text-white mt-1">
              {item.title}
            </h3>
            <p className="text-xs text-primary-violet/90 font-mono font-medium">
              {item.subtitle}
            </p>
          </div>

          {/* Problem & Solution */}
          <div className="space-y-2.5">
            {/* The Problem */}
            <div className="bg-red-950/15 border border-red-500/15 p-2.5 rounded-xl">
              <div className="flex items-center gap-1.5 text-[10.5px] font-mono uppercase text-red-400 font-bold mb-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>The Challenge / Bottleneck</span>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">
                {item.problem}
              </p>
            </div>

            {/* Technical Solution */}
            <div className="bg-emerald-950/15 border border-emerald-500/15 p-2.5 rounded-xl">
              <div className="flex items-center gap-1.5 text-[10.5px] font-mono uppercase text-emerald-400 font-bold mb-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Architectural Solution</span>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">
                {item.solution}
              </p>
            </div>

            {/* Measurable Impact */}
            <div className="bg-purple-950/20 border border-primary-violet/25 p-2.5 rounded-xl">
              <div className="flex items-center gap-1.5 text-[10.5px] font-mono uppercase text-primary-violet font-bold mb-1">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>Quantifiable Impact</span>
              </div>
              <p className="text-xs text-purple-100 font-medium leading-relaxed">
                {item.impact}
              </p>
            </div>
          </div>

          {/* Tags */}
          <div className="pt-2 border-t border-white/5 flex flex-wrap gap-1.5">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-gray-300 font-mono"
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

