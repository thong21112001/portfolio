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
      {/* Glowing abstract background blobs */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-primary-violet/10 rounded-full blur-[80px] animate-glow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-accent-blue/10 rounded-full blur-[80px] animate-glow pointer-events-none" style={{ animationDelay: "4s" }} />

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
            className="flex items-center space-x-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8"
          >
            <Code className="w-4 h-4 text-primary-violet" />
            <span className="text-xs font-semibold text-gray-300 uppercase tracking-widest">
              Open to Opportunities
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="font-heading font-extrabold text-5xl md:text-7xl lg:text-8xl text-white tracking-tight leading-none mb-6 max-w-4xl"
          >
            I build robust{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-violet via-accent-blue to-accent-emerald">
              backend engines
            </span>{" "}
            that scale.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mb-12 font-sans font-medium"
          >
            Hi, I&apos;m <span className="text-white font-semibold">{PERSONAL_INFO.name}</span>. A Software Engineer designing high-performance RESTful APIs, optimized data architectures, and clean backend systems.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto"
          >
            <a
              href="#projects"
              className="px-8 py-4 bg-gradient-to-r from-primary-violet to-accent-blue hover:from-primary-violet/90 hover:to-accent-blue/90 text-white rounded-xl font-medium shadow-lg shadow-primary-violet/25 flex items-center justify-center space-x-2 group transition-all duration-300"
            >
              <span>View Projects</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>

            <a
              href="#contact"
              className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl font-medium flex items-center justify-center space-x-2 transition-all duration-300"
            >
              <Send className="w-4 h-4" />
              <span>Contact Me</span>
            </a>

            <a
              href="/TranQuangThong_CV_EN.pdf"
              download="TranQuangThong_CV_EN.pdf"
              className="px-8 py-4 bg-transparent hover:bg-white/5 text-gray-300 hover:text-white rounded-xl font-medium flex items-center justify-center space-x-2 transition-all duration-300"
            >
              <Download className="w-4 h-4" />
              <span>Get Resume</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Side scroll indicators for desktop */}
      <div className="absolute bottom-24 left-8 hidden md:flex items-center space-x-2 -rotate-90 origin-left text-[9px] tracking-widest text-gray-500 font-bold uppercase select-none">
        <span>Scroll Down</span>
        <div className="w-12 h-[1px] bg-gray-500/30" />
      </div>

      <div className="absolute bottom-24 right-8 hidden md:flex items-center space-x-2 rotate-90 origin-right text-[9px] tracking-widest text-gray-500 font-bold uppercase select-none">
        <div className="w-12 h-[1px] bg-gray-500/30" />
        <span>Explore Work</span>
      </div>

      {/* Centered tiny scroll indicator for mobile */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 md:hidden text-gray-500/70 animate-bounce select-none">
        <ChevronDown className="w-5 h-5" />
      </div>
    </section>
  );
}
