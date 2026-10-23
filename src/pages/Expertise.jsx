import React from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";
import { Building2, Home, Landmark, Trees, LineChart, ArrowUpRight } from "lucide-react";
import SectionHeading from "../components/ui/SectionHeading";
import Button from "../components/ui/Button";

export default function Expertise() {
  const shouldReduceMotion = useReducedMotion();

  const services = [
    {
      id: "01",
      icon: Home,
      title: "Luxury Residential Development",
      description:
        "Bespoke private estates, hillside villas, and super-luxury sky mansions engineered with generous spatial proportions, acoustic solitude, and curated private amenity suites.",
      deliverables: [
        "Full or half floorplate residences",
        "Private swimming pools & reflection lagoons",
        "Acoustic STC-55 sound dampening",
        "Direct vehicle vault elevator access",
      ],
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "02",
      icon: Building2,
      title: "Commercial & Collaborative Workspaces",
      description:
        "Grade-A commercial office headquarters designed for tomorrow's leading enterprises. Featuring column-free floorplates, touchless biometric access, and integrated sky gardens.",
      deliverables: [
        "Column-free flexible spans up to 35,000 sq. ft.",
        "LEED Platinum & WELL Gold engineering",
        "Regenerative destination dispatch lifts",
        "Auditorium & multi-zone event amphitheaters",
      ],
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "03",
      icon: Landmark,
      title: "Urban Mixed-Use Destinations",
      description:
        "Civic-minded developments uniting retail arcades, culinary plazas, and pedestrian thoroughfares that activate city life and foster spontaneous human community.",
      deliverables: [
        "Open-air pedestrian piazza curation",
        "Stepped landscaped public terraces",
        "Curated artisanal culinary flagships",
        "Subterranean multi-tier logistics & valet",
      ],
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "04",
      icon: Trees,
      title: "Biophilic & Sustainable Engineering",
      description:
        "Ecologically grounded architecture incorporating computational solar analysis, rainwater harvesting aquifers, on-site graywater recycling, and native microclimates.",
      deliverables: [
        "Solar wind-shear aerodynamic modeling",
        "Stepped sky gardens with automated irrigation",
        "Locally quarried basalt & reclaimed timber",
        "Near zero-carbon operational roadmap",
      ],
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "05",
      icon: LineChart,
      title: "Strategic Property Investment",
      description:
        "Partnering with discerning family offices and institutional capital to structure prime property investments characterized by disciplined risk management and lasting asset appreciation.",
      deliverables: [
        "Rigorous micro-market demographic analytics",
        "Zoning, regulatory, and title due diligence",
        "Transparent equity and co-development models",
        "High-liquidity prime urban corridors",
      ],
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80",
    },
  ];

  return (
    <main className="min-h-screen bg-[#171918] text-[#F5F2EB] pt-24 sm:pt-32 pb-24 sm:pb-28">
      {/* Intro Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pb-12 sm:pb-16 border-b border-white/10">
        <SectionHeading
          eyebrow="CAPABILITIES & DISCIPLINES"
          title="Our areas of expertise."
          subtitle="From land acquisition and architectural masterplanning to execution and asset lifecycle management."
        />
      </section>

      {/* Services List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-12 sm:py-20 space-y-10 sm:space-y-16">
        {services.map((srv, idx) => {
          const Icon = srv.icon;
          const isEven = idx % 2 === 0;

          return (
            <div
              key={srv.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center p-5 sm:p-10 lg:p-12 bg-[#252824] border border-white/10`}
            >
              {/* Image Column */}
              <div
                className={`lg:col-span-6 relative aspect-[16/10] overflow-hidden bg-[#171918] ${
                  isEven ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <img
                  src={srv.image}
                  alt={srv.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 p-2.5 sm:p-3 bg-[#171918]/90 border border-white/10 text-[#C5AD83]">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </div>

              {/* Text Column */}
              <div
                className={`lg:col-span-6 space-y-4 sm:space-y-6 ${
                  isEven ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <span className="font-mono text-xs text-[#C5AD83] tracking-widest">
                    DISCIPLINE {srv.id}
                  </span>
                  <span className="w-6 sm:w-8 h-[1px] bg-white/20" />
                </div>

                <h3 className="font-serif text-xl sm:text-3xl text-[#F5F2EB]">
                  {srv.title}
                </h3>

                <p className="text-xs sm:text-base text-[#92928A] font-light leading-relaxed">
                  {srv.description}
                </p>

                {/* Deliverables Checklist */}
                <div className="space-y-2 pt-2 border-t border-white/10">
                  {srv.deliverables.map((item, dIdx) => (
                    <div
                      key={dIdx}
                      className="flex items-center gap-2.5 text-xs sm:text-sm text-[#F5F2EB]/90"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C5AD83] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 sm:pt-4">
                  <Button
                    to={`/contact?discipline=${encodeURIComponent(srv.title)}`}
                    variant="outline"
                    size="sm"
                    fullWidthMobile
                  >
                    Consult on this Discipline
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Conversion Banner */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 text-center pt-6 sm:pt-10">
        <div className="p-6 sm:p-14 bg-[#171918] border border-[#C5AD83]/40 space-y-4 sm:space-y-6">
          <span className="text-xs uppercase font-mono tracking-widest text-[#C5AD83]">
            PARTNERSHIP & ADVISORY
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl text-[#F5F2EB]">
            Explore co-development or land acquisition opportunities.
          </h2>
          <p className="text-xs sm:text-base text-[#92928A] max-w-xl mx-auto font-light leading-relaxed">
            We actively review strategic land parcels and joint-development proposals
            across premier metropolitan zones.
          </p>
          <div className="pt-2">
            <Button to="/contact" variant="primary" size="md" fullWidthMobile>
              Initiate Direct Discussion
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
