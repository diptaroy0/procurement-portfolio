"use client";

import Container from "../ui/Container";
import FadeIn from "../ui/FadeIn";

import AboutImage from "./AboutImage";
import AboutContent from "./AboutContent";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden pt-20 pb-32"
    >

      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">
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