import type { LucideIcon } from "lucide-react";
import {
  GraduationCap,
  BookOpen,
  Award,
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
  status: string;
}

export const education: EducationItem[] = [
  {
    icon: GraduationCap,
    title: "Professional MBA (Supply Chain Management)",
    organization: "Bangladesh University of Professionals (BUP)",
    period: "2026 – Present",
    description:
      "Pursuing advanced knowledge in supply chain management, strategic procurement, logistics, operations management, and business leadership.",
  },
  {
    icon: GraduationCap,
    title: "B.Sc. in Electrical & Electronic Engineering",
    organization: "Hajee Mohammad Danesh Science & Technology University",
    period: "Completed", 
    description:
      "Built a strong engineering foundation in industrial automation, electrical systems, control engineering, and analytical problem solving.",
  },

  {
    icon: GraduationCap,
    title: "HSC(Higher Secondary Certificate) in Science",
    organization: "Ranisankail College, Thakurgaon",
    period: "Completed",
    description: "Built a solid foundation in physics, chemistry, and mathematics, preparing for advanced studies in engineering and technology.",
  },

{
    icon: GraduationCap,
    title: "SSC(Secondary School Certificate) in Science",
    organization: "Ranisankail Pilot Boys High School, Thakurgaon",
    period: "Completed",
    description: "Developed a strong understanding of scientific principles and analytical skills, laying the groundwork for further academic pursuits."
  },

];

export const certifications: CertificationItem[] = [
  {
    icon: Award,
    title: "SAP S/4HANA Procurement",
    status: "Learning",
  },
  {
    icon: BookOpen,
    title: "Advanced Microsoft Excel",
    status: "Learning",
  },
  {
    icon: Award,
    title: "PLC & Industrial Automation",
    status: "Professional Experience",
  },
];