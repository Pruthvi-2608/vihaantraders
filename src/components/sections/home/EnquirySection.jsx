import React from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import Button from "../../ui/Button";
import { siteConfig } from "../../../data/siteData";

export default function EnquirySection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative bg-[#252824] text-[#F5F2EB] py-16 sm:py-28 lg:py-36 overflow-hidden border-t border-white/10">
      {/* Background subtle architectural silhouette */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-15 pointer-events-none hidden lg:block overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
          alt=""
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#252824] via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="max-w-2xl space-y-6 sm:space-y-8">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <span className="w-6 sm:w-8 h-[1px] bg-[#C5AD83]" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#C5AD83] font-medium">
              06 // INITIATE
            </span>
          </div>

          <div className="overflow-hidden">
            <motion.h2
              initial={shouldReduceMotion ? {} : { opacity: 0, y: "100%" }}
              whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.08] text-[#F5F2EB]"
            >
              Have a place <br />
              <span className="italic font-normal text-[#C5AD83]">in mind?</span>
            </motion.h2>
          </div>

          <p className="text-sm sm:text-lg text-[#92928A] font-light leading-relaxed">
            Whether inquiring about residential acquisition, commercial workspace leasing,
            or strategic land collaboration, our team is at your disposal.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 pt-2">
            <Button to="/contact" variant="primary" size="lg" fullWidthMobile>
              Start a Conversation
            </Button>
            <Button to="/projects" variant="outline" size="lg" fullWidthMobile>
              Explore Projects
            </Button>
          </div>

          {/* Quick contact touchpoints */}
          <div className="pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-4 sm:gap-6 text-xs text-[#92928A]">
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="inline-flex items-center gap-2 hover:text-[#C5AD83] transition-colors py-1"
            >
              <Mail className="w-4 h-4 text-[#C5AD83]" />
              <span>{siteConfig.contact.email}</span>
            </a>
            <a
              href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
              className="inline-flex items-center gap-2 hover:text-[#C5AD83] transition-colors py-1"
            >
              <Phone className="w-4 h-4 text-[#C5AD83]" />
              <span>{siteConfig.contact.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
