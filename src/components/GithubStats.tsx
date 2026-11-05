"use client";

import React from "react";
import { Star, BookOpen, Activity, GitFork } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { PERSONAL_INFO } from "@/constants/data";

export default function GithubStats() {
  const username = "thong21112001";
  
  // Custom styled SVG endpoints with graphite background and sky title
  const statsCardUrl = `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=dark&bg_color=121215&title_color=38bdf8&icon_color=10b981&text_color=a1a1aa&hide_border=true`;
  const topLangsUrl = `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=dark&bg_color=121215&title_color=38bdf8&icon_color=10b981&text_color=a1a1aa&hide_border=true`;

  return (
    <section className="py-12 bg-bg-dark relative border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-8">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-zinc-100 mb-2">
            GitHub Contributions &amp; Code Activity
          </h2>
          <p className="text-zinc-400 text-sm max-w-xl mx-auto">
            Open-source repositories, activity metrics, and production language breakdown.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-4 flex flex-col justify-between space-y-4">
            <div className="glass-panel p-5 rounded-2xl border-white/[0.07] flex-1 flex flex-col justify-center">
              <div className="flex items-center space-x-3 mb-3">
                <GithubIcon className="w-7 h-7 text-sky-400" />
                <div>
                  <h3 className="font-heading font-bold text-base text-zinc-100">@{username}</h3>
                  <p className="text-xs text-sky-400 font-mono">Backend Software Engineer</p>
                </div>
              </div>
              <p className="text-zinc-300 text-xs leading-relaxed mb-4">
                Active in Node.js/NestJS backend web apps and ASP.NET Core API structures, focusing on high scalability and clean architecture.
              </p>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 rounded-xl text-center text-xs font-medium border border-white/[0.08] flex items-center justify-center space-x-2 transition-all cursor-pointer"
              >
                <span>Follow on GitHub</span>
                <GithubIcon className="w-3.5 h-3.5 text-zinc-400" />
              </a>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="glass-panel p-3 rounded-xl border-white/[0.07] text-center">
                <Star className="w-4 h-4 text-sky-400 mx-auto mb-1" />
                <span className="block font-heading font-bold text-lg text-zinc-100">21+</span>
                <span className="text-[10px] text-zinc-400 uppercase tracking-widest font-semibold font-mono">Stars</span>
              </div>
              <div className="glass-panel p-3 rounded-xl border-white/[0.07] text-center">
                <BookOpen className="w-4 h-4 text-sky-400 mx-auto mb-1" />
                <span className="block font-heading font-bold text-lg text-zinc-100">13+</span>
                <span className="text-[10px] text-zinc-400 uppercase tracking-widest font-semibold font-mono">Repositories</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="glass-panel p-4 rounded-2xl border-white/[0.07] flex flex-col items-center justify-center relative overflow-hidden group">
              <div className="absolute top-2 left-4 flex items-center space-x-1.5 z-10">
                <Activity className="w-3.5 h-3.5 text-sky-400" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 font-mono">Activity Overview</span>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={statsCardUrl}
                alt="GitHub General Stats"
                className="w-full h-auto max-w-sm mt-4 object-contain rounded-lg"
              />
            </div>

            <div className="glass-panel p-4 rounded-2xl border-white/[0.07] flex flex-col items-center justify-center relative overflow-hidden group">
              <div className="absolute top-2 left-4 flex items-center space-x-1.5 z-10">
                <GitFork className="w-3.5 h-3.5 text-sky-400" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 font-mono">Languages Breakdown</span>
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
