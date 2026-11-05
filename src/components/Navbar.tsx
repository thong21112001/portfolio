"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { PERSONAL_INFO } from "@/constants/data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-zinc-950/85 backdrop-blur-md border-b border-white/[0.07] shadow-lg shadow-black/40"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex justify-between items-center">
        <a
          href="#"
          className="font-heading font-bold text-xl tracking-tight text-zinc-100 group"
        >
          <span className="text-sky-400 transition-colors duration-200">&lt;</span>
          <span>TQThong</span>
          <span className="text-sky-400 transition-colors duration-200"> /&gt;</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors duration-150 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-sky-400 after:transition-all after:duration-200 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="h-4 w-[1px] bg-white/[0.08]" />

          {/* Social Icons */}
          <div className="flex items-center space-x-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="text-zinc-400 hover:text-zinc-100 transition-colors duration-150"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-zinc-400 hover:text-zinc-100 transition-colors duration-150"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-zinc-400 hover:text-zinc-100 transition-colors duration-150"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-zinc-400 hover:text-zinc-100 focus:outline-none p-1"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="md:hidden glass-panel border-t-0 absolute top-full left-0 w-full animate-fade-in shadow-2xl">
          <div className="px-6 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-zinc-300 hover:text-zinc-100 transition-colors duration-150 py-1"
              >
                {link.label}
              </a>
            ))}
            <div className="h-[1px] w-full bg-white/[0.06] my-2" />
            <div className="flex space-x-6 py-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="text-zinc-400 hover:text-zinc-100"
                aria-label="GitHub"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-zinc-400 hover:text-zinc-100"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-zinc-400 hover:text-zinc-100"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
