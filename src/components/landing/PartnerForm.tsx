"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, MapPin, User, Mail, Phone, MessageSquare, Send, CheckCircle2, Loader2, Hospital } from "lucide-react";
import AnimatedSection from "../ui/AnimatedSection";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100 } },
};

export default function PartnerForm() {
  const [formData, setFormData] = useState({
    orgName: "",
    facilityType: "Hospital",
    location: "",
    contactName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/join-network", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({
          orgName: "",
          facilityType: "Hospital",
          location: "",
          contactName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setStatus("error");
        setErrorMessage(result.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection.");
    }
  };

  return (
    <section id="partner-with-us" className="py-24 relative overflow-hidden bg-surface-50/50">
      {/* Decorative blurry backgrounds */}
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-brand/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-ink mb-4">
            Partner Your <span className="text-brand">Hospital or Clinic</span>
          </h2>
          <p className="text-lg text-ink-muted max-w-2xl mx-auto">
            Empower your patients with seamless virtual care coordination. Join the RemoteWard provider network and extend your care loop today.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="bg-white/80 backdrop-blur-md border border-surface-200 shadow-xl rounded-3xl p-8 sm:p-12 transition-all duration-300">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="text-center py-12 space-y-6"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.2 }}
                    className="w-24 h-24 bg-accent/20 text-accent-alt rounded-full flex items-center justify-center mx-auto"
                  >
                    <CheckCircle2 className="w-14 h-14" />
                  </motion.div>
                  <h3 className="text-3xl font-bold text-ink">Application Submitted!</h3>
                  <p className="text-lg text-ink-muted max-w-md mx-auto">
                    Thank you for applying to join the RemoteWard network. Our partnership team will review your clinic details and reach out within 24-48 hours.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="inline-flex items-center text-brand hover:text-brand-dark font-semibold mt-4 cursor-pointer hover:underline"
                  >
                    Submit another response
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  variants={containerVariants}
                  initial="hidden"
                  animate="show"
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Organization Name */}
                    <motion.div variants={itemVariants} className="space-y-2">
                      <label className="block text-sm font-semibold text-ink-muted">Hospital or Clinic Name</label>
                      <div className="relative flex items-center">
                        <Building2 className="absolute left-4 w-5 h-5 text-ink-muted/60" />
                        <input
                          type="text"
                          name="orgName"
                          value={formData.orgName}
                          onChange={handleChange}
                          required
                          placeholder="e.g. Metro Care Hospital"
                          className="w-full bg-surface-50 border border-surface-200 focus:border-brand focus:ring-1 focus:ring-brand rounded-xl py-3.5 pl-12 pr-4 text-ink placeholder-ink-muted/50 outline-none transition-all"
                        />
                      </div>
                    </motion.div>

                    {/* Facility Type */}
                    <motion.div variants={itemVariants} className="space-y-2">
                      <label className="block text-sm font-semibold text-ink-muted">Facility Type</label>
                      <div className="relative flex items-center">
                        <Hospital className="absolute left-4 w-5 h-5 text-ink-muted/60" />
                        <select
                          name="facilityType"
                          value={formData.facilityType}
                          onChange={handleChange}
                          className="w-full bg-surface-50 border border-surface-200 focus:border-brand focus:ring-1 focus:ring-brand rounded-xl py-3.5 pl-12 pr-4 text-ink outline-none transition-all appearance-none cursor-pointer"
                        >
                          <option value="Hospital">Hospital</option>
                          <option value="Clinic">Clinic</option>
                          <option value="Diagnostic Center">Diagnostic Center</option>
                          <option value="Care Facility">Elderly/Care Facility</option>
                        </select>
                      </div>
                    </motion.div>

                    {/* Location */}
                    <motion.div variants={itemVariants} className="space-y-2">
                      <label className="block text-sm font-semibold text-ink-muted">Location (City, State)</label>
                      <div className="relative flex items-center">
                        <MapPin className="absolute left-4 w-5 h-5 text-ink-muted/60" />
                        <input
                          type="text"
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          required
                          placeholder="e.g. Chicago, IL"
                          className="w-full bg-surface-50 border border-surface-200 focus:border-brand focus:ring-1 focus:ring-brand rounded-xl py-3.5 pl-12 pr-4 text-ink placeholder-ink-muted/50 outline-none transition-all"
                        />
                      </div>
                    </motion.div>

                    {/* Contact Name */}
                    <motion.div variants={itemVariants} className="space-y-2">
                      <label className="block text-sm font-semibold text-ink-muted">Contact Person Name</label>
                      <div className="relative flex items-center">
                        <User className="absolute left-4 w-5 h-5 text-ink-muted/60" />
                        <input
                          type="text"
                          name="contactName"
                          value={formData.contactName}
                          onChange={handleChange}
                          required
                          placeholder="e.g. Dr. Sarah Jenkins"
                          className="w-full bg-surface-50 border border-surface-200 focus:border-brand focus:ring-1 focus:ring-brand rounded-xl py-3.5 pl-12 pr-4 text-ink placeholder-ink-muted/50 outline-none transition-all"
                        />
                      </div>
                    </motion.div>

                    {/* Email */}
                    <motion.div variants={itemVariants} className="space-y-2">
                      <label className="block text-sm font-semibold text-ink-muted">Official Email Address</label>
                      <div className="relative flex items-center">
                        <Mail className="absolute left-4 w-5 h-5 text-ink-muted/60" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="e.g. contact@metrocare.com"
                          className="w-full bg-surface-50 border border-surface-200 focus:border-brand focus:ring-1 focus:ring-brand rounded-xl py-3.5 pl-12 pr-4 text-ink placeholder-ink-muted/50 outline-none transition-all"
                        />
                      </div>
                    </motion.div>

                    {/* Phone / WhatsApp */}
                    <motion.div variants={itemVariants} className="space-y-2">
                      <label className="block text-sm font-semibold text-ink-muted">WhatsApp / Phone Number</label>
                      <div className="relative flex items-center">
                        <Phone className="absolute left-4 w-5 h-5 text-ink-muted/60" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="e.g. +1 (555) 019-2834"
                          className="w-full bg-surface-50 border border-surface-200 focus:border-brand focus:ring-1 focus:ring-brand rounded-xl py-3.5 pl-12 pr-4 text-ink placeholder-ink-muted/50 outline-none transition-all"
                        />
                      </div>
                    </motion.div>
                  </div>

                  {/* Message */}
                  <motion.div variants={itemVariants} className="space-y-2">
                    <label className="block text-sm font-semibold text-ink-muted">Additional Info or Requirements (Optional)</label>
                    <div className="relative flex items-start">
                      <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-ink-muted/60" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Tell us a little bit about your facility, patient volume, or customization needs..."
                        className="w-full bg-surface-50 border border-surface-200 focus:border-brand focus:ring-1 focus:ring-brand rounded-xl py-3.5 pl-12 pr-4 text-ink placeholder-ink-muted/50 outline-none transition-all resize-none"
                      />
                    </div>
                  </motion.div>

                  {/* Submit Button / Status Display */}
                  <motion.div variants={itemVariants} className="pt-4 flex flex-col items-center">
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full sm:w-auto min-w-[200px] bg-brand hover:bg-brand-dark disabled:bg-brand/60 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {status === "submitting" ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Apply to Partner
                        </>
                      )}
                    </button>

                    {status === "error" && (
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 text-sm font-medium mt-4 text-center"
                      >
                        {errorMessage}
                      </motion.p>
                    )}
                  </motion.div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
