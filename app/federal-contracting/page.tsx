"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Shield, Target, Users, BookOpen, Warehouse, Activity, Calendar, Award, Star, History, Briefcase, FileText } from "lucide-react";

const competencies = [
  {
    title: "Executive & Dignitary Protection",
    description: "Specialist-led protection for high-profile officials.",
    icon: Shield
  },
  {
    title: "Force Protection",
    description: "Integrated security measures to safeguard personnel and assets.",
    icon: Target
  },
  {
    title: "Security Professional Development",
    description: "On-site training and tactical skill advancement.",
    icon: BookOpen
  },
  {
    title: "Residential & Corporate",
    description: "Full-spectrum facility security for critical infrastructure.",
    icon: Warehouse
  },
  {
    title: "Armed & Unarmed Specialized Security",
    description: "Uniformed and non-uniformed personnel.",
    icon: Users
  },
  {
    title: "Risk Management",
    description: "Comprehensive assessments and background investigations.",
    icon: Activity
  },
  {
    title: "Special Event Security",
    description: "Tactical planning and crowd management for large-scale operations.",
    icon: Calendar
  }
];

const differentiators = [
  { title: "30+ Years of Industry Leadership", icon: History },
  { title: "SDVOSB Certified", icon: Award },
  { title: "Minority-Owned Business", icon: Star },
  { title: "NYPD & U.S. Secret Service Certified", icon: Shield },
  { title: "Personal Protection Specialists (PPS)", icon: Users },
  { title: "SAS-AP Certified", icon: Target },
  { title: "ASIS International Membership", icon: Briefcase },
  { title: "Executive Protection HQ", icon: Warehouse }
];

export default function FederalContractingPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-gray-900 overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[85vh] flex flex-col pt-32 overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover scale-105"
          >
            <source src="/videos/goverment.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 flex-1 flex flex-col items-center justify-center container mx-auto px-6 text-center text-white">
          <motion.span 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="bg-primary text-white font-black uppercase tracking-[0.4em] text-[10px] py-2 px-6 mb-8 inline-block"
          >
            Government Divisions
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-2xl md:text-5xl lg:text-7xl font-bold tracking-tighter mb-6 max-w-5xl mx-auto leading-tight md:leading-none uppercase px-6"
          >
            Federal Contracting & <br className="hidden md:block" /> Government Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-sm md:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed mb-10 px-8"
          >
            Strategic Security Solutions for Federal Agencies. Elite protocols and tactical expertise 
            meeting the rigorous demands of national and state organizations.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <a 
              href="#contact"
              className="inline-block bg-white text-black px-10 py-5 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-primary transition-all duration-300 shadow-2xl hover:scale-105"
            >
              Contact our federal liaison
            </a>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12 md:py-24 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="space-y-6">
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="text-xl md:text-3xl lg:text-4xl font-bold tracking-tight text-dark uppercase"
              >
                Corporate Overview
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="text-gray-600 text-lg leading-relaxed font-light"
              >
                Worldwide Security Options (WSO) is a premier protective agency headquartered in New York City, serving the tri-state area and beyond. As a Service-Disabled Veteran-Owned Small Business (SDVOSB) with over 30 years of industry experience, we provide elite security protocols and tactical expertise to meet the rigorous demands of federal and state organizations.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="text-gray-600 text-lg leading-relaxed font-light"
              >
                We specialize in comprehensive protective services, ranging from high-level executive protection to critical infrastructure security. Our team holds numerous federal credentials and specialized training certificates, ensuring the delivery of top-notch, compliant solutions for government contracting needs.
              </motion.p>
            </div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-10 rounded-[2rem] border border-gray-200 shadow-xl"
            >
              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center border border-gray-100 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                    <Award size={32} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">SDVOSB</h4>
                    <p className="text-sm text-gray-500 uppercase tracking-widest">Service-Disabled Veteran-Owned</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center border border-gray-100 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                    <Star size={32} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Minority-Owned</h4>
                    <p className="text-sm text-gray-500 uppercase tracking-widest">Business Enterprise (MBE)</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center border border-gray-100 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                    <FileText size={32} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Capability Statement</h4>
                    <p className="text-sm text-gray-500 uppercase tracking-widest text-[#CB9332]">Request Documentation</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Competencies Grid */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
          <div className="text-center mb-16">
            <motion.span 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="text-primary font-black uppercase tracking-[0.3em] text-[10px] mb-4 block"
            >
              Our Capabilities
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold tracking-tight text-dark"
            >
              Core Competencies
            </motion.h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {competencies.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-[1.5rem] shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3 tracking-tight">{item.title}</h3>
                <p className="text-gray-500 font-light leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators Section */}
      <section className="py-32 bg-dark-blue text-white overflow-hidden relative">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/3">
              <motion.span 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="text-primary font-black uppercase tracking-[0.4em] text-[10px] mb-4 block"
              >
                The WSO Advantage
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold mb-8 leading-tight tracking-tight"
              >
                What sets us <br /> apart.
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="text-gray-400 font-light leading-relaxed mb-8"
              >
                Our agency stands uniquely positioned in the federal marketplace through decades of certified expertise and elite training recognized by global institutions.
              </motion.p>
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="h-1 bg-primary mb-12" 
              />
            </div>
            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
              {differentiators.map((diff, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="mt-1 flex-shrink-0">
                    <div className="w-6 h-6 rounded-full border border-primary/50 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                  </div>
                  <h4 className="text-lg md:text-xl font-medium text-gray-200 tracking-tight leading-snug">
                    {diff.title}
                  </h4>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 tracking-tight">Codes & Compliance</h2>
          <div className="bg-gray-50 rounded-[2.5rem] p-8 md:p-16 border border-gray-100 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
              <div className="space-y-8">
                <div>
                  <label className="text-[10px] uppercase tracking-[0.3em] text-gray-400 block mb-2 font-black">Business Type</label>
                  <p className="text-xl font-bold">SDVOSB</p>
                  <p className="text-gray-500 text-sm italic">Service-Disabled Veteran-Owned Small Business</p>
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-[0.3em] text-gray-400 block mb-2 font-black">Status</label>
                  <p className="text-xl font-bold">Minority-Owned Business</p>
                </div>
              </div>
              <div className="space-y-8 md:border-l md:border-gray-200 md:pl-12">
                <div>
                  <label className="text-[10px] uppercase tracking-[0.3em] text-gray-400 block mb-2 font-black">Certifications</label>
                  <ul className="space-y-3 font-bold text-lg">
                    <li>NYPD Dignitary Protection</li>
                    <li>IAPPA Member</li>
                    <li>ASIS International</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Partner Section */}
      <section id="contact" className="py-32 bg-dark-blue relative overflow-hidden">
        <div className="container mx-auto px-6 text-center text-white relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter"
          >
            Partner with WSO
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed mb-12"
          >
            We are prepared to support the security needs of your organization with precision, 
            attention to detail, and professional time management.
          </motion.p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <button className="bg-white text-black px-12 py-6 rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 transition-all duration-300 shadow-black/20 shadow-2xl">
              Contact our federal liaison
            </button>
            <p className="text-sm font-bold uppercase tracking-widest text-white/70">
              Response within 24 hours
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
