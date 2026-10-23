import React from "react";
import { motion, useReducedMotion } from "motion/react";

export default function Marquee({
  items = [
    "THOUGHTFUL DESIGN",
    "LASTING VALUE",
    "CONSIDERED ARCHITECTURE",
    "BETTER SPACES",
    "TACTILE MATERIALITY",
    "ENDURING FORM",
  ],
  speed = 40,
  separator = "—",
  className = "",
}) {
  const shouldReduceMotion = useReducedMotion();

  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <div
      className={`relative w-full overflow-hidden border-y border-white/10 bg-[#171918] py-6 sm:py-8 select-none ${className}`}
      aria-label="Brand statement ticker"
    >
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#171918] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#171918] to-transparent z-10 pointer-events-none" />

      {shouldReduceMotion ? (
        <div className="flex gap-8 justify-center flex-wrap px-6 text-center">
          {items.map((item, idx) => (
            <span
              key={idx}
              className="font-serif text-lg sm:text-xl text-[#F5F2EB]/80 uppercase tracking-widest"
            >
              {item} {idx !== items.length - 1 && separator}
            </span>
          ))}
        </div>
      ) : (
        <motion.div
          className="flex whitespace-nowrap will-change-transform"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {repeatedItems.map((item, idx) => (
            <div key={idx} className="inline-flex items-center mx-4 sm:mx-8">
              <span className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#F5F2EB]/85 hover:text-[#C5AD83] transition-colors duration-300 tracking-wider">
                {item}
              </span>
              <span className="ml-4 sm:ml-8 text-[#C5AD83]/60 text-sm font-light">
                {separator}
              </span>
            </div>
          ))}
        </motion.div>
      )}
    </div>
  );
}
