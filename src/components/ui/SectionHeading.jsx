import React from "react";
import { motion, useReducedMotion } from "motion/react";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left", // 'left' | 'center'
  theme = "dark", // 'dark' (on obsidian/graphite) | 'light' (on ivory/stone)
  className = "",
}) {
  const shouldReduceMotion = useReducedMotion();

  const isLight = theme === "light";
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col ${alignClass} ${className}`}>
      {eyebrow && (
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 12 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 mb-4"
        >
          <span className={`w-6 h-[1px] ${isLight ? "bg-[#171918]/30" : "bg-[#C5AD83]"}`} />
          <span
            className={`text-[11px] uppercase tracking-[0.25em] font-medium ${
              isLight ? "text-[#171918]/70" : "text-[#C5AD83]"
            }`}
          >
            {eyebrow}
          </span>
        </motion.div>
      )}

      <div className="overflow-hidden">
        <motion.h2
          initial={shouldReduceMotion ? {} : { opacity: 0, y: "100%" }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
          className={`font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.08] ${
            isLight ? "text-[#171918]" : "text-[#F5F2EB]"
          }`}
        >
          {title}
        </motion.h2>
      </div>

      {subtitle && (
        <motion.p
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className={`mt-4 text-sm sm:text-base md:text-lg max-w-2xl font-light leading-relaxed ${
            isLight ? "text-[#252824]/80" : "text-[#92928A]"
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
