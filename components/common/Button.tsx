"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import type { ReactNode } from "react";
import type { HTMLMotionProps } from "framer-motion";
import clsx from "clsx";

interface ButtonProps
  extends Omit<HTMLMotionProps<"button">, "children"> {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  icon?: ReactNode;
  target?: "_blank" | "_self";
  download?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  className?: string;
}

const motionProps = {
  whileHover: {
    scale: 1.05,
    y: -3,
  },
  whileTap: {
    scale: 0.97,
  },
};

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  icon,
  target,
  download = false,
  loading = false,
  disabled = false,
  fullWidth = false,
  className,
  type = "button",
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-2xl font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#081120]";

  const variants = {
    primary:
      "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-[0_0_30px_rgba(34,211,238,.45)]",

    secondary:
      "border border-white/10 bg-white/5 text-white backdrop-blur-xl hover:border-cyan-400/50 hover:bg-cyan-500/10",

    outline:
      "border border-cyan-400/25 bg-transparent text-cyan-300 hover:border-cyan-400 hover:bg-cyan-500/10",
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
    fullWidth && "w-full",
    (disabled || loading) &&
      "cursor-not-allowed opacity-50 pointer-events-none",
    className
  );

  const content = (
    <>
      {(loading || icon) && (
        <span className="transition-transform duration-300 group-hover:-translate-y-0.5">
          {loading ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            icon
          )}
        </span>
      )}

      <span>{children}</span>
    </>
  );

  if (href) {
    const external =
      href.startsWith("http://") ||
      href.startsWith("https://") ||
      target === "_blank";

    if (external) {
      return (
        <motion.a
          {...motionProps}
          href={href}
          target={target}
          rel={
            target === "_blank"
              ? "noopener noreferrer"
              : undefined
          }
          download={download}
          className={clsx(classes, "group")}
          aria-disabled={disabled || loading}
        >
          {content}
        </motion.a>
      );
    }

    return (
      <motion.div {...motionProps}>
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
      {...motionProps}
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={clsx(classes, "group")}
      {...props}
    >
      {content}
    </motion.button>
  );
}