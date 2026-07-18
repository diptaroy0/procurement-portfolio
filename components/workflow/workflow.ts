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

export const workflow = [
  {
    icon: ClipboardList,
    title: "Requirement",
    description: "Receive technical or business requirements from stakeholders.",
  },
  {
    icon: FileText,
    title: "Purchase Requisition",
    description: "Review and approve procurement requests.",
  },
  {
    icon: Search,
    title: "RFQ",
    description: "Request quotations from qualified suppliers.",
  },
  {
    icon: Users,
    title: "Supplier Evaluation",
    description: "Compare technical capability, quality and pricing.",
  },
  {
    icon: Handshake,
    title: "Negotiation",
    description: "Finalize pricing, lead time and commercial terms.",
  },
  {
    icon: ShoppingCart,
    title: "Purchase Order",
    description: "Issue the official purchase order to the selected supplier.",
  },
  {
    icon: Truck,
    title: "Delivery",
    description: "Coordinate logistics and shipment tracking.",
  },
  {
    icon: PackageCheck,
    title: "GRN",
    description: "Verify received materials and record goods receipt.",
  },
  {
    icon: Receipt,
    title: "Invoice Verification",
    description: "Match invoice with PO and GRN.",
  },
  {
    icon: Wallet,
    title: "Payment",
    description: "Complete payment according to agreed terms.",
  },
];