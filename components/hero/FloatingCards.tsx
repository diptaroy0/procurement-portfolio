"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Cpu,
  Database,
  Boxes,
} from "lucide-react";

const cards = [
  {
    title: "100+ Suppliers",
    subtitle: "China • Taiwan",
    icon: Globe,
    top: "12%",
    left: "-14%",
  },
  {
    title: "Strategic Sourcing",
    subtitle: "Cost Optimization",
    icon: Boxes,
    top: "23%",
    right: "-18%",
  },
  {
    title: "PLC • HMI",
    subtitle: "Industrial Automation",
    icon: Cpu,
    bottom: "24%",
    left: "-43%",
  },
  {
    title: "Oracle & SAP",
    subtitle: "ERP Systems",
    icon: Database,
    bottom: "8%",
    right: "-42%",
  },
];

export default function FloatingCards() {
  return (
    <>
      {cards.map((card, index) => {
        const Icon = card.icon;

        return (
          <motion.div
            key={card.title}
            initial={{
              opacity: 0,
              y: 20,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              y: [0, -6, 0],
            }}
            transition={{
              delay: index * 0.2,
              duration: 6.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.04,
            }}
            style={{
              top: card.top,
              left: card.left,
              right: card.right,
              bottom: card.bottom,
            }}
            className=" 
            group
            absolute will-change-transform
              z-30
              hidden
              lg:flex
              items-center
              gap-3
              rounded-2xl
              border
              border-cyan-400/20
              bg-[rgba(15,23,42,.82)]
              backdrop-blur-2xl
              px-5
              py-3.5
              shadow-[0_18px_45px_rgba(0,0,0,.45)]
              transition-all
              duration-300
              hover:border-cyan-400/45
              hover:shadow-[0_0_35px_rgba(34,211,238,.22)]
            "
          >
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
                via-cyan-400/15
                to-blue-600/20
                text-cyan-400
                transition-transform
                duration-300
                group-hover:rotate-6
                group-hover:scale-110
              "
            >
              <Icon size={19} />
            </div>

            <div>
              <h3 className="whitespace-nowrap text-[15px] font-semibold tracking-wide text-white">
                {card.title}
              </h3>

              <p className="mt-0.5 whitespace-nowrap text-xs text-gray-400">
                {card.subtitle}
              </p>
            </div>
          </motion.div>
        );
      })}
    </>
  );
}