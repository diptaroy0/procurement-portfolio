"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { RefreshCw, Home, AlertTriangle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#081120] px-6">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-xl rounded-3xl border border-cyan-400/20 bg-[#0f1c31]/80 p-10 text-center shadow-2xl backdrop-blur-xl"
      >
        {/* Icon */}
        <motion.div
          animate={{ rotate: [0, -5, 5, -5, 0] }}
          transition={{
            repeat: Infinity,
            duration: 3,
          }}
          className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-red-500/10"
        >
          <AlertTriangle
            size={46}
            className="text-red-400"
          />
        </motion.div>

        <h1 className="text-4xl font-bold text-white">
          Something went wrong
        </h1>

        <p className="mt-5 leading-7 text-slate-400">
          An unexpected error occurred while loading this page.
          Please try again. If the problem continues, feel free
          to contact me.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <button
            type="button"
            onClick={() => reset()}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-white transition hover:bg-cyan-400"
          >
            <RefreshCw size={18} />
            Try Again
          </button>

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-cyan-500/40 px-6 py-3 font-semibold text-cyan-300 transition hover:bg-cyan-500/10"
          >
            <Home size={18} />
            Go Home
          </Link>
        </div>

        <div className="mt-10 border-t border-slate-700 pt-6 text-sm text-slate-500">
          Dipta Roy Portfolio
        </div>
      </motion.div>
    </main>
  );
}