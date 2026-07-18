"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  MapPin,
  Briefcase,
  GraduationCap,
} from "lucide-react";

export default function AboutImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      animate={{
        y: [0, -6, 0],
      }}
      style={{
        marginTop: "-110px",
      }}
      className="relative flex justify-center"
    >
      {/* Background Glow */}

      <div
        className="
          absolute
          -z-10
          h-[520px]
          w-[520px]
          rounded-full
          bg-cyan-500/10
          blur-[120px]
        "
      />

      {/* Glass Card */}

      <div
        className="
          relative
          w-full
          max-w-[420px]
          overflow-hidden
          rounded-[32px]
          border
          border-cyan-400/20
          bg-[rgba(15,23,42,.68)]
          backdrop-blur-2xl
          shadow-[0_25px_60px_rgba(0,0,0,.45)]
          transition-all
          duration-500
          hover:-translate-y-2
          hover:border-cyan-400/40
          hover:shadow-[0_0_40px_rgba(34,211,238,.18)]
        "
      >
        {/* Top Banner */}

        <div className="h-28 bg-gradient-to-r from-cyan-500/25 to-blue-600/15" />

        {/* Profile */}

        <div className="-mt-16 flex flex-col items-center px-8">

          <div className="relative">

            {/* Glow */}

            <div
              className="
                absolute
                inset-0
                rounded-full
                bg-cyan-400/20
                blur-xl
                scale-125
              "
            />

            <Image
              src="/images/About.JPG"
              alt="Dipta Roy"
              width={170}
              height={170}
              className="
                relative
                h-40
                w-40
                rounded-full
                border-4
                border-[#081120]
                object-cover
                shadow-xl
              "
            />

          </div>

          <h3 className="mt-6 text-3xl font-bold text-white">
            Dipta Roy
          </h3>

          <p className="mt-2 text-center text-cyan-400">
            Procurement & Supply Chain Professional
          </p>

          {/* Status */}

          <div
            className="
              mt-5
              rounded-full
              border
              border-cyan-400/25
              bg-cyan-500/10
              px-5
              py-2
              text-sm
              text-cyan-300
            "
          >
            ● Available for New Opportunities
          </div>

          {/* Information */}

          <div className="mt-10 w-full space-y-6">

            <div className="flex items-center gap-4">

              <Briefcase
                size={18}
                className="text-cyan-400"
              />

              <span className="text-gray-300">
                Assistant Manager – Procurement &
                Industrial Automation
              </span>

            </div>

            <div className="flex items-center gap-4">

              <GraduationCap
                size={18}
                className="text-cyan-400"
              />

              <span className="text-gray-300">
                Professional MBA (SCM), BUP
              </span>

            </div>

            <div className="flex items-center gap-4">

              <MapPin
                size={18}
                className="text-cyan-400"
              />

              <span className="text-gray-300">
                Satarkul, Badda, Dhaka
              </span>

            </div>

          </div>

          <div className="h-10" />

        </div>
      </div>
    </motion.div>
  );
}