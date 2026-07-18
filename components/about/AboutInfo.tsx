"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  GraduationCap,
  BriefcaseBusiness,
  Languages,
} from "lucide-react";

const info = [
  {
    icon: MapPin,
    title: "Location",
    value: "Satarkul, Badda, Dhaka",
  },
  {
    icon: Mail,
    title: "Email",
    value: "diptaroy0@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+880 1773-317355",
  },
  {
    icon: GraduationCap,
    title: "Education",
    value: "B.Sc. EEE • Professional MBA (BUP)",
  },
  {
    icon: BriefcaseBusiness,
    title: "Experience",
    value: "Industrial Automation & Procurement",
  },
  {
    icon: Languages,
    title: "Languages",
    value: "Bangla • English",
  },
];

export default function AboutInfo() {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {info.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.08,
              duration: 0.5,
            }}
            whileHover={{
              y: -5,
            }}
            className="
              group
              flex
              items-center
              gap-4
              rounded-2xl
              border
              border-cyan-400/15
              bg-[rgba(15,23,42,.78)]
              p-5
              backdrop-blur-2xl
              transition-all
              duration-300
              hover:border-cyan-400/40
              hover:shadow-[0_0_30px_rgba(34,211,238,.15)]
            "
          >
            <div
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-xl
                bg-gradient-to-br
                from-cyan-500/20
                via-cyan-400/10
                to-blue-600/20
                text-cyan-400
                transition-transform
                duration-300
                group-hover:scale-110
                group-hover:rotate-6
              "
            >
              <Icon size={20} />
            </div>

            <div>
              <p className="text-sm text-gray-400">
                {item.title}
              </p>

              <h4 className="mt-1 text-[15px] font-semibold leading-6 text-white">
                {item.value}
              </h4>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}