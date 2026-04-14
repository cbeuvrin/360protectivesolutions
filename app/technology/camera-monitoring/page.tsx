"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { 
    Video, 
    Monitor, 
    Zap, 
    Clock, 
    ShieldCheck, 
    Search, 
    AlertCircle, 
    Smartphone,
    Layers,
    Activity,
    Eye
} from "lucide-react";
import { useModal } from "@/context/ModalContext";

const techFeatures = [
    {
        title: "Advanced Video Analytics",
        description: "Automated detection of unusual patterns and movement.",
        icon: Activity
    },
    {
        title: "Intelligent Monitoring Systems",
        description: "Software-driven surveillance that prioritizes critical alerts.",
        icon: Zap
    },
    {
        title: "High-Resolution Coverage",
        description: "High-definition clarity for precise identification and evidence gathering.",
        icon: Search
    },
    {
        title: "24/7 Availability",
        description: "Continuous protection, ensuring your property is never left unmonitored.",
        icon: Clock
    }
];

const specialistActions = [
    {
        title: "Expert Analysis",
        description: "Meticulous attention to detail in analyzing live footage.",
        icon: Eye
    },
    {
        title: "Proactive Detection",
        description: "Swift identification of suspicious activities before they escalate.",
        icon: Search
    },
    {
        title: "Rapid Response",
        description: "Immediate assessment and action following any security incident.",
        icon: AlertCircle
    },
    {
        title: "Emergency Coordination",
        description: "Seamless communication with law enforcement when every second counts.",
        icon: ShieldCheck
    }
];

const solutionsGrid = [
    {
        title: "Continuous 24/7 Surveillance",
        description: "Round-the-clock peace of mind for high-stakes facilities.",
        icon: Clock,
        highlight: true
    },
    {
        title: "Event-Specific Monitoring",
        description: "Targeted surveillance for short-term projects or high-profile gatherings.",
        icon: Video,
        highlight: false
    },
    {
        title: "Remote Access",
        description: "Secure, real-time access to your camera feeds from any location.",
        icon: Smartphone,
        highlight: false
    },
    {
        title: "Integrated Protocols",
        description: "Harmonizing camera monitoring with on-site physical security teams.",
        icon: Layers,
        highlight: false
    }
];

export default function CameraMonitoringPage() {
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
                            <span className="text-primary font-black  tracking-[0.4em] text-xs mb-6 inline-block">
                                Intelligent Surveillance
                            </span>
                            <h1 className="uppercase text-4xl md:text-5xl lg:text-7xl font-bold text-dark-blue tracking-tighter mb-8  leading-[0.9]">
                                24/7 <span className="text-primary italic font-black">Camera Monitoring</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-500 font-light mb-10 max-w-3xl leading-relaxed">
                                Redefining the paradigm of security through groundbreaking monitoring services in NYC and NJ.
                            </p>
                            <button 
                                onClick={openModal}
                                className="bg-primary hover:bg-black text-white px-10 py-5 rounded-sm font-black  tracking-[0.2em] transition-all transform hover:scale-105 shadow-xl"
                            >
                                Request a Tech Consultation
                            </button>
                        </motion.div>
                    </div>
                </div>
                
                {/* Decorative Visuals */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 -z-0 hidden lg:block select-none pointer-events-none">
                   <div className="flex flex-col h-full justify-center p-20 opacity-20">
                        <Monitor size={400} strokeWidth={0.5} className="text-dark-blue" />
                   </div>
                </div>
            </section>

            {/* State-of-the-Art Tech Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 md:px-12 lg:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-black text-dark-blue mb-8  leading-tight">
                                State-of-the-Art <br />
                                <span className="text-primary italic font-black">Surveillance Technology</span>
                            </h2>
                            <p className="text-gray-600 text-lg mb-12 leading-relaxed">
                                Our monitoring services utilize the latest advancements in security technology. By integrating high-resolution hardware with intelligent software, we ensure constant vigilance over your property.
                            </p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {techFeatures.map((feature, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-gray-50 flex items-center justify-center border border-black/5">
                                            <feature.icon size={24} className="text-primary italic font-black" />
                                        </div>
                                        <div>
                                            <h4 className="font-black text-dark-blue  tracking-widest text-[11px] mb-2">{feature.title}</h4>
                                            <p className="text-gray-500 text-xs leading-relaxed">{feature.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                                className="bg-dark-blue p-1 rounded-sm shadow-2xl overflow-hidden"
                            >
                                <img 
                                    src="/images/wso-corporate.png" 
                                    alt="Surveillance Center" 
                                    className="w-full h-auto grayscale brightness-125 opacity-30"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="grid grid-cols-3 gap-2 opacity-50">
                                        {[...Array(9)].map((_, i) => (
                                            <div key={i} className="w-12 h-8 border border-white/20 bg-white/5" />
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                            <div className="absolute -bottom-6 -left-6 bg-primary text-white p-8 rounded-sm shadow-xl hidden md:block">
                                <span className="block text-4xl font-black mb-1">24/7</span>
                                <span className="block text-[10px] font-bold  tracking-[0.3em]">Constant Vigilance</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Specialists Section */}
            <section className="py-24 bg-dark-blue text-white overflow-hidden">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center mb-16">
                    <span className="text-primary font-black  tracking-[0.3em] text-sm md:text-base">Human Intelligence</span>
                    <h2 className="text-3xl md:text-5xl font-black mt-4 ">Vigilant Monitoring Specialists</h2>
                    <p className="text-gray-400 mt-8 max-w-2xl mx-auto italic font-light">
                        Our command center is staffed by highly trained professionals. Unlike passive recording systems, our specialists provide active monitoring.
                    </p>
                </div>

                <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {specialistActions.map((action, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="bg-white/5 border border-white/10 p-10 hover:bg-white/10 transition-all text-center group"
                        >
                            <action.icon size={40} className="text-primary mx-auto mb-6 transition-transform group-hover:scale-110" />
                            <h4 className="text-lg font-black  mb-4 tracking-tighter">{action.title}</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">{action.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Solutions Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 md:px-12 lg:px-20">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-dark-blue ">Customized Surveillance Solutions</h2>
                        <div className="w-20 h-1.5 bg-primary mx-auto mt-8" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {solutionsGrid.map((solution, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className={`p-10 rounded-sm border ${solution.highlight ? 'bg-gray-50 border-black/10' : 'border-black/5'} flex gap-8 items-start group hover:bg-white hover:shadow-2xl transition-all duration-500`}
                            >
                                <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center ${solution.highlight ? 'bg-primary/10' : 'bg-gray-50'}`}>
                                    <solution.icon size={30} className={solution.highlight ? 'text-primary' : 'text-dark-blue'} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-black text-dark-blue  mb-3 tracking-tight group-hover:text-primary transition-colors">{solution.title}</h4>
                                    <p className="text-gray-500 leading-relaxed text-sm">{solution.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Cost-Effectiveness Section */}
            <section className="py-24 bg-gray-50 border-y border-black/5">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-5xl font-black text-dark-blue mb-8  max-w-4xl mx-auto">Proactive Security and Cost-Effectiveness</h2>
                    <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Our approach prevents incidents and mitigates risks before they result in loss. Focus on your core activities while we safeguard your premises with a solution that never compromises on quality.
                    </p>
                    <button 
                        onClick={openModal}
                        className="bg-primary hover:bg-black text-white px-12 py-6 rounded-sm font-black  tracking-[0.2em] transition-all transform hover:scale-105 shadow-xl"
                    >
                        Request a Surveillance Consultation
                    </button>
                    <p className="mt-8 text-gray-500 font-bold  tracking-widest text-sm italic">
                        Embrace the future of security. Trust Worldwide Security Options.
                    </p>
                </div>
            </section>

            <Footer />
        </main>
    );
}
