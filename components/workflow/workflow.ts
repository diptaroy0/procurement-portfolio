import type { LucideIcon } from "lucide-react";
import {
  ClipboardList,
  FileText,
  Search,
  Users,
  Handshake,
  ShoppingCart,
  Truck,
  PackageCheck,
  Receipt,
  Wallet,
} from "lucide-react";

export interface WorkflowStep {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const workflow: WorkflowStep[] = [
  {
    icon: ClipboardList,
    title: "Requirement Analysis",
    description:
      "Collect technical specifications and procurement requirements from engineering, production, or business stakeholders.",
  },

  {
    icon: FileText,
    title: "Purchase Requisition",
    description:
      "Review and validate purchase requisitions (PR) before initiating the sourcing process.",
  },

  {
    icon: Search,
    title: "RFQ & Supplier Sourcing",
    description:
      "Issue Requests for Quotation (RFQs), identify qualified suppliers, and collect commercial and technical proposals.",
  },

  {
    icon: Users,
    title: "Supplier Evaluation",
    description:
      "Compare suppliers based on technical compliance, pricing, quality standards, lead time, and overall commercial value.",
  },

  {
    icon: Handshake,
    title: "Negotiation",
    description:
      "Negotiate pricing, payment terms, delivery schedules, warranty coverage, and commercial agreements to maximize value.",
  },

  {
    icon: ShoppingCart,
    title: "Purchase Order",
    description:
      "Generate and issue the Purchase Order (PO) with finalized commercial terms and delivery requirements.",
  },

  {
    icon: Truck,
    title: "Logistics & Delivery",
    description:
      "Coordinate shipment schedules, customs documentation, transportation, and on-time delivery with suppliers.",
  },

  {
    icon: PackageCheck,
    title: "Goods Receipt",
    description:
      "Inspect incoming materials, verify specifications, and complete the Goods Receipt Note (GRN) process.",
  },

  {
    icon: Receipt,
    title: "Invoice Verification",
    description:
      "Perform three-way matching between the Purchase Order, Goods Receipt, and supplier invoice before approval.",
  },

  {
    icon: Wallet,
    title: "Supplier Payment",
    description:
      "Process supplier payments according to agreed commercial terms while maintaining procurement compliance.",
  },
];