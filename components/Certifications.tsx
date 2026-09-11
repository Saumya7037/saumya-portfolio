"use client";

import { Award, BookOpen, GraduationCap, Calendar } from "lucide-react";
import {
  certifications,
  additionalLearning,
  education,
} from "@/data/certifications";

export default function Certifications() {
  return (
    <section id="certifications" className="py-28 border-t border-neutral-800/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <p className="font-mono text-sm text-sky-500 hover:text-sky-300 tracking-widest uppercase mb-3 transition-colors">
          Certifications & Education
        </p>
        <h2 className="text-4xl font-bold text-neutral-100 mb-12">
          Credentials
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Official certification — featured */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-mono text-neutral-400 hover:text-sky-400 uppercase tracking-wider mb-4 transition-colors">
              Microsoft Certification
            </h3>
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="group p-5 rounded-xl border border-sky-500/30 bg-sky-500/5 hover:scale-[1.03] hover:-translate-y-1 hover:border-sky-500/60 hover:shadow-[0_8px_30px_rgba(56,189,248,0.15)] transition-all"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-9 h-9 rounded-md bg-sky-500/15 border border-sky-500/25 flex items-center justify-center flex-shrink-0 group-hover:bg-sky-500/25 group-hover:border-sky-500/50 transition-all">
                    <Award size={18} className="text-sky-400 group-hover:text-sky-300 group-hover:scale-110 transition-all" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-mono text-sky-500 mb-1">
                      {cert.badge}
                    </p>
                    <h4 className="text-base font-semibold text-neutral-100 group-hover:text-sky-200 leading-snug transition-colors">
                      {cert.name}
                    </h4>
                    <p className="text-sm text-neutral-400 mt-1">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
                <span className="inline-block px-2 py-0.5 text-sm rounded-full bg-sky-500/15 text-sky-400 border border-sky-500/25 font-mono">
                  Official Certification
                </span>
              </div>
            ))}
          </div>

          {/* Additional learning */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-mono text-neutral-400 hover:text-sky-400 uppercase tracking-wider mb-4 transition-colors">
              Additional Learning
            </h3>
            <div className="space-y-2">
              {additionalLearning.map((cert) => (
                <div
                  key={cert.name}
                  className="group flex items-start gap-3 p-4 rounded-lg border border-neutral-800 bg-neutral-900/20 hover:scale-[1.02] hover:border-sky-500/40 hover:bg-neutral-900/40 hover:shadow-[0_8px_30px_rgba(2,132,199,0.08)] transition-all"
                >
                  <BookOpen
                    size={15}
                    className="text-neutral-500 flex-shrink-0 mt-0.5 group-hover:text-sky-400 transition-colors"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-sm text-neutral-200 leading-snug">
                      {cert.name}
                    </p>
                    <p className="text-sm text-neutral-500 mt-0.5">
                      {cert.issuer} · Course completion
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-mono text-neutral-400 hover:text-sky-400 uppercase tracking-wider mb-4 transition-colors">
              Education
            </h3>
            <div className="space-y-4">
              {education.map((edu) => (
                <div
                  key={edu.degree}
                  className="group p-4 rounded-xl border border-neutral-800 bg-neutral-900/20 hover:scale-[1.02] hover:-translate-y-1 hover:border-sky-500/40 hover:shadow-[0_8px_30px_rgba(2,132,199,0.08)] transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded bg-neutral-800 border border-neutral-700 flex items-center justify-center flex-shrink-0 group-hover:bg-sky-500/15 group-hover:border-sky-500/40 transition-all">
                      <GraduationCap
                        size={15}
                        className="text-neutral-400 group-hover:text-sky-300 transition-colors"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-neutral-100 group-hover:text-sky-200 leading-snug mb-1 transition-colors">
                        {edu.degree}
                      </h4>
                      <p className="text-sm text-neutral-400">
                        {edu.institution}
                      </p>
                      <div className="flex items-center gap-3 mt-2">
                        <span className="flex items-center gap-1 text-sm font-mono text-neutral-400">
                          <Calendar size={11} aria-hidden="true" />
                          {edu.period}
                        </span>
                        <span className="text-sm font-mono text-sky-400">
                          {edu.score}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
