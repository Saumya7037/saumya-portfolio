export type Certification = {
  name: string;
  issuer: string;
  type: "official" | "course";
  badge?: string;
};

export const certifications: Certification[] = [
  {
    name: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    type: "official",
    badge: "AZ-900",
  },
];

export const additionalLearning: Certification[] = [
  {
    name: "Foundation of Cloud IoT Edge ML",
    issuer: "NPTEL",
    type: "course",
  },
  {
    name: "Terraform for the Absolute Beginners with Labs",
    issuer: "Udemy",
    type: "course",
  },
  {
    name: "Kubernetes for the Absolute Beginners with Hands-on Labs",
    issuer: "Coursera",
    type: "course",
  },
  {
    name: "Python for Machine Learning & Data Science Masterclass",
    issuer: "Udemy",
    type: "course",
  },
  {
    name: "AWS Course Certificate",
    issuer: "Udemy",
    type: "course",
  },
];

export type Experience = {
  title: string;
  company: string;
  location: string;
  period: string;
  current: boolean;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    title: "Technical Support Engineer",
    company: "FarEye Technologies",
    location: "Noida, India",
    period: "August 2025 – Present",
    current: true,
    bullets: [
      "Troubleshoot API integrations and platform issues across live production environments, acting as the primary responder for incident escalation and rapid resolution.",
      "Diagnose complex technical issues using application logs (Kibana/ELK), SQL queries, and backend monitoring tools (Datadog/CloudWatch) to ensure minimal downtime.",
      "Collaborate with engineering teams to conduct root-cause analysis (RCA) and implement robust, preventive measures for recurrent platform issues.",
      "Maintain and improve operational efficiency by documenting incident workflows, standard operating procedures, and distributed system behaviors.",
      "Investigate backend service dependencies, network bottlenecks, and application workflow failures to accurately isolate incident scope across microservices.",
      "Utilize Linux (Ubuntu/CentOS), REST APIs, and database diagnostic techniques (PostgreSQL) daily to support highly available, large-scale systems.",
      "Foster cross-functional communication during critical incidents, ensuring stakeholders are consistently updated on resolution progress and mitigation strategies."
    ],
  },
];

export type Education = {
  degree: string;
  institution: string;
  period: string;
  score: string;
};

export const education: Education[] = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Graphic Era Hill University, Dehradun",
    period: "August 2023 – June 2025",
    score: "86.1%",
  },
  {
    degree: "Bachelor of Science (Hons), Computer Science",
    institution: "University of Delhi, Delhi",
    period: "October 2020 – July 2023",
    score: "84.19%",
  },
];
