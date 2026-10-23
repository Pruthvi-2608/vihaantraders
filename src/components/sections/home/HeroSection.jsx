import React from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, ArrowUpRight, Compass, ShieldCheck } from "lucide-react";
import Button from "../../ui/Button";
import { siteConfig } from "../../../data/siteData";

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const lineVariants = {
    hidden: { opacity: 0, y: "100%" },
    visible: {
      opacity: 1,
      y: "0%",
      transition: {
        duration: 0.85,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-[#171918] pt-24 sm:pt-28 pb-16 sm:pb-20">
      {/* Cinematic Architectural Background Image with Mask and Subtle Parallax */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={shouldReduceMotion ? { scale: 1, opacity: 0.7 } : { scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.65 }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full"
        >
          <img
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2000&q=85"
            alt="Vihaan Traders contemporary architectural development facade"
            className="w-full h-full object-cover object-center filter brightness-[0.72] contrast-[1.08]"
            loading="eager"
            fetchPriority="high"
          />
        </motion.div>

        {/* Multi-layered architectural gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#171918] via-[#171918]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#171918]/90 via-[#171918]/40 to-transparent" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full pt-8 sm:pt-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Eyebrow / Location badge */}
          <motion.div variants={fadeUpVariants} className="flex items-center gap-2.5 sm:gap-3 mb-5 sm:mb-6">
            <span className="w-6 sm:w-8 h-[1px] bg-[#C5AD83]" />
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] sm:tracking-[0.28em] text-[#C5AD83] font-medium">
              {siteConfig.heroEyebrow}
            </span>
          </motion.div>

          {/* Masked Headline Reveal */}
          <div className="mb-5 sm:mb-6 space-y-1">
            <div className="overflow-hidden">
              <motion.h1
                variants={lineVariants}
                className="font-serif text-3xl sm:text-6xl md:text-7xl lg:text-[5.25rem] tracking-tight leading-[1.08] sm:leading-[1.05] text-[#F5F2EB]"
              >
                Built for the way
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                variants={lineVariants}
                className="font-serif text-3xl sm:text-6xl md:text-7xl lg:text-[5.25rem] tracking-tight leading-[1.08] sm:leading-[1.05] text-[#C5AD83] italic"
              >
                we live next.
              </motion.h1>
            </div>
          </div>

          {/* Supporting Narrative */}
          <motion.p
            variants={fadeUpVariants}
            className="text-sm sm:text-lg md:text-xl text-[#F5F2EB]/85 max-w-2xl font-light leading-relaxed mb-8 sm:mb-10"
          >
            {siteConfig.subtagline} High-performance residences and civic developments
            grounded in material authenticity and environmental harmony.
          </motion.p>

          {/* Dual Call-to-Action (stacked on mobile for comfortable thumb access) */}
          <motion.div
            variants={fadeUpVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-6"
          >
            <Button to="/projects" variant="primary" size="lg" fullWidthMobile>
              Explore Our Projects
            </Button>
            <Button to="/about" variant="outline" size="lg" fullWidthMobile>
              Discover Vihaan Traders
            </Button>
          </motion.div>
        </motion.div>

        {/* Lower Metadata & Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-14 sm:mt-20 pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 text-xs text-[#92928A]"
        >
          <div className="flex flex-wrap items-center gap-3 sm:gap-6">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Compass className="w-3.5 h-3.5 text-[#C5AD83]" />
              <span className="tracking-widest uppercase text-[10px] sm:text-xs">
                Mumbai & Coastal Enclaves
              </span>
            </div>
            <span className="text-white/20">|</span>
            <span className="tracking-widest uppercase text-[10px] sm:text-xs">
              Curated Portfolio
            </span>
          </div>

          <a
            href="#brand-statement"
            className="group inline-flex items-center gap-2 sm:gap-3 text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#F5F2EB]/70 hover:text-[#C5AD83] transition-colors cursor-pointer py-1"
          >
            <span>{siteConfig.scrollCta}</span>
            <motion.div
              animate={shouldReduceMotion ? {} : { y: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            >
              <ArrowDown className="w-3.5 h-3.5 text-[#C5AD83]" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
