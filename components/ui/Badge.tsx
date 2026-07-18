"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import clsx from "clsx";

interface BadgeProps {
  icon?: LucideIcon;
  children: React.ReactNode;
  variant?: "cyan" | "green" | "blue" | "purple";
  size?: "sm" | "md";
  pulse?: boolean;
  className?: string;
}

export default function Badge({
  icon: Icon,
  children,
  variant = "cyan",
  size = "md",
  pulse = false,
  className,
}: BadgeProps) {
  const variants = {
    cyan: {
      border: "border-cyan-400/20",
      bg: "bg-cyan-500/5",
      text: "text-cyan-300",
      dot: "bg-cyan-400",
      icon: "text-cyan-400",
    },

    green: {
      border: "border-emerald-400/20",
      bg: "bg-emerald-500/5",
      text: "text-emerald-300",
      dot: "bg-emerald-400",
      icon: "text-emerald-400",
    },

    blue: {
      border: "border-blue-400/20",
      bg: "bg-blue-500/5",
      text: "text-blue-300",
      dot: "bg-blue-400",
      icon: "text-blue-400",
    },

    purple: {
      border: "border-purple-400/20",
      bg: "bg-purple-500/5",
      text: "text-purple-300",
      dot: "bg-purple-400",
      icon: "text-purple-400",
    },
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-5 py-3 text-sm",
  };

  const style = variants[variant];

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
      }}
      className={clsx(
        `
        inline-flex
        items-center
        gap-3
        rounded-full
        border
        backdrop-blur-xl
        font-medium
        `,
        style.border,
        style.bg,
        style.text,
        sizes[size],
        className
      )}
    >
      {Icon ? (
        <Icon
          size={16}
          className={style.icon}
        />
      ) : (
        <span
          className={clsx(
            "h-2.5 w-2.5 rounded-full",
            style.dot,
            pulse && "animate-pulse"
          )}
        />
      )}

      {children}
    </motion.div>
  );
}