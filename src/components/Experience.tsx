"use client";

import React from "react";
import { EXPERIENCE, EDUCATION } from "@/constants/data";
import { Briefcase, GraduationCap } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-bg-dark relative border-t border-white/5">
      <div className="absolute top-1/2 left-1/4 w-[350px] h-[350px] bg-primary-violet/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            My career timeline as a software developer, including professional milestones, internships, and educational achievements.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative border-l border-white/10 pl-6 md:pl-10 space-y-12 ml-4">
          {EXPERIENCE.map((exp) => (
            <div key={exp.id} className="relative group">
              {/* Timeline icon */}
              <span className="absolute -left-[38px] md:-left-[54px] top-1.5 flex items-center justify-center w-8 h-8 rounded-full bg-bg-dark border border-white/10 group-hover:border-primary-violet transition-colors z-20">
                <Briefcase className="w-4 h-4 text-primary-violet" />
              </span>

              <div>
                <span className="text-[11px] font-bold tracking-widest text-primary-violet uppercase">
                  {exp.period}
                </span>
                <h3 className="font-heading font-bold text-xl text-white mt-1 group-hover:text-primary-violet transition-colors">
                  {exp.role}
                </h3>
                <h4 className="font-sans font-semibold text-sm text-gray-300 mt-0.5">
                  {exp.company}
                </h4>

                {/* Job Description list */}
                <ul className="mt-4 space-y-2.5">
                  {exp.description.map((desc, idx) => (
                    <li key={idx} className="flex items-start text-xs text-gray-400 leading-relaxed font-sans">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-violet shrink-0 mt-1.5 mr-2" />
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] px-2 py-0.5 bg-white/5 text-gray-400 font-medium rounded border border-white/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Education Timeline Entry */}
          {EDUCATION.map((edu) => (
            <div key={edu.id} className="relative group">
              <span className="absolute -left-[38px] md:-left-[54px] top-1.5 flex items-center justify-center w-8 h-8 rounded-full bg-bg-dark border border-white/10 group-hover:border-accent-emerald transition-colors z-20">
                <GraduationCap className="w-4 h-4 text-accent-emerald" />
              </span>

              <div>
                <span className="text-[11px] font-bold tracking-widest text-accent-emerald uppercase">
                  {edu.period}
                </span>
                <h3 className="font-heading font-bold text-xl text-white mt-1 group-hover:text-accent-emerald transition-colors">
                  {edu.degree}
                </h3>
                <h4 className="font-sans font-semibold text-sm text-gray-300 mt-0.5">
                  {edu.school}
                </h4>
                <p className="mt-3 text-xs text-gray-400 leading-relaxed font-sans">
                  {edu.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
