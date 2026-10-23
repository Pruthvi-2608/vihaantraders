import React from "react";
import { Link } from "react-router-dom";
import { Compass, ArrowLeft, ArrowUpRight } from "lucide-react";
import Button from "../components/ui/Button";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#171918] text-[#F5F2EB] flex items-center justify-center pt-24 pb-16 px-6">
      <div className="max-w-2xl text-center space-y-8">
        <div className="flex items-center justify-center gap-3">
          <span className="w-8 h-[1px] bg-[#C5AD83]" />
          <span className="text-xs uppercase font-mono tracking-widest text-[#C5AD83]">
            ERROR 404 // UNCHARTED SPACE
          </span>
          <span className="w-8 h-[1px] bg-[#C5AD83]" />
        </div>

        <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl tracking-tight text-[#F5F2EB]">
          A blueprint not yet drawn.
        </h1>

        <p className="text-sm sm:text-base text-[#92928A] font-light max-w-md mx-auto leading-relaxed">
          The coordinate or room you are attempting to access does not exist within
          our current architectural masterplan.
        </p>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button to="/" variant="primary" size="md">
            Return to Homepage
          </Button>
          <Button to="/projects" variant="outline" size="md">
            Explore Portfolio
          </Button>
        </div>

        <div className="pt-12 border-t border-white/10 flex items-center justify-center gap-6 text-xs text-[#92928A]">
          <Link to="/about" className="hover:text-[#C5AD83] transition-colors">
            About Vihaan Traders
          </Link>
          <span>•</span>
          <Link to="/contact" className="hover:text-[#C5AD83] transition-colors">
            Contact Development Desk
          </Link>
        </div>
      </div>
    </main>
  );
}
