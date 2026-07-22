"use client";

import Image from "next/image";
import {
  CheckCircle2,
  Download,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

import { GlassCard } from "@/components/common";
import { site } from "@/data/site";

export default function ContactInfo() {
  return (
    <GlassCard
      className="
        h-full
        transition-all
        duration-300
        hover:border-cyan-400/30
      "
    >
      {/* Profile */}

      <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
        <div className="relative h-24 w-24 overflow-hidden rounded-full border-4 border-cyan-400/20">
          <Image
            src={site.profileImage}
            alt={`${site.name} - Procurement & Supply Chain Professional`}
            fill
            className="object-cover"
            sizes="96px"
            priority={false}
          />
        </div>

        <div>
          <h3 className="text-3xl font-bold text-white">
            {site.name}
          </h3>

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

      {/* Contact Details */}

      <div className="space-y-6">
        <InfoItem
          icon={<MapPin size={20} />}
          label="Location"
          value={site.location}
        />

        <InfoItem
          icon={<Mail size={20} />}
          label="Email"
          value={site.email}
        />

        <InfoItem
          icon={<Phone size={20} />}
          label="Phone"
          value={site.phone}
        />
      </div>

      {/* CTA Buttons */}

      <div className="mt-10 flex flex-wrap gap-4">
        <a
          href={site.resume}
          download
          aria-label="Download Resume"
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
          <Download size={18} />

          Resume
        </a>

        <a
          href={site.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit LinkedIn Profile"
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
            className="text-cyan-400"
          />

          LinkedIn
        </a>

        <a
          href={site.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit GitHub Profile"
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
            className="text-white"
          />

          GitHub
        </a>
      </div>
    </GlassCard>
  );
}

interface InfoItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

function InfoItem({
  icon,
  label,
  value,
}: InfoItemProps) {
  return (
    <div className="flex items-start gap-4">
      <div
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

        <p className="mt-1 font-medium text-white break-all">
          {value}
        </p>
      </div>
    </div>
  );
}