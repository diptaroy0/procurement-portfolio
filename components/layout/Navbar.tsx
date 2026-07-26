"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

import MobileMenu from "./MobileMenu";
import useActiveSection from "@/hooks/useActiveSection";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed top-0 left-0 z-50 w-full"
    >
      <div
        className={`
          mx-auto
          mt-4
          flex
          max-w-7xl
          items-center
          justify-between
          rounded-3xl
          border
          px-8
          py-4
          backdrop-blur-[30px]
          transition-all
          duration-500

          ${
            scrolled
              ? `
                border-cyan-400/15
                bg-[#081120]/60
                shadow-[0_20px_60px_rgba(0,0,0,.45)]
              `
              : `
                border-white/10
                bg-[#081120]/45
                shadow-[0_10px_40px_rgba(0,0,0,.20)]
              `
          }
        `}
      >
        {/* Logo */}

        <a
          href="#"
          aria-label="Go to homepage"
          className="flex items-center gap-4"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 text-xl font-bold text-white shadow-lg shadow-cyan-500/25">
            DR
          </div>

          <div>
            <p className="text-2xl font-bold text-white">
              Dipta <span className="text-cyan-400">Roy</span>
            </p>

            <p className="text-xs uppercase tracking-[0.35em] text-slate-400">
              Procurement • SCM
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-10 lg:flex"
        >
          {navItems.map((item) => {
            const active = activeSection === item.href.replace("#", "");

            return (
              <a
                key={item.name}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`
                  group
                  relative
                  text-[15px]
                  font-medium
                  transition-all
                  duration-300

                  ${
                    active
                      ? "text-cyan-300"
                      : "text-slate-300 hover:text-white"
                  }
                `}
              >
                {item.name}

                <span
                  className={`
                    absolute
                    -bottom-2
                    left-1/2
                    h-[2px]
                    -translate-x-1/2
                    rounded-full
                    bg-cyan-400
                    shadow-[0_0_12px_rgba(34,211,238,.6)]
                    transition-all
                    duration-300

                    ${
                      active
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }
                  `}
                />
              </a>
            );
          })}
        </nav>

        {/* Desktop Buttons */}

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="/resume/Resume.pdf"
            download
            aria-label="Download Dipta Roy's resume"
            className="
              inline-flex
              items-center
              gap-2
              rounded-xl
              border
              border-cyan-400/30
              bg-white/5
              px-5
              py-3
              text-sm
              font-semibold
              text-white
              transition-all
              duration-300
              hover:border-cyan-300
              hover:bg-cyan-500/10
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
            href="#contact"
            aria-label="Go to contact section"
            className="
              rounded-xl
              bg-gradient-to-r
              from-cyan-500
              to-blue-600
              px-7
              py-3
              text-sm
              font-semibold
              text-white
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:shadow-[0_15px_35px_rgba(34,211,238,.30)]
            "
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Menu */}

        <MobileMenu />
      </div>
    </motion.header>
  );
}