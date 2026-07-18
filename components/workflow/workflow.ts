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
    title: "Requirement",
    description:
      "Receive technical or business requirements from stakeholders.",
  },
  {
    icon: FileText,
    title: "Purchase Requisition",
    description:
      "Review and approve procurement requests before sourcing.",
  },
  {
    icon: Search,
    title: "RFQ",
    description:
      "Request quotations from qualified suppliers and collect commercial offers.",
  },
  {
    icon: Users,
    title: "Supplier Evaluation",
    description:
      "Evaluate suppliers based on technical capability, quality, pricing, and delivery performance.",
  },
  {
    icon: Handshake,
    title: "Negotiation",
    description:
      "Negotiate pricing, lead time, payment terms, warranty, and commercial conditions.",
  },
  {
    icon: ShoppingCart,
    title: "Purchase Order",
    description:
      "Issue the official Purchase Order to the selected supplier.",
  },
  {
    icon: Truck,
    title: "Delivery",
    description:
      "Coordinate logistics, shipment tracking, customs, and delivery schedules.",
  },
  {
    icon: PackageCheck,
    title: "GRN",
    description:
      "Inspect received materials and complete the Goods Receipt Note process.",
  },
  {
    icon: Receipt,
    title: "Invoice Verification",
    description:
      "Match supplier invoices against the Purchase Order and GRN before approval.",
  },
  {
    icon: Wallet,
    title: "Payment",
    description:
      "Process supplier payment according to agreed commercial terms.",
  },
];