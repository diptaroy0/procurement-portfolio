"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Download,
  Menu,
  X,
} from "lucide-react";
import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

import useActiveSection from "@/hooks/useActiveSection";
import { site } from "@/data/site";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Expertise", href: "#expertise" },
  { name: "Projects", href: "#projects" },
  { name: "Case Studies", href: "#case-studies" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  const activeSection = useActiveSection();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () =>
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
  }, []);

  return (
    <>
      {/* Menu Button */}

      <button
        type="button"
        aria-label={
          open
            ? "Close navigation menu"
            : "Open navigation menu"
        }
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen(!open)}
        className="
          rounded-xl
          border
          border-cyan-400/20
          p-3
          text-white
          transition-all
duration-500
ease-out

          hover:border-cyan-400
          hover:bg-cyan-500/10
          hover:shadow-[0_12px_25px_rgba(34,211,238,.15)]

          lg:hidden
        "
      >
        {open ? (
          <X size={22} />
        ) : (
          <Menu size={22} />
        )}
      </button>

      {/* Overlay */}

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="
            fixed
            inset-0
            z-40

            bg-black/70
            backdrop-blur-sm

            lg:hidden
          "
        />
      )}

      {/* Drawer */}

      <aside
        id="mobile-navigation"
        className={`
          fixed
          top-0
          right-0

          z-50

          flex
          h-full
          w-[320px]
max-w-[85vw]
          flex-col

          overflow-hidden

          border-l
          border-cyan-400/20

          bg-[#081120]/95

          backdrop-blur-3xl

          transition-transform
duration-500
ease-out

          lg:hidden

          ${
            open
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >
        {/* Glow */}

        <div
          className="
            absolute
            right-0
            top-0

            h-72
            w-72

            translate-x-24
            -translate-y-24

            rounded-full

            bg-cyan-500/10

            blur-[120px]
          "
        />

        {/* Header */}

        <div className="relative border-b border-cyan-400/10 p-6">

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-4">

              <Image
                src="/images/Logo_Dipta.png"
                alt="Logo"
                width={56}
                height={56}
                className="rounded-xl"
              />

              <div>
                <h2 className="font-bold text-white">
                  Dipta Roy
                </h2>

                <p className="text-xs text-cyan-300">
                  Procurement • SCM
                </p>
              </div>
            </div>

            <button
  onClick={() => setOpen(false)}
  aria-label="Close Menu"
  className="
    rounded-lg
    p-2
    text-white
    transition-all
    duration-300
    hover:bg-cyan-500/10
    hover:text-cyan-300
  "
>
  <X size={22} />
</button>

          </div>

        </div>

        {/* Navigation */}

        <nav className="flex-1 space-y-2 p-6">

          {navItems.map((item) => {

            const active =
              activeSection ===
              item.href.replace("#", "");

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`
                  block

                  rounded-xl

                  px-5
                  py-4

                  transition-all
duration-500
ease-out

                  ${
                    active
                      ? `
                        bg-cyan-500/10
                        text-cyan-300
                        border
                        border-cyan-400/20
                      `
                      : `
                        text-slate-300

                        hover:bg-cyan-500/10
                        hover:text-white
                        hover:translate-x-1
                      `
                  }
                `}
              >
                {item.name}
              </Link>
            );

          })}

        </nav>

        {/* Buttons */}

        <div className="space-y-4 border-t border-cyan-400/10 p-6">

          <a
            href={site.resume}
            target="_blank"
            rel="noopener noreferrer"
            download="Resume.pdf"
            aria-label="Download Resume"

            className="
              flex
              items-center
              justify-center
              gap-2

              rounded-xl

              border
              border-cyan-400/20

              px-5
              py-3

              text-white

              transition-all
duration-300
hover:-translate-y-0.5
hover:border-cyan-300
hover:bg-cyan-500/10
hover:shadow-[0_12px_25px_rgba(34,211,238,.15)]
            "
          >
            <Download size={18} />

            Download Resume
          </a>

          <Link
            href="#contact"
            onClick={() => setOpen(false)}
            className="
              flex
              justify-center

              rounded-xl

              bg-gradient-to-r
              from-cyan-500
              to-blue-600

              px-5
              py-3

              font-semibold
              text-white

              transition-all
duration-500
ease-out
hover:-translate-y-0.5
hover:shadow-[0_15px_35px_rgba(34,211,238,.30)]
            "
          >
            Let&apos;s Connect
          </Link>

          <div className="flex justify-center gap-4 pt-3">

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

hover:-translate-y-0.5
hover:border-cyan-300

                hover:bg-cyan-500/10
                hover:shadow-[0_12px_25px_rgba(34,211,238,.15)]
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

hover:-translate-y-0.5
hover:border-cyan-300

                hover:bg-cyan-500/10
                hover:shadow-[0_12px_25px_rgba(34,211,238,.15)]
              "
            >
              <FaLinkedinIn size={20} />
            </Link>

          </div>

        </div>

      </aside>
    </>
  );
}
