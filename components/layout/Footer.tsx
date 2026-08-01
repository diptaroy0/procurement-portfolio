"use client";

import Link from "next/link";
import {
  ArrowUp,
  Heart,
} from "lucide-react";
import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

import { site } from "@/data/site";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#08111f]">
      {/* Background Glow */}

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 overflow-hidden"
      >
        <div
          className="
            absolute
            left-1/2
            top-0

            h-80
            w-80

            -translate-x-1/2
            -translate-y-1/2

            rounded-full

            bg-cyan-500/10

            blur-[120px]
          "
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Top */}

        <div
          className="
            flex
            flex-col
            items-center
            justify-between
            gap-10

            lg:flex-row
            lg:items-start
          "
        >
          {/* Brand */}

          <div className="max-w-md text-center lg:text-left">
            <h3 className="text-3xl font-bold text-white">
              {site.name}
            </h3>

            <p className="mt-3 text-cyan-300">
              {site.title}
            </p>

            <p className="mt-5 leading-7 text-gray-400">
              Passionate about strategic procurement, supply chain
              excellence, industrial automation, and delivering
              measurable business value through engineering precision.
            </p>
          </div>

          {/* Quick Links */}

          <div className="text-center">
            <h4 className="mb-5 text-lg font-semibold text-white">
              Quick Links
            </h4>

            <div className="flex flex-wrap justify-center gap-5">
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="
                    text-gray-400
                    transition-colors
                    duration-300

                    hover:text-cyan-400
                  "
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}

          <div className="text-center">
            <h4 className="mb-5 text-lg font-semibold text-white">
              Connect
            </h4>

            <div className="flex justify-center gap-4">
              <Link
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center

                  rounded-xl

                  border
                  border-cyan-400/20

                  text-white

                  transition-all
                  duration-300

                  hover:border-cyan-400
                  hover:bg-cyan-500/10
                  hover:text-cyan-300
                "
              >
                <FaGithub size={20} />
              </Link>

              <Link
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center

                  rounded-xl

                  border
                  border-cyan-400/20

                  text-white

                  transition-all
                  duration-300

                  hover:border-cyan-400
                  hover:bg-cyan-500/10
                  hover:text-cyan-300
                "
              >
                <FaLinkedinIn size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}

        <div className="my-10 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />

        {/* Bottom */}

        <div
          className="
            flex
            flex-col
            items-center
            justify-between
            gap-5

            text-sm
            text-gray-400

            md:flex-row
          "
        >
          <p className="flex items-center gap-2 text-center">
            © {new Date().getFullYear()} {site.name}. All rights reserved. 
            </p>

<p className="flex items-center gap-2 text-center">
          Designed & Developed by Dipta Roy
          </p>

          <p className="flex items-center gap-2">
            Built with
            <Heart
              size={14}
              className="fill-red-500 text-red-500"
            />
            Next.js • TypeScript • Tailwind CSS
          </p>

          <Link
            href="#home"
            aria-label="Back to top"
            className="
              inline-flex
              items-center
              gap-2

              rounded-full

              border
              border-cyan-400/20

              px-4
              py-2

              transition-all
              duration-300

              hover:border-cyan-400
              hover:bg-cyan-500/10
              hover:text-cyan-300
            "
          >
            <ArrowUp size={16} />
            Back to Top
          </Link>
        </div>
      </div>
    </footer>
  );
}