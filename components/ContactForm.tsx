"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const services = [
  "Anti-Piracy Film Surveillance",
  "Executive Protection & Security Drivers",
  "Federal Contracting & Government Services",
  "Force Protection Specialists",
  "Protection Specialists",
];

interface ContactFormProps {
  dark?: boolean;
}

export function ContactForm({ dark = false }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add logic here (email, etc.)
    alert("Thank you. Our team will contact you shortly.");
  };

  const inputClasses = `w-full px-4 py-4 rounded-sm border focus:outline-none transition-all duration-300 ${
    dark 
      ? "bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-primary" 
      : "bg-gray-50 border-gray-200 text-dark-blue placeholder:text-gray-400 focus:border-primary"
  }`;

  const labelClasses = `block text-xs font-black uppercase tracking-widest mb-2 ${
    dark ? "text-gray-400" : "text-dark-blue/60"
  }`;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className={labelClasses}>Full Name</label>
          <input
            required
            type="text"
            placeholder="John Doe"
            className={inputClasses}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div>
          <label className={labelClasses}>Email Address</label>
          <input
            required
            type="email"
            placeholder="john@example.com"
            className={inputClasses}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className={labelClasses}>Phone Number</label>
          <input
            type="tel"
            placeholder="+1 (555) 000-0000"
            className={inputClasses}
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>
        <div>
          <label className={labelClasses}>Service Required</label>
          <select
            required
            className={inputClasses}
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          >
            <option value="" disabled>Select a service</option>
            {services.map((service) => (
              <option key={service} value={service} className="text-dark-blue">
                {service}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className={labelClasses}>Message / Details</label>
        <textarea
          rows={4}
          placeholder="How can we help you?"
          className={`${inputClasses} resize-none`}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full py-5 bg-primary text-white font-black uppercase tracking-[0.2em] text-xs hover:bg-red-700 transition-all duration-300 shadow-xl hover:scale-[1.01]"
      >
        Request Assessment
      </button>
    </form>
  );
}
