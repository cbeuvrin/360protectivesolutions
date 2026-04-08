"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { useModal } from "@/context/ModalContext";
import { 
  Shield, 
  Target, 
  Award, 
  Search, 
  Globe, 
  Zap, 
  Building2, 
  Calendar, 
  Users, 
  Cpu, 
  Radar, 
  MessageSquare, 
  Lock
} from "lucide-react";
import Link from "next/link";

const operationalRange = [
  {
    title: "Critical Infrastructure",
    description: "Protection for energy, water, and transit systems.",
    icon: Building2
  },
  {
    title: "Sensitive Government Installations",
    description: "Specialized security for high-security facilities.",
    icon: Shield
  },
  {
    title: "High-Profile Events",
    description: "Tactical planning and execution for large-scale operations.",
    icon: Calendar
  },
  {
    title: "Executive Defense",
    description: "Force protection protocols applied to individual and team safety.",
    icon: Users
  }
];

const techStrategy = [
  {
    title: "Advanced Surveillance",
    description: "Integrated systems for 24/7 situational awareness.",
    icon: Radar
  },
  {
    title: "Threat Detection",
    description: "Cutting-edge technology to identify risks before they manifest.",
    icon: Search
  },
  {
    title: "Strategic Coordination",
    description: "Seamless communication and rapid response protocols.",
    icon: MessageSquare
  }
];

export default function ForceProtectionPage() {
  const { openModal } = useModal();
  const fadeIn: any = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
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
            <source src="/videos/bodygarud1.mp4" type="video/mp4" />
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
            Tactical Operations
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-2xl md:text-5xl lg:text-7xl font-bold tracking-tighter mb-6 max-w-5xl mx-auto leading-tight md:leading-none uppercase px-6"
          >
            Force Protection <br className="hidden md:block" /> Specialists
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-sm md:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed mb-10 px-8"
          >
            The Pinnacle of Security in High-Risk Environments. 
            Safeguarding personnel and high-value assets across NYC, New Jersey, and beyond.
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

      {/* Corporate Overview Section */}
      <section className="py-16 md:py-24 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="space-y-6">
              <motion.h2 
                {...fadeIn}
                className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-dark uppercase"
              >
                Elite Protection Standards
              </motion.h2>
              <motion.p 
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: 0.1 }}
                className="text-gray-600 text-lg leading-relaxed font-light"
              >
                Worldwide Security Options (WSO) stands as the premier provider of Force Protection Specialists across New York and New Jersey. Our highly skilled professionals specialize in safeguarding personnel and high-value assets within complex and high-risk environments, ensuring operational continuity and absolute safety.
              </motion.p>
              <motion.div 
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: 0.2 }}
                className="pt-4 flex items-center gap-4 text-primary font-bold uppercase tracking-widest text-xs"
              >
                <div className="h-px w-12 bg-primary" />
                Commitment to Excellence
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
                src="/images/bodygard3.png" 
                alt="WSO Force Protection" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-10 left-10 text-white">
                <p className="text-xs font-black uppercase tracking-[0.3em] mb-2">Operational Integrity</p>
                <h4 className="text-2xl font-bold">Absolute Safety</h4>
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
              The WSO Difference
            </motion.span>
            <motion.h2 {...fadeIn} transition={{ delay: 0.1 }} className="text-3xl md:text-5xl font-bold tracking-tight text-dark">
              Why Trust WSO for Force Protection?
            </motion.h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              {...fadeIn}
              transition={{ delay: 0.2 }}
              className="bg-white p-10 rounded-[2rem] shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mb-8 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <Award size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight">Elite Tactical Expertise</h3>
              <p className="text-gray-500 font-light leading-relaxed text-lg">
                Our Force Protection Specialists hail from elite military and law enforcement backgrounds. Equipped with extensive tactical knowledge and real-world combat experience, they possess the expertise to tackle complex security challenges head-on, delivering a level of protection that only seasoned veterans can provide.
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
              <h3 className="text-2xl font-bold mb-4 tracking-tight">Tailored Risk Mitigation</h3>
              <p className="text-gray-500 font-light leading-relaxed text-lg">
                We understand that security requirements are never one-size-fits-all. Our specialists conduct meticulous assessments to identify specific threats and vulnerabilities unique to your operation. This allows us to develop customized security strategies that provide a robust defense against diverse and evolving risks.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comprehensive Operational Range Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
          <div className="text-center mb-16">
            <motion.span {...fadeIn} className="text-primary font-black uppercase tracking-[0.3em] text-[10px] mb-4 block text-center">
              Multifaceted Solutions
            </motion.span>
            <motion.h2 {...fadeIn} transition={{ delay: 0.1 }} className="text-3xl md:text-5xl font-bold tracking-tight text-dark text-center">
              Comprehensive Operational Range
            </motion.h2>
            <motion.p {...fadeIn} transition={{ delay: 0.2 }} className="text-gray-500 font-light max-w-2xl mx-auto mt-6 text-center">
              WSO provides dynamic solutions across a wide array of scenarios and industries.
            </motion.p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {operationalRange.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-[1.5rem] border border-gray-100 hover:bg-primary hover:text-white transition-all duration-500 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-6 text-primary group-hover:bg-white/20 group-hover:text-white transition-all duration-500">
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3 tracking-tight">{item.title}</h3>
                <p className="opacity-70 font-light leading-relaxed text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Technology & Strategy Section */}
      <section className="py-32 bg-dark-blue text-white overflow-hidden relative">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/3">
              <motion.span {...fadeIn} className="text-primary font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">
                The Core Advantage
              </motion.span>
              <motion.h2 {...fadeIn} transition={{ delay: 0.1 }} className="text-3xl md:text-5xl font-bold mb-8 leading-tight tracking-tighter">
                Advanced Technology <br /> & Strategy.
              </motion.h2>
              <motion.p {...fadeIn} transition={{ delay: 0.2 }} className="text-gray-400 font-light leading-relaxed mb-8">
                At WSO, we stay at the forefront of technological advancement. Our specialists utilize state-of-the-art equipment and tactics to bolster our protective measures.
              </motion.p>
              <motion.div initial={{ width: 0 }} whileInView={{ width: 80 }} transition={{ duration: 1 }} className="h-1 bg-primary mb-12" />
            </div>
            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
              {techStrategy.map((strategy, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-5 p-6 border border-white/5 rounded-2xl hover:bg-white/5 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 text-primary">
                    <strategy.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 tracking-tight text-white">{strategy.title}</h4>
                    <p className="text-sm text-gray-400 font-light leading-relaxed">{strategy.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Discretion Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-5xl text-center">
          <motion.div 
            {...fadeIn}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-50 mb-8 border border-gray-100"
          >
            <Lock className="text-primary" size={32} />
          </motion.div>
          <motion.h2 {...fadeIn} transition={{ delay: 0.1 }} className="text-3xl md:text-5xl font-bold mb-8 tracking-tighter">
            Discretion and Confidentiality
          </motion.h2>
          <motion.p {...fadeIn} transition={{ delay: 0.2 }} className="text-xl text-gray-600 font-light leading-relaxed max-w-4xl mx-auto">
            "We recognize that discretion is a cornerstone of Force Protection. Our specialists are trained to operate with the utmost professionalism, maintaining strict confidentiality protocols to ensure your sensitive information and privacy remain paramount at all times."
          </motion.p>
        </div>
      </section>

      {/* Final Call to Action Section */}
      <section className="py-32 bg-dark-blue relative overflow-hidden">
        {/* Background gradient effect */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

        <div className="container mx-auto px-6 text-center text-white relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter"
          >
            Secure Your Interests Today
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed mb-12"
          >
            When it comes to fortifying your security, choose Worldwide Security Options as your unwavering partner in New York City and New Jersey. Experience the pinnacle of Force Protection – Your safety is our commitment.
          </motion.p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Link 
              href="/#contact"
              className="bg-white text-black px-12 py-6 rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 transition-all duration-300 shadow-black/20 shadow-2xl hover:bg-primary"
            >
              REQUEST A TACTICAL ASSESSMENT
            </Link>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/50">
              Operational Priority - 24/7 Response
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
