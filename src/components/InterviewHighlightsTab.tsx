"use client";

import React from "react";
import { INTERVIEW_HIGHLIGHTS, TechnicalHighlight } from "@/constants/data";
import { Lock, Database, Layers, RefreshCw, AlertCircle, CheckCircle2, TrendingUp } from "lucide-react";

export default function InterviewHighlightsTab() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "lock":
        return <Lock className="w-4 h-4 text-sky-400" />;
      case "database":
        return <Database className="w-4 h-4 text-sky-400" />;
      case "layers":
        return <Layers className="w-4 h-4 text-sky-400" />;
      default:
        return <RefreshCw className="w-4 h-4 text-sky-400" />;
    }
  };

  return (
    <div className="flex-1 min-h-0 grid grid-cols-1 md:grid-cols-2 gap-3.5 overflow-y-auto custom-scrollbar pr-1">
      {INTERVIEW_HIGHLIGHTS.map((item: TechnicalHighlight) => (
        <div
          key={item.id}
          className="glass-panel p-4.5 rounded-2xl flex flex-col justify-between gap-3.5 border-white/[0.08] hover:border-white/15 transition-all duration-150"
        >
          {/* Card Header */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded border font-semibold inline-flex items-center gap-1.5 bg-sky-500/10 text-sky-300 border-sky-500/25">
                {getIcon(item.iconName)}
                <span>{item.category}</span>
              </span>

              <span className="text-[10px] text-zinc-400 font-mono">Tech Deep Dive</span>
            </div>

            <h3 className="font-heading font-extrabold text-base sm:text-lg text-zinc-100 mt-1">
              {item.title}
            </h3>
            <p className="text-xs text-sky-400 font-mono font-medium">
              {item.subtitle}
            </p>
          </div>

          {/* Problem & Solution */}
          <div className="space-y-2.5">
            {/* The Problem */}
            <div className="bg-zinc-950/60 border border-white/[0.06] p-2.5 rounded-xl">
              <div className="flex items-center gap-1.5 text-[10.5px] font-mono uppercase text-zinc-400 font-bold mb-1">
                <AlertCircle className="w-3.5 h-3.5 text-zinc-400" />
                <span>The Challenge / Bottleneck</span>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed">
                {item.problem}
              </p>
            </div>

            {/* Technical Solution */}
            <div className="bg-zinc-950/60 border border-white/[0.06] p-2.5 rounded-xl">
              <div className="flex items-center gap-1.5 text-[10.5px] font-mono uppercase text-emerald-400 font-bold mb-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Architectural Solution</span>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed">
                {item.solution}
              </p>
            </div>

            {/* Measurable Impact */}
            <div className="bg-sky-950/20 border border-sky-500/25 p-2.5 rounded-xl">
              <div className="flex items-center gap-1.5 text-[10.5px] font-mono uppercase text-sky-400 font-bold mb-1">
                <TrendingUp className="w-3.5 h-3.5 text-sky-400" />
                <span>Quantifiable Impact</span>
              </div>
              <p className="text-xs text-zinc-100 font-medium leading-relaxed">
                {item.impact}
              </p>
            </div>
          </div>

          {/* Tags */}
          <div className="pt-2 border-t border-white/[0.06] flex flex-wrap gap-1.5">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] px-2 py-0.5 rounded bg-zinc-900/90 border border-white/[0.08] text-zinc-300 font-mono"
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
