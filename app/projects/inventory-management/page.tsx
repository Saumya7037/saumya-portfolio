import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AWS Inventory Management | Saumya Kumar",
  description:
    "Terraform-provisioned AWS infrastructure for a containerised inventory management application with Docker, EC2, VPC, IAM, and CloudWatch.",
};

const archFlow = [
  { label: "GitHub", detail: "Source repository" },
  { label: "GitHub Actions", detail: "CI/CD trigger on push" },
  { label: "Terraform", detail: "Infrastructure as Code provisioning" },
  { label: "AWS VPC", detail: "Isolated network with subnets & security groups" },
  { label: "EC2", detail: "Compute instance with IAM role" },
  { label: "Docker", detail: "Containerised application runtime" },
  { label: "App + PostgreSQL", detail: "Inventory service + database containers" },
  { label: "CloudWatch", detail: "Metrics, logs, and alarms" },
];

const infrastructure = [
  { resource: "VPC", why: "Isolated network boundary with public subnet, internet gateway, and route tables." },
  { resource: "Security Groups", why: "Least-privilege inbound rules — only required ports exposed." },
  { resource: "EC2", why: "Application host with a defined IAM role for CloudWatch access." },
  { resource: "IAM Role", why: "Instance profile granting CloudWatch PutMetricData without long-lived credentials." },
  { resource: "CloudWatch Alarms", why: "CPU and memory threshold alerts to detect resource saturation early." },
  { resource: "Elastic IP", why: "Stable public address for the deployment endpoint." },
];

export default function InventoryManagementPage() {
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
            href="https://github.com/Saumya7037/inventory-management-devops"
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
            Featured Project · 01
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-neutral-100 mb-4 leading-tight">
            AWS Cloud Infrastructure &amp; DevOps —<br />
            Inventory Management
          </h1>
          <p className="text-neutral-400 text-lg leading-relaxed mb-6 max-w-2xl">
            Terraform-provisioned AWS infrastructure for a containerised inventory management
            application, with automated EC2 setup, Docker deployment, networking, and
            CloudWatch monitoring.
          </p>
          <div className="flex flex-wrap gap-2">
            {["AWS", "Terraform", "EC2", "VPC", "IAM", "Docker", "PostgreSQL", "CloudWatch", "GitHub Actions"].map(
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
            <h2 id="overview-heading" className="text-xl font-bold text-neutral-100 mb-4 flex items-center">
              <span className="font-mono text-sky-500 mr-3">01</span>Overview
            </h2>
            <p className="text-neutral-400 leading-relaxed">
              This project provisions a production-style AWS environment entirely through Terraform, then deploys a
              containerised inventory application with a PostgreSQL database onto that infrastructure using GitHub
              Actions. The goal was to demonstrate the full path from infrastructure definition to running application
              — with monitoring in place from day one.
            </p>
          </section>

          {/* 02 Problem */}
          <section aria-labelledby="problem-heading">
            <h2 id="problem-heading" className="text-xl font-bold text-neutral-100 mb-4 flex items-center">
              <span className="font-mono text-sky-500 mr-3">02</span>Problem
            </h2>
            <p className="text-neutral-400 leading-relaxed">
              Manually provisioned cloud infrastructure is error-prone, hard to reproduce, and produces configuration
              drift over time. Application deployments that are not automated require manual SSH access and are
              inconsistent across runs. This project demonstrates how Terraform and GitHub Actions together eliminate
              both problems.
            </p>
          </section>

          {/* 03 Architecture */}
          <section aria-labelledby="arch-heading">
            <h2 id="arch-heading" className="text-xl font-bold text-neutral-100 mb-4 flex items-center">
              <span className="font-mono text-sky-500 mr-3">03</span>Architecture
            </h2>
            <div className="mt-6 p-6 rounded-xl border border-neutral-800 bg-neutral-900/30">
              <div className="flex flex-col items-start gap-0">
                {archFlow.map((node, i) => (
                  <div key={node.label} className="flex flex-col items-start w-full">
                    <div className="flex items-center gap-4">
                      <div className="w-40 px-3 py-2 rounded border border-neutral-700 bg-neutral-800/60 text-xs font-mono text-neutral-300">
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

          {/* 04 Infrastructure */}
          <section aria-labelledby="infra-heading">
            <h2 id="infra-heading" className="text-xl font-bold text-neutral-100 mb-4 flex items-center">
              <span className="font-mono text-sky-500 mr-3">04</span>Infrastructure
            </h2>
            <div className="mt-4 divide-y divide-neutral-800">
              {infrastructure.map((item) => (
                <div key={item.resource} className="py-3 grid grid-cols-[120px_1fr] gap-4">
                  <span className="text-xs font-mono text-sky-400">{item.resource}</span>
                  <span className="text-sm text-neutral-400">{item.why}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 05 Deployment */}
          <section aria-labelledby="deploy-heading">
            <h2 id="deploy-heading" className="text-xl font-bold text-neutral-100 mb-4 flex items-center">
              <span className="font-mono text-sky-500 mr-3">05</span>Deployment
            </h2>
            <p className="text-neutral-400 leading-relaxed mb-4">
              GitHub Actions triggers on every push to the main branch. The workflow authenticates to AWS, runs
              Terraform to ensure infrastructure is current, then connects to the EC2 instance to pull the latest
              Docker images and restart the application via Docker Compose.
            </p>
            <ul className="space-y-2 text-sm text-neutral-400">
              {[
                "Terraform apply verifies and reconciles infrastructure state",
                "Docker Compose pulls updated image tags and recreates containers",
                "Health check confirms the application is responding before the workflow completes",
                "Rollback: re-run with previous image tag or revert the Git commit",
              ].map((p) => (
                <li key={p} className="flex items-start gap-2">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-sky-500/60 flex-shrink-0" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
          </section>

          {/* 06 Monitoring */}
          <section aria-labelledby="monitoring-heading">
            <h2 id="monitoring-heading" className="text-xl font-bold text-neutral-100 mb-4 flex items-center">
              <span className="font-mono text-sky-500 mr-3">06</span>Reliability &amp; Monitoring
            </h2>
            <p className="text-neutral-400 leading-relaxed mb-4">
              CloudWatch monitors CPU utilisation and memory on the EC2 instance. Alarms are configured at defined
              thresholds to surface resource saturation early rather than waiting for user-visible failures.
            </p>
            <ul className="space-y-2 text-sm text-neutral-400">
              {[
                "CloudWatch agent installed via user data script on EC2 startup",
                "CPU alarm triggers at configurable threshold (default 80%)",
                "Memory alarm monitors available memory via CloudWatch agent metrics",
                "Docker containers configured with restart: unless-stopped for automatic recovery",
              ].map((p) => (
                <li key={p} className="flex items-start gap-2">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-emerald-500/60 flex-shrink-0" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
          </section>

          {/* 07 Challenges */}
          <section aria-labelledby="challenges-heading">
            <h2 id="challenges-heading" className="text-xl font-bold text-neutral-100 mb-4 flex items-center">
              <span className="font-mono text-sky-500 mr-3">07</span>Challenges
            </h2>
            <ul className="space-y-3 text-sm text-neutral-400">
              {[
                "Designing security group rules that allowed application traffic without unnecessary exposure required iterative testing with AWS VPC flow logs.",
                "Terraform state management across multiple applies required understanding state locking and remote state to prevent drift.",
                "Ensuring Docker containers restarted correctly after EC2 reboots required configuring systemd to manage Docker Compose as a service.",
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

          {/* 08 Lessons */}
          <section aria-labelledby="lessons-heading">
            <h2 id="lessons-heading" className="text-xl font-bold text-neutral-100 mb-4 flex items-center">
              <span className="font-mono text-sky-500 mr-3">08</span>What I Learned
            </h2>
            <ul className="space-y-2 text-sm text-neutral-400">
              {[
                "IaC eliminates configuration drift and makes environments reproducible by default — environment parity is free when you terraform apply from the same code.",
                "Networking decisions (VPC design, subnets, security groups) are significantly easier to revisit early than after the application is running.",
                "CloudWatch alarms are valuable only when thresholds are calibrated against real baseline usage — default values are often too loose.",
                "IAM least-privilege is easier to implement at project start than to retrofit later.",
              ].map((p, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-sky-500/60 flex-shrink-0" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
          </section>

          {/* 09 Repository */}
          <section aria-labelledby="repo-heading">
            <h2 id="repo-heading" className="text-xl font-bold text-neutral-100 mb-4 flex items-center">
              <span className="font-mono text-sky-500 mr-3">09</span>Repository
            </h2>
            <p className="text-neutral-500 text-sm mb-6">
              Full Terraform code, Docker Compose files, GitHub Actions workflow, and documentation are in the
              repository.
            </p>
            <a
              href="https://github.com/Saumya7037/inventory-management-devops"
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
