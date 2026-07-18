"use client";

import { motion } from "framer-motion";

import Container from "../common/Container";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import BackgroundEffects from "../ui/BackgroundEffects";
import ScrollIndicator from "./ScrollIndicator";
import Stats from "./HeroStats";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen overflow-hidden pt-36 pb-12"
      id="home"
    >
      <BackgroundEffects />

      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-30"
          >
            <HeroContent />

            <div className="mt-14">
              <Stats />
            </div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="relative z-10 flex justify-center lg:justify-end"
          >
            <HeroImage />
          </motion.div>

        </div>

        <ScrollIndicator />
      </Container>
    </section>
  );
}