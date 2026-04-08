"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Shield, Eye, Camera, Radio, CheckCircle2, Search } from "lucide-react";
import Link from "next/link";

export default function AntiPiracyPage() {
  const fadeIn: any = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  };

  const defenseLayers = [
    {
      icon: <Camera className="w-8 h-8 text-primary" />,
      title: "HD-CCTV & Facial Recognition",
      description: "Our first line of defense. High-definition monitoring equipped with advanced facial recognition to identify known piracy suspects in real-time, ensuring every angle of the venue is under meticulous watch."
    },
    {
      icon: <Search className="w-8 h-8 text-primary" />,
      title: "Undercover Tactical Agents",
      description: "Seamlessly blended within the audience. Our specialists are equipped with military-grade Night Vision Goggles (NVG) to detect the faint light of hidden recording devices without disrupting the cinematic experience."
    },
    {
      icon: <Eye className="w-8 h-8 text-primary" />,
      title: "Infrared Electronic Spotting",
      description: "Uncovering the hidden. We deploy sophisticated infrared sensors engineered to detect the electronic signatures of concealed cameras, whether they are active or dormant."
    }
  ];

  return (
    <main className="min-h-screen bg-white font-sans text-gray-900 overflow-x-hidden">
      <Navbar />

      {/* Hero Section (Matched with AboutHero) */}
      <section className="relative min-h-[60vh] flex items-center pt-56 pb-24 overflow-hidden bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Side: Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as any }}
            >
              <motion.h4 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-6"
              >
                Exclusivity Secured
              </motion.h4>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold text-dark-blue leading-tight mb-8"
              >
                Anti-Piracy Film Surveillance: <br />
                <span className="text-primary font-black">Protecting the Silver Screen.</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="text-lg md:text-xl text-gray-700 font-light leading-relaxed max-w-2xl mb-10"
              >
                Advanced HD-CCTV, Undercover Agents, and Infrared Detection to safeguard your exclusive premieres.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Link 
                  href="/#contact" 
                  className="inline-block px-10 py-5 bg-primary text-white font-black uppercase tracking-[0.2em] text-xs hover:bg-red-700 transition-all rounded-sm shadow-xl"
                >
                  Request a Confidential Consultation
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Side: Image instead of Round Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as any, delay: 0.5 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative w-full aspect-video lg:aspect-square lg:max-w-xl overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="/images/services/anti-piracy-hero.png" 
                  alt="Anti-Piracy Security" 
                  className="w-full h-full object-cover grayscale-[30%] opacity-90 hover:opacity-100 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/40 to-transparent pointer-events-none" />
                {/* Subtle background glow */}
                <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl -z-10" />
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Minimal Decorative elements */}
        <div className="absolute -top-12 -right-12 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="absolute -bottom-12 -left-12 w-96 h-96 bg-dark-blue/5 rounded-full blur-3xl -z-10" />
      </section>

      {/* Multi-Layered Defense */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-16">
            <motion.h2 {...fadeIn} className="text-3xl md:text-5xl font-bold text-dark-blue mb-4">
              The Multi-Layered Defense
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {defenseLayers.map((layer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-sm shadow-sm border border-gray-100 hover:shadow-xl transition-all group"
              >
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">
                  {layer.icon}
                </div>
                <h3 className="text-xl font-bold text-dark-blue mb-4 uppercase tracking-tighter">
                  {layer.title}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed text-sm">
                  {layer.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Training & Discretion */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
               initial={{ opacity: 0, x: -40 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8 }}
               viewport={{ once: true }}
               className="lg:w-1/2 relative"
            >
              <div className="absolute -inset-4 bg-primary/10 rounded-2xl -rotate-2" />
              <img 
                src="/images/services/anti-piracy-2.png" 
                alt="WSO Specialized Agent" 
                className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </motion.div>

            <div className="lg:w-1/2">
              <motion.span {...fadeIn} className="text-primary font-bold uppercase tracking-widest text-xs mb-4 block underline decoration-2 underline-offset-8">
                Trust & Authority
              </motion.span>
              <motion.h2 {...fadeIn} transition={{ delay: 0.1 }} className="text-3xl md:text-5xl font-bold text-dark-blue mb-8">
                Precision Performance <br /> in the Dark.
              </motion.h2>
              <motion.p {...fadeIn} transition={{ delay: 0.2 }} className="text-lg text-gray-600 font-light mb-10 leading-relaxed">
                "Operational effectiveness should never compromise the audience experience. Every WSO agent undergoes a specialized curriculum focused on precision and discretion."
              </motion.p>
              
              <div className="space-y-6">
                {[
                  { title: "Low-Light Navigation", text: "Moving through crowds with zero footprint." },
                  { title: "Signature Recognition", text: "Identifying illicit recording patterns in seconds." },
                  { title: "Discreet Response", text: "Neutralizing threats without causing a scene." }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + (idx * 0.1) }}
                    viewport={{ once: true }}
                    className="flex gap-4"
                  >
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-dark-blue uppercase tracking-widest text-xs mb-1">{item.title}</h4>
                      <p className="text-gray-500 font-light text-sm">{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tactical Coordination Block (Dark Mode Fix) */}
      <section className="py-24 bg-dark-blue text-white overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto border border-white/10 p-12 md:p-20 relative rounded-sm bg-dark-blue"
            >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary px-8 py-2 font-black uppercase tracking-widest text-xs">
                    Integration Strategy
                </div>
                <Radio className="w-12 h-12 text-primary mx-auto mb-8 animate-pulse shadow-[0_0_20px_rgba(181,23,23,0.5)]" />
                <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight uppercase">
                    Real-Time Piracy Neutralization.
                </h2>
                <p className="text-xl text-gray-100 font-light leading-relaxed">
                    "Our strategy thrives on integration. Night vision agents, CCTV command centers, and infrared teams operate on a single, encrypted communication loop. When a threat is detected, the response is swift, coordinated, and silent."
                </p>
                
                <div className="mt-12 flex flex-wrap justify-center gap-8 opacity-70 text-xs font-bold uppercase tracking-[0.3em]">
                    <span>CCTV Hub</span>
                    <span className="text-primary">/</span>
                    <span>NVG Teams</span>
                    <span className="text-primary">/</span>
                    <span>Encrypted Comms</span>
                </div>
            </motion.div>
        </div>
      </section>

      {/* Why WSO? Section (Centered version) */}
      <section className="py-24 bg-white border-t border-gray-100">
          <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-dark-blue mb-16 uppercase tracking-tighter leading-tight">
                Why WSO for <br />
                <span className="text-primary">Film Security?</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                  {[
                      { title: "Preserve Revenue", text: "Stop leaks before they hit the web and protect your box office potential." },
                      { title: "Maintain Exclusivity", text: "Ensure your premiere stays behind closed doors for invited guests only." },
                      { title: "Advanced Tech", text: "We close the gaps where traditional security fails with thermal and infrared detection." }
                  ].map((item, idx) => (
                      <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center gap-6"
                      >
                          <div className="w-16 h-16 rounded-full border-2 border-primary flex items-center justify-center flex-shrink-0 text-primary font-black text-xl">
                              0{idx + 1}
                          </div>
                          <div>
                              <h3 className="text-xl font-bold text-dark-blue mb-4 uppercase tracking-tight">{item.title}</h3>
                              <p className="text-gray-600 font-light leading-relaxed">{item.text}</p>
                          </div>
                      </motion.div>
                  ))}
              </div>
          </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 bg-dark-blue text-white relative overflow-hidden">
          {/* Decorative element */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
              <img src="/images/services/anti-piracy-hero.png" className="w-full h-full object-cover grayscale blur-sm" />
          </div>
          <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center relative z-10">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter"
              >
                Don’t Let Your Content Leak.
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-gray-300 font-light mb-12 max-w-2xl mx-auto leading-relaxed"
              >
                Secure your next premiere with the leaders in anti-piracy surveillance in NYC and beyond.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <Link 
                    href="/#contact"
                    className="inline-block px-12 py-5 bg-primary text-white font-black uppercase tracking-[0.2em] text-xs hover:bg-white hover:text-primary transition-all rounded-sm shadow-2xl"
                >
                    Get a Professional Quote
                </Link>
              </motion.div>
          </div>
      </section>

      <Footer />
    </main>
  );
}
