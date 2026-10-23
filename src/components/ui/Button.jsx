import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = "primary", // 'primary' | 'secondary' | 'outline' | 'ghost'
  size = "md", // 'sm' | 'md' | 'lg'
  icon = true,
  className = "",
  type = "button",
  disabled = false,
  fullWidthMobile = false,
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();

  const baseStyles =
    "group inline-flex items-center justify-center font-medium tracking-wide transition-all duration-300 rounded-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5AD83] focus-visible:ring-offset-2 focus-visible:ring-offset-[#171918] active:scale-[0.99] disabled:opacity-50 disabled:pointer-events-none select-none uppercase tracking-[0.2em] text-center";

  const sizes = {
    sm: "px-4 py-2.5 text-[11px] min-h-[42px]",
    md: "px-6 py-3.5 text-xs min-h-[48px]",
    lg: "px-8 py-4 text-xs sm:text-sm min-h-[52px]",
  };

  const variants = {
    primary:
      "bg-[#C5AD83] text-[#171918] hover:bg-[#dfcaa7] active:bg-[#c5ad83] border border-[#C5AD83]",
    secondary:
      "bg-[#252824] text-[#F5F2EB] hover:bg-[#323630] active:bg-[#20221f] border border-white/10 hover:border-[#C5AD83]/40",
    outline:
      "bg-transparent text-[#F5F2EB] hover:text-[#171918] hover:bg-[#F5F2EB] active:bg-[#E5E0D6] border border-[#F5F2EB]/30 hover:border-[#F5F2EB]",
    ghost:
      "bg-transparent text-[#F5F2EB] hover:text-[#C5AD83] border border-transparent p-0 min-h-0",
  };

  const widthStyle = fullWidthMobile ? "w-full sm:w-auto" : "";

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {icon && (
        <motion.span
          className="ml-2.5 inline-block shrink-0"
          animate={shouldReduceMotion ? {} : { x: 0, y: 0 }}
          whileHover={shouldReduceMotion ? {} : { x: 3, y: -3 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </motion.span>
      )}
    </>
  );

  const combinedClass = `${baseStyles} ${sizes[size]} ${variants[variant]} ${widthStyle} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClass} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={combinedClass}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClass}
      {...props}
    >
      {content}
    </button>
  );
}
