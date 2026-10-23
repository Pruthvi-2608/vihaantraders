import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle,
  AlertCircle,
  Send,
} from "lucide-react";
import SectionHeading from "../components/ui/SectionHeading";
import { siteConfig } from "../data/siteData";
import { projects } from "../data/projects";

export default function Contact() {
  const [searchParams] = useSearchParams();
  const shouldReduceMotion = useReducedMotion();

  // Pre-fill project if present in query param
  const initialProject = searchParams.get("project") || "";
  const initialDiscipline = searchParams.get("discipline") || "";

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    enquiryType: initialDiscipline ? "Commercial / Partnership" : "Residential Acquisition",
    projectOfInterest: initialProject,
    message: initialProject
      ? `I would like to inquire about current availability and specifications for ${initialProject}.`
      : "",
    privacyConsent: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'success' | null

  useEffect(() => {
    if (initialProject) {
      setFormData((prev) => ({
        ...prev,
        projectOfInterest: initialProject,
        message: `I would like to inquire about current availability and specifications for ${initialProject}.`,
      }));
    }
  }, [initialProject]);

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = "Please provide your full name.";
    if (!formData.email.trim()) {
      errs.email = "Please provide your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) errs.message = "Please include your message or inquiry notes.";
    if (!formData.privacyConsent) {
      errs.privacyConsent = "Please acknowledge the privacy policy to proceed.";
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate async dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionStatus("success");
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-[#171918] text-[#F5F2EB] pt-24 sm:pt-32 pb-24 sm:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Intro */}
        <div className="mb-10 sm:mb-16 pb-8 sm:pb-12 border-b border-white/10">
          <SectionHeading
            eyebrow="COMMUNICATION & INQUIRIES"
            title="Let's talk about what's next."
            subtitle="Whether exploring residential acquisition, institutional development, or land collaboration, we look forward to the conversation."
          />
        </div>

        {/* Quick Mobile Action Bar */}
        <div className="lg:hidden grid grid-cols-2 gap-3 mb-8">
          <a
            href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
            className="p-3.5 bg-[#252824] border border-white/10 text-center flex items-center justify-center gap-2 text-xs font-mono uppercase text-[#F5F2EB] active:bg-[#C5AD83] active:text-[#171918] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#C5AD83]" />
            <span>Call Desk</span>
          </a>
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="p-3.5 bg-[#252824] border border-white/10 text-center flex items-center justify-center gap-2 text-xs font-mono uppercase text-[#F5F2EB] active:bg-[#C5AD83] active:text-[#171918] transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[#C5AD83]" />
            <span>Email Studio</span>
          </a>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Column: Studio Details & Direct Channels */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-10 order-2 lg:order-1">
            <div className="space-y-3 sm:space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#C5AD83]">
                DIRECT DESK
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#F5F2EB]">
                Discreet, direct consultation.
              </h2>
              <p className="text-xs sm:text-sm text-[#92928A] font-light leading-relaxed">
                Our acquisition and development principals personally review inquiries
                within 24 business hours.
              </p>
            </div>

            {/* Contact Channels */}
            <div className="space-y-5 pt-4 border-t border-white/10 text-xs sm:text-sm">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 sm:p-3 bg-[#252824] border border-white/10 text-[#C5AD83] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] sm:text-xs uppercase font-mono tracking-wider text-[#92928A] block">
                    Development Studio
                  </span>
                  <p className="text-[#F5F2EB] font-medium mt-0.5">
                    {siteConfig.contact.address}
                  </p>
                  <p className="text-[#92928A] text-[11px] sm:text-xs">{siteConfig.contact.city}</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 sm:p-3 bg-[#252824] border border-white/10 text-[#C5AD83] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] sm:text-xs uppercase font-mono tracking-wider text-[#92928A] block">
                    Email Correspondence
                  </span>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-[#F5F2EB] font-medium hover:text-[#C5AD83] transition-colors mt-0.5 block"
                  >
                    {siteConfig.contact.email}
                  </a>
                  <p className="text-[#92928A] text-[11px] sm:text-xs">
                    Inquiries: {siteConfig.contact.inquiriesEmail}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 sm:p-3 bg-[#252824] border border-white/10 text-[#C5AD83] shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] sm:text-xs uppercase font-mono tracking-wider text-[#92928A] block">
                    Telephone
                  </span>
                  <a
                    href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
                    className="text-[#F5F2EB] font-medium hover:text-[#C5AD83] transition-colors mt-0.5 block"
                  >
                    {siteConfig.contact.phone}
                  </a>
                  <p className="text-[#92928A] text-[11px] sm:text-xs">
                    Direct Desk: {siteConfig.contact.directDesk}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 sm:p-3 bg-[#252824] border border-white/10 text-[#C5AD83] shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] sm:text-xs uppercase font-mono tracking-wider text-[#92928A] block">
                    Studio Hours
                  </span>
                  <p className="text-[#F5F2EB] mt-0.5">{siteConfig.contact.businessHours}</p>
                </div>
              </div>
            </div>

            {/* Transparency Notice Box */}
            <div className="p-4 sm:p-5 bg-[#252824] border border-white/10 text-xs text-[#92928A] leading-relaxed">
              <span className="text-[#C5AD83] font-mono uppercase block mb-1">
                Notice of Discretion
              </span>
              All submissions are handled under strict confidentiality protocols.
              Client information is never traded or distributed.
            </div>
          </div>

          {/* Right Column: Premium Minimal Enquiry Form */}
          <div className="lg:col-span-7 bg-[#252824] border border-white/10 p-5 sm:p-10 lg:p-12 shadow-2xl relative order-1 lg:order-2">
            {submissionStatus === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-10 text-center space-y-5"
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-[#C5AD83]/20 border border-[#C5AD83] flex items-center justify-center text-[#C5AD83]">
                  <CheckCircle className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F2EB]">
                  Inquiry Received
                </h3>
                <p className="text-xs sm:text-sm text-[#92928A] max-w-md mx-auto font-light leading-relaxed">
                  Thank you for reaching out to Vihaan Traders. Your message has been logged
                  and transferred to our development advisory desk for review.
                </p>
                <div className="p-3.5 bg-[#171918] border border-white/10 text-xs text-[#92928A] max-w-md mx-auto text-left">
                  <span className="text-[#C5AD83] block font-mono uppercase mb-1">
                    Integration Note
                  </span>
                  Client-side simulation active. Form data has been verified and formatted
                  ready for your webhook or backend endpoint.
                </div>
                <button
                  onClick={() => {
                    setSubmissionStatus(null);
                    setFormData({
                      fullName: "",
                      email: "",
                      phone: "",
                      enquiryType: "Residential Acquisition",
                      projectOfInterest: "",
                      message: "",
                      privacyConsent: false,
                    });
                  }}
                  className="w-full sm:w-auto px-6 py-3.5 text-xs uppercase tracking-[0.2em] font-medium text-[#171918] bg-[#C5AD83] hover:bg-[#dfcaa7] transition-colors cursor-pointer min-h-[48px]"
                >
                  Send Another Inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="border-b border-white/10 pb-4 mb-4">
                  <h3 className="font-serif text-xl sm:text-2xl text-[#F5F2EB]">
                    Initiate an Enquiry
                  </h3>
                  <p className="text-xs text-[#92928A] mt-1">
                    Please provide your contact details and development requirements.
                  </p>
                </div>

                {/* Full Name Field */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-xs uppercase font-mono tracking-wider text-[#92928A] mb-1.5"
                  >
                    Full Name <span className="text-[#C5AD83]">*</span>
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Maya Advani"
                    className={`w-full bg-[#171918] border px-4 py-3.5 text-base sm:text-sm text-[#F5F2EB] placeholder-[#92928A]/40 focus:outline-none transition-colors min-h-[48px] ${
                      errors.fullName
                        ? "border-red-400 focus:border-red-400"
                        : "border-white/15 focus:border-[#C5AD83]"
                    }`}
                  />
                  {errors.fullName && (
                    <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Email & Phone Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs uppercase font-mono tracking-wider text-[#92928A] mb-1.5"
                    >
                      Email Address <span className="text-[#C5AD83]">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      inputMode="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="maya@example.com"
                      className={`w-full bg-[#171918] border px-4 py-3.5 text-base sm:text-sm text-[#F5F2EB] placeholder-[#92928A]/40 focus:outline-none transition-colors min-h-[48px] ${
                        errors.email
                          ? "border-red-400 focus:border-red-400"
                          : "border-white/15 focus:border-[#C5AD83]"
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs uppercase font-mono tracking-wider text-[#92928A] mb-1.5"
                    >
                      Phone Number (Optional)
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      inputMode="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98200 00000"
                      className="w-full bg-[#171918] border border-white/15 focus:border-[#C5AD83] px-4 py-3.5 text-base sm:text-sm text-[#F5F2EB] placeholder-[#92928A]/40 focus:outline-none transition-colors min-h-[48px]"
                    />
                  </div>
                </div>

                {/* Enquiry Type & Project Dropdown */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label
                      htmlFor="enquiryType"
                      className="block text-xs uppercase font-mono tracking-wider text-[#92928A] mb-1.5"
                    >
                      Enquiry Category
                    </label>
                    <select
                      id="enquiryType"
                      name="enquiryType"
                      value={formData.enquiryType}
                      onChange={handleChange}
                      className="w-full bg-[#171918] border border-white/15 focus:border-[#C5AD83] px-4 py-3.5 text-base sm:text-sm text-[#F5F2EB] focus:outline-none transition-colors min-h-[48px]"
                    >
                      <option value="Residential Acquisition">
                        Residential Acquisition
                      </option>
                      <option value="Commercial Leasing">Commercial Leasing</option>
                      <option value="Commercial / Partnership">
                        Land / Co-Development
                      </option>
                      <option value="General Inquiry">General Studio Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="projectOfInterest"
                      className="block text-xs uppercase font-mono tracking-wider text-[#92928A] mb-1.5"
                    >
                      Development of Interest
                    </label>
                    <select
                      id="projectOfInterest"
                      name="projectOfInterest"
                      value={formData.projectOfInterest}
                      onChange={handleChange}
                      className="w-full bg-[#171918] border border-white/15 focus:border-[#C5AD83] px-4 py-3.5 text-base sm:text-sm text-[#F5F2EB] focus:outline-none transition-colors min-h-[48px]"
                    >
                      <option value="">-- General / Non-Specific --</option>
                      {projects.map((p) => (
                        <option key={p.id} value={p.name}>
                          {p.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs uppercase font-mono tracking-wider text-[#92928A] mb-1.5"
                  >
                    Your Message <span className="text-[#C5AD83]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please describe your timeline, desired configuration, or partnership proposal..."
                    className={`w-full bg-[#171918] border px-4 py-3 text-base sm:text-sm text-[#F5F2EB] placeholder-[#92928A]/40 focus:outline-none transition-colors resize-none ${
                      errors.message
                        ? "border-red-400 focus:border-red-400"
                        : "border-white/15 focus:border-[#C5AD83]"
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Privacy Consent Checkbox */}
                <div className="pt-1">
                  <label className="flex items-start gap-3 cursor-pointer group select-none">
                    <input
                      type="checkbox"
                      name="privacyConsent"
                      checked={formData.privacyConsent}
                      onChange={handleChange}
                      className="mt-1 w-5 h-5 rounded-none accent-[#C5AD83] bg-[#171918] border-white/20 shrink-0"
                    />
                    <span className="text-xs text-[#92928A] group-hover:text-[#F5F2EB] transition-colors leading-relaxed">
                      I acknowledge that Vihaan Traders will use my information to
                      respond to my inquiry under strict privacy confidentiality.
                    </span>
                  </label>
                  {errors.privacyConsent && (
                    <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.privacyConsent}
                    </p>
                  )}
                </div>

                {/* Submit Action Button (48px+ touch height) */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full min-h-[52px] py-4 text-xs uppercase tracking-[0.25em] font-medium text-[#171918] bg-[#C5AD83] hover:bg-[#dfcaa7] active:bg-[#c5ad83] border border-[#C5AD83] transition-colors disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-[#171918] border-t-transparent rounded-full animate-spin" />
                        <span>Transmitting Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Confidential Inquiry</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
