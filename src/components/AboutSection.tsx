"use client";

import React from "react";
import { PERSONAL_INFO } from "@/constants/data";
import { Award, BookOpen, Brain, Zap, ShieldCheck, Heart } from "lucide-react";

export default function AboutSection() {
  const cards = [
    {
      title: "Clean Architecture",
      description: "Implementing Domain-Driven Design, CQRS, and Repository patterns to keep systems decoupled and modular.",
      icon: <Brain className="w-6 h-6 text-primary-violet" />
    },
    {
      title: "Performance First",
      description: "Optimizing queries, indexing databases, caching with Redis, and writing DRY, non-blocking asynchronous code.",
      icon: <Zap className="w-6 h-6 text-accent-emerald" />
    },
    {
      title: "Security & Safety",
      description: "Enforcing Role-Based Access Controls (RBAC), validating inputs, and applying secure authentication flows.",
      icon: <ShieldCheck className="w-6 h-6 text-accent-blue" />
    }
  ];

  return (
    <section id="about" className="py-20 bg-bg-dark relative overflow-hidden border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left profile intro text */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white">
              About Me
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-primary-violet to-accent-blue rounded-full" />
            <p className="text-gray-300 font-sans leading-relaxed text-base">
              {PERSONAL_INFO.about}
            </p>
            <p className="text-gray-400 font-sans leading-relaxed text-sm">
              I am dedicated to writing clean, testable code and structuring scalable databases. I enjoy collaborating with mobile and frontend developers to design clean API contracts and deliver unified products.
            </p>
            
            {/* Quick Metrics */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="glass-panel p-4 rounded-xl border-white/5">
                <span className="block font-heading font-extrabold text-3xl text-white">3.64</span>
                <span className="text-xs text-gray-500 uppercase tracking-widest font-semibold">DTU Engineering GPA</span>
              </div>
              <div className="glass-panel p-4 rounded-xl border-white/5">
                <span className="block font-heading font-extrabold text-3xl text-white">50+</span>
                <span className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Active SaaS Stores</span>
              </div>
            </div>
          </div>

          {/* Right bento items */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {/* Dynamic Card 1: Core Values */}
            <div className="sm:col-span-2 glass-panel p-6 rounded-2xl border-white/5">
              <h3 className="font-heading font-bold text-lg text-white mb-4 flex items-center space-x-2">
                <Heart className="w-5 h-5 text-rose-500" />
                <span>My Core Engineering Principles</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {cards.map((card, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="mb-2">{card.icon}</div>
                    <h4 className="font-heading font-semibold text-sm text-white">{card.title}</h4>
                    <p className="text-xs text-gray-400 leading-normal">{card.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Dynamic Card 2: Education */}
            <div className="glass-panel p-6 rounded-2xl border-white/5 space-y-4">
              <h3 className="font-heading font-bold text-lg text-white flex items-center space-x-2">
                <BookOpen className="w-5 h-5 text-accent-blue" />
                <span>Education</span>
              </h3>
              <div>
                <h4 className="font-heading font-semibold text-sm text-white">Bachelor of Software Engineering</h4>
                <p className="text-xs text-primary-violet font-medium mt-0.5">Duy Tan University | 2019 - 2023</p>
                <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                  Deep dived into algorithmic design, object-oriented systems, and clean application architecture logic.
                </p>
              </div>
            </div>

            {/* Dynamic Card 3: Language & Hobbies */}
            <div className="glass-panel p-6 rounded-2xl border-white/5 space-y-4">
              <h3 className="font-heading font-bold text-lg text-white flex items-center space-x-2">
                <Award className="w-5 h-5 text-accent-emerald" />
                <span>Certificates</span>
              </h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-heading font-semibold text-sm text-white">JLPT N5</h4>
                  <p className="text-[11px] text-gray-500">Japanese Language Proficiency</p>
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-sm text-white">TOEIC 500</h4>
                  <p className="text-[11px] text-gray-500">English Communication Standard</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
