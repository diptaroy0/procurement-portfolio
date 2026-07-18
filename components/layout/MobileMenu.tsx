"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Menu Button */}

      <button
        onClick={() => setOpen(!open)}
        className="
          lg:hidden
          rounded-xl
          border
          border-cyan-400/20
          p-3
          text-white
          transition
          hover:border-cyan-400
          hover:bg-cyan-500/10
        "
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Overlay */}

      {open && (
        <div
          className="
            fixed
            inset-0
            z-40
            bg-black/60
            backdrop-blur-sm
            lg:hidden
          "
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer */}

      <div
        className={`
          fixed
          top-0
          right-0
          z-50
          h-full
          w-72
          bg-[#081120]
          border-l
          border-cyan-400/20
          transition-transform
          duration-300
          lg:hidden

          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex items-center justify-between border-b border-cyan-400/10 p-6">

          <h2 className="text-xl font-bold text-white">
            Navigation
          </h2>

          <button onClick={() => setOpen(false)}>
            <X className="text-white" />
          </button>

        </div>

        <nav className="flex flex-col p-6">

          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className="
                rounded-xl
                px-4
                py-4
                text-gray-300
                transition
                hover:bg-cyan-500/10
                hover:text-white
              "
            >
              {item.name}
            </a>
          ))}

        </nav>
      </div>
    </>
  );
}