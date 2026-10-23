import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function BrandStatement() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="brand-statement"
      className="relative bg-[#F5F2EB] text-[#171918] py-16 sm:py-28 lg:py-36 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Identifier & Micro Eyebrow */}
        <div className="flex items-center justify-between pb-6 sm:pb-8 border-b border-[#171918]/15 mb-10 sm:mb-16">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <span className="text-[11px] sm:text-xs font-mono font-medium text-[#171918]/60">
              01 // STATEMENT
            </span>
            <span className="w-8 sm:w-12 h-[1px] bg-[#171918]/30" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-medium text-[#171918]/80">
              Philosophy & Intent
            </span>
          </div>

          <span className="text-xs font-mono text-[#171918]/40 hidden sm:inline">
            EST. MODERN PERSPECTIVE
          </span>
        </div>

        {/* Editorial Split Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left Column: Large Editorial Statement */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-8">
            <div className="overflow-hidden">
              <motion.h2
                initial={shouldReduceMotion ? {} : { opacity: 0, y: "100%" }}
                whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-2xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.15] sm:leading-[1.12] text-[#171918]"
              >
                More than a structure. <br />
                <span className="italic font-normal text-[#C5AD83] drop-shadow-xs">
                  A better way to live.
                </span>
              </motion.h2>
            </div>

            <motion.p
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 15 }}
              whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm sm:text-lg text-[#252824]/85 font-light leading-relaxed max-w-xl"
            >
              At Vihaan Traders, architecture is not an exercise in decorative
              excess. It is the deliberate calibration of space, material density,
              natural ventilation, and daylight. We develop properties that respect
              their context, age gracefully, and elevate the daily rituals of the
              people who inhabit them.
            </motion.p>

            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 10 }}
              whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="pt-2"
            >
              <Link
                to="/about"
                className="group inline-flex items-center gap-2.5 text-xs uppercase tracking-[0.22em] font-medium text-[#171918] hover:text-[#C5AD83] transition-colors py-1"
              >
                <span>Read Our Full Philosophy</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Tactile Materiality & Architectural Detail Visual */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.96 }}
              whileInView={shouldReduceMotion ? {} : { opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/3] sm:aspect-[4/5] overflow-hidden bg-[#E5E0D6] shadow-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80"
                alt="Architectural concrete and sunlight texture"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />

              {/* Material Detail Overlay Badge */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 p-3 sm:p-4 bg-[#171918]/90 backdrop-blur-xs text-[#F5F2EB] border border-white/10">
                <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.25em] text-[#C5AD83] block">
                  Material Study
                </span>
                <span className="font-serif text-xs sm:text-sm tracking-wide mt-0.5 block">
                  Honed Travertine & Low-Iron Acoustic Glazing
                </span>
              </div>
            </motion.div>

            {/* Subtle background offset frame */}
            <div className="absolute -top-4 -right-4 w-full h-full border border-[#171918]/15 -z-10 pointer-events-none hidden sm:block" />
          </div>
        </div>
      </div>
    </section>
  );
}
