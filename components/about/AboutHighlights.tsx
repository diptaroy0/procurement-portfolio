"use client";

import { motion } from "framer-motion";
import {
  Globe2,
  DollarSign,
  PackageCheck,
  Users,
  BadgeDollarSign,
  Database,
} from "lucide-react";

const highlights = [
  {
    icon: Globe2,
    value: "100+",
    title: "Supplier Organizations",
    color: "from-cyan-500/20 to-blue-600/20",
  },
  {
    icon: PackageCheck,
    value: "126",
    title: "Procurement Work Orders",
    color: "from-emerald-500/20 to-cyan-500/20",
  },
  {
    icon: DollarSign,
    value: "USD 3M+",
    title: "Procurement Value",
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
    title: "Cost Savings",
    color: "from-amber-500/20 to-orange-500/20",
  },
  {
    icon: Database,
    value: "Oracle ERP",
    title: "SAP S/4HANA Learning",
    color: "from-cyan-500/20 to-blue-500/20",
  },
];

export default function AboutHighlights() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {highlights.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.08,
              duration: 0.5,
            }}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            className="
              group
              rounded-3xl
              border
              border-cyan-400/15
              bg-[rgba(15,23,42,.78)]
              p-6
              backdrop-blur-2xl
              transition-all
              duration-300
              hover:border-cyan-400/40
              hover:shadow-[0_0_35px_rgba(34,211,238,.18)]
            "
          >
            <div
              className={`
                mb-5
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                bg-gradient-to-br
                ${item.color}
                text-cyan-400
                transition-all
                duration-300
                group-hover:rotate-6
                group-hover:scale-110
              `}
            >
              <Icon size={24} />
            </div>

            <h3 className="gradient-text text-3xl font-black">
              {item.value}
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-400">
              {item.title}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}