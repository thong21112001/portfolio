"use client";

import React, { useState } from "react";
import { Mail, Copy, Check, FileDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { PERSONAL_INFO } from "@/constants/data";

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      // Fallback
    }
  };

  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.phone);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <section id="contact" className="py-16 bg-bg-dark relative border-t border-white/[0.06]">
      <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10 text-center">
        <div className="mb-8">
          <h2 className="font-heading font-bold text-3xl text-zinc-100 mb-2">
            Let&apos;s Connect &amp; Collaborate
          </h2>
          <p className="text-zinc-400 text-sm max-w-xl mx-auto">
            Ready to contribute to scalable backend systems, clean architecture, and high-performance APIs.
          </p>
        </div>

        <div className="glass-panel p-6 sm:p-8 rounded-2xl border-white/[0.08] flex flex-col items-center gap-6 max-w-2xl mx-auto">
          {/* Quick Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full justify-center">
            <a
              href={PERSONAL_INFO.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto py-2.5 px-6 bg-zinc-100 hover:bg-white text-zinc-950 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-sm"
            >
              <FileDown className="w-4 h-4 text-zinc-900" />
              <span>Get Resume (PDF)</span>
            </a>

            <button
              onClick={handleCopyEmail}
              type="button"
              className={`w-full sm:w-auto py-2.5 px-5 border rounded-xl text-xs font-medium flex items-center justify-center gap-2 transition-all cursor-pointer ${
                copiedEmail
                  ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                  : "bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 border-white/[0.08]"
              }`}
            >
              {copiedEmail ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="font-semibold">Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-zinc-400" />
                  <span>Copy Email: {PERSONAL_INFO.email}</span>
                </>
              )}
            </button>

            <button
              onClick={handleCopyPhone}
              type="button"
              className={`w-full sm:w-auto py-2.5 px-5 border rounded-xl text-xs font-medium flex items-center justify-center gap-2 transition-all cursor-pointer ${
                copiedPhone
                  ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                  : "bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 border-white/[0.08]"
              }`}
            >
              {copiedPhone ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="font-semibold">Phone Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-zinc-400" />
                  <span>Copy Phone: {PERSONAL_INFO.phone}</span>
                </>
              )}
            </button>
          </div>

          {/* Social Row */}
          <div className="flex items-center gap-6 pt-4 border-t border-white/[0.06] text-zinc-400 text-sm">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-zinc-100 transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-4 h-4 text-sky-400" />
              <span>quangthong211101@gmail.com</span>
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-100 transition-colors flex items-center gap-1.5"
            >
              <GithubIcon className="w-4 h-4 text-zinc-400" />
              <span>GitHub</span>
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-100 transition-colors flex items-center gap-1.5"
            >
              <LinkedinIcon className="w-4 h-4 text-zinc-400" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
