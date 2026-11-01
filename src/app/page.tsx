"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FolderGit2, Briefcase, Cpu, Terminal } from "lucide-react";
import ExecutiveProfile from "@/components/ExecutiveProfile";
import ProjectsMasterDetail from "@/components/ProjectsMasterDetail";
import ExperienceEducationTab from "@/components/ExperienceEducationTab";
import InterviewHighlightsTab from "@/components/InterviewHighlightsTab";

type TabKey = "projects" | "experience" | "interview";

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
      key: "experience",
      label: "Work Experience & Education",
      icon: <Briefcase className="w-4 h-4" />
    },
    {
      key: "interview",
      label: "Backend Engineering & Interview Highlights",
      icon: <Cpu className="w-4 h-4" />
    }
  ];

  return (
    <div className="min-h-screen lg:h-dvh lg:overflow-hidden bg-bg-dark text-fg-light flex flex-col p-3 sm:p-4 lg:p-4.5 max-w-[1536px] mx-auto select-text">
      {/* Background radial ambient lights */}
      <div className="fixed top-0 left-1/4 w-[450px] h-[450px] bg-primary-violet/5 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="fixed bottom-0 right-1/4 w-[450px] h-[450px] bg-accent-blue/5 rounded-full blur-[140px] pointer-events-none z-0" />

      {/* Main 12-Column Grid */}
      <main className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-12 gap-3.5 lg:h-full lg:overflow-hidden relative z-10">
        {/* Left Column (lg:col-span-4) - Executive Profile & Quick Actions */}
        <ExecutiveProfile />

        {/* Right Column (lg:col-span-8) - Interactive Command Center */}
        <section className="lg:col-span-8 flex flex-col gap-3 lg:h-full lg:overflow-hidden min-h-0">
          {/* Top Navigation Bar */}
          <nav className="glass-panel p-1.5 rounded-2xl flex items-center justify-between gap-1.5 shrink-0 border-white/10">
            <div className="flex items-center gap-1 overflow-x-auto no-scrollbar w-full sm:w-auto">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.key;
                return (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    type="button"
                    className={`relative px-3 sm:px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all duration-200 shrink-0 cursor-pointer ${
                      isActive
                        ? "text-white shadow-sm"
                        : "text-gray-400 hover:text-gray-200 hover:bg-white/[0.04]"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeTabPill"
                        className="absolute inset-0 bg-primary-violet rounded-xl shadow-md shadow-primary-violet/30"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-1.5">
                      {tab.icon}
                      <span>{tab.label}</span>
                      {tab.count && (
                        <span
                          className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                            isActive
                              ? "bg-white/20 text-white"
                              : "bg-white/10 text-gray-300"
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

            {/* Status indicator */}
            <div className="hidden xl:flex items-center gap-2 pr-3 text-[11px] font-mono text-gray-400">
              <Terminal className="w-3.5 h-3.5 text-accent-emerald" />
              <span>production.ready</span>
            </div>
          </nav>

          {/* Dynamic Tab Body */}
          <div className="flex-1 min-h-0 flex flex-col relative overflow-hidden">
            <AnimatePresence mode="wait">
              {activeTab === "projects" && (
                <motion.div
                  key="projects"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.18 }}
                  className="flex-1 min-h-0 flex flex-col"
                >
                  <ProjectsMasterDetail />
                </motion.div>
              )}

              {activeTab === "experience" && (
                <motion.div
                  key="experience"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.18 }}
                  className="flex-1 min-h-0 flex flex-col"
                >
                  <ExperienceEducationTab />
                </motion.div>
              )}

              {activeTab === "interview" && (
                <motion.div
                  key="interview"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.18 }}
                  className="flex-1 min-h-0 flex flex-col"
                >
                  <InterviewHighlightsTab />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Bottom Micro Status Bar */}
          <footer className="shrink-0 flex items-center justify-between px-2 py-1 text-[11px] text-gray-500 font-mono border-t border-white/5">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Tran Quang Thong • Backend Software Engineer</span>
            </div>
            <div className="hidden sm:flex items-center gap-3">
              <span>NestJS • .NET 8 • MongoDB • Redis</span>
              <span>•</span>
              <a
                href="https://github.com/thong21112001"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors"
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
