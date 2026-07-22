"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/common";
import BackgroundEffects from "@/components/ui/BackgroundEffects";
import { heroLeft } from "@/lib/animations";

import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import HeroStats from "./HeroStats";
import ScrollIndicator from "./ScrollIndicator";

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="
        relative
        overflow-hidden
        pt-32
        lg:pt-36
      "
    >
      <BackgroundEffects />

      <Container>
        {/* ===============================
            HERO CONTENT
        ================================ */}

        <div
          className="
            grid
            items-center
            gap-14

            lg:min-h-[calc(100vh-180px)]
            lg:grid-cols-[1.15fr_0.85fr]
            lg:gap-10
          "
        >
          {/* ===============================
              LEFT
          ================================ */}

          <motion.div
            {...heroLeft}
            className="order-2 lg:order-1"
          >
            <HeroContent />

            <div className="mt-12 lg:mt-14">
              <HeroStats />
            </div>
          </motion.div>

          {/* ===============================
              RIGHT
          ================================ */}

          <div
            className="
              order-1
              flex
              justify-center

              lg:order-2
              lg:justify-end
            "
          >
            <HeroImage />
          </div>
        </div>

        {/* ===============================
            SCROLL INDICATOR
        ================================ */}

        <div
          className="
            mt-16
            flex
            justify-center

            lg:mt-20
          "
        >
          <ScrollIndicator />
        </div>
      </Container>
    </section>
  );
}