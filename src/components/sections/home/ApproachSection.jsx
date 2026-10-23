import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import SectionHeading from "../../ui/SectionHeading";
import { siteConfig } from "../../../data/siteData";

export default function ApproachSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const activeItem = siteConfig.approaches[activeIndex] || siteConfig.approaches[0];

  return (
    <section className="relative bg-[#171918] text-[#F5F2EB] py-20 sm:py-28 lg:py-36 overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <div className="mb-12 sm:mb-16">
          <SectionHeading
            eyebrow="04 // APPROACH"
            title="Good spaces begin with better thinking."
            subtitle="Our methodology prioritizes site topography, material permanence, and acoustic well-being over transient design trends."
          />
        </div>

        {/* Editorial Interactive List Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left Column: Interactive Editorial Rows */}
          <div className="lg:col-span-7 divide-y divide-white/10">
            {siteConfig.approaches.map((item, idx) => {
              const isActive = activeIndex === idx;
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveIndex(idx)}
                  onMouseEnter={() => setActiveIndex(idx)}
                  onFocus={() => setActiveIndex(idx)}
                  tabIndex={0}
                  className={`py-6 sm:py-8 group cursor-pointer transition-all duration-300 focus:outline-none focus-visible:bg-white/5 ${
                    isActive ? "opacity-100" : "opacity-55 hover:opacity-90"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-baseline gap-4 sm:gap-8">
                      <span
                        className={`font-mono text-xs sm:text-base transition-colors ${
                          isActive ? "text-[#C5AD83]" : "text-[#92928A]"
                        }`}
                      >
                        {item.id}
                      </span>
                      <div>
                        <h3
                          className={`font-serif text-xl sm:text-3xl lg:text-4xl transition-colors duration-300 ${
                            isActive
                              ? "text-[#F5F2EB]"
                              : "text-[#F5F2EB]/80 group-hover:text-[#F5F2EB]"
                          }`}
                        >
                          {item.title}
                        </h3>
                        <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#C5AD83] mt-1 font-medium">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="shrink-0 pt-1">
                      <ArrowUpRight
                        className={`hidden sm:block w-5 h-5 transition-all duration-300 ${
                          isActive
                            ? "text-[#C5AD83] translate-x-1 -translate-y-1"
                            : "text-[#92928A] opacity-0 group-hover:opacity-100"
                        }`}
                      />
                      <ChevronDown
                        className={`sm:hidden w-4 h-4 text-[#C5AD83] transition-transform duration-300 ${
                          isActive ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </div>

                  {/* Expandable description on mobile or active */}
                  <motion.div
                    animate={
                      isActive
                        ? { opacity: 1, height: "auto", marginTop: 14 }
                        : { opacity: 0, height: 0, marginTop: 0 }
                    }
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden sm:pl-16 space-y-4"
                  >
                    <p className="text-xs sm:text-base text-[#92928A] font-light leading-relaxed max-w-xl">
                      {item.description}
                    </p>

                    {/* Mobile Contextual Image Preview */}
                    <div className="lg:hidden aspect-[16/9] w-full overflow-hidden border border-white/10 bg-[#252824] shadow-md">
                      <img
                        src={item.image}
                        alt={item.alt}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Architectural Context Visual (Desktop) */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="relative aspect-[4/5] overflow-hidden bg-[#252824] border border-white/10 shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeItem.id}
                  initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full relative"
                >
                  <img
                    src={activeItem.image}
                    alt={activeItem.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171918] via-transparent to-transparent opacity-60" />

                  {/* Visual Caption Bar */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#171918]/85 backdrop-blur-xs border border-white/10">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#C5AD83] block">
                      Architectural Study // {activeItem.id}
                    </span>
                    <span className="font-serif text-sm text-[#F5F2EB] mt-0.5 block">
                      {activeItem.title}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
