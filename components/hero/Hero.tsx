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
        pt-28
        sm:pt-32
        lg:pt-36
        xl:pt-40
      "
    >
      {/* Background Effects */}
      <BackgroundEffects />

      <Container>
        <div
          className="
            relative
            grid
            items-center
            gap-16

            lg:min-h-[calc(100vh-170px)]
            lg:grid-cols-[1.08fr_0.92fr]
            lg:gap-16

            xl:min-h-[calc(100vh-180px)]
            xl:grid-cols-[1.05fr_0.95fr]
            xl:gap-24
          "
        >
          {/* ======================================
              LEFT CONTENT
          ====================================== */}

          <motion.div
  {...heroLeft}
  className="
    order-2
    lg:order-1
    lg:-ml-8
    xl:-ml-10
  "
>
            <HeroContent />

            <div className="mt-14 lg:mt-16">
              <HeroStats />
            </div>
          </motion.div>

          {/* ======================================
              RIGHT IMAGE
          ====================================== */}

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

        {/* ======================================
            SCROLL INDICATOR
        ====================================== */}

        <div
        aria-hidden="true"
          className="
            absolute
            bottom-[-25px]
            left-1/2
            hidden
            -translate-x-1/2

            lg:block
          "
        >
          <ScrollIndicator />
        </div>
      </Container>
    </section>
  );
}