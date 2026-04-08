"use client";

import { motion } from "framer-motion";
import { useModal } from "@/context/ModalContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Shield, MapPin, Car, Briefcase, CheckCircle2, ChevronRight, Star, Radio } from "lucide-react";
import Link from "next/link";

export default function ExecutiveProtectionPage() {
  const { openModal } = useModal();
  const fadeIn: any = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  };

  return (
    <main className="min-h-screen bg-white font-sans text-gray-900 overflow-x-hidden">
      <Navbar />

      {/* Cinematic Hero Section */}
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
            <source src="/videos/drivemovie.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 flex-1 flex flex-col items-center justify-center container mx-auto px-6 text-center text-white">
          <motion.span 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="bg-primary text-white font-black uppercase tracking-[0.4em] text-[10px] py-2 px-6 mb-8 inline-block"
          >
            Elite Personnel & Transport
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-2xl md:text-5xl lg:text-7xl font-bold tracking-tighter mb-6 max-w-5xl mx-auto leading-tight md:leading-none uppercase px-6"
          >
            Executive Protection <br className="hidden md:block" /> & Security Drivers
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-sm md:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed mb-10 px-8"
          >
            Elite security solutions for high-profile individuals, corporate executives, and diplomats. 
            Experience unparalleled safety with our specialized protection teams.
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
              Request a Confidential Consultation
            </button>
          </motion.div>
        </div>
      </section>

      {/* Service Definition Section */}
      <section className="py-16 md:py-24 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="space-y-6">
              <motion.h2 
                {...fadeIn}
                className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-dark uppercase"
              >
                Personal & Corporate Safety
              </motion.h2>
                <motion.span {...fadeIn} className="text-primary font-bold uppercase tracking-widest text-xs mb-4 block underline decoration-2 underline-offset-8">
                    The Standard of Excellence
                </motion.span>
                <motion.h2 {...fadeIn} transition={{ delay: 0.1 }} className="text-3xl md:text-5xl font-bold text-dark-blue mb-8">
                    Unparalleled Safety and <br /> Peace of Mind.
                </motion.h2>
                <motion.p {...fadeIn} transition={{ delay: 0.2 }} className="text-lg text-gray-700 font-light leading-relaxed mb-8">
                    At Worldwide Security Options, we understand the rigorous security requirements of the corporate and private sectors. Our mission is to provide a seamless shield of protection, ensuring the highest level of safety for our clients through advanced risk mitigation and tactical expertise.
                </motion.p>
            </div>
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8 }}
               viewport={{ once: true }}
               className="relative rounded-[2rem] overflow-hidden shadow-2xl h-[500px]"
            >
              <img 
                src="/images/services/driver-2.png" 
                alt="WSO Professional Security Driver" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Operational Pillars (2 Columns) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 text-center">
            {/* Pillar 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="w-20 h-20 rounded-sm bg-gray-50 flex items-center justify-center mb-8 border-b-4 border-primary shadow-lg">
                <Briefcase className="w-10 h-10 text-dark-blue" />
              </div>
              <h3 className="text-2xl font-bold text-dark-blue mb-6 uppercase tracking-tight">Executive Protection Specialists</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Our team consists of highly trained professionals with extensive experience in the field. Every specialist has undergone Executive Protection Training in NYC, mastering the skills necessary to ensure your safety in high-profile events, international travel, or sensitive business meetings. We don't just react; we mitigate risks before they manifest.
              </p>
            </motion.div>

            {/* Pillar 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="w-20 h-20 rounded-sm bg-gray-50 flex items-center justify-center mb-8 border-b-4 border-primary shadow-lg">
                <Car className="w-10 h-10 text-dark-blue" />
              </div>
              <h3 className="text-2xl font-bold text-dark-blue mb-6 uppercase tracking-tight">Elite Security Drivers</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Our drivers are experts in more than just navigation. They possess extensive knowledge of defensive driving techniques, strategic route planning, and real-time traffic management. Undergoing rigorous tactical training, they ensure a secure and efficient transportation experience in any environment.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tailored Solutions Section (3 Columns) */}
      <section className="py-24 bg-dark-blue text-white overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-16">
            <motion.h2 {...fadeIn} className="text-3xl md:text-5xl font-bold mb-6">
                Customized Security Strategies.
            </motion.h2>
            <motion.p {...fadeIn} transition={{ delay: 0.2 }} className="text-gray-400 font-light max-w-2xl mx-auto">
                "We understand that every client has unique concerns. We assess potential risks and develop a comprehensive plan tailored specifically to your lifestyle and objectives."
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
                { title: "Threat Assessments", text: "Identification of vulnerabilities before deployment.", icon: <Shield size={32} /> },
                { title: "Secure Logistics", text: "Full coordination of movements and transport.", icon: <MapPin size={32} /> },
                { title: "24/7 Availability", text: "Dedicated teams ready for domestic or international missions.", icon: <Radio size={32} /> }
            ].map((item, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="p-8 border border-white/5 rounded-sm hover:bg-white/5 transition-all"
                >
                    <div className="text-primary mb-6 flex justify-center">{item.icon}</div>
                    <h4 className="text-lg font-bold mb-3 uppercase tracking-widest">{item.title}</h4>
                    <p className="text-sm text-gray-400 font-light leading-relaxed">{item.text}</p>
                </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Diferenciator Section (Centered version) */}
      <section className="py-24 bg-white border-b border-gray-100">
          <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
              <Star className="w-12 h-12 text-primary mx-auto mb-8 animate-pulse" />
              <h2 className="text-3xl md:text-5xl font-bold text-dark-blue mb-8 uppercase tracking-tighter">
                The <span className="text-primary">NYC Standard</span> of Protection.
              </h2>
              <div className="max-w-4xl mx-auto">
                  <p className="text-xl text-gray-700 font-light leading-relaxed">
                    "As top providers of Executive Protection Training in NYC, our specialists operate under the most demanding standards in the industry. This academic and tactical foundation ensures that our agents are prepared for the constantly evolving threats of the modern world."
                  </p>
                  
                  <div className="mt-12 flex flex-wrap justify-center gap-8 text-[11px] font-black uppercase tracking-[0.3em] text-dark-blue/60">
                      <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary"/> Real-World Tactical Mastery</span>
                      <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary"/> Scrutinized Training Modules</span>
                      <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary"/> Advanced Defensive Tactics</span>
                  </div>
              </div>
          </div>
      </section>

      {/* Final Call to Action Section */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
          {/* Decorative image background */}
          <div className="absolute inset-0 opacity-15 pointer-events-none grayscale brightness-50">
              <img src="/images/services/security-drivers.png" className="w-full h-full object-cover" />
          </div>
          
          <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center relative z-10">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter"
              >
                Secure Your Assets. <br /> Protect Your Future.
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-white/90 font-light mb-12 max-w-2xl mx-auto leading-relaxed"
              >
                "Our dedicated team is available 24/7 to discuss your specific security requirements with total discretion."
              </motion.p>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <Link 
                    href="/#contact"
                    className="inline-block px-12 py-5 bg-white text-primary font-black uppercase tracking-[0.2em] text-xs hover:bg-dark-blue hover:text-white transition-all rounded-sm shadow-2xl"
                >
                    Consult with a Specialist
                </Link>
              </motion.div>
          </div>
      </section>

      <Footer />
    </main>
  );
}
