"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/common";
import BackgroundEffects from "@/components/ui/BackgroundEffects";
import { heroLeft, heroRight } from "@/lib/animations";

import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import ScrollIndicator from "./ScrollIndicator";
import HeroStats from "./HeroStats";

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative min-h-screen overflow-hidden pt-32 pb-16 lg:pt-36 lg:pb-12"
    >
      <BackgroundEffects />

      <Container>
        <div
          className="
            grid
            items-center
            gap-14
            lg:grid-cols-[1.2fr_0.8fr]
            lg:gap-10
          "
        >
          {/* LEFT */}

          <motion.div
            {...heroLeft}
            className="relative z-30 order-2 lg:order-1"
          >
            <HeroContent />

            <div className="mt-12 lg:mt-14">
              <HeroStats />
            </div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            {...heroRight}
            className="
              relative
              z-10
              order-1
              flex
              justify-center
              lg:order-2
              lg:justify-end
            "
          >
            <HeroImage />
          </motion.div>
        </div>

        <ScrollIndicator />
      </Container>
    </section>
  );
}