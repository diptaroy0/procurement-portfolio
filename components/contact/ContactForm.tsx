"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

import { GlassCard } from "@/components/common";
import { fadeUp } from "@/lib/animations";

export default function ContactForm() {
  return (
    <motion.div
      {...fadeUp}
      className="h-full"
    >
      <GlassCard
        className="
          h-full
          transition-all
          duration-300
          hover:border-cyan-400/30
        "
      >
        <h3 className="text-3xl font-bold text-white">
          Send a Message
        </h3>

        <p className="mt-3 leading-7 text-gray-400 lg:leading-8">
          Have an opportunity, collaboration, or procurement project in mind?
          Fill out the form below and I'll get back to you as soon as possible.
        </p>

        <form
          noValidate
          className="mt-10 space-y-6"
        >
          <Input
            id="name"
            name="name"
            label="Full Name"
            type="text"
            placeholder="John Smith"
            autoComplete="name"
          />

          <Input
            id="email"
            name="email"
            label="Email Address"
            type="email"
            placeholder="john@example.com"
            autoComplete="email"
          />

          <Input
            id="subject"
            name="subject"
            label="Subject"
            type="text"
            placeholder="Procurement Opportunity"
          />

          <div>
            <label
              htmlFor="message"
              className="mb-3 block text-sm font-medium text-gray-300"
            >
              Message
            </label>

            <textarea
              id="message"
              name="message"
              rows={6}
              required
              placeholder="Tell me about your project..."
              className="
                w-full
                rounded-2xl
                border
                border-cyan-400/15
                bg-[#0d1727]
                px-5
                py-4
                text-base
                text-white
                placeholder:text-gray-500
                outline-none
                transition-all
                duration-300
                focus:border-cyan-400
                focus:ring-2
                focus:ring-cyan-500/20
              "
            />
          </div>

          <button
            type="submit"
            aria-label="Send Message"
            className="
              inline-flex
              items-center
              gap-3
              rounded-xl
              bg-gradient-to-r
              from-cyan-500
              to-blue-600
              px-7
              py-4
              font-semibold
              text-white
              transition-all
              duration-300
              hover:scale-105
              hover:shadow-[0_0_30px_rgba(34,211,238,.25)]
            "
          >
            <Send
              size={18}
              aria-hidden="true"
            />

            Send Message
          </button>
        </form>
      </GlassCard>
    </motion.div>
  );
}

interface InputProps {
  id: string;
  name: string;
  label: string;
  type: React.HTMLInputTypeAttribute;
  placeholder: string;
  autoComplete?: string;
}

function Input({
  id,
  name,
  label,
  type,
  placeholder,
  autoComplete,
}: InputProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-3 block text-sm font-medium text-gray-300"
      >
        {label}
      </label>

      <input
        id={id}
        name={name}
        type={type}
        required
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="
          w-full
          rounded-2xl
          border
          border-cyan-400/15
          bg-[#0d1727]
          px-5
          py-4
          text-base
          text-white
          placeholder:text-gray-500
          outline-none
          transition-all
          duration-300
          focus:border-cyan-400
          focus:ring-2
          focus:ring-cyan-500/20
        "
      />
    </div>
  );
}