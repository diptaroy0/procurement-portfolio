import type { LucideIcon } from "lucide-react";
import {
  ShoppingCart,
  Boxes,
  Database,
  Cpu,
} from "lucide-react";

export interface ExpertiseItem {
  icon: LucideIcon;
  title: string;
  skills: string[];
}

export const expertise: ExpertiseItem[] = [
  {
    icon: ShoppingCart,
    title: "Procurement & Strategic Sourcing",
    skills: [
      "Strategic Sourcing",
      "Supplier Negotiation",
      "Vendor Development",
      "International Procurement",
      "RFQ & Quotation Analysis",
      "Purchase Order Management",
    ],
  },

  {
    icon: Boxes,
    title: "Supply Chain Management",
    skills: [
      "Inventory Planning",
      "Material Handling Equipment",
      "Spare Parts Planning",
      "Vendor Coordination",
      "Supply Chain Operations",
      "Cost Optimization",
    ],
  },

  {
    icon: Database,
    title: "ERP & Business Systems",
    skills: [
      "SAP S/4HANA",
      "Purchase Requisition (PR)",
      "Purchase Order (PO)",
      "Goods Receipt (GRN)",
      "Invoice Verification (IR)",
      "Procurement Workflow",
    ],
  },

  {
    icon: Cpu,
    title: "Industrial Automation",
    skills: [
      "PLC Programming",
      "HMI Development",
      "SCADA",
      "RMCS",
      "Electrical Control Systems",
      "Machine Commissioning",
    ],
  },
];