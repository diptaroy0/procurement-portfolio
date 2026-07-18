"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function ContactForm() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 40,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
      }}
      className="
        rounded-[32px]
        border
        border-cyan-400/15
        bg-[rgba(15,23,42,.72)]
        p-10
        backdrop-blur-2xl
        shadow-[0_20px_60px_rgba(0,0,0,.45)]
      "
    >
      <h3 className="text-3xl font-bold text-white">
        Send a Message
      </h3>

      <p className="mt-3 leading-8 text-gray-400">
        Have an opportunity or project in mind? Fill out the form below and I'll
        get back to you as soon as possible.
      </p>

      <form
        noValidate
        className="mt-10 space-y-6"
      >
        {/* Name */}

        <Input
          id="name"
          name="name"
          label="Full Name"
          type="text"
          placeholder="John Smith"
          autoComplete="name"
        />

        {/* Email */}

        <Input
          id="email"
          name="email"
          label="Email Address"
          type="email"
          placeholder="john@example.com"
          autoComplete="email"
        />

        {/* Subject */}

        <Input
          id="subject"
          name="subject"
          label="Subject"
          type="text"
          placeholder="Procurement Opportunity"
          autoComplete="off"
        />

        {/* Message */}

        <div>
          <label
            htmlFor="message"
            className="mb-3 block text-sm text-gray-300"
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
              text-white
              placeholder:text-gray-500
              outline-none
              transition
              focus:border-cyan-400
              focus:ring-2
              focus:ring-cyan-500/20
            "
          />
        </div>

        {/* Submit */}

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
            focusable="false"
          />

          Send Message
        </button>
      </form>
    </motion.div>
  );
}

function Input({
  id,
  name,
  label,
  type,
  placeholder,
  autoComplete,
}: {
  id: string;
  name: string;
  label: string;
  type: string;
  placeholder: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-3 block text-sm text-gray-300"
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
          text-white
          placeholder:text-gray-500
          outline-none
          transition
          focus:border-cyan-400
          focus:ring-2
          focus:ring-cyan-500/20
        "
      />
    </div>
  );
}