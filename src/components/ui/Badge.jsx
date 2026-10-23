import React from "react";

export default function Badge({
  children,
  variant = "stone",
  dot = true,
  className = "",
}) {
  const variants = {
    stone: "bg-[#252824]/90 text-[#F5F2EB]/90 border border-white/10",
    champagne: "bg-[#C5AD83]/15 text-[#C5AD83] border border-[#C5AD83]/30",
    light: "bg-[#E5E0D6] text-[#171918] border border-[#171918]/10",
    dark: "bg-[#171918]/90 text-[#F5F2EB] border border-white/15",
  };

  const dotColors = {
    stone: "bg-[#92928A]",
    champagne: "bg-[#C5AD83]",
    light: "bg-[#171918]",
    dark: "bg-[#C5AD83]",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] tracking-[0.16em] uppercase font-medium backdrop-blur-xs ${variants[variant]} ${className}`}
    >
      {dot && (
        <span
          className={`w-1.5 h-1.5 rounded-full ${dotColors[variant]} animate-pulse`}
        />
      )}
      <span>{children}</span>
    </span>
  );
}
