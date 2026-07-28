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
    title: "Assistant Manager – Procurement & Development",
    company: "RFL-DPL-Development",
    location: "Dhaka, Bangladesh",

    responsibilities: [
      "Managed end-to-end procurement of industrial automation equipment, machinery, and engineering components.",

      "Collaborated with more than 100 international suppliers across China and Taiwan to ensure reliable sourcing and timely delivery.",

      "Negotiated pricing, commercial terms, and delivery schedules to optimize procurement costs and supplier performance.",

      "Handled RFQs, quotation evaluation, supplier comparison, purchase orders, and vendor communication throughout the procurement lifecycle.",

      "Supported supply chain planning, inventory optimization, and material availability for multiple manufacturing projects.",

      "Worked with ERP-based procurement workflows, documentation, and procurement reporting.",

      "Coordinated industrial automation projects involving PLC, HMI, and RMCS solutions.",

      "Worked closely with engineering, production, finance, and warehouse teams to ensure successful project execution.",
    ],

    technologies: [
      "Strategic Sourcing",
      "Supplier Negotiation",
      "Vendor Development",
      "RFQ Management",
      "Comparative Statements",
      "Purchase Orders",
      "Supply Chain",
      "Oracle ERP",
      "Spare Parts Planning",
      "PLC",
      "HMI",
      "RMCS",
      "Industrial Automation",
      "Material Handling",
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
        value: "1+ Years",
        label: "Leadership Experience",
      },
    ],
  },

  {
    period: "Aug 2024 – May 2025",
    title: "Assistant Engineer – Procurement & Industrial Automation",
    company: "RFL-RIP-DPL-Maintenance",
    location: "Kaliganj, Gazipur, Dhaka,Bangladesh",

    responsibilities: [
      "Designed and implemented industrial automation solutions for manufacturing operations.",

      "Developed HMI interfaces and supported PLC programming, testing, and commissioning activities.",

      "Performed machine installation, troubleshooting, preventive maintenance, and system optimization.",

      "Planned and executed procurement of industrial automation components, sensors, and control systems",

      "Collaborated with production teams to improve operational efficiency and reduce machine downtime.",
    ],

    technologies: [
      "PLC",
      "HMI",
      "Raw Material Conveying System (RMCS)",
      "Spare Parts Planning & Purchase",
      "Industrial Automation",
      "Electrical Design",
      "AutoCAD",
    ],
  },

  {
    period: "Aug 2024 – Jan 2025",
    title: "Trainee Engineer – Maintenance",
    company: "RFL-RIP-DPL-Maintenance",
    location: "Kaliganj, Gazipur, Dhaka,Bangladesh",

    responsibilities: [
      "Received hands-on training in industrial automation systems, manufacturing operations, and engineering practices.",

      "Assisted senior engineers with machine commissioning, troubleshooting, and project implementation.",

      "Prepared technical documentation, reports, and engineering support materials.",
    ],

    technologies: [
      "PLC",
      "HMI",
      "Industrial Automation",
      "Electrical Maintenance",
      "Preventive Maintenance",
      "Troubleshooting",
      "AutoCAD",
    ],
  },
];