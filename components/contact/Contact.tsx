"use client";

import { motion } from "framer-motion";

import {
  Container,
  SectionHeader,
} from "@/components/common";

import { fadeUp } from "@/lib/animations";

import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative overflow-hidden py-20 md:py-24 lg:py-32"
    >
      <Container>
        <SectionHeader
          id="contact-heading"
          badge="Let's Connect"
          title="Get In Touch"
          description="I'm always open to discussing procurement, supply chain management, industrial automation, and exciting career opportunities. Feel free to reach out if you'd like to collaborate or simply connect."
        />

        <motion.div
          {...fadeUp}
          className="
            mt-12
            grid
            grid-cols-1
            gap-8

            lg:mt-20
            lg:grid-cols-2
            lg:gap-12
          "
        >
          <ContactInfo />

          <ContactForm />
        </motion.div>
      </Container>
    </section>
  );
}