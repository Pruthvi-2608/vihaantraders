import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { MapPin, ArrowUpRight, SlidersHorizontal } from "lucide-react";
import SectionHeading from "../components/ui/SectionHeading";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import { projects } from "../data/projects";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const shouldReduceMotion = useReducedMotion();

  const categories = ["All", "Residential", "Commercial", "Mixed Use"];
  const statuses = ["All", "Under Development", "Completed", "Upcoming"];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchCategory =
        selectedCategory === "All" || project.category === selectedCategory;
      const matchStatus =
        selectedStatus === "All" || project.status === selectedStatus;
      return matchCategory && matchStatus;
    });
  }, [selectedCategory, selectedStatus]);

  return (
    <main className="min-h-screen bg-[#171918] pt-24 sm:pt-32 pb-24 sm:pb-28 text-[#F5F2EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Page Intro Header */}
        <div className="mb-10 sm:mb-16 border-b border-white/10 pb-8 sm:pb-12">
          <SectionHeading
            eyebrow="PORTFOLIO INDEX"
            title="Explore the portfolio."
            subtitle="Curated residential, commercial, and mixed-use developments engineered for enduring architectural distinction."
          />
        </div>

        {/* Mobile-Friendly Filters Bar */}
        <div className="mb-8 sm:mb-12 space-y-4 pb-6 border-b border-white/10">
          {/* Category Filter Chips (horizontal scroll on mobile) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none no-scrollbar">
            <span className="text-[11px] uppercase tracking-widest text-[#92928A] shrink-0 mr-1 flex items-center gap-1">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              Category:
            </span>
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`shrink-0 px-3.5 py-2 text-xs uppercase tracking-[0.15em] font-medium transition-all cursor-pointer min-h-[40px] flex items-center ${
                    isActive
                      ? "bg-[#C5AD83] text-[#171918]"
                      : "bg-[#252824] text-[#F5F2EB]/80 active:bg-white/10 border border-white/10"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Status Filter Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none no-scrollbar">
            <span className="text-[11px] uppercase tracking-widest text-[#92928A] shrink-0 mr-1">
              Status:
            </span>
            {statuses.map((stat) => {
              const isActive = selectedStatus === stat;
              return (
                <button
                  key={stat}
                  onClick={() => setSelectedStatus(stat)}
                  className={`shrink-0 px-3 py-1.5 text-xs uppercase tracking-wider font-medium transition-all cursor-pointer min-h-[36px] flex items-center ${
                    isActive
                      ? "text-[#C5AD83] border-b-2 border-[#C5AD83]"
                      : "text-[#92928A] hover:text-[#F5F2EB]"
                  }`}
                >
                  {stat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Counter and Results Indicator */}
        <div className="mb-6 sm:mb-8 flex items-center justify-between text-xs text-[#92928A] font-mono">
          <span>
            {filteredProjects.length} OF {projects.length} DEVELOPMENTS
          </span>
          {(selectedCategory !== "All" || selectedStatus !== "All") && (
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSelectedStatus("All");
              }}
              className="text-[#C5AD83] hover:underline cursor-pointer py-1"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Projects Grid with layout animation */}
        {filteredProjects.length === 0 ? (
          <div className="py-16 sm:py-20 text-center border border-white/10 bg-[#252824]/50 p-6 sm:p-8">
            <h3 className="font-serif text-2xl text-[#F5F2EB] mb-2">
              No developments found
            </h3>
            <p className="text-xs sm:text-sm text-[#92928A] max-w-md mx-auto mb-6">
              No projects match the selected criteria. Try adjusting your category
              or development status filters.
            </p>
            <Button
              onClick={() => {
                setSelectedCategory("All");
                setSelectedStatus("All");
              }}
              variant="outline"
              size="sm"
            >
              Reset Filters
            </Button>
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.article
                  key={project.id}
                  layout
                  initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex flex-col justify-between bg-[#252824] border border-white/10 hover:border-[#C5AD83]/50 transition-colors duration-300"
                >
                  <Link
                    to={`/projects/${project.slug}`}
                    className="block relative aspect-[16/10] overflow-hidden"
                  >
                    <img
                      src={project.thumbnailImage}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#171918] via-transparent to-transparent opacity-60" />

                    <div className="absolute top-3 left-3 flex gap-2">
                      <Badge variant="champagne">{project.category}</Badge>
                      <Badge variant="stone">{project.status}</Badge>
                    </div>
                  </Link>

                  <div className="p-5 sm:p-6 flex flex-col justify-between grow">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs text-[#92928A] mb-2">
                        <MapPin className="w-3.5 h-3.5 text-[#C5AD83]" />
                        <span className="line-clamp-1">{project.location}</span>
                      </div>
                      <h3 className="font-serif text-xl sm:text-2xl text-[#F5F2EB] group-hover:text-[#C5AD83] transition-colors duration-300">
                        {project.name}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-[#92928A] font-light line-clamp-2">
                        {project.summary}
                      </p>
                    </div>

                    <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
                      <span className="text-xs font-mono text-[#C5AD83]">
                        {project.accentMetric}
                      </span>
                      <Link
                        to={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] font-medium text-[#F5F2EB] group-hover:text-[#C5AD83] transition-colors py-1"
                      >
                        <span>Details</span>
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </main>
  );
}
