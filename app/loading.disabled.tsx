"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <main className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#081120]">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-500/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-full bg-cyan-400/30 blur-2xl" />

          <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-cyan-400/40 bg-[#0f1c31]/90 backdrop-blur-xl shadow-[0_0_40px_rgba(34,211,238,0.25)]">
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-4xl font-bold text-transparent">
              DR
            </span>
          </div>
        </motion.div>

        {/* Loading Text */}
        <motion.h2
          className="mt-8 text-xl font-semibold tracking-wide text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Loading Portfolio
        </motion.h2>

        <motion.p
          className="mt-2 text-sm tracking-wider text-slate-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
        >
          Engineering Precision • Procurement Excellence
        </motion.p>

        {/* Progress Bar */}
        <div className="mt-8 h-1 w-64 overflow-hidden rounded-full bg-slate-700">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              repeat: Infinity,
              duration: 1.4,
              ease: "linear",
            }}
          />
        </div>

        {/* Loading Dots */}
        <motion.div
          className="mt-5 flex gap-2"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
                repeat: Infinity,
              },
            },
          }}
        >
          {[0, 1, 2].map((dot) => (
            <motion.span
              key={dot}
              className="h-2.5 w-2.5 rounded-full bg-cyan-400"
              variants={{
                hidden: {
                  opacity: 0.3,
                  y: 0,
                },
                visible: {
                  opacity: 1,
                  y: -6,
                  transition: {
                    duration: 0.35,
                    repeat: Infinity,
                    repeatType: "reverse",
                  },
                },
              }}
            />
          ))}
        </motion.div>
      </div>
    </main>
  );
}