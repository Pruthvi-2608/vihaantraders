import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";
import {
  MapPin,
  ArrowLeft,
  Download,
  Maximize2,
  Send,
  Phone,
} from "lucide-react";
import { projects } from "../data/projects";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import Lightbox from "../components/ui/Lightbox";
import SectionHeading from "../components/ui/SectionHeading";

export default function ProjectDetail() {
  const { slug } = useParams();
  const shouldReduceMotion = useReducedMotion();

  // Find project by slug
  const project = projects.find((p) => p.slug === slug);

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Brochure download simulation status
  const [brochureRequested, setBrochureRequested] = useState(false);

  if (!project) {
    return (
      <main className="min-h-screen bg-[#171918] pt-32 pb-20 text-center px-4">
        <h1 className="font-serif text-3xl sm:text-5xl text-[#F5F2EB] mb-4">
          Development Not Found
        </h1>
        <p className="text-sm text-[#92928A] max-w-md mx-auto mb-8">
          The requested project record could not be located in our active portfolio.
        </p>
        <Button to="/projects" variant="primary" size="md">
          Return to Portfolio
        </Button>
      </main>
    );
  }

  // Related projects (filter out current project, pick 2)
  const relatedProjects = projects
    .filter((p) => p.id !== project.id)
    .slice(0, 2);

  const openLightboxAt = (index) => {
    setActiveImageIndex(index);
    setLightboxOpen(true);
  };

  const handleBrochureDownload = () => {
    setBrochureRequested(true);
    setTimeout(() => {
      setBrochureRequested(false);
    }, 4000);
  };

  return (
    <main className="min-h-screen bg-[#171918] text-[#F5F2EB] pb-24 sm:pb-28">
      {/* 01: Cinematic Project Hero */}
      <section className="relative min-h-[68vh] sm:min-h-[75vh] lg:min-h-[85vh] flex items-end overflow-hidden pb-12 sm:pb-16 pt-24 sm:pt-32">
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={shouldReduceMotion ? {} : { scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            src={project.heroImage}
            alt={project.name}
            className="w-full h-full object-cover filter brightness-[0.7]"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#171918] via-[#171918]/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full">
          {/* Breadcrumbs */}
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C5AD83] hover:text-[#dfcaa7] mb-4 sm:mb-6 transition-colors py-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Developments</span>
          </Link>

          <div className="flex flex-wrap items-center gap-2 mb-3 sm:mb-4">
            <Badge variant="champagne">{project.category}</Badge>
            <Badge variant="stone">{project.status}</Badge>
            {project.coordinates && (
              <span className="text-[11px] font-mono text-[#92928A] ml-2">
                {project.coordinates}
              </span>
            )}
          </div>

          <h1 className="font-serif text-3xl sm:text-6xl md:text-7xl text-[#F5F2EB] tracking-tight max-w-4xl leading-[1.08]">
            {project.name}
          </h1>

          <p className="mt-3 sm:mt-4 text-sm sm:text-xl text-[#F5F2EB]/80 font-light max-w-2xl leading-relaxed">
            {project.tagline}
          </p>

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
            <Button
              to={`/contact?project=${encodeURIComponent(project.name)}`}
              variant="primary"
              size="md"
              fullWidthMobile
            >
              Inquire on this Development
            </Button>

            <button
              onClick={handleBrochureDownload}
              className="px-5 py-3.5 text-xs uppercase tracking-[0.2em] font-medium border border-white/20 hover:border-[#C5AD83] hover:text-[#C5AD83] transition-colors inline-flex items-center justify-center gap-2 cursor-pointer min-h-[48px]"
            >
              <Download className="w-4 h-4" />
              <span>
                {brochureRequested ? "Folio Dispatched" : "Request Specification Folio"}
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* 02: Key Project Specifications Strip */}
      <section className="border-y border-white/10 bg-[#252824]/60 py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-8">
            {Object.entries(project.keySpecs || {}).map(([key, value]) => (
              <div key={key} className="space-y-1 p-3 sm:p-0 bg-[#171918]/40 sm:bg-transparent border sm:border-0 border-white/5">
                <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-[#92928A] block">
                  {key}
                </span>
                <span className="font-serif text-sm sm:text-base text-[#F5F2EB] block">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03: Architectural Narrative & Summary */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            <span className="text-xs font-mono tracking-widest text-[#C5AD83] uppercase block">
              Architectural Concept
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-[#F5F2EB] leading-tight">
              An architectural response to light, materiality, and climate.
            </h2>
            <div className="p-5 sm:p-6 bg-[#252824] border border-white/10 space-y-2 sm:space-y-3">
              <span className="text-xs uppercase font-mono tracking-wider text-[#92928A] block">
                Development Coordinates
              </span>
              <p className="font-serif text-base sm:text-lg text-[#C5AD83]">
                {project.location}
              </p>
              <p className="text-xs text-[#92928A] font-light">
                Positioned strategically within master-planned infrastructure.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-sm sm:text-base text-[#92928A] font-light leading-relaxed">
            {project.narrative.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* 04: Interactive Architectural Gallery with Lightbox */}
      <section className="py-16 sm:py-20 bg-[#252824] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-3 sm:gap-4">
            <SectionHeading
              eyebrow="GALLERY"
              title="Architectural perspectives."
              subtitle="Examine materiality, scale, and living spaces designed for permanence."
            />
            <span className="text-[11px] font-mono text-[#92928A]">
              TAP ANY PHOTO TO EXPAND
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {project.gallery.map((img, idx) => (
              <motion.div
                key={idx}
                whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                transition={{ duration: 0.3 }}
                onClick={() => openLightboxAt(idx)}
                className="group relative aspect-[4/3] bg-[#171918] overflow-hidden border border-white/10 cursor-pointer shadow-lg active:opacity-90"
              >
                <img
                  src={img.url}
                  alt={img.caption}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#171918]/40 opacity-0 group-hover:opacity-100 sm:flex items-center justify-center transition-opacity duration-300 hidden">
                  <div className="p-3 rounded-full bg-[#171918]/80 text-[#C5AD83] border border-[#C5AD83]/30">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-[#171918] via-[#171918]/80 to-transparent flex items-center justify-between">
                  <p className="text-xs text-[#F5F2EB]/90 font-light line-clamp-1">
                    {img.caption}
                  </p>
                  <Maximize2 className="w-3.5 h-3.5 text-[#C5AD83] shrink-0 sm:hidden ml-2" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 05: Amenities & Features */}
      {project.amenities && (
        <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="mb-10 sm:mb-14">
            <SectionHeading
              eyebrow="CURATED AMENITIES"
              title="Tailored for well-being."
              subtitle="Every amenity is an extension of private sanctuary, executed with hospitality-grade precision."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            {project.amenities.map((item, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 bg-[#252824] border border-white/10 space-y-2 sm:space-y-3"
              >
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#C5AD83] shrink-0" />
                  <h3 className="font-serif text-lg sm:text-xl text-[#F5F2EB]">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#92928A] font-light leading-relaxed pl-5">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 06: Floor Plans & Spatial Configurations */}
      {project.floorPlans && (
        <section className="py-16 sm:py-24 bg-[#252824] border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
            <div className="mb-10 sm:mb-14">
              <SectionHeading
                eyebrow="FLOORPLANS & SCHEMATICS"
                title="Spatial configurations."
                subtitle="Engineered for generous daylight exposure, acoustic isolation, and seamless entertaining."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {project.floorPlans.map((plan, idx) => (
                <div
                  key={idx}
                  className="bg-[#171918] border border-white/10 p-6 sm:p-8 flex flex-col justify-between space-y-5 sm:space-y-6"
                >
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="font-serif text-xl sm:text-2xl text-[#F5F2EB]">
                        {plan.title}
                      </h4>
                      <span className="text-[11px] font-mono text-[#C5AD83] border border-[#C5AD83]/30 px-2.5 py-1 shrink-0">
                        {plan.area}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-xs text-[#92928A] pb-3 border-b border-white/10">
                      <span>{plan.bedrooms}</span>
                      <span>•</span>
                      <span>{plan.bathrooms}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#92928A] font-light leading-relaxed">
                      {plan.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-2">
                    <span className="text-[11px] font-mono text-[#92928A] hidden sm:inline">
                      Schematic Available Upon NDA
                    </span>
                    <Button
                      to={`/contact?project=${encodeURIComponent(project.name)}&plan=${encodeURIComponent(plan.title)}`}
                      variant="outline"
                      size="sm"
                      fullWidthMobile
                    >
                      Request Layout
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 07: Project Specific Conversion CTA */}
      <section className="py-16 sm:py-24 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-6 sm:space-y-8">
          <span className="text-xs uppercase font-mono tracking-widest text-[#C5AD83]">
            DISCUSS ACQUISITION
          </span>
          <h2 className="font-serif text-2xl sm:text-5xl text-[#F5F2EB] leading-tight">
            Schedule a private architectural consultation for {project.name}.
          </h2>
          <p className="text-xs sm:text-base text-[#92928A] max-w-xl mx-auto font-light leading-relaxed">
            Our principal advisory team welcomes confidential inquiries from prospective
            homeowners, family offices, and institutional partners.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3.5 sm:gap-4 pt-2 sm:pt-4">
            <Button
              to={`/contact?project=${encodeURIComponent(project.name)}`}
              variant="primary"
              size="lg"
              fullWidthMobile
            >
              Inquire Regarding {project.name}
            </Button>
            <Button to="/projects" variant="outline" size="lg" fullWidthMobile>
              Explore Other Developments
            </Button>
          </div>
        </div>
      </section>

      {/* 08: Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-16 sm:py-20 bg-[#252824] border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
            <div className="mb-8 sm:mb-12">
              <span className="text-xs uppercase font-mono tracking-widest text-[#C5AD83] block mb-2">
                PORTFOLIO CONTINUATION
              </span>
              <h3 className="font-serif text-xl sm:text-3xl text-[#F5F2EB]">
                Related Developments
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {relatedProjects.map((rel) => (
                <Link
                  key={rel.id}
                  to={`/projects/${rel.slug}`}
                  className="group bg-[#171918] border border-white/10 hover:border-[#C5AD83]/50 transition-colors p-4 sm:p-6 flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center"
                >
                  <div className="w-full sm:w-44 aspect-[16/10] sm:aspect-[4/3] overflow-hidden shrink-0">
                    <img
                      src={rel.thumbnailImage}
                      alt={rel.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="space-y-1.5 sm:space-y-2 grow">
                    <div className="flex items-center gap-2">
                      <Badge variant="stone">{rel.category}</Badge>
                      <span className="text-xs text-[#92928A]">{rel.status}</span>
                    </div>
                    <h4 className="font-serif text-lg sm:text-xl text-[#F5F2EB] group-hover:text-[#C5AD83] transition-colors">
                      {rel.name}
                    </h4>
                    <p className="text-xs text-[#92928A] line-clamp-2 font-light">
                      {rel.summary}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={lightboxOpen}
        images={project.gallery}
        currentIndex={activeImageIndex}
        onClose={() => setLightboxOpen(false)}
        onPrev={() =>
          setActiveImageIndex((prev) =>
            prev === 0 ? project.gallery.length - 1 : prev - 1
          )
        }
        onNext={() =>
          setActiveImageIndex((prev) =>
            prev === project.gallery.length - 1 ? 0 : prev + 1
          )
        }
      />
    </main>
  );
}
