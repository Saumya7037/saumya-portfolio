export type Project = {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  technologies: string[];
  github: string;
  featured: boolean;
  architectureFlow: string[];
  highlights: string[];
  challenges: string[];
  lessons: string[];
  detailPath: string;
};

export const projects: Project[] = [
  {
    id: "inventory-management",
    number: "01",
    title: "AWS Cloud Infrastructure & DevOps — Inventory Management",
    shortTitle: "Inventory Management on AWS",
    description:
      "Containerized inventory application deployed on AWS using Terraform. Features automated EC2 provisioning, secure VPC networking, and a seamless CI/CD pipeline via GitHub Actions.",
    longDescription:
      "A production-style deployment of an inventory management application on AWS. Infrastructure is fully defined as code using Terraform — covering VPC, subnets, security groups, EC2, IAM roles, and CloudWatch alarms. The application runs in Docker containers on EC2, with GitHub Actions driving automated CI/CD on every push.",
    technologies: ["AWS", "Terraform", "EC2", "VPC", "IAM", "Docker", "PostgreSQL", "CloudWatch", "GitHub Actions"],
    github: "https://github.com/Saumya7037/inventory-management-devops",
    featured: false,
    architectureFlow: [
      "GitHub",
      "GitHub Actions",
      "Terraform",
      "AWS VPC",
      "Public Subnet",
      "EC2",
      "Docker",
      "App + PostgreSQL",
      "CloudWatch",
    ],
    highlights: [
      "Infrastructure fully provisioned as code with Terraform — VPC, subnets, security groups, IAM, EC2",
      "Containerized application deployed on EC2 using Docker Compose",
      "GitHub Actions pipeline automates build, push, and deployment on every commit",
      "CloudWatch alarms monitor CPU and memory with configurable thresholds",
      "IAM roles follow least-privilege principle for EC2 and service access",
    ],
    challenges: [
      "Designing VPC networking with correct security group rules for application and database tiers",
      "Debugging Terraform state management across multiple environments",
      "Ensuring Docker containers restart correctly on EC2 reboot via systemd",
    ],
    lessons: [
      "IaC eliminates configuration drift and makes environments reproducible by default",
      "Networking decisions (VPC design, security groups) are easier to change early than late",
      "CloudWatch alarms are valuable only when thresholds are calibrated against real baseline usage",
    ],
    detailPath: "/projects/inventory-management",
  },
  {
    id: "expense-tracker",
    number: "02",
    title: "End-to-End DevOps Automation — Expense Tracker",
    shortTitle: "Expense Tracker DevOps Pipeline",
    description:
      "End-to-end DevOps pipeline for a cloud-native expense tracker. Automates Docker image builds via GitHub Actions and manages Kubernetes cluster state autonomously with Argo CD (GitOps).",
    longDescription:
      "A complete DevOps pipeline for an expense tracker application — from source code to Kubernetes. GitHub Actions builds and publishes Docker images to Docker Hub on every commit. Argo CD watches the Kubernetes manifests repository and automatically synchronises the cluster state, providing GitOps-based continuous delivery with self-healing and drift detection.",
    technologies: ["Docker", "Kubernetes", "GitHub Actions", "Docker Hub", "Argo CD", "PostgreSQL", "Linux", "Minikube"],
    github: "https://github.com/Saumya7037/Expense-tracker-project",
    featured: false,
    architectureFlow: [
      "GitHub",
      "GitHub Actions",
      "Docker Build",
      "Docker Hub",
      "Argo CD",
      "Kubernetes / Minikube",
      "App + PostgreSQL",
    ],
    highlights: [
      "GitHub Actions CI pipeline builds and pushes Docker images to Docker Hub on every commit",
      "Argo CD continuously synchronises Kubernetes cluster to desired state in Git",
      "Kubernetes manifests include Deployments, Services, ConfigMaps, Secrets, PVCs, and Ingress",
      "GitOps workflow provides automatic self-healing and configuration drift detection",
      "Validated on Minikube with realistic multi-service configuration",
    ],
    challenges: [
      "Configuring Argo CD to correctly track manifest repository and reconcile on changes",
      "Managing Kubernetes Secrets securely without committing sensitive values to Git",
      "Debugging Persistent Volume Claim binding issues in Minikube",
    ],
    lessons: [
      "GitOps makes deployment history auditable — every change is a git commit with a clear author and reason",
      "Argo CD's self-healing removes the manual intervention loop from routine configuration drift",
      "Kubernetes resource limits must be set early — unbounded containers cause OOM in shared environments",
    ],
    detailPath: "/projects/expense-tracker",
  },
];
