export type SkillGroup = {
  category: string;
  primary?: boolean;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Cloud",
    primary: true,
    skills: ["AWS", "Microsoft Azure"],
  },
  {
    category: "Infrastructure as Code",
    primary: true,
    skills: ["Terraform"],
  },
  {
    category: "Containers & Orchestration",
    primary: true,
    skills: ["Docker", "Kubernetes", "Minikube"],
  },
  {
    category: "CI/CD & GitOps",
    primary: true,
    skills: ["GitHub Actions", "Argo CD", "GitOps"],
  },
  {
    category: "Monitoring & Observability",
    primary: true,
    skills: ["AWS CloudWatch", "Log Analysis", "Prometheus", "Grafana"],
  },
  {
    category: "Networking",
    skills: ["VPC", "Security Groups", "Load Balancers", "DNS", "HTTP/HTTPS", "TCP/IP"],
  },
  {
    category: "Operating Systems",
    skills: ["Linux", "Windows"],
  },
  {
    category: "Programming & Automation",
    skills: ["Python", "SQL", "Bash / Shell", "C"],
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "Postman"],
  },
];

export const primarySkills = ["AWS", "Terraform", "Docker", "Kubernetes", "GitHub Actions", "Linux", "CloudWatch"];

export const secondarySkills = [
  "Azure",
  "Argo CD",
  "GitOps",
  "Python",
  "SQL",
  "Networking",
  "Prometheus",
  "Grafana",
];
