import React from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import Button from "../../ui/Button";

export default function PeoplePurpose() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative bg-[#F5F2EB] text-[#171918] py-16 sm:py-28 lg:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left Column: Image with offset frame */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.96 }}
              whileInView={shouldReduceMotion ? {} : { opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/3] sm:aspect-[3/4] overflow-hidden bg-[#E5E0D6] shadow-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80"
                alt="Architectural space bathed in natural light"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>

            {/* Architectural Grid Accent */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-[#171918]/20 -z-10 pointer-events-none hidden sm:block" />
          </div>

          {/* Right Column: Narrative and Brand Intent */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-8 order-1 lg:order-2">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <span className="text-[11px] sm:text-xs font-mono font-medium text-[#171918]/60">
                05 // PURPOSE
              </span>
              <span className="w-8 sm:w-12 h-[1px] bg-[#171918]/30" />
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-medium text-[#171918]/80">
                Development Integrity
              </span>
            </div>

            <div className="overflow-hidden">
              <motion.h2
                initial={shouldReduceMotion ? {} : { opacity: 0, y: "100%" }}
                whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-2xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.12] text-[#171918]"
              >
                Building with a <br />
                <span className="italic font-normal text-[#C5AD83]">longer view.</span>
              </motion.h2>
            </div>

            <p className="text-sm sm:text-lg text-[#252824]/85 font-light leading-relaxed max-w-xl">
              Vihaan Traders was founded on the conviction that real estate development
              demands architectural conscience. Rather than racing for rapid turnover,
              we invest heavily in spatial proportion, enduring structural materiality,
              and environmental intelligence.
            </p>

            <p className="text-xs sm:text-base text-[#252824]/70 font-light leading-relaxed max-w-xl">
              Our multidisciplinary collaboration brings together visionary masterplanners,
              landscape ecologists, and structural artisans to ensure each project
              adds lasting civic value to its neighborhood.
            </p>

            <div className="pt-2">
              <Button to="/about" variant="secondary" size="md" fullWidthMobile>
                Learn About Our Studio
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
