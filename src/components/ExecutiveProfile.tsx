"use client";

import React, { useState } from "react";
import { 
  FileDown, 
  Copy, 
  Check, 
  Mail, 
  Phone, 
  ExternalLink,
  Server,
  Code2,
  Database,
  Workflow
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { PERSONAL_INFO, HIGHLIGHT_METRICS, SKILL_CATEGORIES } from "@/constants/data";

export default function ExecutiveProfile() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      // Fallback
    }
  };

  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.phone);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } catch {
      // Fallback
    }
  };

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "server":
        return <Server className="w-3.5 h-3.5 text-primary-violet" />;
      case "code":
        return <Code2 className="w-3.5 h-3.5 text-accent-emerald" />;
      case "database":
        return <Database className="w-3.5 h-3.5 text-accent-blue" />;
      default:
        return <Workflow className="w-3.5 h-3.5 text-amber-400" />;
    }
  };

  const getCategoryBadgeClass = (color: string) => {
    switch (color) {
      case "violet":
        return "bg-purple-950/40 text-purple-200 border-purple-500/20";
      case "emerald":
        return "bg-emerald-950/40 text-emerald-200 border-emerald-500/20";
      case "blue":
        return "bg-blue-950/40 text-blue-200 border-blue-500/20";
      default:
        return "bg-amber-950/40 text-amber-200 border-amber-500/20";
    }
  };

  return (
    <aside className="lg:col-span-4 flex flex-col gap-3.5 lg:h-full lg:overflow-y-auto custom-scrollbar pr-0 lg:pr-1">
      {/* 1. Header Card */}
      <div className="glass-panel p-4.5 sm:p-5 rounded-2xl flex flex-col gap-3.5 relative overflow-hidden shrink-0">
        <div className="absolute top-0 right-0 w-36 h-36 bg-primary-violet/10 rounded-full blur-2xl pointer-events-none" />

        {/* Status Badge */}
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-[11px] font-medium tracking-wide">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>Available for Interview • Da Nang, VN</span>
          </div>

          <span className="text-[10px] text-gray-500 font-mono">Bento v2.0</span>
        </div>

        {/* Name & Title */}
        <div>
          <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight leading-tight">
            {PERSONAL_INFO.name}
          </h1>
          <div className="text-sm font-semibold text-primary-violet mt-0.5">
            {PERSONAL_INFO.title}
          </div>
          <p className="text-[12px] text-gray-400 mt-0.5 font-mono">
            {PERSONAL_INFO.subtitle}
          </p>
        </div>

        {/* 2-Sentence Concise Summary */}
        <p className="text-xs text-gray-300 leading-relaxed">
          Backend Engineer with 2+ years of production experience designing resilient RESTful APIs, high-throughput e-commerce systems, and SaaS platforms. Specialized in MongoDB aggregation tuning, Redis concurrency control, and clean modular architectures.
        </p>

        {/* CTAs: Resume & 1-Click Copy */}
        <div className="flex flex-col gap-2 pt-1">
          <a
            href={PERSONAL_INFO.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-4 bg-primary-violet hover:bg-violet-600 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all duration-200 shadow-md shadow-primary-violet/25 group cursor-pointer"
          >
            <FileDown className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
            <span>Get Resume (TranQuangThong_CV_EN.pdf)</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-70 ml-auto" />
          </a>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={handleCopyEmail}
              type="button"
              className="py-2 px-3 bg-white/5 hover:bg-white/10 active:scale-[0.98] border border-white/10 rounded-xl text-xs font-medium text-gray-200 flex items-center justify-center gap-1.5 transition-all cursor-pointer"
              title="Click to copy email address"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-semibold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-gray-400" />
                  <span>Copy Email</span>
                </>
              )}
            </button>

            <button
              onClick={handleCopyPhone}
              type="button"
              className="py-2 px-3 bg-white/5 hover:bg-white/10 active:scale-[0.98] border border-white/10 rounded-xl text-xs font-medium text-gray-200 flex items-center justify-center gap-1.5 transition-all cursor-pointer"
              title="Click to copy phone number"
            >
              {copiedPhone ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-semibold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-gray-400" />
                  <span>Copy Phone</span>
                </>
              )}
            </button>
          </div>

          {/* Social Links Row */}
          <div className="flex items-center justify-between pt-1 border-t border-white/5 text-gray-400 text-xs">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors py-1"
            >
              <Mail className="w-3.5 h-3.5 text-primary-violet" />
              <span>Email</span>
            </a>
            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors py-1"
            >
              <Phone className="w-3.5 h-3.5 text-accent-emerald" />
              <span>{PERSONAL_INFO.phone}</span>
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors py-1"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors py-1"
            >
              <LinkedinIcon className="w-3.5 h-3.5 text-accent-blue" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. KPI Metrics Grid */}
      <div className="grid grid-cols-2 gap-2.5 shrink-0">
        {HIGHLIGHT_METRICS.map((metric) => (
          <div
            key={metric.label}
            className="glass-panel p-3 rounded-xl border-white/5 flex flex-col justify-between hover:border-white/10 transition-colors"
          >
            <div className="flex items-baseline justify-between">
              <span className="font-heading font-black text-2xl text-white tracking-tight">
                {metric.value}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary-violet" />
            </div>
            <div className="mt-1">
              <div className="text-[11px] font-semibold text-gray-200">
                {metric.label}
              </div>
              <div className="text-[10px] text-gray-400 line-clamp-1">
                {metric.detail}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 3. Compact Tech Stack Card */}
      <div className="glass-panel p-4 rounded-2xl flex-1 flex flex-col gap-3 min-h-0">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-bold text-gray-200 tracking-wider uppercase font-mono">
            Core Competencies
          </h2>
          <span className="text-[10px] text-gray-400">HR Keyword Scan</span>
        </div>

        <div className="flex flex-col gap-2.5 overflow-y-auto custom-scrollbar pr-0.5">
          {SKILL_CATEGORIES.map((cat) => (
            <div key={cat.title} className="flex flex-col gap-1.5">
              <div className="flex items-center gap-1.5 text-[11px] font-semibold text-gray-300">
                {getCategoryIcon(cat.iconName)}
                <span>{cat.title}</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`text-[10.5px] px-2 py-0.5 rounded-md border font-medium transition-colors ${getCategoryBadgeClass(
                      cat.color
                    )}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}

