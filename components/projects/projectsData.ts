export interface Project {
  title: string;
  company: string;
  role: string;
  objective: string;
  contributions: string[];
  technologies: string[];
  impact: string;
}

export const projects: Project[] = [
  {
    title: "Raw Material Conveying System (RMCS)",
    company: "RFL Group",
    role: "Assistant Manager – Procurement & Industrial Automation",

    objective:
      "Supported the implementation of an automated Raw Material Conveying System by coordinating procurement activities for industrial automation equipment, electrical control components, and project materials.",

    contributions: [
      "Prepared RFQs and evaluated supplier quotations",
      "Procured PLCs, HMIs, sensors, and electrical control devices",
      "Coordinated with engineering and international suppliers",
      "Managed Purchase Orders from sourcing to delivery",
      "Supported HMI development and project commissioning",
    ],

    technologies: [
      "SAP S/4HANA",
      "PLC",
      "HMI",
      "RMCS",
      "Strategic Sourcing",
      "RFQ Management",
    ],

    impact:
      "Supported the successful implementation of the RMCS project by ensuring the timely availability of critical automation components, reducing procurement delays and supporting uninterrupted manufacturing operations.",
  },

  {
    title: "Material Handling Equipment Procurement",
    company: "RFL Group",
    role: "Assistant Manager – Procurement",

    objective:
      "Managed procurement activities for forklifts, reach trucks, pallet stackers, and warehouse equipment to support factory expansion and improve material handling efficiency.",

    contributions: [
      "Conducted international supplier sourcing",
      "Performed technical and commercial quotation analysis",
      "Negotiated pricing, delivery schedules, and commercial terms",
      "Prepared Purchase Orders and procurement documentation",
      "Tracked shipments and coordinated on-time deliveries",
    ],

    technologies: [
      "International Procurement",
      "Supplier Management",
      "Purchase Order Management",
      "Commercial Negotiation",
      "Inventory Planning",
      "Logistics Coordination",
    ],

    impact:
      "Successfully supported the procurement of more than 100 material handling equipment units while maintaining cost-effective sourcing and timely project execution.",
  },

  {
    title: "Industrial Automation Components Procurement",
    company: "RFL Group",
    role: "Assistant Manager – Procurement",

    objective:
      "Managed sourcing activities for industrial automation components used in manufacturing projects while ensuring quality, technical compliance, and delivery performance.",

    contributions: [
      "Identified and qualified automation equipment suppliers",
      "Performed technical and commercial supplier evaluations",
      "Negotiated pricing and lead times",
      "Managed procurement documentation and supplier follow-up",
      "Coordinated deliveries with engineering teams",
    ],

    technologies: [
      "Supplier Evaluation",
      "PLC",
      "HMI",
      "Sensors",
      "SCADA",
      "Cost Analysis",
    ],

    impact:
      "Maintained the continuous supply of critical automation components, supporting manufacturing projects and minimizing procurement-related delays.",
  },

  {
    title: "ECG Signal Analysis Using MATLAB",
    company: "HSTU",
    role: "Undergraduate Research Project",

    objective:
      "Developed an ECG signal processing system capable of detecting P, QRS, and T peaks using MATLAB for biomedical signal analysis.",

    contributions: [
      "Designed signal processing algorithms",
      "Implemented ECG peak detection using MATLAB",
      "Processed and analyzed biomedical datasets",
      "Validated detection accuracy",
      "Prepared technical documentation and thesis",
    ],

    technologies: [
      "MATLAB",
      "Digital Signal Processing",
      "Biomedical Engineering",
      "Signal Analysis",
      "Research",
    ],

    impact:
      "Successfully completed an undergraduate engineering research project demonstrating practical application of digital signal processing techniques for ECG analysis.",
  },
];