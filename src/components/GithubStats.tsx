"use client";

import React from "react";
import { Star, BookOpen, Activity, GitFork } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { PERSONAL_INFO } from "@/constants/data";

export default function GithubStats() {
  const username = "thong21112001";
  
  const statsCardUrl = `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=dark&bg_color=0b0f19&title_color=8b5cf6&icon_color=10b981&text_color=9ca3af&hide_border=true`;
  const topLangsUrl = `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=dark&bg_color=0b0f19&title_color=8b5cf6&icon_color=10b981&text_color=9ca3af&hide_border=true`;

  return (
    <section className="py-12 bg-bg-dark relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-8">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-white mb-2">
            GitHub Contributions &amp; Code Activity
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto">
            Open-source repositories, activity metrics, and production language breakdown.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-4 flex flex-col justify-between space-y-4">
            <div className="glass-panel p-5 rounded-2xl border-white/5 flex-1 flex flex-col justify-center">
              <div className="flex items-center space-x-3 mb-3">
                <GithubIcon className="w-7 h-7 text-primary-violet" />
                <div>
                  <h3 className="font-heading font-bold text-base text-white">@{username}</h3>
                  <p className="text-xs text-primary-violet/90 font-mono">Backend Software Engineer</p>
                </div>
              </div>
              <p className="text-gray-300 text-xs leading-relaxed mb-4">
                Active in Node.js/NestJS backend web apps and ASP.NET Core API structures, focusing on high scalability and clean architecture.
              </p>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 bg-white/5 hover:bg-white/10 text-white rounded-xl text-center text-xs font-medium border border-white/10 flex items-center justify-center space-x-2 transition-all"
              >
                <span>Follow on GitHub</span>
                <GithubIcon className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="glass-panel p-3 rounded-xl border-white/5 text-center">
                <Star className="w-4 h-4 text-amber-400 mx-auto mb-1" />
                <span className="block font-heading font-bold text-lg text-white">21+</span>
                <span className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold font-mono">Stars</span>
              </div>
              <div className="glass-panel p-3 rounded-xl border-white/5 text-center">
                <BookOpen className="w-4 h-4 text-accent-blue mx-auto mb-1" />
                <span className="block font-heading font-bold text-lg text-white">13+</span>
                <span className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold font-mono">Repositories</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="glass-panel p-4 rounded-2xl border-white/5 flex flex-col items-center justify-center relative overflow-hidden group">
              <div className="absolute top-2 left-4 flex items-center space-x-1.5 z-10">
                <Activity className="w-3.5 h-3.5 text-primary-violet" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 font-mono">Activity Overview</span>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={statsCardUrl}
                alt="GitHub General Stats"
                className="w-full h-auto max-w-sm mt-4 object-contain rounded-lg"
              />
            </div>

            <div className="glass-panel p-4 rounded-2xl border-white/5 flex flex-col items-center justify-center relative overflow-hidden group">
              <div className="absolute top-2 left-4 flex items-center space-x-1.5 z-10">
                <GitFork className="w-3.5 h-3.5 text-accent-emerald" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 font-mono">Languages Breakdown</span>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={topLangsUrl}
                alt="GitHub Top Languages"
                className="w-full h-auto max-w-sm mt-4 object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
