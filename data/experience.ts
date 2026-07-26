export interface ExperienceMetric {
  value: string;
  label: string;
}

export interface Experience {
  period: string;
  title: string;
  company: string;
  location?: string;

  metrics?: ExperienceMetric[];

  responsibilities: string[];

  technologies: string[];
}

export const experience: Experience[] = [
  {
    period: "Jan 2025 – Jun 2026",

    title: "Assistant Manager",

    company: "RFL-DPL-Development",

    location: "Dhaka, Bangladesh",

    metrics: [
      {
        value: "100+",
        label: "International Suppliers",
      },
      {
        value: "126",
        label: "Procurement Orders",
      },
      {
        value: "USD 3M+",
        label: "Procurement Value",
      },
      {
        value: "USD 361K",
        label: "Cost Savings",
      },
    ],

    responsibilities: [
      "Managed international sourcing and supplier negotiations.",
      "Procured industrial machinery and material handling equipment.",
      "Led procurement planning with cross-functional engineering teams.",
      "Managed Oracle ERP procurement workflow.",
      "Supported automation and RMCS development projects.",
    ],

    technologies: [
      "Oracle ERP",
      "SAP S/4HANA",
      "Strategic Sourcing",
      "Procurement",
      "Vendor Management",
      "PLC",
    ],
  },

  {
    period: "Aug 2024 – Jan 2025",

    title: "Assistant Engineer",

    company: "RFL-RIP-DPL-Maintenance",

    location: "Kaliganj, Gazipur,Dhaka, Bangladesh",

    metrics: [
      {
        value: "24/7",
        label: "Production Support",
      },
      {
        value: "PLC",
        label: "Troubleshooting",
      },
    ],

    responsibilities: [
      "Preventive maintenance of production machinery.",
      "PLC troubleshooting and industrial automation support.",
      "Production downtime analysis.",
    ],

    technologies: [
      "PLC",
      "Electrical",
      "Automation",
      "Maintenance",
    ],
  },

  {
    period: "Aug 2024",

    title: "Trainee Engineer",

    company: "RFL-RIP-DPL-Maintenance",
    
    location: "Kaliganj, Gazipur,Dhaka, Bangladesh", 

    responsibilities: [
      "Industrial production support.",
      "Machine troubleshooting.",
      "Maintenance activities.",
    ],

    technologies: [
      "Electrical",
      "PLC",
      "Automation",
    ],
  },

  {
    period: "2023",

    title: "Junior Instructor",

    company: "Gobeshona Learning Academy",

    responsibilities: [
      "Conducted PLC & HMI training.",
      "Prepared automation course materials.",
      "Mentored engineering students.",
    ],

    technologies: [
      "PLC",
      "HMI",
      "SCADA",
      "Teaching",
    ],
  },
];