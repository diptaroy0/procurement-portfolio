"use client";

import { motion } from "framer-motion";

import {
  Container,
  SectionHeader,
} from "@/components/common";

import { fadeUp } from "@/lib/animations";

import EducationCard from "./EducationCard";
import {
  education,
  certifications,
} from "./educationData";

import CertificationCard from "./CertificationCard";

export default function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="relative overflow-hidden py-20 md:py-24 lg:py-32"
    >
      {/* Background Glow */}

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 overflow-hidden"
      >
        <div
          className="
            absolute
            left-[-220px]
            top-16

            h-[420px]
            w-[420px]

            rounded-full

            bg-cyan-500/10

            blur-[140px]
          "
        />

        <div
          className="
            absolute
            right-[-220px]
            bottom-10

            h-[420px]
            w-[420px]

            rounded-full

            bg-blue-500/10

            blur-[150px]
          "
        />
      </div>

      <Container>
        <SectionHeader
          id="education-heading"
          badge="Academic Journey"
          title="Education & Professional Development"
          description="My academic background combines engineering, business administration, and continuous learning to strengthen expertise in procurement, supply chain management, industrial automation, and strategic sourcing."
        />

        {/* Education */}

        <motion.div
          {...fadeUp}
          className="
            mt-14

            grid
            gap-8

            lg:mt-20
            lg:grid-cols-2
          "
        >
          {education.map((item) => (
            <EducationCard
              key={item.title}
              education={item}
            />
          ))}
        </motion.div>

        {/* Certifications */}

        <motion.div
          {...fadeUp}
          className="mt-20"
        >
          <div className="mb-10">
            <h3 className="text-3xl font-bold text-white">
              Professional Certifications
            </h3>

            <p className="mt-3 max-w-2xl text-gray-400">
              Continuous professional development through
              industry-focused learning in ERP, procurement,
              industrial automation, and business productivity.
            </p>
          </div>

          <div
            className="
              grid
              gap-6

              sm:grid-cols-2

              xl:grid-cols-3
            "
          >
            {certifications.map((cert) => (
              <CertificationCard
                key={cert.title}
                certification={cert}
              />
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}