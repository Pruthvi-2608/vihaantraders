import React, { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Lightbox({
  images = [],
  currentIndex = 0,
  isOpen = false,
  onClose,
  onPrev,
  onNext,
}) {
  const currentImage = images[currentIndex];

  const handleKeyDown = useCallback(
    (e) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [isOpen, onClose, onPrev, onNext]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !currentImage) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-[#171918]/95 backdrop-blur-md p-4 sm:p-8"
        role="dialog"
        aria-modal="true"
        aria-label="Image gallery lightbox"
        onClick={onClose}
      >
        {/* Top header bar */}
        <div
          className="absolute top-0 left-0 right-0 p-6 flex items-center justify-between z-10"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C5AD83] font-medium">
              Gallery
            </span>
            <span className="text-xs tracking-widest text-[#92928A]">
              {String(currentIndex + 1).padStart(2, "0")} /{" "}
              {String(images.length).padStart(2, "0")}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-white/10 hover:bg-[#C5AD83] text-[#F5F2EB] hover:text-[#171918] transition-colors duration-200 cursor-pointer"
            aria-label="Close image gallery"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Previous Image Trigger */}
        {images.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-[#C5AD83] text-[#F5F2EB] hover:text-[#171918] transition-colors duration-200 z-10 cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Active Image container */}
        <div
          className="relative max-w-5xl max-h-[82vh] flex flex-col items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden shadow-2xl border border-white/10 bg-[#252824]"
            >
              <img
                src={currentImage.url}
                alt={currentImage.caption || "Architectural gallery photograph"}
                className="max-h-[72vh] w-auto max-w-full object-contain block"
              />
            </motion.div>
          </AnimatePresence>

          {currentImage.caption && (
            <motion.p
              key={`caption-${currentIndex}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="mt-4 text-center text-xs sm:text-sm text-[#F5F2EB]/80 font-light max-w-2xl px-4"
            >
              {currentImage.caption}
            </motion.p>
          )}
        </div>

        {/* Next Image Trigger */}
        {images.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-[#C5AD83] text-[#F5F2EB] hover:text-[#171918] transition-colors duration-200 z-10 cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
