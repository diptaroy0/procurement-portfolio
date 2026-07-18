import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/diptaroy0/",
    icon: FaLinkedinIn,
    color: "#0A66C2",
  },

  {
    name: "GitHub",
    href: "https://github.com/diptaroy0",
    icon: FaGithub,
    color: "#ffffff",
  },
];

export const contactInfo = [
  {
    label: "Email",
    value: "diptaroy0@gmail.com",
    href: "mailto:diptaroy0@gmail.com",
    icon: Mail,
  },

  {
    label: "Phone",
    value: "+8801773317355",
    href: "tel:+8801773317355",
    icon: Phone,
  },

  {
    label: "Location",
    value: "Satarkul, Badda, Dhaka",
    href: "#",
    icon: MapPin,
  },
];