"use client";

import React from "react";
import { Star, GitFork, BookOpen, Activity } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { PERSONAL_INFO } from "@/constants/data";

export default function GithubStats() {
  const username = "thong21112001";
  
  // Custom styled SVG endpoints for GitHub readme stats
  const statsCardUrl = `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=dark&bg_color=0b0f19&title_color=8b5cf6&icon_color=10b981&text_color=9ca3af&hide_border=true`;
  const topLangsUrl = `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=dark&bg_color=0b0f19&title_color=8b5cf6&icon_color=10b981&text_color=9ca3af&hide_border=true`;

  return (
    <section className="py-20 bg-bg-dark relative border-t border-white/5">
      <div className="absolute top-1/2 right-1/4 w-[350px] h-[350px] bg-accent-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
            GitHub Contributions & Stats
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            An overview of my active open-source contributions, repository statistics, and most used programming languages on GitHub.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Quick Info Column */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            <div className="glass-panel p-6 rounded-2xl border-white/5 flex-1 flex flex-col justify-center">
              <div className="flex items-center space-x-3 mb-4">
                <GithubIcon className="w-8 h-8 text-primary-violet" />
                <div>
                  <h3 className="font-heading font-bold text-lg text-white">@{username}</h3>
                  <p className="text-xs text-gray-500">Dev lỏ muốn code pro</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Active contributor in Node.js/NestJS backend web apps and ASP.NET Core API structures. Building code repositories with high performance in mind.
              </p>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 bg-white/5 hover:bg-white/10 text-white rounded-xl text-center text-sm font-medium border border-white/10 flex items-center justify-center space-x-2 transition-all duration-300"
              >
                <span>Follow on GitHub</span>
                <GithubIcon className="w-4 h-4" />
              </a>
            </div>

            {/* Quick Metrics Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-panel p-4 rounded-xl border-white/5 text-center">
                <Star className="w-5 h-5 text-amber-400 mx-auto mb-2" />
                <span className="block font-heading font-bold text-xl text-white">21</span>
                <span className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold">Stars Earned</span>
              </div>
              <div className="glass-panel p-4 rounded-xl border-white/5 text-center">
                <BookOpen className="w-5 h-5 text-accent-blue mx-auto mb-2" />
                <span className="block font-heading font-bold text-xl text-white">13</span>
                <span className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold">Repositories</span>
              </div>
            </div>
          </div>

          {/* Readme Stats Widgets Column */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* General Stats Card */}
            <div className="glass-panel p-4 rounded-2xl border-white/5 flex flex-col items-center justify-center relative overflow-hidden group">
              <div className="absolute top-2 left-4 flex items-center space-x-1.5 z-10">
                <Activity className="w-4 h-4 text-primary-violet" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Activity Overview</span>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={statsCardUrl}
                alt="GitHub General Stats"
                className="w-full h-auto max-w-sm mt-4 object-contain rounded-lg transition-transform duration-300 group-hover:scale-[1.01]"
              />
            </div>

            {/* Top Languages Card */}
            <div className="glass-panel p-4 rounded-2xl border-white/5 flex flex-col items-center justify-center relative overflow-hidden group">
              <div className="absolute top-2 left-4 flex items-center space-x-1.5 z-10">
                <GitFork className="w-4 h-4 text-accent-emerald" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Languages Breakdown</span>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={topLangsUrl}
                alt="GitHub Top Languages"
                className="w-full h-auto max-w-sm mt-4 object-contain rounded-lg transition-transform duration-300 group-hover:scale-[1.01]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
