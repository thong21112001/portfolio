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
    <section id="contact" className="py-16 bg-bg-dark relative border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10 text-center">
        <div className="mb-8">
          <h2 className="font-heading font-bold text-3xl text-white mb-2">
            Let&apos;s Connect &amp; Collaborate
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto">
            Ready to contribute to scalable backend systems, clean architecture, and high-performance APIs.
          </p>
        </div>

        <div className="glass-panel p-6 sm:p-8 rounded-2xl border-white/10 flex flex-col items-center gap-6 max-w-2xl mx-auto">
          {/* Quick Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full justify-center">
            <a
              href={PERSONAL_INFO.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto py-3 px-6 bg-primary-violet hover:bg-violet-600 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-md shadow-primary-violet/25"
            >
              <FileDown className="w-4 h-4" />
              <span>Get Resume (PDF)</span>
            </a>

            <button
              onClick={handleCopyEmail}
              type="button"
              className="w-full sm:w-auto py-3 px-5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-xs font-medium text-gray-200 flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 font-semibold">Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-gray-400" />
                  <span>Copy Email: {PERSONAL_INFO.email}</span>
                </>
              )}
            </button>

            <button
              onClick={handleCopyPhone}
              type="button"
              className="w-full sm:w-auto py-3 px-5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-xs font-medium text-gray-200 flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              {copiedPhone ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 font-semibold">Phone Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-gray-400" />
                  <span>Copy Phone: {PERSONAL_INFO.phone}</span>
                </>
              )}
            </button>
          </div>

          {/* Social Row */}
          <div className="flex items-center gap-6 pt-4 border-t border-white/5 text-gray-400 text-sm">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-primary-violet transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-4 h-4 text-primary-violet" />
              <span>quangthong211101@gmail.com</span>
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-blue transition-colors flex items-center gap-1.5"
            >
              <LinkedinIcon className="w-4 h-4 text-accent-blue" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
