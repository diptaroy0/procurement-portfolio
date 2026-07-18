"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  icon?: ReactNode;
  target?: "_blank" | "_self";
  download?: boolean;
  className?: string;
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  icon,
  target,
  download = false,
  className,
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-2xl font-semibold transition-all duration-300";

  const variants = {
    primary:
      "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-[0_0_30px_rgba(34,211,238,.45)]",

    secondary:
      "border border-white/10 bg-white/5 text-white backdrop-blur-xl hover:border-cyan-400/50 hover:bg-cyan-500/10",

    outline:
      "border border-cyan-400/25 text-cyan-300 bg-transparent hover:bg-cyan-500/10 hover:border-cyan-400",
  };

  const sizes = {
    sm: "px-5 py-2.5 text-sm",

    md: "px-7 py-3.5 text-base",

    lg: "px-8 py-4 text-lg",
  };

  const classes = clsx(
    baseClasses,
    variants[variant],
    sizes[size],
    className
  );

  const content = (
    <>
      {icon && (
        <span className="transition-transform duration-300 group-hover:-translate-y-1">
          {icon}
        </span>
      )}

      {children}
    </>
  );

  if (href) {
    const external =
      href.startsWith("http") ||
      target === "_blank";

    if (external) {
      return (
        <motion.a
          whileHover={{
            scale: 1.05,
            y: -3,
          }}
          whileTap={{
            scale: 0.97,
          }}
          href={href}
          target={target}
          rel={
            target === "_blank"
              ? "noopener noreferrer"
              : undefined
          }
          download={download}
          className={clsx(classes, "group")}
        >
          {content}
        </motion.a>
      );
    }

    return (
      <motion.div
        whileHover={{
          scale: 1.05,
          y: -3,
        }}
        whileTap={{
          scale: 0.97,
        }}
      >
        <Link
          href={href}
          className={clsx(classes, "group")}
        >
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileHover={{
        scale: 1.05,
        y: -3,
      }}
      whileTap={{
        scale: 0.97,
      }}
      onClick={onClick}
      className={clsx(classes, "group")}
    >
      {content}
    </motion.button>
  );
}