"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  FileDown, 
  Copy, 
  Check, 
  Mail, 
  Phone, 
  ExternalLink,
  MapPin,
  Layers,
  ArrowRight
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { 
  PERSONAL_INFO, 
  HIGHLIGHT_METRICS
} from "@/constants/data";
import { TabKey } from "@/app/page";

interface ExecutiveProfileProps {
  onSelectTab?: (tab: TabKey) => void;
  activeTab?: TabKey;
}

export default function ExecutiveProfile({ onSelectTab, activeTab }: ExecutiveProfileProps) {
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

  const getKpiAccent = (accent?: string) => {
    switch (accent) {
      case "blue":
        return {
          border: "border-l-4 border-l-blue-600",
          dot: "bg-blue-600",
          badge: "bg-blue-50 text-blue-700"
        };
      case "indigo":
        return {
          border: "border-l-4 border-l-indigo-600",
          dot: "bg-indigo-600",
          badge: "bg-indigo-50 text-indigo-700"
        };
      case "emerald":
        return {
          border: "border-l-4 border-l-emerald-600",
          dot: "bg-emerald-600",
          badge: "bg-emerald-50 text-emerald-700"
        };
      case "amber":
      default:
        return {
          border: "border-l-4 border-l-amber-500",
          dot: "bg-amber-500",
          badge: "bg-amber-50 text-amber-700"
        };
    }
  };

  return (
    <aside className="lg:col-span-4 flex flex-col gap-3.5 pr-0 lg:pr-1">
      {/* 1. Header Card with Integrated Avatar */}
      <div className="glass-panel p-4 rounded-2xl flex flex-col gap-3 relative overflow-hidden border-slate-200/90 shadow-sm">
        {/* Top Status Row */}
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[11px] font-semibold tracking-wide shadow-2xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
            </span>
            <span>Available for Interview</span>
            <span className="text-emerald-400">•</span>
            <span className="text-emerald-600 font-medium inline-flex items-center gap-0.5">
              <MapPin className="w-3 h-3 inline" /> Da Nang, VN
            </span>
          </div>

          <span className="text-[10px] text-slate-400 font-mono font-medium">Verified Profile</span>
        </div>

        {/* Profile Details with Avatar */}
        <div className="flex items-center gap-3.5">
          {/* Avatar Container */}
          <div className="relative shrink-0">
            <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-2xl p-0.5 bg-gradient-to-b from-blue-50 to-slate-100 ring-2 ring-blue-600/20 border-2 border-white shadow-md overflow-hidden flex items-center justify-center">
              <Image
                src={PERSONAL_INFO.avatarPath}
                alt={PERSONAL_INFO.name}
                width={80}
                height={80}
                className="w-full h-full object-cover object-top rounded-xl"
                priority
              />
            </div>
            <span className="absolute -bottom-1 -right-1 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white" />
            </span>
          </div>

          {/* Name & Title */}
          <div className="min-w-0 flex-1">
            <h1 className="font-heading font-extrabold text-xl sm:text-[23px] text-slate-900 tracking-tight leading-tight truncate">
              {PERSONAL_INFO.name}
            </h1>
            <div className="text-[12px] font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mt-0.5">
              SOFTWARE ENGINEER • BACKEND DEVELOPER
            </div>
            <p className="text-[11px] text-slate-500 font-mono mt-0.5 truncate">
              {PERSONAL_INFO.subtitle}
            </p>
          </div>
        </div>

        {/* Professional Summary */}
        <p className="text-xs text-slate-600 leading-relaxed bg-slate-50/70 p-2.5 rounded-xl border border-slate-200/80">
          {PERSONAL_INFO.about}
        </p>

        {/* CTAs: Resume (Primary Accent Gradient) & Quick Action Buttons */}
        <div className="flex flex-col gap-2 pt-0.5">
          <a
            href={PERSONAL_INFO.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all duration-150 shadow-md shadow-blue-600/20 group cursor-pointer"
          >
            <FileDown className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 text-white" />
            <span>View &amp; Download CV (PDF)</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80 ml-auto text-white" />
          </a>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={handleCopyEmail}
              type="button"
              className={`py-2 px-3 border rounded-xl text-xs font-medium flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                copiedEmail
                  ? "bg-emerald-50 border-emerald-300 text-emerald-700 font-semibold shadow-2xs"
                  : "bg-slate-50 hover:bg-blue-50/70 text-slate-700 border-slate-200/90 shadow-2xs"
              }`}
              title="Click to copy email address"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Copied Email!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-500" />
                  <span>Copy Email</span>
                </>
              )}
            </button>

            <button
              onClick={handleCopyPhone}
              type="button"
              className={`py-2 px-3 border rounded-xl text-xs font-medium flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                copiedPhone
                  ? "bg-emerald-50 border-emerald-300 text-emerald-700 font-semibold shadow-2xs"
                  : "bg-slate-50 hover:bg-blue-50/70 text-slate-700 border-slate-200/90 shadow-2xs"
              }`}
              title="Click to copy phone number"
            >
              {copiedPhone ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Copied Phone!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-500" />
                  <span>Copy Phone</span>
                </>
              )}
            </button>
          </div>

          {/* Social Links Row */}
          <div className="flex items-center justify-between pt-2 border-t border-slate-200/90 text-slate-600 text-xs font-medium">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex items-center gap-1.5 hover:text-blue-600 transition-colors py-1"
            >
              <Mail className="w-3.5 h-3.5 text-blue-600" />
              <span>Email</span>
            </a>
            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              className="flex items-center gap-1.5 hover:text-indigo-600 transition-colors py-1"
            >
              <Phone className="w-3.5 h-3.5 text-indigo-600" />
              <span>{PERSONAL_INFO.phone}</span>
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-slate-900 transition-colors py-1"
            >
              <GithubIcon className="w-3.5 h-3.5 text-slate-800" />
              <span>GitHub</span>
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-blue-600 transition-colors py-1"
            >
              <LinkedinIcon className="w-3.5 h-3.5 text-blue-600" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. KPI Metrics Grid - 4 Focal Points for Recruiters */}
      <div className="grid grid-cols-2 gap-2.5 shrink-0">
        {HIGHLIGHT_METRICS.map((metric) => {
          const accent = getKpiAccent(metric.accentColor);
          return (
            <div
              key={metric.label}
              className={`bg-white p-3 rounded-xl border border-slate-200/90 shadow-2xs flex flex-col justify-between hover:shadow-sm hover:border-blue-300 transition-all ${accent.border}`}
            >
              <div className="flex items-baseline justify-between">
                <span className="font-heading font-black text-2xl text-slate-900 tracking-tight">
                  {metric.value}
                </span>
                <span className={`w-2 h-2 rounded-full ${accent.dot}`} />
              </div>
              <div className="mt-1">
                <div className="text-[11px] font-bold text-slate-800">
                  {metric.label}
                </div>
                <div className="text-[10px] text-slate-500 line-clamp-1 mt-0.5">
                  {metric.detail}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 3. Core Competencies Quick Navigation Card */}
      <div 
        onClick={() => onSelectTab && onSelectTab("skills")}
        className={`glass-panel p-3.5 rounded-2xl border transition-all cursor-pointer shadow-2xs flex items-center justify-between group ${
          activeTab === "skills"
            ? "border-blue-500 bg-blue-50/50 shadow-xs"
            : "border-slate-200/90 hover:border-blue-300 hover:bg-slate-50/80"
        }`}
      >
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shadow-2xs group-hover:scale-105 transition-transform">
            <Layers className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                Core Competencies
              </span>
              <span className="text-[9.5px] font-mono text-blue-700 bg-blue-50 px-1.5 py-0.2 rounded border border-blue-200 font-semibold">
                4 Domains
              </span>
            </div>
            <div className="text-[10.5px] text-slate-500 line-clamp-1 mt-0.5">
              NestJS • .NET 8 • MongoDB • Redis • Integrations
            </div>
          </div>
        </div>

        <div className="text-xs font-semibold text-blue-600 group-hover:text-blue-700 flex items-center gap-1 shrink-0 ml-2">
          <span className="hidden sm:inline">View Nav Tab</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </aside>
  );
}
