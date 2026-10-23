import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight, Phone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "../../data/siteData";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock scroll when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Projects", path: "/projects" },
    { label: "About", path: "/about" },
    { label: "Expertise", path: "/expertise" },
    { label: "Contact", path: "/contact" },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.35,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    open: {
      opacity: 1,
      y: "0%",
      transition: {
        duration: 0.45,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.07,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, y: -16 },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "bg-[#171918]/95 backdrop-blur-lg py-3 sm:py-4 border-b border-white/10 shadow-lg shadow-black/30"
            : "bg-transparent py-4 sm:py-7"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand Logo & Wordmark */}
          <Link
            to="/"
            className="group flex items-center gap-2.5 sm:gap-3 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C5AD83]"
            aria-label="Vihaan Traders Home"
          >
            <div className="w-8 h-8 rounded-none border border-[#C5AD83]/70 bg-[#252824] flex items-center justify-center transition-all duration-300 group-hover:border-[#C5AD83] group-hover:bg-[#C5AD83]">
              <span className="font-serif text-sm font-bold tracking-tighter text-[#C5AD83] transition-colors duration-300 group-hover:text-[#171918]">
                VT
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-base sm:text-lg tracking-wider font-medium text-[#F5F2EB] group-hover:text-[#C5AD83] transition-colors duration-300">
                VIHAAN TRADERS
              </span>
              <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.25em] text-[#92928A] -mt-0.5">
                Architectural Living
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.slice(0, 3).map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative group py-2 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C5AD83]"
                >
                  <span
                    className={`text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-300 ${
                      isActive
                        ? "text-[#C5AD83]"
                        : "text-[#F5F2EB]/80 hover:text-[#F5F2EB]"
                    }`}
                  >
                    {link.label}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#C5AD83]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#C5AD83]/50 transition-all duration-300 group-hover:w-full" />
                </Link>
              );
            })}
          </nav>

          {/* Actions & Mobile Trigger */}
          <div className="flex items-center gap-2 sm:gap-4">
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs uppercase tracking-[0.2em] font-medium text-[#171918] bg-[#C5AD83] hover:bg-[#dfcaa7] border border-[#C5AD83] transition-all duration-300 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5AD83]"
            >
              <span>Discuss a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            {/* Mobile Touch-First Menu Toggle (min 48px touch target) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden min-w-[48px] min-h-[48px] flex items-center justify-center text-[#F5F2EB] hover:text-[#C5AD83] active:text-[#C5AD83] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C5AD83] cursor-pointer"
              aria-label={mobileMenuOpen ? "Close menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#C5AD83]" />
              ) : (
                <div className="flex flex-col gap-1.5 w-6 items-end">
                  <span className="w-6 h-[2px] bg-[#F5F2EB]" />
                  <span className="w-4 h-[2px] bg-[#C5AD83]" />
                  <span className="w-5 h-[2px] bg-[#F5F2EB]" />
                </div>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile-First Fullscreen Overlay Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-50 bg-[#171918] flex flex-col justify-between pt-6 pb-8 px-6 overflow-y-auto"
          >
            {/* Top header row inside overlay */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5"
              >
                <div className="w-8 h-8 border border-[#C5AD83] bg-[#252824] flex items-center justify-center">
                  <span className="font-serif text-sm font-bold text-[#C5AD83]">
                    VT
                  </span>
                </div>
                <span className="font-serif text-base tracking-wider text-[#F5F2EB]">
                  VIHAAN TRADERS
                </span>
              </Link>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-white/10 text-[#C5AD83] active:scale-95 transition-transform"
                aria-label="Close navigation"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Links list */}
            <div className="py-8 my-auto space-y-2">
              <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#C5AD83] block mb-4">
                Directory
              </span>

              <nav className="flex flex-col space-y-1">
                {navLinks.map((link, idx) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <motion.div key={link.path} variants={itemVariants}>
                      <Link
                        to={link.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`group flex items-center justify-between py-3.5 border-b border-white/10 active:bg-white/5 transition-colors ${
                          isActive ? "text-[#C5AD83]" : "text-[#F5F2EB]"
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <span className="font-mono text-xs text-[#92928A]">
                            0{idx + 1}
                          </span>
                          <span className="font-serif text-2xl sm:text-3xl tracking-tight">
                            {link.label}
                          </span>
                        </div>
                        <ArrowUpRight
                          className={`w-5 h-5 ${
                            isActive ? "text-[#C5AD83]" : "text-[#92928A]"
                          }`}
                        />
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Direct Primary Action in Menu */}
              <motion.div variants={itemVariants} className="pt-6">
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full min-h-[48px] py-4 text-center block text-xs uppercase tracking-[0.25em] font-medium text-[#171918] bg-[#C5AD83] active:bg-[#dfcaa7] transition-colors"
                >
                  Start a Conversation
                </Link>
              </motion.div>
            </div>

            {/* Direct Mobile Contact Shortcuts */}
            <motion.div
              variants={itemVariants}
              className="pt-6 border-t border-white/10 space-y-3"
            >
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
                  className="p-3 bg-[#252824] border border-white/10 text-center flex items-center justify-center gap-2 text-xs text-[#F5F2EB] active:bg-white/10"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C5AD83]" />
                  <span>Call Desk</span>
                </a>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="p-3 bg-[#252824] border border-white/10 text-center flex items-center justify-center gap-2 text-xs text-[#F5F2EB] active:bg-white/10"
                >
                  <Mail className="w-3.5 h-3.5 text-[#C5AD83]" />
                  <span>Email Studio</span>
                </a>
              </div>
              <p className="text-[10px] text-[#92928A] text-center font-mono">
                {siteConfig.contact.city} • {siteConfig.contact.businessHours}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
