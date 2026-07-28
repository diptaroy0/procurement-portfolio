"use client";

import Container from "../common/Container";
import FadeIn from "../ui/FadeIn";

import AboutImage from "./AboutImage";
import AboutContent from "./AboutContent";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-32"
    >
      {/* Background Glow */}

      <div
        aria-hidden="true"
        className="
          absolute
          inset-0
          -z-10
          overflow-hidden
        "
      >
        <div
          className="
            absolute
            left-[-180px]
            top-24
            h-[420px]
            w-[420px]
            rounded-full
            bg-cyan-500/8
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            right-[-180px]
            bottom-20
            h-[420px]
            w-[420px]
            rounded-full
            bg-blue-500/8
            blur-[140px]
          "
        />
      </div>

      <Container>
        <div
          className="
            grid
            items-center
            gap-16

            lg:grid-cols-[0.92fr_1.08fr]
            xl:gap-24
          "
        >
          <FadeIn direction="right">
            <AboutImage />
          </FadeIn>

          <FadeIn
            direction="left"
            delay={0.15}
          >
            <AboutContent />
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}