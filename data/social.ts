import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import { site } from "./site";

export const socialLinks = [
  {
    name: "LinkedIn",
    href: site.linkedin,
    icon: FaLinkedinIn,
    color: "#0A66C2",
  },

  {
    name: "GitHub",
    href: site.github,
    icon: FaGithub,
    color: "#ffffff",
  },
];

export const contactInfo = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    icon: Mail,
  },

  {
    label: "Phone",
    value: site.phone,
    href: `tel:${site.phone.replace(/\s+/g, "")}`,
    icon: Phone,
  },

  {
    label: "Location",
    value: site.location,
    href: "#",
    icon: MapPin,
  },
];