import type { LucideIcon } from "lucide-react";
import {
  MapPin,
  Mail,
  Phone,
  GraduationCap,
  BriefcaseBusiness,
  Languages,
} from "lucide-react";

export interface AboutInfoItem {
  icon: LucideIcon;
  title: string;
  value: string;
}

export const info: AboutInfoItem[] = [
  {
    icon: MapPin,
    title: "Location",
    value: "Dhaka, Bangladesh",
  },
  {
    icon: Mail,
    title: "Email",
    value: "diptaroy0@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+880 1773-317355",
  },
  {
    icon: GraduationCap,
    title: "Education",
    value: "B.Sc. in EEE • Professional MBA (SCM)",
  },
  {
    icon: BriefcaseBusiness,
    title: "Specialization",
    value: "Procurement • Supply Chain • Automation",
  },
  {
    icon: Languages,
    title: "Languages",
    value: "Bangla (Native) • English (Professional)",
  },
];