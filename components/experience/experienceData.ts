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
      "Managed end-to-end procurement of industrial automation equipment, machinery, spare parts, and engineering components.",

      "Collaborated with more than 100 international suppliers across China and Taiwan to ensure reliable sourcing, competitive pricing, and on-time delivery.",

      "Led supplier negotiations for pricing, payment terms, lead times, and commercial agreements to optimize procurement performance.",

      "Managed RFQs, supplier evaluation, comparative statements, purchase orders, and vendor communications throughout the procurement lifecycle.",

      "Coordinated closely with engineering, production, finance, warehouse, and logistics teams to ensure uninterrupted material availability.",

      "Supported inventory planning, procurement reporting, and ERP-based purchasing workflows for multiple manufacturing projects.",

      "Procured material handling equipment including forklifts, reach trucks, pallet stackers, and industrial automation systems.",

      "Supported RMCS (Raw Material Conveying System) projects involving PLC, HMI, electrical control systems, and industrial automation."
    ],

    technologies: [
      "Strategic Sourcing",
      "Supplier Negotiation",
      "Vendor Development",
      "International Procurement",
      "RFQ Management",
      "Comparative Statements",
      "Purchase Orders",
      "ERP Procurement",
      "Supply Chain Management",
      "Inventory Planning",
      "Material Handling Equipment",
      "PLC",
      "HMI",
      "RMCS",
      "Industrial Automation"
    ],

    metrics: [
      {
        value: "100+",
        label: "Global Suppliers",
      },
      {
        value: "100+",
        label: "Equipment Procured",
      },
      {
        value: "2",
        label: "Sourcing Countries",
      },
      {
        value: "1+",
        label: "Years in Leadership",
      },
    ],
  },

  {
    period: "Jan 2025 – May 2025",

    title: "Assistant Engineer – Procurement & Industrial Automation",

    company: "RFL-RIP-DPL-Maintenance",

    location: "Kaliganj, Gazipur, Bangladesh",

    responsibilities: [
      "Designed and implemented industrial automation solutions for manufacturing operations.",

      "Developed HMI applications and supported PLC programming, testing, commissioning, and troubleshooting.",

      "Executed preventive maintenance, machine installation, and production support activities to improve equipment reliability.",

      "Planned and procured automation components, sensors, electrical devices, and maintenance spare parts.",

      "Worked closely with production teams to minimize machine downtime and improve operational efficiency.",

      "Prepared technical documentation, engineering reports, and project support materials."
    ],

    technologies: [
      "PLC",
      "HMI",
      "Industrial Automation",
      "RMCS",
      "Electrical Maintenance",
      "Spare Parts Planning",
      "Procurement",
      "AutoCAD",
      "Machine Commissioning"
    ],
  },

  {
    period: "Aug 2024 – Jan 2025",

    title: "Trainee Engineer – Maintenance",

    company: "RFL-RIP-DPL-Maintenance",

    location: "Kaliganj, Gazipur, Bangladesh",

    responsibilities: [
      "Received hands-on training in industrial automation systems, manufacturing processes, and engineering best practices.",

      "Assisted senior engineers with PLC systems, HMI configuration, machine commissioning, and troubleshooting.",

      "Participated in preventive maintenance schedules for production machinery and electrical systems.",

      "Prepared technical reports, maintenance records, and engineering documentation.",

      "Developed practical knowledge of industrial safety, machine operations, and automation technologies."
    ],

    technologies: [
      "PLC",
      "HMI",
      "Industrial Automation",
      "Electrical Maintenance",
      "Preventive Maintenance",
      "Machine Troubleshooting",
      "AutoCAD"
    ],
  },
];