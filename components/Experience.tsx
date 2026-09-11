"use client";

import { MapPin, Calendar, CircleDot } from "lucide-react";
import { experience } from "@/data/certifications";

export default function Experience() {
  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-20 border-t border-neutral-800/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <p className="font-mono text-sm text-sky-500 hover:text-sky-300 tracking-widest uppercase mb-3 transition-colors">
          Experience
        </p>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-100 mb-6 sm:mb-8">
          Professional experience
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-4 top-0 bottom-0 w-px bg-neutral-800 hidden sm:block"
            aria-hidden="true"
          />

          <div className="space-y-6 sm:space-y-8">
            {experience.map((job) => (
              <article
                key={`${job.title}-${job.period}`}
                className="sm:pl-12 relative"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-0 top-1 hidden sm:flex items-center justify-center w-8 h-8"
                  aria-hidden="true"
                >
                  <CircleDot
                    size={16}
                    className={
                      job.current ? "text-sky-400" : "text-neutral-600"
                    }
                  />
                </div>

                <div className="group p-6 rounded-xl border border-neutral-800 bg-neutral-900/30 hover:scale-[1.02] hover:-translate-y-1 hover:border-sky-500/40 hover:shadow-[0_8px_30px_rgba(2,132,199,0.12)] transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg font-semibold text-neutral-100 group-hover:text-sky-200 transition-colors">
                          {job.title}
                        </h3>
                        {job.current && (
                          <span className="px-2 py-0.5 text-sm font-mono rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/25">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-base font-medium text-sky-400">
                        {job.company}
                      </p>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1 text-sm font-mono text-neutral-400">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} aria-hidden="true" />
                        {job.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={12} aria-hidden="true" />
                        {job.location}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2" role="list">
                    {job.bullets.map((bullet, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-base text-neutral-300"
                      >
                        <span
                          className="mt-2 w-1.5 h-1.5 rounded-full bg-sky-500/60 flex-shrink-0"
                          aria-hidden="true"
                        />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
