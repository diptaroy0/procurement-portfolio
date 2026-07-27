"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          aria-label="Back to Top"
          onClick={scrollToTop}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          initial={{
            opacity: 0,
            scale: 0.8,
            y: 30,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.8,
            y: 30,
          }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
          }}
          className="
            group
            fixed
            bottom-20
            right-6
            z-[999]

            overflow-hidden

            rounded-full

            border
            border-cyan-500/20

            bg-[#0d1728]/85

            backdrop-blur-xl

            shadow-[0_10px_35px_rgba(0,0,0,0.35)]

            transition-all
            duration-300

            hover:-translate-y-1
            hover:border-cyan-400
            hover:shadow-[0_0_35px_rgba(34,211,238,0.35)]

            active:scale-95
          "
        >
          <motion.div
            animate={{
              width: hovered ? 175 : 58,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
              flex
              h-14
              items-center
              px-4
            "
          >
                        <div
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center

                rounded-full

                bg-gradient-to-r
                from-cyan-500/20
                to-blue-500/20

                text-cyan-400

                transition-all
                duration-300

                group-hover:from-cyan-500
                group-hover:to-blue-600
                group-hover:text-white
              "
            >
              <ChevronUp
                size={22}
                strokeWidth={2.5}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-y-0.5
                "
              />
            </div>

            <AnimatePresence>
              {hovered && (
                <motion.span
                  initial={{
                    opacity: 0,
                    x: -10,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    x: -10,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="
                    ml-3
                    whitespace-nowrap
                    text-sm
                    font-semibold
                    tracking-wide

                    text-white
                  "
                >
                  Back to Top
                </motion.span>
              )}
            </AnimatePresence>

          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}