"use client";

import { motion } from "framer-motion";

import Container from "../ui/Container";
import ContactHeader from "./ContactHeader";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative overflow-hidden py-32"
    >
      <Container>
        <ContactHeader />

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