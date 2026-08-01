"use client";


import { highlights } from "./highlights";

export default function AboutHighlights() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {highlights.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="
              group
              relative
              overflow-hidden
              rounded-3xl
              border
              border-cyan-400/15
              bg-[rgba(15,23,42,.78)]
              p-6
              backdrop-blur-2xl
              transition-all
              duration-300
              hover:border-cyan-400/40
              hover:shadow-[0_0_35px_rgba(34,211,238,.18)]
            "
          >
            {/* Hover Glow */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-br
                from-cyan-500/0
                via-cyan-400/5
                to-blue-500/0
                opacity-0
                transition-opacity
                duration-300
                group-hover:opacity-100
              "
            />

            <div className="relative">

              {/* Icon */}

              <div
                className={`
                  mb-6
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-gradient-to-br
                  ${item.color}
                  text-cyan-400
                  transition-all
                  duration-300
                  group-hover:rotate-6
                  group-hover:scale-110
                `}
              >
                <Icon
                  size={24}
                  aria-hidden="true"
                />
              </div>

              {/* Value */}

              <p
                className="
                  text-3xl
                  font-black
                  tracking-tight
                  text-white
                  transition-colors
                  duration-300
                  group-hover:text-cyan-300
                "
              >
                {item.value}
              </p>

              {/* Divider */}

              <div
                className="
                  mt-4
                  h-px
                  w-14
                  bg-gradient-to-r
                  from-cyan-400
                  to-transparent
                "
              />

              {/* Title */}

              <p
                className="
                  mt-4
                  text-sm
                  leading-6
                  text-gray-400
                "
              >
                {item.title}
              </p>

            </div>
          </div>
        );
      })}
    </div>
  );
}
