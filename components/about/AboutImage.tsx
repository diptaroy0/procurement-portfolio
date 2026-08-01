"use client";

import Image from "next/image";
import {
  Briefcase,
  GraduationCap,
  MapPin,
} from "lucide-react";

export default function AboutImage() {
  return (
    <div className="relative -mt-28 flex justify-center">
      {/* Ambient Glow */}

      <div
        aria-hidden="true"
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
          bg-[rgba(15,23,42,.70)]
          backdrop-blur-2xl
          shadow-[0_25px_60px_rgba(0,0,0,.45)]
          transition-all
          duration-500
          hover:-translate-y-2
          hover:border-cyan-400/40
          hover:shadow-[0_0_45px_rgba(34,211,238,.18)]
        "
      >
        {/* Banner */}

        <div className="h-28 bg-gradient-to-r from-cyan-500/25 via-cyan-500/10 to-blue-600/15" />

        {/* Profile */}

        <div className="-mt-16 flex flex-col items-center px-8">

          <div className="relative">

            <div
              className="
                absolute
                inset-0
                scale-125
                rounded-full
                bg-cyan-400/20
                blur-xl
              "
            />

            <Image
              src="/images/About.JPG"
              alt="Dipta Roy"
              width={170}
              height={170}
              loading="lazy"
              draggable={false}
              className="
                relative
                h-40
                w-40
                rounded-full
                border-4
                border-[#081120]
                object-cover
                shadow-2xl
                select-none
              "
            />

          </div>

          <p className="mt-6 text-3xl font-bold text-white">
            Dipta Roy
          </p>

          <p className="mt-2 text-center text-cyan-400">
            Procurement & Supply Chain Professional
          </p>

          {/* Availability */}

          <div
            className="
              mt-6
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-green-500/20
              bg-green-500/10
              px-5
              py-2.5
              text-sm
              font-medium
              text-green-300
            "
          >
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-green-400" />
            Available for New Opportunities
          </div>

          {/* Details */}

          <div className="mt-10 w-full space-y-6">

            <div className="flex items-start gap-4">

              <Briefcase
                size={18}
                className="mt-1 shrink-0 text-cyan-400"
              />

              <span className="leading-7 text-gray-300">
                Assistant Manager – Procurement &
                Industrial Automation
              </span>

            </div>

            <div className="flex items-start gap-4">

              <GraduationCap
                size={18}
                className="mt-1 shrink-0 text-cyan-400"
              />

              <span className="leading-7 text-gray-300">
                Professional MBA (Supply Chain Management), BUP
              </span>

            </div>

            <div className="flex items-start gap-4">

              <MapPin
                size={18}
                className="mt-1 shrink-0 text-cyan-400"
              />

              <span className="leading-7 text-gray-300">
                Satarkul, Badda, Dhaka, Bangladesh
              </span>

            </div>

          </div>

          <div className="h-10" />

        </div>
      </div>
    </div>
  );
}
