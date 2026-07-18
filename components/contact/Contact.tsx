"use client";

import { motion } from "framer-motion";

import Container from "../common/Container";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import SectionHeader from "@/components/common/SectionHeader";

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative overflow-hidden py-32"
    >
      <Container>
        <SectionHeader
  id="contact-heading"
  badge="Let's Connect"
  title="Get In Touch"
  description="I'm always open to discussing procurement, supply chain, industrial automation, and new career opportunities."
/>

        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
          }}
          className="mt-20 grid gap-12 lg:grid-cols-2"
        >
          <ContactInfo />

          <ContactForm />
        </motion.div>
      </Container>
    </section>
  );
}