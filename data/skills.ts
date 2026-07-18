export interface Skill {
  title: string;
  icon: string;
  items: string[];
}

export const skills: Skill[] = [
  {
    title: "Procurement & Supply Chain",

    icon: "procurement",

    items: [
      "Strategic Sourcing",
      "Vendor Management",
      "Supplier Negotiation",
      "Purchase Order",
      "RFQ",
      "Cost Optimization",
    ],
  },

  {
    title: "ERP Systems",

    icon: "erp",

    items: [
      "Oracle ERP",
      "SAP S/4HANA",
      "Purchase Requisition",
      "Purchase Order",
      "Goods Receipt",
      "Invoice Receipt",
    ],
  },

  {
    title: "Industrial Automation",

    icon: "automation",

    items: [
      "PLC",
      "HMI",
      "SCADA",
      "RMCS",
      "Industrial Automation",
      "Machine Troubleshooting",
    ],
  },

  {
    title: "Engineering & Management",

    icon: "engineering",

    items: [
      "Project Management",
      "Electrical Engineering",
      "Preventive Maintenance",
      "AutoCAD",
      "Problem Solving",
      "Cross-functional Collaboration",
    ],
  },
];