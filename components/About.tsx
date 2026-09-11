"use client";

import { Cloud, Terminal, Shield, Package } from "lucide-react";
import { profile } from "@/data/profile";

const focusAreas = [
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description:
      "AWS infrastructure using Terraform, networking, IAM, EC2, and monitoring. Reproducible environments defined as code.",
  },
  {
    icon: Terminal,
    title: "Automation",
    description:
      "Infrastructure as Code, CI/CD pipelines, containerised deployments, and repeatable environments that eliminate manual steps.",
  },
  {
    icon: Shield,
    title: "Reliability",
    description:
      "Production troubleshooting, incident analysis, application logs, monitoring, and systematic root-cause investigation.",
  },
  {
    icon: Package,
    title: "Containers & Delivery",
    description:
      "Docker, Kubernetes, GitHub Actions, and GitOps workflows for consistent, auditable application delivery.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-28 border-t border-neutral-800/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section label */}
        <p className="font-mono text-sm text-sky-500 hover:text-sky-300 tracking-widest uppercase mb-3 transition-colors">
          About
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="text-4xl font-bold text-neutral-100 mb-6">
              Production-aware engineering,
              <br />
              <span className="text-sky-400">cloud-focused career.</span>
            </h2>
            <div className="space-y-4">
              {profile.about.map((para, i) => (
                <p key={i} className="text-base text-neutral-400 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div className="flex flex-col justify-center">
            <div className="grid grid-cols-2 gap-6">
              {profile.highlights.map((h) => (
                <div
                  key={h.label}
                  className="group p-4 rounded-lg border border-neutral-800 bg-neutral-900/40 hover:scale-[1.03] hover:-translate-y-1 hover:border-sky-500/40 hover:shadow-[0_8px_30px_rgba(2,132,199,0.12)] transition-all"
                >
                  <p className="text-sm font-mono text-neutral-400 group-hover:text-sky-400 mb-1 transition-colors">
                    {h.label}
                  </p>
                  <p className="text-base font-medium text-neutral-100 group-hover:text-sky-200 transition-colors">
                    {h.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Engineering focus cards */}
        <div>
          <h3 className="text-lg font-semibold text-neutral-200 mb-6">
            What I build
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {focusAreas.map((area) => {
              const Icon = area.icon;
              return (
                <div
                  key={area.title}
                  className="group p-5 rounded-lg border border-neutral-800 bg-neutral-900/30 hover:scale-[1.03] hover:-translate-y-1 hover:border-sky-500/40 hover:shadow-[0_8px_30px_rgba(2,132,199,0.12)] transition-all"
                >
                  <div className="w-9 h-9 rounded-md bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mb-4 group-hover:bg-sky-500/20 group-hover:border-sky-500/40 transition-all">
                    <Icon size={18} className="text-sky-400 group-hover:text-sky-300 group-hover:scale-110 transition-all" aria-hidden="true" />
                  </div>
                  <h4 className="text-base font-semibold text-neutral-100 group-hover:text-sky-200 mb-2 transition-colors">
                    {area.title}
                  </h4>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {area.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
