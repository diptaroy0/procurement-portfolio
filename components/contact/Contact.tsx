"use client";

import {
  Container,
  SectionHeader,
} from "@/components/common";

import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative overflow-hidden py-20 lg:py-24"
    >
      {/* Background */}

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 overflow-hidden"
      >
        <div
          className="
            absolute
            left-[-220px]
            bottom-[-120px]
            h-[420px]
            w-[420px]
            rounded-full
            bg-cyan-500/10
            blur-[130px]
          "
        />

        <div
          className="
            absolute
            right-[-220px]
            top-[-120px]
            h-[420px]
            w-[420px]
            rounded-full
            bg-blue-500/10
            blur-[130px]
          "
        />
      </div>

      <Container>
        <SectionHeader
          id="contact-heading"
          badge="Let's Connect"
          title="Let's Build Something Great Together"
          description="Whether you're looking for a procurement professional, supply chain specialist, or industrial automation engineer, I'd be delighted to discuss opportunities, collaborations, or innovative projects."
        />

        <div
          className="
            mt-16

            grid
            gap-8

            xl:grid-cols-[1.1fr_.9fr]
          "
        >
          <ContactInfo />

          <ContactForm />
        </div>
      </Container>
    </section>
  );
}