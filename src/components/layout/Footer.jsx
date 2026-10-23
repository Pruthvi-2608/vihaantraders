import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "../../data/siteData";
import { projects } from "../../data/projects";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#171918] text-[#F5F2EB] border-t border-white/10 relative overflow-hidden mb-16 md:mb-0">
      {/* Subtle architectural grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pt-14 sm:pt-20 pb-12">
        {/* Top editorial callout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-12 pb-12 sm:pb-16 border-b border-white/10">
          <div className="sm:col-span-2 lg:col-span-6 space-y-4 sm:space-y-6">
            <Link
              to="/"
              className="inline-flex items-center gap-3 group focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C5AD83]"
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 border border-[#C5AD83] bg-[#252824] flex items-center justify-center transition-colors group-hover:bg-[#C5AD83]">
                <span className="font-serif text-sm sm:text-base font-bold text-[#C5AD83] group-hover:text-[#171918]">
                  VT
                </span>
              </div>
              <div>
                <span className="font-serif text-xl sm:text-2xl tracking-wider text-[#F5F2EB]">
                  VIHAAN TRADERS
                </span>
                <span className="block text-[8px] sm:text-[9px] uppercase tracking-[0.3em] text-[#92928A]">
                  Development & Architecture
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-base text-[#92928A] max-w-md font-light leading-relaxed">
              We build spaces shaped by natural light, material honesty, and long-term
              value. Architectural developments conceived for generational living.
            </p>

            <div className="pt-1">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-[#C5AD83] hover:text-[#dfcaa7] transition-colors py-1"
              >
                <span>Initiate a Conversation</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="lg:col-span-2 space-y-3 sm:space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#C5AD83] font-medium">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {siteConfig.navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-[#92928A] hover:text-[#F5F2EB] transition-colors duration-200 py-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Featured Portfolio Column */}
          <div className="lg:col-span-2 space-y-3 sm:space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#C5AD83] font-medium">
              Developments
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {projects.slice(0, 4).map((proj) => (
                <li key={proj.id}>
                  <Link
                    to={`/projects/${proj.slug}`}
                    className="text-[#92928A] hover:text-[#F5F2EB] transition-colors duration-200 line-clamp-1 py-1 inline-block"
                  >
                    {proj.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio Contact Column */}
          <div className="sm:col-span-2 lg:col-span-2 space-y-3 sm:space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#C5AD83] font-medium">
              Studio
            </h4>
            <div className="space-y-1.5 text-xs text-[#92928A] leading-relaxed">
              <p className="text-[#F5F2EB]">{siteConfig.contact.city}</p>
              <p>{siteConfig.contact.email}</p>
              <p>{siteConfig.contact.phone}</p>
              <p className="text-[10px] sm:text-[11px] pt-1 text-[#92928A]/80">
                {siteConfig.contact.businessHours}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar with copyright and transparency notes */}
        <div className="pt-6 sm:pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-[#92928A]">
          <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-6">
            <p>© {currentYear} Vihaan Traders. All rights reserved.</p>
            <span className="hidden sm:inline text-white/20">|</span>
            <p className="text-[10px] sm:text-[11px] text-[#92928A]/70">
              Architectural Concept & Real Estate Development Presentation
            </p>
          </div>

          <div className="flex items-center gap-4 sm:gap-6 text-[11px] pt-2 md:pt-0">
            {siteConfig.social.map((soc) => (
              <a
                key={soc.label}
                href={soc.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#C5AD83] transition-colors py-1"
              >
                {soc.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
