import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Compass, Phone, Send, Building } from "lucide-react";
import { siteConfig } from "../../data/siteData";

export default function MobileBottomBar() {
  const location = useLocation();

  // Hide bottom bar on contact page to avoid overlap with submit buttons
  const isContactPage = location.pathname === "/contact";

  return (
    <div
      className={`md:hidden fixed bottom-4 left-4 right-4 z-30 transition-all duration-300 ${
        isContactPage ? "translate-y-24 opacity-0 pointer-events-none" : "translate-y-0 opacity-100"
      }`}
    >
      <div className="bg-[#171918]/95 backdrop-blur-xl border border-white/15 px-3 py-2.5 shadow-2xl flex items-center justify-between gap-2">
        {/* Portfolio shortcut */}
        <Link
          to="/projects"
          className={`flex-1 flex flex-col items-center justify-center py-1.5 transition-colors ${
            location.pathname.startsWith("/projects")
              ? "text-[#C5AD83]"
              : "text-[#F5F2EB]/80 hover:text-[#F5F2EB]"
          }`}
        >
          <Building className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] uppercase font-mono tracking-wider">
            Projects
          </span>
        </Link>

        {/* Divider */}
        <div className="w-[1px] h-6 bg-white/10" />

        {/* Direct Phone Dial */}
        <a
          href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
          className="flex-1 flex flex-col items-center justify-center py-1.5 text-[#F5F2EB]/80 hover:text-[#C5AD83] transition-colors"
          aria-label="Call studio direct desk"
        >
          <Phone className="w-4 h-4 mb-0.5 text-[#C5AD83]" />
          <span className="text-[10px] uppercase font-mono tracking-wider">
            Call Desk
          </span>
        </a>

        {/* Divider */}
        <div className="w-[1px] h-6 bg-white/10" />

        {/* Inquire CTA Button */}
        <Link
          to="/contact"
          className="flex-1.2 flex items-center justify-center gap-1.5 py-2 px-3 bg-[#C5AD83] text-[#171918] font-medium transition-colors"
        >
          <Send className="w-3.5 h-3.5" />
          <span className="text-[10px] uppercase tracking-wider font-mono font-bold">
            Inquire
          </span>
        </Link>
      </div>
    </div>
  );
}
