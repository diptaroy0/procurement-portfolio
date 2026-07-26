"use client";

import { useEffect, useState } from "react";

const SECTION_IDS = [
  "about",
  "experience",
  "expertise",
  "case-studies",
  "education",
  "contact",
];

export default function useActiveSection() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      let current = "";

      SECTION_IDS.forEach((id) => {
        const section = document.getElementById(id);

        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 150 && rect.bottom >= 150) {
          current = id;
        }
      });

      setActiveSection(current);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return activeSection;
}