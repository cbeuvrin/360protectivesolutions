"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { 
    Shield, 
    ShieldCheck, 
    Clock, 
    DollarSign, 
    Cpu, 
    Bell, 
    Smartphone, 
    PhoneCall, 
    Lock, 
    Key,
    Target,
    Zap,
    CheckCircle2
} from "lucide-react";
import { useModal } from "@/context/ModalContext";

const reasonCards = [
    {
        title: "Advanced Virtual Guard Tech",
        description: "Integrating high-definition cameras, smart sensors, and AI to detect and respond to threats in real-time.",
        icon: Cpu
    },
    {
        title: "Cost-Effective Alternative",
        description: "Round-the-clock surveillance at a fraction of the cost of traditional standing guards.",
        icon: DollarSign
    },
    {
        title: "24/7 Remote Monitoring",
        description: "Constant surveillance by our specialized remote monitoring team, day or night.",
        icon: Clock
    }
];

const intelligentFeatures = [
    {
        title: "Instant Alerts",
        description: "Receive real-time notifications via SMS or email the moment suspicious activity is detected.",
        icon: Bell
    },
    {
        title: "Emergency Coordination",
        description: "Assessing threats and coordinating with local authorities in NYC and NJ instantly.",
        icon: PhoneCall
    },
    {
        title: "Perimeter Protection",
        description: "AI-driven sensors create a virtual fence around your property with surgical precision.",
        icon: Target
    },
    {
        title: "Access Control Integration",
        description: "Manage who enters and exits your facility remotely, ensuring only authorized access.",
        icon: Key
    }
];

export default function VirtualGuardPage() {
    const { openModal } = useModal();

    return (
        <main className="bg-white">
            <Navbar />
            
            {/* Hero Section - White Background */}
            <section className="relative pt-40 pb-20 md:pt-48 md:pb-32 bg-white overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-primary font-black uppercase tracking-[0.4em] text-xs mb-6 inline-block">
                                The Fusion of AI & Elite Surveillance
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-dark-blue tracking-tighter mb-8 uppercase leading-[0.9]">
                                Virtual <span className="text-primary italic font-black">Guard Services</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-500 font-light mb-10 max-w-3xl leading-relaxed">
                                The ultimate fusion of Artificial Intelligence and specialized remote monitoring. Efficiency redefined for modern businesses.
                            </p>
                            <button 
                                onClick={openModal}
                                className="bg-primary hover:bg-black text-white px-10 py-5 rounded-sm font-black uppercase tracking-[0.2em] transition-all transform hover:scale-105 shadow-xl"
                            >
                                Request a Virtual Guard Proposal
                            </button>
                        </motion.div>
                    </div>
                </div>

                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-50 -z-0 skew-x-[-8deg] translate-x-32 hidden lg:block" />
            </section>

            {/* Why Choose Section */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-6 md:px-12 lg:px-20">
                    <div className="text-center mb-16">
                        <span className="text-primary font-black uppercase tracking-[0.3em] text-sm md:text-base">Elite Capability</span>
                        <h2 className="text-3xl md:text-5xl font-black mt-4 uppercase text-dark-blue">Why Choose WSO for Virtual Guarding?</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {reasonCards.map((reason, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="bg-gray-50 p-12 border border-black/5 hover:border-primary/20 hover:bg-white transition-all group"
                            >
                                <reason.icon size={48} className="text-primary mb-8 transition-transform group-hover:scale-110" />
                                <h4 className="text-xl font-black text-dark-blue uppercase mb-4 tracking-tighter">{reason.title}</h4>
                                <p className="text-gray-500 text-sm leading-relaxed">{reason.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Intelligent Features Section */}
            <section className="py-24 bg-dark-blue text-white overflow-hidden">
                <div className="container mx-auto px-6 md:px-12 lg:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-black mb-8 uppercase leading-tight">
                                Intelligent <br />
                                <span className="text-primary italic font-black">Security Features</span>
                            </h2>
                            <p className="text-gray-400 text-lg mb-12 leading-relaxed font-light">
                                Our partnership with Centralized Vision offers a level of protection, cost savings, and peace of mind never before seen in the industry.
                            </p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {intelligentFeatures.map((feature, i) => (
                                    <div key={i} className="flex gap-4 group">
                                        <div className="flex-shrink-0 w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center rounded-sm group-hover:bg-primary transition-colors">
                                            <feature.icon size={24} className="text-primary group-hover:text-white transition-colors" />
                                        </div>
                                        <div>
                                            <h4 className="font-black uppercase tracking-widest text-[11px] mb-2">{feature.title}</h4>
                                            <p className="text-gray-500 text-xs leading-relaxed">{feature.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                                className="bg-white/5 p-12 rounded-sm border border-white/10 aspect-square flex flex-col items-center justify-center relative overflow-hidden"
                            >
                                <div className="absolute inset-0 opacity-10 flex items-center justify-center">
                                    <Shield size={400} strokeWidth={0.5} className="text-primary italic font-black" />
                                </div>
                                <Zap size={80} className="text-primary animate-pulse mb-6 relative z-10" />
                                <h4 className="text-2xl font-black text-white uppercase italic relative z-10 text-center">AI-Powered <br /> <span className="text-primary italic font-black">Vigilance</span></h4>
                                <div className="mt-8 flex gap-2 items-center relative z-10 bg-dark-blue/80 px-4 py-2 border border-white/10 backdrop-blur-sm">
                                    <div className="w-2 h-2 bg-primary rounded-full animate-ping" />
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Live Asset Protection</span>
                                </div>
                            </motion.div>
                        </div>
 Broadway-like, this section now uses a full shield as a background element that is intentionally centered and not cut off awkwardly.
                    </div>
                </div>
            </section>

            {/* Customization Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
                    <h2 className="text-3xl md:text-5xl font-black text-dark-blue mb-8 uppercase max-w-4xl mx-auto">Customizable Security for Your Business</h2>
                    <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto italic font-light leading-relaxed">
                        We understand that every business is unique. Whether you need targeted perimeter protection or a hybrid model, we can design the perfect strategy.
                    </p>
                    
                    <div className="flex flex-wrap justify-center gap-12">
                        {["24/7 Monitoring", "Perimeter Protection", "Hybrid Models", "Remote Access Control"].map((item, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <CheckCircle2 className="text-primary italic font-black" size={24} />
                                <span className="text-sm font-black text-dark-blue uppercase tracking-widest">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-gray-50 border-y border-black/5 text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-5xl font-black text-dark-blue mb-8 uppercase max-w-4xl mx-auto">Secure Your Future Today</h2>
                    <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Experience the power of virtual guarding. Trust Worldwide Security Options to elevate your property protection to unprecedented levels.
                    </p>
                    <button 
                        onClick={openModal}
                        className="bg-primary hover:bg-black text-white px-12 py-6 rounded-sm font-black uppercase tracking-[0.2em] transition-all transform hover:scale-105 shadow-xl"
                    >
                        Request a Virtual Guard Proposal
                    </button>
                    <p className="mt-8 text-gray-500 font-bold uppercase tracking-widest text-sm italic">
                        The ultimate fusion of AI and human expertise. Contact us today.
                    </p>
                </div>
            </section>

            <Footer />
        </main>
    );
}
