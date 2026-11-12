"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FolderGit2, Briefcase, Cpu, Terminal, Layers } from "lucide-react";
import ExecutiveProfile from "@/components/ExecutiveProfile";
import ProjectsMasterDetail from "@/components/ProjectsMasterDetail";
import CoreCompetenciesTab from "@/components/CoreCompetenciesTab";
import ExperienceEducationTab from "@/components/ExperienceEducationTab";
import InterviewHighlightsTab from "@/components/InterviewHighlightsTab";

export type TabKey = "projects" | "skills" | "experience" | "interview";

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabKey>("projects");

  const tabs: { key: TabKey; label: string; count?: string; icon: React.ReactNode }[] = [
    {
      key: "projects",
      label: "Production Projects",
      count: "4",
      icon: <FolderGit2 className="w-4 h-4" />
    },
    {
      key: "skills",
      label: "Core Competencies",
      count: "4 Domains",
      icon: <Layers className="w-4 h-4" />
    },
    {
      key: "experience",
      label: "Work Experience & Education",
      icon: <Briefcase className="w-4 h-4" />
    },
    {
      key: "interview",
      label: "Interview Highlights",
      icon: <Cpu className="w-4 h-4" />
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 flex flex-col p-3 sm:p-4 lg:p-4.5 max-w-[1536px] mx-auto select-text relative bg-grid-lines">
      {/* Ambient Mesh Gradient Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[900px] h-[300px] bg-gradient-to-r from-blue-500/8 via-indigo-500/5 to-sky-400/8 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Main 12-Column Grid */}
      <main className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-3.5 relative z-10 pb-2">
        {/* Left Column (lg:col-span-4) - Executive Profile & Quick Actions */}
        <ExecutiveProfile onSelectTab={setActiveTab} activeTab={activeTab} />

        {/* Right Column (lg:col-span-8) - Interactive Command Center */}
        <section className="lg:col-span-8 flex flex-col gap-3 min-h-0">
          {/* Top Navigation Bar with Core Competencies Tab */}
          <nav className="glass-panel p-1.5 rounded-2xl flex items-center justify-between gap-1.5 shrink-0 border-slate-200/90 shadow-sm">
            <div className="flex items-center gap-1 overflow-x-auto no-scrollbar w-full sm:w-auto">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.key;
                return (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    type="button"
                    className={`relative px-3 sm:px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all duration-150 shrink-0 cursor-pointer ${
                      isActive
                        ? "text-blue-700"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/80"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeTabPill"
                        className="absolute inset-0 bg-white border border-slate-200/90 rounded-xl shadow-xs"
                        transition={{ type: "spring", stiffness: 420, damping: 32 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-1.5">
                      <span className={isActive ? "text-blue-600" : "text-slate-500"}>
                        {tab.icon}
                      </span>
                      <span>{tab.label}</span>
                      {tab.count && (
                        <span
                          className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono border font-semibold ${
                            isActive
                              ? "bg-blue-50 text-blue-700 border-blue-200 shadow-2xs"
                              : "bg-slate-100 text-slate-500 border-slate-200"
                          }`}
                        >
                          {tab.count}
                        </span>
                      )}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Production status indicator */}
            <div className="hidden xl:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-mono font-semibold shadow-2xs mr-1">
              <Terminal className="w-3.5 h-3.5 text-emerald-600" />
              <span>production.ready</span>
            </div>
          </nav>

          {/* Dynamic Tab Body */}
          <div className="flex-1 flex flex-col relative">
            <AnimatePresence mode="wait">
              {activeTab === "projects" && (
                <motion.div
                  key="projects"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.16 }}
                  className="flex-1 flex flex-col"
                >
                  <ProjectsMasterDetail />
                </motion.div>
              )}

              {activeTab === "skills" && (
                <motion.div
                  key="skills"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.16 }}
                  className="flex-1 flex flex-col"
                >
                  <CoreCompetenciesTab />
                </motion.div>
              )}

              {activeTab === "experience" && (
                <motion.div
                  key="experience"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.16 }}
                  className="flex-1 flex flex-col"
                >
                  <ExperienceEducationTab />
                </motion.div>
              )}

              {activeTab === "interview" && (
                <motion.div
                  key="interview"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.16 }}
                  className="flex-1 flex flex-col"
                >
                  <InterviewHighlightsTab />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Bottom Micro Status Bar */}
          <footer className="shrink-0 flex items-center justify-between px-2 py-2 text-[11px] text-slate-500 font-mono border-t border-slate-200/80 mt-auto">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span className="font-medium text-slate-700">Tran Quang Thong • Software Engineer (Backend Developer)</span>
            </div>
            <div className="hidden sm:flex items-center gap-3">
              <span>NestJS • TypeScript • .NET 8 • MongoDB • Redis</span>
              <span>•</span>
              <a
                href="https://github.com/thong21112001"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors font-medium"
              >
                github.com/thong21112001
              </a>
            </div>
          </footer>
        </section>
      </main>
    </div>
  );
}
