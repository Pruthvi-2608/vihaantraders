import React from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "../components/ui/SectionHeading";
import Button from "../components/ui/Button";

export default function About() {
  const shouldReduceMotion = useReducedMotion();

  const values = [
    {
      title: "Contextual Sensitivity",
      description:
        "Every development begins by listening to the topography, sun path, and cultural microclimate of the site. We avoid generic templates in favor of authentic site-specific architecture.",
    },
    {
      title: "Material Permanence",
      description:
        "We specify tactile, honest materials—hand-dressed stone, board-formed concrete, structural timber, and low-iron acoustic glass—engineered to patinate with dignity over decades.",
    },
    {
      title: "Acoustic & Environmental Sanctuary",
      description:
        "True luxury is silence and clean air. Our engineering teams prioritize high-performance facade insulation, STC-rated sound barriers, and natural cross-ventilation corridors.",
    },
    {
      title: "Generational Value",
      description:
        "We view real estate development as a multi-generational commitment. Our developments are planned to adapt gracefully to future lifestyle dynamics and climate realities.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#171918] text-[#F5F2EB] pt-24 sm:pt-32 pb-24 sm:pb-28">
      {/* 01: Hero Statement */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pb-12 sm:pb-20 border-b border-white/10">
        <SectionHeading
          eyebrow="ABOUT VIHAAN TRADERS"
          title="Building with intent."
          subtitle="A design-conscious real estate development studio dedicated to architectural integrity, material honesty, and human-centric living spaces."
        />

        {/* Cinematic Panoramic Image */}
        <div className="mt-8 sm:mt-14 relative aspect-[16/9] sm:aspect-[21/9] overflow-hidden bg-[#252824] border border-white/10 shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85"
            alt="Vihaan Traders architectural vision and construction craftsmanship"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#171918] via-transparent to-transparent opacity-60" />
        </div>
      </section>

      {/* 02: Company Overview & Philosophy */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            <span className="text-xs uppercase font-mono tracking-widest text-[#C5AD83]">
              ORIGIN & PHILOSOPHY
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-[#F5F2EB] leading-tight">
              An architectural response to rapid urbanization.
            </h2>
            <div className="p-5 sm:p-6 bg-[#252824] border border-white/10 text-xs text-[#92928A] space-y-2">
              <span className="text-[#C5AD83] font-mono uppercase block">
                Studio Charter
              </span>
              <p>
                To develop living and working environments where spatial beauty,
                environmental responsibility, and commercial durability coexist.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-xs sm:text-base text-[#92928A] font-light leading-relaxed">
            <p>
              Vihaan Traders was conceived around a fundamental premise: that contemporary
              real estate often substitutes speed and superficial finishes for architectural
              permanence. We chose a different path.
            </p>
            <p>
              Our portfolio comprises a deliberately curated selection of boutique
              villas, sky residences, and commercial hubs. By limiting concurrent
              projects, our leadership and technical directors remain intimately
              involved with every facet of spatial choreography—from structural
              engineering reviews to final stonemasonry inspections.
            </p>
            <p>
              We collaborate with world-class architects, MEP engineers, and landscape
              ecologists who share our refusal to compromise on spatial proportion,
              acoustic privacy, and environmental efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* 03: Four Architectural Pillars */}
      <section className="py-16 sm:py-24 bg-[#252824] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="mb-10 sm:mb-16">
            <SectionHeading
              eyebrow="CORE PRINCIPLES"
              title="The Vihaan standard."
              subtitle="The non-negotiable principles that govern every land parcel we acquire and every blueprint we execute."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            {values.map((val, idx) => (
              <div
                key={idx}
                className="bg-[#171918] border border-white/10 p-6 sm:p-10 space-y-3 sm:space-y-4"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-[#C5AD83]">0{idx + 1}</span>
                  <span className="w-6 sm:w-8 h-[1px] bg-white/15" />
                  <h3 className="font-serif text-lg sm:text-2xl text-[#F5F2EB]">
                    {val.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#92928A] font-light leading-relaxed pl-8 sm:pl-12">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04: Development Leadership & Advisory Vision */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
            <span className="text-xs uppercase font-mono tracking-widest text-[#C5AD83]">
              STUDIO PERSPECTIVE
            </span>
            <h2 className="font-serif text-2xl sm:text-5xl text-[#F5F2EB] leading-tight">
              Curated by design. Executed with precision.
            </h2>
            <p className="text-xs sm:text-base text-[#92928A] font-light leading-relaxed">
              Vihaan Traders brings together professionals across property acquisition,
              computational architecture, and structural engineering. Our team operates
              with transparency and discretion, building long-standing relationships
              with discerning homeowners and institutional capital partners.
            </p>
            <div className="pt-2">
              <Button to="/contact" variant="primary" size="md" fullWidthMobile>
                Initiate a Conversation
              </Button>
            </div>
          </div>

          <div className="lg:col-span-6 relative aspect-[16/10] sm:aspect-[4/3] bg-[#252824] border border-white/10 overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80"
              alt="Architectural studio planning consultation"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
