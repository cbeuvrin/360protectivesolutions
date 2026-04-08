"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { Mail, MapPin, Phone, ShieldCheck } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

export default function ContactPage() {
  return (
    <main className="bg-white">
      <Navbar />

      {/* Simple Hero Section */}
      <section className="pt-48 pb-20 bg-dark-blue text-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-primary font-black uppercase tracking-[0.4em] text-[10px] mb-4 block"
          >
            Confidential Inquiry
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter uppercase"
          >
            Contact
          </motion.h1>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-16">
            
            {/* Contact Info */}
            <div className="lg:col-span-5 space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-dark-blue mb-6">Reach Our <br /> Global Operations</h2>
                <p className="text-gray-500 font-light leading-relaxed max-w-md">
                  Our specialists are available 24/7 to discuss your security requirements. 
                  Connect with us for a confidential assessment.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-gray-50 flex items-center justify-center rounded-sm shrink-0">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-widest text-dark-blue/40 mb-1">Headquarters</h4>
                    <p className="text-dark-blue font-bold">New York City, NY</p>
                    <p className="text-gray-500 text-sm font-light">Tri-State Operations Center</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-gray-50 flex items-center justify-center rounded-sm shrink-0">
                    <Phone className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-widest text-dark-blue/40 mb-1">Direct Line</h4>
                    <p className="text-dark-blue font-bold">+1 (555) 360-PROT</p>
                    <p className="text-gray-500 text-sm font-light">Available 24/7</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-gray-50 flex items-center justify-center rounded-sm shrink-0">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-widest text-dark-blue/40 mb-1">Confidential Email</h4>
                    <p className="text-dark-blue font-bold">ops@360protectivesolutions.com</p>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-gray-50 border border-gray-100 rounded-sm">
                <div className="flex items-center gap-3 mb-4">
                  <ShieldCheck className="text-primary" size={24} />
                  <span className="font-bold text-dark-blue uppercase tracking-widest text-xs">Vetted & Licensed</span>
                </div>
                <p className="text-xs text-gray-400 leading-normal">
                  360 Protective Solutions is a licensed and insured private security firm. 
                  All personnel undergo rigorous federal background checks and tactical certification.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7 bg-white shadow-2xl p-8 md:p-12 border border-gray-100 rounded-sm -mt-32 lg:-mt-48 relative z-10">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
