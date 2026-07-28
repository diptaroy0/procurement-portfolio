export interface Achievement {
  number: string;
  title: string;
  description: string;
}

export const achievements: Achievement[] = [
  {
    number: "100+",
    title: "Global Suppliers Managed",
    description:
      "Established and maintained procurement relationships with more than 100 international suppliers across China and Taiwan.",
  },
  {
    number: "100+",
    title: "Equipment Procured",
    description:
      "Successfully sourced forklifts, reach trucks, pallet stackers, industrial automation equipment, and engineering spare parts.",
  },
  {
    number: "RMCS",
    title: "Automation Projects",
    description:
      "Contributed to Raw Material Conveying System (RMCS) projects involving PLC, HMI, electrical control systems, and industrial automation.",
  },
  {
    number: "ERP",
    title: "Procurement Workflow",
    description:
      "Hands-on experience with ERP-driven procurement processes including RFQ, supplier evaluation, purchase orders, inventory planning, and procurement documentation.",
  },
];