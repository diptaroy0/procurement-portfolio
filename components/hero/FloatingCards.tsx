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
    left: "-15%",
    width: "w-[230px]",
    duration: 6.2,
  },
  {
    title: "Strategic Sourcing",
    subtitle: "Cost Optimization",
    icon: Boxes,
    top: "24%",
    right: "-18%",
    width: "w-[210px]",
    duration: 7.1,
  },
  {
    title: "PLC • HMI",
    subtitle: "Industrial Automation",
    icon: Cpu,
    bottom: "24%",
    left: "-42%",
    width: "w-[235px]",
    duration: 6.8,
  },
  {
    title: "Oracle ERP & SAP",
    subtitle: "Supply Chain Systems",
    icon: Database,
    bottom: "8%",
    right: "-42%",
    width: "w-[220px]",
    duration: 7.6,
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
              y: 30,
              scale: 0.94,
            }}
            animate={{
              opacity: 1,
              y: [0, -8, 0],
            }}
            transition={{
              delay: index * 0.25,
              duration: card.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.05,
              y: -5,
            }}
            style={{
              top: card.top,
              left: card.left,
              right: card.right,
              bottom: card.bottom,
            }}
            className={`
              group
              absolute
              z-30
              hidden
              lg:flex
              items-center
              gap-4

              ${card.width}

              rounded-2xl

              border
              border-cyan-400/20

              bg-[rgba(15,23,42,.84)]

              px-5
              py-4

              backdrop-blur-2xl

              shadow-[0_20px_55px_rgba(0,0,0,.48)]

              transition-all
              duration-300

              hover:border-cyan-400/50
              hover:shadow-[0_0_40px_rgba(34,211,238,.22)]

              transform-gpu
              will-change-transform
            `}
          >
            <div
              className="
                flex
                h-12
                w-12
                shrink-0
                items-center
                justify-center

                rounded-xl

                bg-gradient-to-br
                from-cyan-500/20
                via-cyan-400/15
                to-blue-600/20

                text-cyan-400

                transition-all
                duration-300

                group-hover:rotate-6
                group-hover:scale-110
              "
            >
              <Icon
                size={20}
                aria-hidden="true"
              />
            </div>

            <div className="min-w-0">
              <p
                className="
                  whitespace-nowrap

                  text-[15px]
                  font-semibold

                  tracking-wide

                  text-white
                "
              >
                {card.title}
              </p>

              <p
                className="
                  mt-1

                  whitespace-nowrap

                  text-xs

                  text-gray-400
                "
              >
                {card.subtitle}
              </p>
            </div>
          </motion.div>
        );
      })}
    </>
  );
}