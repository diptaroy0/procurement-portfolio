export interface Project {
  id: number;

  title: string;
  category: string;

  shortDescription: string;
  description: string;

  image: string;

  technologies: string[];

  challenge: string;
  solution: string;
  impact: string;

  github?: string;
  live?: string;

  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,

    title: "Raw Material Conveying System (RMCS)",

    category: "Industrial Automation",

    shortDescription:
      "Industrial automation procurement and implementation support.",

    description:
      "Supported procurement and implementation of the Raw Material Conveying System (RMCS), coordinating automation equipment, supplier communication, engineering requirements and project execution for large-scale manufacturing operations. Worked closely with engineering teams to ensure timely sourcing and successful deployment of automation components.",

    image: "/images/projects/rmcs.jpg",

    technologies: [
      "PLC",
      "HMI",
      "RMCS",
      "Industrial Automation",
      "Supplier Coordination",
      "Project Management",
      "Vendor Management",
    ],

    challenge:
      "The RMCS project required synchronized procurement of automation equipment from multiple suppliers while maintaining engineering specifications and strict project deadlines.",

    solution:
      "Coordinated procurement activities with engineering teams, evaluated suppliers, negotiated quotations, tracked purchase orders and ensured timely delivery of automation equipment.",

    impact:
      "Successfully supported implementation of the RMCS project while maintaining procurement timelines, supplier coordination and engineering compliance.",


    featured: true,
  },

  {
    id: 2,

    title: "Material Handling Equipment Procurement",

    category: "Strategic Procurement",

    shortDescription:
      "Procurement of forklifts, reach trucks and warehouse equipment.",

    description:
      "Managed end-to-end procurement of forklifts, reach trucks, pallet stackers and warehouse handling equipment by coordinating with international suppliers, negotiating pricing and ensuring successful delivery for factory operations.",

    image: "/images/projects/material-handling.jpg",

    technologies: [
      "Strategic Sourcing",
      "Forklift",
      "Reach Truck",
      "Pallet Stacker",
      "Supplier Evaluation",
      "Vendor Negotiation",
      "Cost Optimization",
    ],

    challenge:
      "The organization required reliable material handling equipment with competitive pricing while minimizing procurement lead time.",

    solution:
      "Performed supplier evaluation, quotation comparison, commercial negotiation and purchase coordination to select the most suitable vendors.",

    impact:
      "Successfully purchased more than 100 sets of material handling equipment while maintaining procurement quality, delivery schedules and supplier relationships.",


    featured: true,
  },

  {
    id: 3,

    title: "Oracle ERP Procurement Workflow",

    category: "ERP & Procurement",

    shortDescription:
      "ERP-based procurement workflow and purchasing process.",

    description:
      "Worked extensively with Oracle ERP procurement modules involving Purchase Requisition (PR), Purchase Order (PO), Goods Receipt (GRN) and Invoice Receipt (IR) to support purchasing operations and procurement documentation.",

    image: "/images/projects/oracle-erp.jpg",

    technologies: [
      "Oracle ERP",
      "Purchase Requisition",
      "Purchase Order",
      "Goods Receipt",
      "Invoice Receipt",
      "Procurement Workflow",
    ],

    challenge:
      "Maintaining procurement transparency and documentation across multiple purchasing stages required disciplined ERP workflow management.",

    solution:
      "Managed procurement transactions through Oracle ERP while coordinating suppliers, purchase orders and goods receipt activities according to company procedures.",

    impact:
      "Improved procurement process visibility, documentation accuracy and purchasing efficiency through standardized ERP workflows.",

    featured: false,
  },

  {
  id: 4,

  title: "Global Supplier Management",

  category: "Global Sourcing",

  shortDescription:
    "International supplier communication and sourcing management.",

  description:
    "Collaborated with more than 100 international suppliers from China and Taiwan for sourcing industrial equipment and spare parts. Managed supplier communication, quotation analysis, technical discussions and procurement negotiations.",

  image: "/images/projects/global-supplier.jpg",

  technologies: [
    "Global Sourcing",
    "China",
    "Taiwan",
    "Quotation Analysis",
    "Supplier Communication",
    "Negotiation",
    "Vendor Management",
  ],

  challenge:
    "Managing supplier communication across multiple countries while ensuring competitive pricing, quality requirements and delivery commitments.",

  solution:
    "Established structured supplier communication, performed quotation comparisons, negotiated commercial terms and coordinated procurement schedules.",

  impact:
    "Successfully managed relationships with over 100 international suppliers, improving sourcing efficiency, reducing procurement lead times and supporting uninterrupted manufacturing operations.",

  featured: true,
},
];