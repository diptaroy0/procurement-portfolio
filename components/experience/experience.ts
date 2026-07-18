export interface ExperienceMetric {
  value: string;
  label: string;
}

export interface Experience {
  period: string;
  title: string;
  company: string;
  location?: string;
  responsibilities: string[];
  technologies: string[];
  metrics?: ExperienceMetric[];
}

export const experiences: Experience[] = [
  {
    period: "Jun 2025 – Jun 2026",
    title: "Assistant Manager – Industrial Automation & SCM",
    company: "RFL Group (DPL Development)",
    location: "Bangladesh",
    responsibilities: [
      "Managed end-to-end procurement of industrial automation equipment, machinery, and engineering components.",
      "Collaborated with more than 100 international suppliers across China and Taiwan.",
      "Negotiated pricing, delivery schedules, and commercial terms to optimize procurement costs.",
      "Handled RFQs, quotation evaluation, supplier comparison, purchase orders, and vendor communication.",
      "Supported supply chain planning and inventory optimization for multiple manufacturing projects.",
      "Worked with Oracle ERP procurement workflows and documentation.",
      "Coordinated industrial automation projects including PLC, HMI, and SCADA solutions.",
      "Collaborated with engineering, production, finance, and warehouse teams for project execution.",
    ],
    technologies: [
      "Oracle ERP",
      "SAP S/4HANA",
      "Strategic Sourcing",
      "Supplier Negotiation",
      "Vendor Development",
      "Supply Chain",
      "PLC",
      "HMI",
      "SCADA",
      "Industrial Automation",
    ],
    metrics: [
      {
        value: "100+",
        label: "International Suppliers",
      },
      {
        value: "100+",
        label: "Equipment Procured",
      },
      {
        value: "2",
        label: "Countries Sourced",
      },
      {
        value: "1 Year+",
        label: "Leadership Experience",
      },
    ],
  },
  {
    period: "Aug 2024 – May 2025",
    title: "Assistant Engineer – Industrial Automation",
    company: "RFL Group (DPL Development)",
    location: "Bangladesh",
    responsibilities: [
      "Designed and implemented industrial automation solutions for manufacturing operations.",
      "Developed HMI interfaces and assisted with PLC programming and commissioning.",
      "Supported machine installation, testing, troubleshooting, and preventive maintenance.",
      "Worked closely with production teams to improve operational efficiency and minimize downtime.",
    ],
    technologies: [
      "PLC",
      "HMI",
      "SCADA",
      "Industrial Automation",
      "AutoCAD",
      "Electrical Design",
    ],
  },
  {
    period: "Aug 2024 – Jan 2025",
    title: "Trainee Engineer – Industrial Automation",
    company: "RFL Group (DPL Development)",
    location: "Bangladesh",
    responsibilities: [
      "Received hands-on training in industrial automation systems and manufacturing processes.",
      "Assisted senior engineers in machine commissioning and project implementation.",
      "Prepared technical documentation and supported engineering activities.",
    ],
    technologies: [
      "PLC",
      "HMI",
      "Industrial Automation",
      "Electrical Maintenance",
    ],
  },
];