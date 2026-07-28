import type { LucideIcon } from "lucide-react";
import {
  Globe2,
  DollarSign,
  PackageCheck,
  Users,
  BadgeDollarSign,
  Database,
} from "lucide-react";

export interface AboutHighlight {
  icon: LucideIcon;
  value: string;
  title: string;
  color: string;
}

export const highlights: AboutHighlight[] = [
  {
    icon: Globe2,
    value: "100+",
    title: "Global Suppliers Managed",
    color: "from-cyan-500/20 to-blue-600/20",
  },
  {
    icon: PackageCheck,
    value: "126+",
    title: "Procurement Projects",
    color: "from-emerald-500/20 to-cyan-500/20",
  },
  {
    icon: DollarSign,
    value: "USD 3M+",
    title: "Procurement Portfolio",
    color: "from-sky-500/20 to-indigo-500/20",
  },
  {
    icon: Users,
    value: "200+",
    title: "Supplier Representatives",
    color: "from-purple-500/20 to-cyan-500/20",
  },
  {
    icon: BadgeDollarSign,
    value: "USD 361K",
    title: "Estimated Cost Savings",
    color: "from-amber-500/20 to-orange-500/20",
  },
  {
    icon: Database,
    value: "SAP",
    title: "SAP S/4HANA Procurement",
    color: "from-cyan-500/20 to-blue-500/20",
  },
];