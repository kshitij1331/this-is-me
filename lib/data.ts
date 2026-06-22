export interface NavItem {
  label: string;
  href: string;
}

export interface Highlight {
  quote: string;
  metric: string;
}

export interface SkillGroup {
  id: string;
  title: string;
  description: string;
  items: string[];
}

export interface Project {
  id: string;
  title: string;
  tech: string;
  description: string;
  bullets: string[];
  githubUrl: string;
  featured?: boolean;
}

export interface ExperienceRole {
  id: string;
  company: string;
  location: string;
  title: string;
  period: string;
  bullets: string[];
}

export interface Certification {
  name: string;
  issuer: string;
}

export const personal = {
  name: "KSHITIJ CHOUBEY",
  shortName: "Kshitij",
  brand: "KC DevOps",
  title: "DevOps & Automation Engineer",
  location: "Mumbai, Maharashtra, India",
  phone: "+91 9579368564",
  email: "kshitij.choubey@outlook.com",
  summary:
    "DevOps and Automation Engineer with 4.9 years of experience automating, scaling, and securing enterprise hybrid cloud and Linux infrastructure across Azure and AWS environments. Proven track record of replacing manual infrastructure with robust, scalable Infrastructure as Code (IaC) and automated GitOps workflows. Expert in modern containerization, system hardening, rapid provisioning, and proactive production observability.",
  linkedin: "https://www.linkedin.com/in/kshitij-choubey-9a74a4124/",
  github: "https://github.com/kshitij1331",
  profileImage: "/my-image.png",
};

export const tags = [
  "#DEVOPS",
  "#AUTOMATION",
  "#CLOUD_COMPUTING",
  "#GITOPS",
];

export const navItems: NavItem[] = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "SERVICES", href: "#services" },
  { label: "PROJECTS", href: "#projects" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "CONTACT", href: "#contact" },
];

export const highlights: Highlight[] = [
  {
    metric: "80% reduction",
    quote:
      "Engineered Python and Bash hardening scripts across 200+ RHEL/Ubuntu nodes, achieving 100% CIS Benchmark compliance and cutting audit prep overhead by 80%.",
  },
  {
    metric: "45% faster detection",
    quote:
      "Deployed Prometheus and Grafana dashboards alongside Azure Monitor, dropping Mean Time to Detection of critical server faults by 45%.",
  },
  {
    metric: "18% cost savings",
    quote:
      "Optimized AWS EC2 and S3 resource allocation at HotelKey, systematically reducing monthly cloud spend by 18% while maintaining performance.",
  },
];

export const techStack = [
  "Azure",
  "AWS",
  "Kubernetes",
  "Docker",
  "Terraform",
  "Ansible",
  "ArgoCD",
  "Helm",
  "Prometheus",
  "Grafana",
  "Jenkins",
  "GitLab CI/CD",
  "Azure Pipelines",
  "Python",
  "RHEL",
];

export const skillGroups: SkillGroup[] = [
  {
    id: "cloud",
    title: "Cloud & Hybrid Infrastructure",
    description:
      "Enterprise hybrid cloud management across Azure and AWS with on-prem integration and Azure Stack HCI.",
    items: [
      "Azure (VMs, Azure Monitor, Azure Stack HCI)",
      "AWS (EC2, S3, IAM, CloudWatch)",
      "Hybrid cluster provisioning and maintenance",
      "Resource optimization and cost management",
    ],
  },
  {
    id: "containers",
    title: "Containerization & GitOps",
    description:
      "Highly available container workloads with Git-based deployment pipelines and validation gates.",
    items: [
      "Docker & Kubernetes (K8s)",
      "OpenShift orchestration",
      "Helm chart management",
      "ArgoCD GitOps workflows",
    ],
  },
  {
    id: "iac",
    title: "Infrastructure as Code",
    description:
      "Modular, reusable IaC modules for consistent hybrid environment provisioning under 30 minutes.",
    items: [
      "Terraform core modules",
      "Ansible automation playbooks",
      "VPC/VNet hybrid connectivity",
      "Zero-friction cross-cloud delivery",
    ],
  },
  {
    id: "cicd",
    title: "CI/CD & Version Control",
    description:
      "Streamlined production pipelines with integrated validation gates and artifact management.",
    items: [
      "Azure Pipelines & Azure DevOps",
      "Jenkins & GitLab CI/CD",
      "Git & GitHub workflows",
      "Artifactory artifact management",
    ],
  },
  {
    id: "monitoring",
    title: "Monitoring & Observability",
    description:
      "Proactive monitoring eliminating reactive operations with real-time dashboards and alerting.",
    items: [
      "Prometheus & Grafana",
      "Datadog integration",
      "Azure Monitor & AWS CloudWatch",
      "Custom Python/Bash monitoring scripts",
    ],
  },
  {
    id: "os",
    title: "OS & Scripting",
    description:
      "Linux system administration, hardening, and automation across enterprise-scale node fleets.",
    items: [
      "Red Hat Enterprise Linux (RHEL)",
      "Ubuntu server administration",
      "Shell Scripting (Bash)",
      "Python development & MySQL",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "cis-checker",
    title: "Automated CIS Compliance Checker",
    tech: "Python, Bash, Linux Security",
    description:
      "A lightweight scanning framework that audits OS internals against CIS baselines and reports real-time scores via HTML.",
    bullets: [
      "Audits OS internals against CIS baselines",
      "Real-time compliance scores via HTML reports",
      "Reduced manual audit overhead to zero",
      "Eliminated configuration drift across nodes",
    ],
    githubUrl: "https://github.com/kshitij1331",
    featured: true,
  },
  {
    id: "hybrid-cloud",
    title: "Hybrid Cloud Automation Platform",
    tech: "Terraform, Kubernetes, GitOps",
    description:
      "Reusable Terraform core modules anchoring hybrid connections across on-prem, Azure Stack HCI, and cloud environments.",
    bullets: [
      "VPCs, Subnets, and Azure VNet integration",
      "On-prem to Azure Stack HCI connectivity",
      "Google Cloud environment standardization",
      "Zero-friction workload cross-delivery",
    ],
    githubUrl: "https://github.com/kshitij1331",
    featured: false,
  },
];

export const experience: ExperienceRole[] = [
  {
    id: "quess-jio",
    company: "Quess Corp (Contracted to Reliance Jio)",
    location: "Mumbai, MH (Remote/Hybrid)",
    title: "DevOps and Automation Engineer",
    period: "March 2024 – Present",
    bullets: [
      "Orchestrated highly available container workloads using Kubernetes and OpenShift with Git-based Azure DevOps validation gates.",
      "Engineered Python and Bash hardening scripts across 200+ RHEL/Ubuntu nodes, ensuring 100% CIS Benchmark compliance.",
      "Deployed Prometheus and Grafana dashboards alongside Azure Monitor, reducing MTTD of critical faults by 45%.",
      "Utilized Ansible and modular automation to provision hybrid cluster environments in under 30 minutes.",
    ],
  },
  {
    id: "hotelkey",
    company: "HotelKey",
    location: "Nagpur, MH",
    title: "Product Analyst (Cloud Operations)",
    period: "July 2023 – February 2024",
    bullets: [
      "Architected custom Python and Bash monitoring scripts saving 10+ hours of manual troubleshooting weekly.",
      "Managed and scaled AWS infrastructure (EC2, S3), reducing monthly cloud spend by 18%.",
      "Engineered AWS CloudWatch metrics and alerts for node health, memory, and process uptimes.",
      "Standardized AWS IAM access control with strict least-privilege enforcement across multi-tier environments.",
    ],
  },
  {
    id: "unisoft",
    company: "UniSoft Technologies",
    location: "Nagpur, MH",
    title: "Linux & SQL Technical Trainer",
    period: "June 2021 – June 2023",
    bullets: [
      "Maintained internal Linux training infrastructure with 99.9% uptime for 500+ professionals.",
      "Developed sandbox curriculum for Linux Troubleshooting, Shell Scripting, and AWS fundamentals.",
      "Optimized Oracle and MySQL database environments with automated recovery scripts.",
      "Accelerated student lab completion speeds by 35% through hands-on curriculum design.",
    ],
  },
];

export const certifications: Certification[] = [
  { name: "Red Hat Certified Engineer (RHCE)", issuer: "Red Hat" },
  { name: "Red Hat Certified System Administrator (RHCSA)", issuer: "Red Hat" },
  { name: "Fundamental of Ansible", issuer: "Red Hat" },
  {
    name: "Oracle Database 12c Administration Certified Associate",
    issuer: "Oracle",
  },
];

export const education = {
  degree: "Bachelor of Technology (B.Tech) in Information Technology",
  period: "2017 – 2021",
  university: "Dr. Babasaheb Ambedkar Technological University, Lonere",
  cgpa: "8.4 / 10",
};
