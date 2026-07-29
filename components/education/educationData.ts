import type { LucideIcon } from "lucide-react";
import {
  Award,
  BookOpen,
  Cpu,
  GraduationCap,
  School,
} from "lucide-react";

export interface EducationItem {
  icon: LucideIcon;
  title: string;
  organization: string;
  period: string;
  description: string;
}

export interface CertificationItem {
  icon: LucideIcon;
  title: string;
  status: "Learning" | "Professional Experience";
  skills: string[];
}

export const education: EducationItem[] = [
  {
    icon: GraduationCap,
    title: "Professional MBA",
    organization:
      "Bangladesh University of Professionals (BUP)",
    period: "2026 – Present",

    description:
      "Currently pursuing a Professional MBA with specialization in Supply Chain Management. The program focuses on strategic procurement, logistics, operations management, business analytics, leadership, and decision making.",
  },

  {
    icon: Cpu,
    title: "Bachelor of Science (B.Sc.) in Electrical & Electronic Engineering",
    organization:
      "Hajee Mohammad Danesh Science & Technology University",

    period: "2019 – 2023",

    description:
      "Developed strong engineering knowledge in industrial automation, electrical systems, control engineering, power electronics, PLC, instrumentation, and problem solving. Completed undergraduate thesis titled 'P-QRS-T Peak Detection of ECG Signal using MATLAB 2017a'.",
  },

  {
    icon: BookOpen,
    title: "Higher Secondary Certificate (Science)",

    organization:
      "Ranisankail Government College, Thakurgaon",

    period: "2016 – 2018",

    description:
      "Built a strong academic foundation in Physics, Chemistry, Higher Mathematics, and Information Technology before pursuing engineering studies.",
  },

  {
    icon: School,
    title: "Secondary School Certificate (Science)",

    organization:
      "Ranisankail Pilot Boys High School, Thakurgaon",

    period: "2014 – 2016",

    description:
      "Completed secondary education with a science background, developing analytical thinking and problem-solving skills that later supported engineering education.",
  },
];

export const certifications: CertificationItem[] = [
  {
    icon: Award,
    title: "SAP S/4HANA Procurement",

    status: "Learning",

    skills: [
      "SAP",
      "Procurement",
      "Purchase Order",
      "RFQ",
      "Supplier Management",
    ],
  },

  {
    icon: BookOpen,
    title: "Advanced Microsoft Excel",

    status: "Learning",

    skills: [
      "Power Query",
      "Pivot Table",
      "XLOOKUP",
      "Dashboard",
      "Data Analysis",
    ],
  },

  {
    icon: Award,
    title: "PLC & Industrial Automation",

    status: "Professional Experience",

    skills: [
      "PLC",
      "HMI",
      "SCADA",
      "Industrial Automation",
      "Control Systems",
    ],
  },

  {
    icon: Award,
    title: "Strategic Procurement & Sourcing",

    status: "Professional Experience",

    skills: [
      "Negotiation",
      "Strategic Sourcing",
      "Vendor Management",
      "Cost Optimization",
      "International Procurement",
    ],
  },
];