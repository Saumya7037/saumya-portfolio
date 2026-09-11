import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Expense Tracker DevOps | Saumya Kumar",
  description:
    "End-to-end DevOps automation for an expense tracker: Docker, GitHub Actions, Kubernetes, and Argo CD GitOps pipeline.",
};

const archFlow = [
  { label: "GitHub", detail: "Source of truth for code and manifests" },
  { label: "GitHub Actions", detail: "CI — build, test, push on every commit" },
  { label: "Docker Build", detail: "Multi-stage Dockerfile produces lean image" },
  { label: "Docker Hub", detail: "Image registry — versioned tags on each push" },
  { label: "Argo CD", detail: "GitOps operator — watches manifest repo" },
  { label: "Kubernetes / Minikube", detail: "Container orchestration" },
  { label: "App + PostgreSQL", detail: "Expense tracker with persistent database" },
];

const k8sResources = [
  { resource: "Deployment", detail: "Application Pod spec with resource limits and rolling update strategy" },
  { resource: "Service", detail: "ClusterIP for internal routing; LoadBalancer/NodePort for ingress" },
  { resource: "ConfigMap", detail: "Non-sensitive configuration mounted as environment variables" },
  { resource: "Secret", detail: "Database credentials — not committed to Git" },
  { resource: "PersistentVolumeClaim", detail: "PostgreSQL data volume survives Pod restarts" },
  { resource: "Ingress", detail: "HTTP routing rules to service endpoints" },
];

export default function ExpenseTrackerPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Back nav */}
      <nav className="sticky top-0 z-40 bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-300 transition-colors"
          >
            <ArrowLeft size={14} aria-hidden="true" />
            Back to Portfolio
          </Link>
          <a
            href="https://github.com/Saumya7037/Expense-tracker-project"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-sky-400 hover:text-sky-300 transition-colors"
          >
            <GithubIcon size={14} aria-hidden="true" />
            Repository
            <ExternalLink size={12} aria-hidden="true" />
          </a>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        {/* Header */}
        <header className="mb-16">
          <p className="font-mono text-xs text-sky-500 uppercase tracking-widest mb-3">
            Project · 02
          </p>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-100 mb-4 leading-tight">
            End-to-End DevOps Automation —<br />
            Expense Tracker
          </h1>
          <p className="text-neutral-400 text-base sm:text-lg leading-relaxed mb-6 max-w-2xl">
            Containerised application deployed through GitHub Actions and GitOps using Docker,
            Kubernetes, and Argo CD.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Docker", "Kubernetes", "GitHub Actions", "Docker Hub", "Argo CD", "PostgreSQL", "Linux", "Minikube"].map(
              (t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 text-xs rounded bg-neutral-800 text-neutral-400 border border-neutral-700/50 font-mono"
                >
                  {t}
                </span>
              )
            )}
          </div>
        </header>

        <div className="space-y-16">
          {/* 01 Overview */}
          <section aria-labelledby="overview-heading">
            <h2 id="overview-heading" className="flex items-center text-xl font-bold text-neutral-100 mb-4">
              <span className="font-mono text-sky-500 mr-3">01</span>Overview
            </h2>
            <p className="text-neutral-400 leading-relaxed">
              This project implements a complete DevOps delivery pipeline for an expense tracking application. The
              pipeline runs from a git push all the way to a synchronised Kubernetes cluster, with Argo CD managing
              the final GitOps delivery step. The goal was to demonstrate CI/CD, container delivery, and GitOps
              together in a single coherent workflow.
            </p>
          </section>

          {/* 02 Problem */}
          <section aria-labelledby="problem-heading">
            <h2 id="problem-heading" className="flex items-center text-xl font-bold text-neutral-100 mb-4">
              <span className="font-mono text-sky-500 mr-3">02</span>Problem
            </h2>
            <p className="text-neutral-400 leading-relaxed">
              Applications deployed by manually applying Kubernetes manifests are fragile — the cluster state can
              drift from the desired state without detection, and rollbacks require manual intervention. GitOps with
              Argo CD treats the Git repository as the single source of truth: the cluster continuously reconciles to
              match, providing free audit history, self-healing, and drift detection.
            </p>
          </section>

          {/* 03 Architecture */}
          <section aria-labelledby="arch-heading">
            <h2 id="arch-heading" className="flex items-center text-xl font-bold text-neutral-100 mb-4">
              <span className="font-mono text-sky-500 mr-3">03</span>Architecture
            </h2>
            <div className="mt-2 p-6 rounded-xl border border-neutral-800 bg-neutral-900/30">
              <div className="flex flex-col items-start gap-0">
                {archFlow.map((node, i) => (
                  <div key={node.label} className="flex flex-col items-start w-full">
                    <div className="flex items-center gap-4">
                      <div className="w-44 px-3 py-2 rounded border border-neutral-700 bg-neutral-800/60 text-xs font-mono text-neutral-300">
                        {node.label}
                      </div>
                      <p className="text-xs text-neutral-600">{node.detail}</p>
                    </div>
                    {i < archFlow.length - 1 && (
                      <div className="flex items-center ml-5 my-1" aria-hidden="true">
                        <div className="w-px h-4 bg-neutral-700" />
                        <div className="ml-px w-0 h-0 border-l-[3px] border-r-[3px] border-t-[4px] border-l-transparent border-r-transparent border-t-neutral-600" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 04 Kubernetes resources */}
          <section aria-labelledby="k8s-heading">
            <h2 id="k8s-heading" className="flex items-center text-xl font-bold text-neutral-100 mb-4">
              <span className="font-mono text-sky-500 mr-3">04</span>Kubernetes Resources
            </h2>
            <div className="divide-y divide-neutral-800">
              {k8sResources.map((item) => (
                <div key={item.resource} className="py-3 grid grid-cols-[130px_1fr] gap-4">
                  <span className="text-xs font-mono text-sky-400">{item.resource}</span>
                  <span className="text-sm text-neutral-400">{item.detail}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 05 GitOps with Argo CD */}
          <section aria-labelledby="gitops-heading">
            <h2 id="gitops-heading" className="flex items-center text-xl font-bold text-neutral-100 mb-4">
              <span className="font-mono text-sky-500 mr-3">05</span>GitOps with Argo CD
            </h2>
            <p className="text-neutral-400 leading-relaxed mb-4">
              Argo CD is deployed into the Kubernetes cluster and configured to watch the manifest repository. Every
              change to a Kubernetes manifest — including image tag updates written by the CI pipeline — triggers
              automatic synchronisation.
            </p>
            <ul className="space-y-2 text-sm text-neutral-400">
              {[
                "Automatic sync reconciles the cluster to the Git-defined desired state within seconds of a manifest change",
                "Self-healing: if a resource is manually modified or deleted in the cluster, Argo CD restores it to match Git",
                "Configuration drift detection surfaces any divergence between cluster and repository state",
                "Rollback is a git revert — no kubectl imperative commands needed",
              ].map((p, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-sky-500/60 flex-shrink-0" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
          </section>

          {/* 06 Challenges */}
          <section aria-labelledby="challenges-heading">
            <h2 id="challenges-heading" className="flex items-center text-xl font-bold text-neutral-100 mb-4">
              <span className="font-mono text-sky-500 mr-3">06</span>Challenges
            </h2>
            <ul className="space-y-3 text-sm text-neutral-400">
              {[
                "Configuring Argo CD to correctly track the manifest repository and reconcile on image tag changes — required understanding Application CRD and sync policies.",
                "Managing Kubernetes Secrets without committing sensitive values to Git — solved by separating secret values from manifests and injecting via local sealed secrets.",
                "Debugging Persistent Volume Claim binding issues in Minikube — StorageClass mismatch required explicitly setting the default StorageClass.",
              ].map((p, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="font-mono text-xs text-sky-600 mt-0.5 flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </section>

          {/* 07 Lessons */}
          <section aria-labelledby="lessons-heading">
            <h2 id="lessons-heading" className="flex items-center text-xl font-bold text-neutral-100 mb-4">
              <span className="font-mono text-sky-500 mr-3">07</span>What I Learned
            </h2>
            <ul className="space-y-2 text-sm text-neutral-400">
              {[
                "GitOps makes deployment history auditable — every change is a git commit with a clear author, timestamp, and reason.",
                "Argo CD's self-healing removes the manual intervention loop from routine configuration drift, which directly addresses the toil problem in SRE.",
                "Kubernetes resource limits must be set explicitly — unbounded containers cause OOM issues in shared cluster environments.",
                "Separating application code from deployment manifests into distinct repositories enables independent change velocity for each team.",
              ].map((p, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-sky-500/60 flex-shrink-0" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
          </section>

          {/* 08 Repository */}
          <section aria-labelledby="repo-heading">
            <h2 id="repo-heading" className="flex items-center text-xl font-bold text-neutral-100 mb-4">
              <span className="font-mono text-sky-500 mr-3">08</span>Repository
            </h2>
            <p className="text-neutral-500 text-sm mb-6">
              Full Dockerfile, Kubernetes manifests, GitHub Actions workflow, and Argo CD Application configuration
              are in the repository.
            </p>
            <a
              href="https://github.com/Saumya7037/Expense-tracker-project"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-sky-500 hover:bg-sky-400 text-neutral-950 font-semibold rounded text-sm transition-all"
            >
              <GithubIcon size={16} aria-hidden="true" />
              View on GitHub
              <ExternalLink size={14} aria-hidden="true" />
            </a>
          </section>
        </div>
      </main>
    </div>
  );
}
