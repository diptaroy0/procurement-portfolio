export interface CaseStudy {
  title: string;
  company: string;
  challenge: string;
  responsibilities: string[];
  technologies: string[];
  result: string;
}

export const caseStudies: CaseStudy[] = [
  {
    title: "Industrial Automation Components Procurement",
    company: "RFL Group",

    challenge:
      "Supported industrial automation projects by sourcing PLCs, HMIs, sensors, electrical control components, and automation equipment while meeting project schedules, technical specifications, and quality requirements.",

    responsibilities: [
      "Prepared and evaluated RFQs and supplier quotations",
      "Performed technical and commercial supplier evaluations",
      "Negotiated pricing, lead time, and commercial terms",
      "Managed Purchase Orders throughout the procurement lifecycle",
      "Coordinated deliveries with engineering and project teams",
    ],

    technologies: [
      "SAP S/4HANA",
      "Strategic Sourcing",
      "RFQ Management",
      "PLC",
      "HMI",
      "Supplier Evaluation",
    ],

    result:
      "Ensured the timely procurement of critical automation components, supporting uninterrupted project execution and reliable manufacturing operations.",
  },

  {
    title: "Material Handling Equipment Procurement",
    company: "RFL Group",

    challenge:
      "Managed the procurement of forklifts, reach trucks, pallet stackers, and warehouse equipment to support factory expansion and improve material handling efficiency.",

    responsibilities: [
      "Communicated with international suppliers",
      "Compared technical and commercial quotations",
      "Negotiated pricing and delivery schedules",
      "Prepared Purchase Orders and procurement documentation",
      "Tracked shipments and coordinated on-time delivery",
    ],

    technologies: [
      "International Procurement",
      "Supplier Management",
      "Purchase Order Management",
      "Commercial Negotiation",
      "Inventory Planning",
    ],

    result:
      "Supported the successful procurement of more than 100 material handling equipment units while maintaining cost-effective sourcing and on-time project delivery.",
  },

  {
    title: "International Supplier Network Development",
    company: "China & Taiwan Supplier Network",

    challenge:
      "Expanded and maintained a reliable supplier network to improve sourcing capability, strengthen supplier relationships, and support continuous procurement activities.",

    responsibilities: [
      "Developed relationships with international suppliers",
      "Managed supplier communication and follow-up",
      "Monitored lead times and delivery commitments",
      "Performed pricing and cost comparisons",
      "Maintained long-term supplier relationships",
    ],

    technologies: [
      "Strategic Sourcing",
      "Supplier Development",
      "Supplier Relationship Management",
      "Cost Analysis",
      "International Procurement",
    ],

    result:
      "Built and maintained relationships with more than 100 international suppliers across China and Taiwan, improving sourcing responsiveness and supplier collaboration.",
  },
];