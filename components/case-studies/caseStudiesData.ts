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
      "Supported industrial automation projects by sourcing PLCs, HMIs, sensors, electrical components, and control equipment while ensuring strict project timelines and quality requirements.",

    responsibilities: [
      "Supplier sourcing and vendor qualification",
      "Technical and commercial evaluation",
      "Price and commercial negotiation",
      "Purchase Order management",
      "Delivery coordination and follow-up",
    ],

    technologies: [
      "SAP S/4HANA",
      "Strategic Sourcing",
      "RFQ",
      "PLC",
      "HMI",
    ],

    result:
      "Ensured the timely availability of automation components, enabling uninterrupted project execution and supporting manufacturing productivity.",
  },

  {
    title: "Material Handling Equipment Procurement",
    company: "RFL Group",

    challenge:
      "Managed procurement of forklifts, reach trucks, pallet stackers, and warehouse equipment to support manufacturing expansion and operational efficiency.",

    responsibilities: [
      "International supplier communication",
      "Quotation analysis and comparison",
      "Commercial negotiation",
      "Purchase planning",
      "Delivery monitoring",
    ],

    technologies: [
      "Supplier Management",
      "Purchase Order Management",
      "Negotiation",
      "Inventory Planning",
    ],

    result:
      "Successfully supported the procurement of more than 100 material handling equipment units while ensuring cost-effective sourcing and on-time delivery.",
  },

  {
    title: "International Supplier Network Development",
    company: "China & Taiwan",

    challenge:
      "Established and maintained a reliable international supplier network while ensuring competitive pricing, consistent quality, and on-time delivery performance.",

    responsibilities: [
      "Vendor communication",
      "Lead time management",
      "Cost analysis",
      "Supplier relationship management",
    ],

    technologies: [
      "Strategic Sourcing",
      "Supplier Development",
      "Supplier Relationship Management",
      "Procurement",
    ],

    result:
      "Built and maintained relationships with more than 100 international suppliers across China and Taiwan, strengthening sourcing capability and improving procurement responsiveness.",
  },
];