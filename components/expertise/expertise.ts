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
    title: "Procurement",
    skills: [
      "Strategic Sourcing",
      "Supplier Negotiation",
      "Vendor Development",
      "RFQ & Quotation",
      "Purchase Orders",
      "Cost Optimization",
    ],
  },
  {
    icon: Boxes,
    title: "Supply Chain",
    skills: [
      "Inventory Management",
      "Material Planning",
      "Vendor Coordination",
      "Warehouse Operations",
      "Logistics Support",
      "Material Handling",
    ],
  },
  {
    icon: Database,
    title: "ERP Systems",
    skills: [
      "SAP S/4HANA",
      "Purchase Requisition",
      "Goods Receipt",
      "Invoice Verification",
      "Procurement Cycle",
      "Master Data",
    ],
  },
  {
    icon: Cpu,
    title: "Industrial Automation",
    skills: [
      "PLC",
      "HMI",
      "SCADA",
      "Sensors",
      "RMCS",
      "Electrical Systems",
    ],
  },
];