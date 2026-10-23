import React from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, MapPin } from "lucide-react";
import SectionHeading from "../../ui/SectionHeading";
import Badge from "../../ui/Badge";
import Button from "../../ui/Button";
import { projects } from "../../../data/projects";

export default function FeaturedProjects() {
  const shouldReduceMotion = useReducedMotion();

  // Curate 3 varied featured developments
  const primaryFeatured = projects[0]; // The Lumina Residences (large)
  const secondaryFeatured = projects[1]; // The Atelier House (tall portrait)
  const tertiaryFeatured = projects[2]; // Vihaan One Mixed-Use (wide panoramic)

  return (
    <section className="relative bg-[#171918] py-20 sm:py-28 lg:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 gap-6">
          <SectionHeading
            eyebrow="02 // PORTFOLIO"
            title="Spaces with a point of view."
            subtitle="Explore the developments, places, and possibilities taking shape through Vihaan Traders."
          />

          <div className="shrink-0 w-full md:w-auto">
            <Button to="/projects" variant="outline" size="md" fullWidthMobile>
              View All 6 Developments
            </Button>
          </div>
        </div>

        {/* Asymmetrical Architectural Layout */}
        <div className="space-y-8 sm:space-y-12 lg:space-y-16">
          {/* Row 1: Split composition with 1 Large Featured + 1 Tall Bespoke */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-stretch">
            {/* Primary Featured Card (Span 7 cols) */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 25 }}
              whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 group flex flex-col justify-between bg-[#252824] border border-white/10 hover:border-[#C5AD83]/50 transition-colors duration-500 overflow-hidden"
            >
              <Link
                to={`/projects/${primaryFeatured.slug}`}
                className="block relative aspect-[16/10] overflow-hidden"
              >
                <img
                  src={primaryFeatured.heroImage}
                  alt={primaryFeatured.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171918] via-transparent to-transparent opacity-60" />

                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex gap-2">
                  <Badge variant="champagne">{primaryFeatured.category}</Badge>
                  <Badge variant="stone">{primaryFeatured.status}</Badge>
                </div>
              </Link>

              <div className="p-5 sm:p-8 flex flex-col justify-between grow">
                <div>
                  <div className="flex items-center gap-1.5 sm:gap-2 text-xs text-[#92928A] mb-1.5 sm:mb-2">
                    <MapPin className="w-3.5 h-3.5 text-[#C5AD83]" />
                    <span className="line-clamp-1">{primaryFeatured.location}</span>
                  </div>
                  <h3 className="font-serif text-xl sm:text-3xl text-[#F5F2EB] group-hover:text-[#C5AD83] transition-colors duration-300">
                    {primaryFeatured.name}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#92928A] font-light line-clamp-2">
                    {primaryFeatured.summary}
                  </p>
                </div>

                <div className="mt-5 sm:mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-[#C5AD83]">
                    {primaryFeatured.accentMetric}
                  </span>
                  <Link
                    to={`/projects/${primaryFeatured.slug}`}
                    className="inline-flex items-center gap-1.5 sm:gap-2 text-xs uppercase tracking-[0.2em] font-medium text-[#F5F2EB] group-hover:text-[#C5AD83] transition-colors py-1"
                  >
                    <span>Explore Project</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Secondary Featured Card (Span 5 cols) */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 25 }}
              whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 group flex flex-col justify-between bg-[#252824] border border-white/10 hover:border-[#C5AD83]/50 transition-colors duration-500 overflow-hidden"
            >
              <Link
                to={`/projects/${secondaryFeatured.slug}`}
                className="block relative aspect-[16/10] lg:aspect-[4/3] overflow-hidden"
              >
                <img
                  src={secondaryFeatured.heroImage}
                  alt={secondaryFeatured.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171918] via-transparent to-transparent opacity-60" />

                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex gap-2">
                  <Badge variant="champagne">{secondaryFeatured.category}</Badge>
                  <Badge variant="stone">{secondaryFeatured.status}</Badge>
                </div>
              </Link>

              <div className="p-5 sm:p-8 flex flex-col justify-between grow">
                <div>
                  <div className="flex items-center gap-1.5 sm:gap-2 text-xs text-[#92928A] mb-1.5 sm:mb-2">
                    <MapPin className="w-3.5 h-3.5 text-[#C5AD83]" />
                    <span className="line-clamp-1">{secondaryFeatured.location}</span>
                  </div>
                  <h3 className="font-serif text-xl sm:text-3xl text-[#F5F2EB] group-hover:text-[#C5AD83] transition-colors duration-300">
                    {secondaryFeatured.name}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#92928A] font-light line-clamp-2">
                    {secondaryFeatured.summary}
                  </p>
                </div>

                <div className="mt-5 sm:mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-[#C5AD83]">
                    {secondaryFeatured.accentMetric}
                  </span>
                  <Link
                    to={`/projects/${secondaryFeatured.slug}`}
                    className="inline-flex items-center gap-1.5 sm:gap-2 text-xs uppercase tracking-[0.2em] font-medium text-[#F5F2EB] group-hover:text-[#C5AD83] transition-colors py-1"
                  >
                    <span>Explore Project</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Row 2: Wide Panoramic Mixed-Use Showcase (Full 12 cols) */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 25 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="group relative bg-[#252824] border border-white/10 hover:border-[#C5AD83]/50 transition-colors duration-500 overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-[16/9] overflow-hidden">
                <img
                  src={tertiaryFeatured.heroImage}
                  alt={tertiaryFeatured.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#252824] hidden lg:block opacity-80" />
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex gap-2">
                  <Badge variant="champagne">{tertiaryFeatured.category}</Badge>
                  <Badge variant="stone">{tertiaryFeatured.status}</Badge>
                </div>
              </div>

              <div className="lg:col-span-5 p-5 sm:p-10 lg:p-12 space-y-4 sm:space-y-6">
                <div>
                  <div className="flex items-center gap-1.5 sm:gap-2 text-xs text-[#92928A] mb-1.5 sm:mb-2">
                    <MapPin className="w-3.5 h-3.5 text-[#C5AD83]" />
                    <span className="line-clamp-1">{tertiaryFeatured.location}</span>
                  </div>
                  <h3 className="font-serif text-xl sm:text-4xl text-[#F5F2EB] group-hover:text-[#C5AD83] transition-colors duration-300">
                    {tertiaryFeatured.name}
                  </h3>
                  <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-[#92928A] font-light leading-relaxed">
                    {tertiaryFeatured.summary}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:gap-4 py-3 sm:py-4 border-y border-white/10 text-xs">
                  <div>
                    <span className="text-[#92928A] block text-[10px] sm:text-xs">Scale</span>
                    <span className="font-mono text-[#F5F2EB] text-xs sm:text-sm font-medium">
                      {tertiaryFeatured.accentMetric}
                    </span>
                  </div>
                  <div>
                    <span className="text-[#92928A] block text-[10px] sm:text-xs">Certifications</span>
                    <span className="font-mono text-[#C5AD83] text-xs sm:text-sm font-medium">
                      LEED Platinum
                    </span>
                  </div>
                </div>

                <Button to={`/projects/${tertiaryFeatured.slug}`} variant="primary" size="md" fullWidthMobile>
                  Explore Full Development
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
