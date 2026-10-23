import React from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, MapPin, Sparkles } from "lucide-react";
import Button from "../../ui/Button";
import Badge from "../../ui/Badge";
import { projects } from "../../../data/projects";

export default function CinematicFeature() {
  const shouldReduceMotion = useReducedMotion();
  const project = projects[0]; // The Lumina Residences

  return (
    <section className="relative bg-[#171918] py-16 sm:py-28 lg:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="relative aspect-[4/3] sm:aspect-[21/9] min-h-[400px] sm:min-h-[500px] overflow-hidden bg-[#252824] border border-white/10 shadow-2xl group">
          {/* Panoramic Image */}
          <motion.div
            initial={shouldReduceMotion ? {} : { scale: 1.06 }}
            whileInView={shouldReduceMotion ? {} : { scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full"
          >
            <img
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000&q=85"
              alt={project.name}
              className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
            />
          </motion.div>

          {/* Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#171918] via-[#171918]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#171918]/90 via-[#171918]/40 to-transparent" />

          {/* Content Overlay */}
          <div className="absolute inset-0 p-5 sm:p-12 lg:p-16 flex flex-col justify-between z-10">
            {/* Top Eyebrow */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 sm:gap-3">
                <Badge variant="champagne">Featured Landmark</Badge>
                <span className="text-[10px] sm:text-xs font-mono text-[#92928A] hidden sm:inline">
                  {project.coordinates}
                </span>
              </div>

              <span className="text-xs font-mono text-[#C5AD83]">
                {project.accentMetric}
              </span>
            </div>

            {/* Bottom Headline and Action */}
            <div className="max-w-2xl space-y-3 sm:space-y-4">
              <div className="flex items-center gap-1.5 sm:gap-2 text-xs text-[#C5AD83]">
                <MapPin className="w-3.5 h-3.5" />
                <span className="uppercase tracking-widest text-[10px] sm:text-xs">
                  {project.location}
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-5xl lg:text-6xl text-[#F5F2EB] tracking-tight leading-[1.08]">
                {project.name}
              </h3>

              <p className="text-xs sm:text-base text-[#F5F2EB]/80 font-light leading-relaxed max-w-xl line-clamp-3 sm:line-clamp-none">
                {project.summary}
              </p>

              <div className="pt-2 sm:pt-4">
                <Button
                  to={`/projects/${project.slug}`}
                  variant="primary"
                  size="md"
                  fullWidthMobile
                >
                  Explore Full Development Narrative
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
