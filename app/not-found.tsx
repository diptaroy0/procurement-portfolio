"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#081120] px-6">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/10" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-2xl text-center"
      >
        {/* Icon */}
        <motion.div
          animate={{
            rotate: [0, -8, 8, -8, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="mx-auto mb-8 flex h-28 w-28 items-center justify-center rounded-full border border-cyan-400/20 bg-[#0f1c31]/80 backdrop-blur-xl shadow-[0_0_40px_rgba(34,211,238,0.15)]"
        >
          <SearchX
            size={54}
            className="text-cyan-400"
          />
        </motion.div>

        {/* 404 */}
        <motion.h1
          className="bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-8xl font-extrabold text-transparent"
          animate={{
            opacity: [1, 0.85, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
        >
          404
        </motion.h1>

        <h2 className="mt-6 text-4xl font-bold text-white">
          Page Not Found
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-slate-400">
          The page you're looking for doesn't exist or may have been moved.
          Let's get you back to the portfolio.
        </p>

        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-3 rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-cyan-400"
        >
          <Home size={20} />
          Back to Home
        </Link>

        <p className="mt-10 text-sm text-slate-500">
          Dipta Roy • Procurement & Supply Chain Professional
        </p>
      </motion.div>
    </main>
  );
}