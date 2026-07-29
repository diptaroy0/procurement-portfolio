"use client";

import Image from "next/image";
import {
  ArrowUpRight,
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

import {
  GlassCard,
  Tag,
} from "@/components/common";
import { site } from "@/data/site";

export default function ContactInfo() {
  return (
    <GlassCard
      className="
        group
        relative
        h-full
        overflow-hidden

        transition-all
        duration-300

        hover:border-cyan-400/30
        hover:shadow-[0_0_40px_rgba(34,211,238,.18)]
      "
    >
      {/* Background Glow */}

      <div
        aria-hidden="true"
        className="
          absolute
          right-0
          top-0

          h-56
          w-56

          translate-x-20
          -translate-y-20

          rounded-full

          bg-cyan-500/10

          blur-3xl

          opacity-0

          transition-opacity
          duration-300

          group-hover:opacity-100
        "
      />

      <div className="relative z-10">
        {/* Profile */}

        <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
          <div className="relative h-24 w-24 overflow-hidden rounded-full border-4 border-cyan-400/20">
            <Image
              src={site.profileImage}
              alt={`${site.name} profile`}
              fill
              className="object-cover"
              sizes="96px"
            />
          </div>

          <div className="flex-1">
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
                border-emerald-400/20

                bg-emerald-500/10

                px-4
                py-2

                text-sm
                font-medium

                text-emerald-300
              "
            >
              <CheckCircle2 size={16} />

              Open to Procurement Opportunities
            </div>
          </div>
        </div>

        {/* Skills */}

        <div className="mt-8 flex flex-wrap gap-2">
          <Tag>Procurement</Tag>
          <Tag>Supply Chain</Tag>
          <Tag>Industrial Automation</Tag>
          <Tag>SAP S/4HANA</Tag>
        </div>

        {/* Divider */}

        <div className="my-10 h-px bg-gradient-to-r from-cyan-400/30 to-transparent" />

        {/* Contact */}

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
            href={`mailto:${site.email}`}
          />

          <InfoItem
            icon={<Phone size={20} />}
            label="Phone"
            value={site.phone}
            href={`tel:${site.phone}`}
          />
        </div>

        {/* Buttons */}

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <a
            href={site.resume}
            download
            className="
              inline-flex
              items-center
              justify-center
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

              hover:scale-[1.03]
              hover:shadow-[0_0_30px_rgba(34,211,238,.25)]
            "
          >
            <Download size={18} />
            Download Resume
          </a>

          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              justify-center
              gap-2

              rounded-xl

              border
              border-cyan-400/20

              px-5
              py-3

              font-semibold
              text-white

              transition-all
              duration-300

              hover:border-cyan-400
              hover:bg-cyan-500/10
            "
          >
            <FaLinkedinIn className="text-cyan-400" />

            Connect

            <ArrowUpRight size={16} />
          </a>

          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              justify-center
              gap-2

              rounded-xl

              border
              border-cyan-400/20

              px-5
              py-3

              font-semibold
              text-white

              transition-all
              duration-300

              hover:border-cyan-400
              hover:bg-cyan-500/10

              sm:col-span-2
            "
          >
            <FaGithub />

            View GitHub
          </a>
        </div>
      </div>
    </GlassCard>
  );
}

interface InfoItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}

function InfoItem({
  icon,
  label,
  value,
  href,
}: InfoItemProps) {
  const content = (
    <>
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

      <div className="min-w-0">
        <p className="text-sm text-gray-400">
          {label}
        </p>

        <p className="mt-1 break-all font-medium text-white">
          {value}
        </p>
      </div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className="flex items-start gap-4 transition-colors hover:text-cyan-300"
      >
        {content}
      </a>
    );
  }

  return <div className="flex items-start gap-4">{content}</div>;
}