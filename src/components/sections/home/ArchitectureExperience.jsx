import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "../../ui/SectionHeading";

export default function ArchitectureExperience() {
  const [activeStage, setActiveStage] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const stages = [
    {
      id: "01",
      title: "Topography & Sunlight Vectoring",
      subtitle: "Orientation Analysis",
      description:
        "Before laying the foundation, our computational solar studies map hourly sun exposure and coastal breeze trajectories across 365 days to position every primary living zone.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
      metric: "365-Day Solar Modeling",
      detail: "Microclimate Alignment",
    },
    {
      id: "02",
      title: "Structural Monolith & Formwork",
      subtitle: "Material Integrity",
      description:
        "Using hand-hewn board-formed concrete and indigenous basalt, the structural skeleton rises with rhythmic honesty. Thermal massing naturally stabilizes internal temperatures.",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85",
      metric: "STC 55 Acoustic Massing",
      detail: "Board-Formed Concrete",
    },
    {
      id: "03",
      title: "Aerodynamic Louvers & Glazing",
      subtitle: "The Environmental Skin",
      description:
        "High-performance acoustic curtain walls with custom champagne-bronzed solar fins deflect monsoon shear winds and ambient city noise, crafting an acoustic sanctuary within.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85",
      metric: "Low-E Double Glazing",
      detail: "Aerodynamic Deflection",
    },
    {
      id: "04",
      title: "The Finished Living Sanctuary",
      subtitle: "Atmospheric Presence",
      description:
        "The completed realization—where raw materials yield to human touch. Natural water reflections, double-height volumes, and seamless thresholds celebrate modern existence.",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=85",
      metric: "Generational Longevity",
      detail: "Spatial Well-Being",
    },
  ];

  const current = stages[activeStage];

  const handlePrev = () => {
    setActiveStage((prev) => (prev === 0 ? stages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveStage((prev) => (prev === stages.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative bg-[#252824] text-[#F5F2EB] py-20 sm:py-28 lg:py-36 overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 gap-4 sm:gap-6">
          <SectionHeading
            eyebrow="03 // SIGNATURE EXPERIENCE"
            title="From vision to form."
            subtitle="Explore how Vihaan Traders choreographs architecture from raw geological terrain into elevated sanctuaries."
          />

          <div className="flex items-center justify-between sm:justify-end gap-3 font-mono text-xs text-[#C5AD83] border-t sm:border-t-0 border-white/10 pt-3 sm:pt-0">
            <span>STAGE {current.id}</span>
            <span className="text-white/20">/</span>
            <span className="text-[#92928A]">04</span>

            {/* Mobile Prev / Next Buttons */}
            <div className="flex items-center gap-1.5 sm:hidden ml-auto">
              <button
                onClick={handlePrev}
                className="p-2 border border-white/15 bg-[#171918] active:bg-[#C5AD83] active:text-[#171918] text-[#F5F2EB]"
                aria-label="Previous architectural stage"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="p-2 border border-white/15 bg-[#171918] active:bg-[#C5AD83] active:text-[#171918] text-[#F5F2EB]"
                aria-label="Next architectural stage"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Horizontal Stage Selector Pills */}
        <div className="lg:hidden flex gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none no-scrollbar">
          {stages.map((st, idx) => (
            <button
              key={st.id}
              onClick={() => setActiveStage(idx)}
              className={`shrink-0 px-3.5 py-2 text-xs font-mono tracking-wider border transition-colors ${
                activeStage === idx
                  ? "bg-[#C5AD83] text-[#171918] border-[#C5AD83]"
                  : "bg-[#171918] text-[#92928A] border-white/10"
              }`}
            >
              {st.id} // {st.subtitle}
            </button>
          ))}
        </div>

        {/* Interactive Experience Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Visual Canvas */}
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden bg-[#171918] border border-white/15 shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full relative"
                >
                  <img
                    src={current.image}
                    alt={current.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171918] via-transparent to-transparent opacity-75" />

                  {/* Stage Floating HUD Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs backdrop-blur-md bg-[#171918]/85 p-3 sm:p-4 border border-white/10">
                    <div>
                      <span className="text-[9px] sm:text-[10px] uppercase font-mono tracking-widest text-[#C5AD83] block">
                        Engineering Focus
                      </span>
                      <span className="font-serif text-xs sm:text-sm text-[#F5F2EB] mt-0.5 block line-clamp-1">
                        {current.detail}
                      </span>
                    </div>

                    <div className="sm:text-right border-t sm:border-t-0 border-white/10 pt-1.5 sm:pt-0">
                      <span className="text-[9px] sm:text-[10px] uppercase font-mono tracking-widest text-[#92928A] block">
                        Specification
                      </span>
                      <span className="font-mono text-[11px] sm:text-xs text-[#C5AD83] mt-0.5 block">
                        {current.metric}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Stage Progress Bar */}
            <div className="mt-3 sm:mt-4 flex gap-1.5 sm:gap-2">
              {stages.map((st, idx) => (
                <button
                  key={st.id}
                  onClick={() => setActiveStage(idx)}
                  className={`h-1 flex-1 transition-all duration-300 cursor-pointer ${
                    activeStage === idx ? "bg-[#C5AD83]" : "bg-white/15 hover:bg-white/30"
                  }`}
                  aria-label={`Select stage ${st.id}`}
                />
              ))}
            </div>

            {/* Mobile Description card */}
            <div className="lg:hidden mt-4 p-4 bg-[#171918] border border-white/10">
              <h4 className="font-serif text-lg text-[#F5F2EB]">
                {current.title}
              </h4>
              <p className="mt-2 text-xs text-[#92928A] font-light leading-relaxed">
                {current.description}
              </p>
            </div>
          </div>

          {/* Right Column: Stage Navigation (Desktop) */}
          <div className="hidden lg:flex lg:col-span-5 flex-col justify-between space-y-4">
            {stages.map((st, idx) => {
              const isActive = activeStage === idx;
              return (
                <button
                  key={st.id}
                  onClick={() => setActiveStage(idx)}
                  className={`w-full text-left p-5 transition-all duration-300 border cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C5AD83] ${
                    isActive
                      ? "bg-[#171918] border-[#C5AD83] shadow-lg"
                      : "bg-transparent border-white/5 hover:border-white/20 opacity-70 hover:opacity-100"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-xs font-mono font-medium tracking-widest ${
                        isActive ? "text-[#C5AD83]" : "text-[#92928A]"
                      }`}
                    >
                      {st.id} // {st.subtitle}
                    </span>
                    {isActive && <Sparkles className="w-3.5 h-3.5 text-[#C5AD83]" />}
                  </div>

                  <h4
                    className={`font-serif text-xl mt-1.5 transition-colors ${
                      isActive ? "text-[#F5F2EB]" : "text-[#92928A]"
                    }`}
                  >
                    {st.title}
                  </h4>

                  {isActive && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-3 text-sm text-[#92928A] font-light leading-relaxed"
                    >
                      {st.description}
                    </motion.p>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
