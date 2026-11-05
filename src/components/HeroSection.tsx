"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowUpRight, Code, Download, Send, ChevronDown } from "lucide-react";
import { PERSONAL_INFO } from "@/constants/data";

export default function HeroSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 15 },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-bg-dark bg-grid-lines pt-20">
      {/* Subtle quiet top ambient depth without bright neon glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-sky-500/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center flex flex-col items-center"
        >
          {/* Tagline Badge */}
          <motion.div
            variants={itemVariants}
            className="flex items-center space-x-2 px-4 py-2 bg-zinc-900/80 border border-white/[0.08] rounded-full mb-8"
          >
            <Code className="w-4 h-4 text-sky-400" />
            <span className="text-xs font-semibold text-zinc-300 uppercase tracking-widest font-mono">
              Open to Opportunities
            </span>
          </motion.div>

          {/* Heading with Monochromatic Sky Gradient */}
          <motion.h1
            variants={itemVariants}
            className="font-heading font-extrabold text-5xl md:text-7xl lg:text-8xl text-zinc-100 tracking-tight leading-none mb-6 max-w-4xl"
          >
            I build robust{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-sky-200 to-sky-400">
              backend engines
            </span>{" "}
            that scale.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-zinc-400 text-lg md:text-xl max-w-2xl mb-12 font-sans font-medium"
          >
            Hi, I&apos;m <span className="text-zinc-100 font-semibold">{PERSONAL_INFO.name}</span>. A Software Engineer designing high-performance RESTful APIs, optimized data architectures, and clean backend systems.
          </motion.p>

          {/* High-Contrast Linear / Vercel CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto"
          >
            <a
              href="#projects"
              className="px-8 py-4 bg-zinc-100 hover:bg-white text-zinc-950 rounded-xl font-semibold shadow-sm flex items-center justify-center space-x-2 group transition-all duration-150"
            >
              <span>View Projects</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href="#contact"
              className="px-8 py-4 bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 border border-white/[0.08] rounded-xl font-medium flex items-center justify-center space-x-2 transition-all duration-150"
            >
              <Send className="w-4 h-4 text-zinc-400" />
              <span>Contact Me</span>
            </a>

            <a
              href="/TranQuangThong_CV_EN.pdf"
              download="TranQuangThong_CV_EN.pdf"
              className="px-8 py-4 bg-sky-500/10 hover:bg-sky-500/20 text-sky-300 border border-sky-500/25 rounded-xl font-medium flex items-center justify-center space-x-2 transition-all duration-150"
            >
              <Download className="w-4 h-4" />
              <span>Get Resume</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Side scroll indicators for desktop */}
      <div className="absolute bottom-24 left-8 hidden md:flex items-center space-x-2 -rotate-90 origin-left text-[9px] tracking-widest text-zinc-500 font-bold uppercase select-none font-mono">
        <span>Scroll Down</span>
        <div className="w-12 h-[1px] bg-zinc-800" />
      </div>

      <div className="absolute bottom-24 right-8 hidden md:flex items-center space-x-2 rotate-90 origin-right text-[9px] tracking-widest text-zinc-500 font-bold uppercase select-none font-mono">
        <div className="w-12 h-[1px] bg-zinc-800" />
        <span>Explore Work</span>
      </div>

      {/* Centered tiny scroll indicator for mobile */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 md:hidden text-zinc-500 animate-bounce select-none">
        <ChevronDown className="w-5 h-5" />
      </div>
    </section>
  );
}
