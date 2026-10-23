import React from "react";
import HeroSection from "../components/sections/home/HeroSection";
import BrandStatement from "../components/sections/home/BrandStatement";
import FeaturedProjects from "../components/sections/home/FeaturedProjects";
import ArchitectureExperience from "../components/sections/home/ArchitectureExperience";
import ApproachSection from "../components/sections/home/ApproachSection";
import CinematicFeature from "../components/sections/home/CinematicFeature";
import PeoplePurpose from "../components/sections/home/PeoplePurpose";
import Marquee from "../components/ui/Marquee";
import EnquirySection from "../components/sections/home/EnquirySection";

export default function Home() {
  return (
    <main className="bg-[#171918]">
      {/* 01: Hero Section */}
      <HeroSection />

      {/* 02: Brand Statement */}
      <BrandStatement />

      {/* 03: Featured Developments */}
      <FeaturedProjects />

      {/* 04: Signature Architecture Scroll Experience */}
      <ArchitectureExperience />

      {/* 05: Our Approach */}
      <ApproachSection />

      {/* 06: Cinematic Project Highlight */}
      <CinematicFeature />

      {/* 07: People & Purpose */}
      <PeoplePurpose />

      {/* 08: Typographic Marquee Transition */}
      <Marquee speed={35} />

      {/* 09: Enquiry Moment */}
      <EnquirySection />
    </main>
  );
}
