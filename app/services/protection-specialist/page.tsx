"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { useModal } from "@/context/ModalContext";
import { 
  Shield, 
  Target, 
  Users, 
  UserCheck, 
  Home, 
  Calendar, 
  PackageCheck, 
  Video, 
  Search, 
  FileCheck, 
  Lock,
  Star,
  Award,
  Globe
} from "lucide-react";
import Link from "next/link";

const operationalSpectrum = [
  {
    title: "Personal & Executive Protection",
    description: "Discreet security for high-profile individuals.",
    icon: UserCheck
  },
  {
    title: "Residential Security",
    description: "Fortifying private estates and high-end residences.",
    icon: Home
  },
  {
    title: "Event Security",
    description: "Orchestrating seamless protection for high-stakes gatherings.",
    icon: Calendar
  },
  {
    title: "Loss Prevention",
    description: "Specialized retail protection and asset security.",
    icon: PackageCheck
  }
];

const techTactical = [
  {
    title: "State-of-the-Art Surveillance",
    description: "Leveraging modern systems for constant vigilance.",
    icon: Video
  },
  {
    title: "Threat Detection",
    description: "Utilizing the latest technology to identify risks before they escalate.",
    icon: Search
  },
  {
    title: "Advanced Security Protocols",
    description: "Implementing proactive defense measures to ensure a safe environment.",
    icon: FileCheck
  }
];

export default function ProtectionSpecialistPage() {
  const { openModal } = useModal();
  
  const fadeIn: any = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }
  };

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
            className="w-full h-full object-cover"
          >
            <source src="/videos/resdent.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 flex-1 flex flex-col items-center justify-center container mx-auto px-6 text-center text-white">
          <motion.span 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="bg-primary text-white font-black uppercase tracking-[0.4em] text-[10px] py-2 px-6 mb-8 inline-block"
          >
            Elite Guarding Services
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-2xl md:text-5xl lg:text-7xl font-bold tracking-tighter mb-6 max-w-5xl mx-auto leading-tight md:leading-none uppercase px-6"
          >
            Protection <br className="hidden md:block" /> Specialists
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-sm md:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed mb-10 px-8"
          >
            Unrivaled Security Solutions for Challenging Environments. 
            Providing a sophisticated shield of security across New York and New Jersey.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <button 
              onClick={openModal}
              className="inline-block bg-white text-black px-10 py-5 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-primary transition-all duration-300 shadow-2xl hover:scale-105 cursor-pointer"
            >
              Request Assessment
            </button>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 md:py-24 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="space-y-6">
              <motion.h2 
                {...fadeIn}
                className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-dark uppercase"
              >
                Sophisticated Shield of Security
              </motion.h2>
              <motion.p 
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: 0.1 }}
                className="text-gray-600 text-lg leading-relaxed font-light"
              >
                At Worldwide Security Options (WSO), our exceptional team of highly trained professionals is dedicated to ensuring your safety and peace of mind. Our Protection Specialists provide a sophisticated shield of security, combining elite tactical backgrounds with a commitment to excellence in every mission.
              </motion.p>
              <motion.div 
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: 0.2 }}
                className="pt-4 flex items-center gap-4 text-primary font-bold uppercase tracking-widest text-xs"
              >
                <div className="h-px w-12 bg-primary" />
                Proven Tactical Excellence
              </motion.div>
            </div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-[2.5rem] overflow-hidden shadow-2xl h-[500px]"
            >
              <img 
                src="/images/residntphoto.png" 
                alt="WSO Protection Specialists" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-10 left-10 text-white">
                <p className="text-xs font-black uppercase tracking-[0.3em] mb-2">Residential & Commercial</p>
                <h4 className="text-2xl font-bold">Unwavering Vigilance</h4>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Trust WSO Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
          <div className="text-center mb-16">
            <motion.span {...fadeIn} className="text-primary font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">
              Global Elite Standards
            </motion.span>
            <motion.h2 {...fadeIn} transition={{ delay: 0.1 }} className="text-3xl md:text-5xl font-bold tracking-tight text-dark">
              Why Trust WSO Protection Specialists?
            </motion.h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              {...fadeIn}
              transition={{ delay: 0.2 }}
              className="bg-white p-10 rounded-[2rem] shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mb-8 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <Users size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight">An Elite Force of Experts</h3>
              <p className="text-gray-500 font-light leading-relaxed text-lg">
                Our Protection Specialists are handpicked from elite backgrounds in the military, law enforcement, and specialized tactical units. This extensive real-world experience equips them with the critical thinking and physical skills necessary to manage complex security challenges with precision and effectiveness.
              </p>
            </motion.div>
            <motion.div
              {...fadeIn}
              transition={{ delay: 0.3 }}
              className="bg-white p-10 rounded-[2rem] shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mb-8 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight">Tailored Strategies for Maximum Security</h3>
              <p className="text-gray-500 font-light leading-relaxed text-lg">
                We recognize that no two security environments are the same. We take a personalized approach, conducting meticulous risk assessments to identify vulnerabilities specific to your lifestyle or business. This allows us to develop customized protection strategies that ensure the highest level of security possible.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comprehensive Operational Spectrum Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
          <div className="text-center mb-16">
            <motion.span {...fadeIn} className="text-primary font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">
              Versatile Protection
            </motion.span>
            <motion.h2 {...fadeIn} transition={{ delay: 0.1 }} className="text-3xl md:text-5xl font-bold tracking-tight text-dark">
              Comprehensive Operational Spectrum
            </motion.h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {operationalSpectrum.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-[1.5rem] border border-gray-100 hover:bg-dark-blue hover:text-white transition-all duration-500 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3 tracking-tight">{item.title}</h3>
                <p className="opacity-70 font-light leading-relaxed text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology & Tactical Expertise Section */}
      <section className="py-32 bg-dark-blue text-white overflow-hidden relative">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/3">
              <motion.span {...fadeIn} className="text-primary font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">
                The Tech Frontier
              </motion.span>
              <motion.h2 {...fadeIn} transition={{ delay: 0.1 }} className="text-3xl md:text-5xl font-bold mb-8 leading-tight tracking-tighter">
                Technology and <br /> Tactical Expertise.
              </motion.h2>
              <motion.p {...fadeIn} transition={{ delay: 0.2 }} className="text-gray-400 font-light leading-relaxed mb-8">
                Staying at the forefront of the industry, we integrate advanced security technologies with proven tactical protocols.
              </motion.p>
              <div className="flex items-center gap-6">
                 <div className="text-center">
                    <p className="text-3xl font-bold text-white">100%</p>
                    <p className="text-[10px] uppercase tracking-widest text-primary">Vigilance</p>
                 </div>
                 <div className="h-10 w-px bg-white/10" />
                 <div className="text-center">
                    <p className="text-3xl font-bold text-white">24/7</p>
                    <p className="text-[10px] uppercase tracking-widest text-primary">Support</p>
                 </div>
              </div>
            </div>
            <div className="lg:w-2/3 grid grid-cols-1 gap-6">
              {techTactical.map((strategy, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-6 p-8 border border-white/5 rounded-2xl hover:bg-white/5 transition-all group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center flex-shrink-0 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <strategy.icon size={28} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold mb-2 tracking-tight text-white">{strategy.title}</h4>
                    <p className="text-gray-400 font-light leading-relaxed">{strategy.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Confidentiality Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-5xl text-center">
          <motion.div 
            {...fadeIn}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-50 mb-8 border border-gray-100"
          >
            <Lock className="text-primary" size={32} />
          </motion.div>
          <motion.h2 {...fadeIn} transition={{ delay: 0.1 }} className="text-3xl md:text-5xl font-bold mb-8 tracking-tighter">
            Unwavering Commitment to Confidentiality
          </motion.h2>
          <motion.p {...fadeIn} transition={{ delay: 0.2 }} className="text-xl text-gray-600 font-light leading-relaxed max-w-4xl mx-auto">
            "In the world of professional protection, discretion is paramount. Our specialists adhere to the strictest standards of professionalism, safeguarding your personal and professional information with total integrity. Your privacy is our top priority."
          </motion.p>
        </div>
      </section>

      {/* Final Call to Action Section */}
      <section className="py-32 bg-primary relative overflow-hidden">
        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_25%_25%,white_1px,transparent_1px)] bg-[length:40px_40px]" />
        </div>

        <div className="container mx-auto px-6 text-center text-white relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter uppercase"
          >
            Secure What Matters Most
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed mb-12"
          >
            Elevate your security to new heights with the leading provider of protection specialist services in New York City and New Jersey. Contact Worldwide Security Options today to discuss your specific requirements.
          </motion.p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Link 
              href="/#contact"
              className="bg-white text-primary px-12 py-6 rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 transition-all duration-300 shadow-2xl hover:bg-dark-blue hover:text-white"
            >
              CONTACT A PROTECTION SPECIALIST
            </Link>
            <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/70">
                    Your safety is our priority
                </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
