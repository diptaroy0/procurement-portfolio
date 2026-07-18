"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import {
  MapPin,
  Mail,
  Phone,
  Download,
  CheckCircle2,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

import { site } from "@/data/site";

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="
        rounded-[32px]
        border
        border-cyan-400/15
        bg-[rgba(15,23,42,.72)]
        p-10
        backdrop-blur-2xl
        shadow-[0_20px_60px_rgba(0,0,0,.45)]
      "
    >
      {/* Profile */}

      <div className="flex items-center gap-5">
        <div className="relative h-24 w-24 overflow-hidden rounded-full border-4 border-cyan-400/20">
          <Image
            src={site.profileImage}
            alt={`${site.name} - Procurement & Supply Chain Professional`}
            fill
            className="object-cover"
          />
        </div>

        <div>
          <p className="text-3xl font-bold text-white">
  {site.name}
</p>

          <p className="mt-2 text-cyan-300">
            {site.title}
          </p>

          <div
            className="
              mt-4
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-cyan-400/20
              bg-cyan-500/10
              px-4
              py-2
              text-sm
              text-cyan-300
            "
          >
            <CheckCircle2
              size={16}
              aria-hidden="true"
              focusable="false"
            />

            {site.availability}
          </div>
        </div>
      </div>

      {/* Divider */}

      <div
        aria-hidden="true"
        className="my-10 h-px bg-gradient-to-r from-cyan-400/30 to-transparent"
      />

      {/* Contact Information */}

      <div className="space-y-6">
        <InfoItem
          icon={
            <MapPin
              size={20}
              aria-hidden="true"
              focusable="false"
            />
          }
          label="Location"
          value={site.location}
        />

        <InfoItem
          icon={
            <Mail
              size={20}
              aria-hidden="true"
              focusable="false"
            />
          }
          label="Email"
          value={site.email}
        />

        <InfoItem
          icon={
            <Phone
              size={20}
              aria-hidden="true"
              focusable="false"
            />
          }
          label="Phone"
          value={site.phone}
        />
      </div>

      {/* Buttons */}

      <div className="mt-10 flex flex-wrap gap-4">
        <a
          href={site.resume}
          download
          aria-label="Download Dipta Roy's resume"
          className="
            inline-flex
            items-center
            gap-2
            rounded-xl
            bg-gradient-to-r
            from-cyan-500
            to-blue-600
            px-5
            py-3
            font-semibold
            text-white
            transition-all
            duration-300
            hover:scale-105
            hover:shadow-[0_0_25px_rgba(34,211,238,.25)]
          "
        >
          <Download
            size={18}
            aria-hidden="true"
            focusable="false"
          />

          Resume
        </a>

        <a
          href={site.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Dipta Roy's LinkedIn profile (opens in a new tab)"
          className="
            inline-flex
            items-center
            gap-2
            rounded-xl
            border
            border-cyan-400/20
            px-5
            py-3
            text-white
            transition-all
            duration-300
            hover:border-cyan-400
            hover:bg-cyan-500/10
          "
        >
          <FaLinkedinIn
            size={18}
            aria-hidden="true"
            className="text-cyan-400"
          />

          LinkedIn
        </a>

        <a
          href={site.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Dipta Roy's GitHub profile (opens in a new tab)"
          className="
            inline-flex
            items-center
            gap-2
            rounded-xl
            border
            border-cyan-400/20
            px-5
            py-3
            text-white
            transition-all
            duration-300
            hover:border-cyan-400
            hover:bg-cyan-500/10
          "
        >
          <FaGithub
            size={18}
            aria-hidden="true"
            className="text-white"
          />

          GitHub
        </a>
      </div>
    </motion.div>
  );
}

function InfoItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div
        aria-hidden="true"
        className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-xl
          bg-cyan-500/10
          text-cyan-400
        "
      >
        {icon}
      </div>

      <div>
        <p className="text-sm text-gray-400">
          {label}
        </p>

        <p className="mt-1 font-medium text-white">
          {value}
        </p>
      </div>
    </div>
  );
}