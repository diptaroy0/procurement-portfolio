"use client";

import { motion } from "framer-motion";
import {
  Globe2,
  ShoppingCart,
  BadgeCheck,
  Database,
} from "lucide-react";

const stats = [
  {
    id: "suppliers",
    icon: Globe2,
    value: "100+",
    label1: "Global",
    label2: "Suppliers",
  },
  {
    id: "orders",
    icon: ShoppingCart,
    value: "120+",
    label1: "Purchase",
    label2: "Orders",
  },
  {
    id: "experience",
    icon: BadgeCheck,
    value: "2+",
    label1: "Years",
    label2: "Experience",
  },
  {
    id: "erp",
    icon: Database,
    value: "ERP",
    label1: "SAP •",
    label2: "Oracle",
  },
];

export default function HeroStats() {
  return (
    <div className="mt-12 flex flex-wrap gap-5">
      {stats.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.id}
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.12,
            }}
            whileHover={{
              y: -5,
            }}
            className="
              group

              flex
              h-[168px]
              w-[110px]
              flex-col

              sm:h-[178px]
              sm:w-[120px]

              rounded-[24px]

              border
              border-white/10

              bg-white/[0.05]

              px-5
              py-6

              backdrop-blur-xl

              transition-all
              duration-300

              hover:border-cyan-400/25
              hover:bg-white/[0.07]
              hover:shadow-[0_18px_45px_rgba(34,211,238,.08)]
            "
          >
            {/* Icon */}

            <div
              className="
                flex
                h-11
                w-11
                items-center
                justify-center

                rounded-xl

                bg-gradient-to-br
                from-cyan-500/20
                to-blue-600/20

                text-cyan-400

                transition-transform
                duration-300

                group-hover:scale-110
              "
            >
              <Icon
                size={19}
                aria-hidden="true"
              />
            </div>

            {/* Value */}

            <p
              className="
                mt-6

                text-[30px]
                font-extrabold
                leading-none
                tracking-tight

                text-cyan-400
              "
            >
              {item.value}
            </p>

            {/* Labels */}

            <div
              className="
                mt-3

                space-y-1

                text-[14px]
                leading-none

                text-slate-400
              "
            >
              <p>{item.label1}</p>
              <p>{item.label2}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}