import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TechStack from "@/components/TechStack";
import ProjectsSection from "@/components/ProjectsSection";
import Experience from "@/components/Experience";
import ContactSection from "@/components/ContactSection";
import { PERSONAL_INFO } from "@/constants/data";

export default function Home() {
  const currentYear = 2026;

  return (
    <div className="min-h-screen bg-bg-dark text-fg-light flex flex-col relative select-none">
      {/* Floating Header */}
      <Navbar />

      <main className="flex-1 flex flex-col">
        {/* Hero Area */}
        <HeroSection />

        {/* About Info */}
        <AboutSection />

        {/* Tech Stack Marquee & Progress Indicators */}
        <TechStack />

        {/* Projects Showcase */}
        <ProjectsSection />

        {/* Experience Timeline */}
        <Experience />

        {/* Contact Form & Information */}
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-10 bg-bg-dark/50 backdrop-blur-md relative z-10 text-center">
        <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 text-sm text-gray-500">
          <p>
            &copy; {currentYear} {PERSONAL_INFO.name}. All rights reserved.
          </p>
          <p className="flex items-center space-x-1.5 justify-center">
            <span>Built with Next.js 16, TypeScript, &amp; Tailwind CSS.</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
