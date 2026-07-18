export interface Achievement {
  number: string;
  title: string;
  description: string;
}

export const achievements: Achievement[] = [
  {
    number: "100+",
    title: "International Suppliers",
    description:
      "Built and managed supplier relationships across China and Taiwan.",
  },
  {
    number: "100+",
    title: "Material Handling Equipment",
    description:
      "Successfully procured forklifts, pallet stackers, and reach trucks.",
  },
  {
    number: "PLC",
    title: "Industrial Automation",
    description:
      "Supported PLC, HMI, and RMCS automation projects.",
  },
  {
    number: "SAP",
    title: "S/4HANA Procurement",
    description:
      "Experienced with PR, RFQ, PO, GRN, and end-to-end procurement workflows.",
  },
];