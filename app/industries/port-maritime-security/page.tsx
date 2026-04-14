"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { 
    Anchor, 
    Ship, 
    Globe, 
    FileText, 
    Key, 
    Shield, 
    Monitor, 
    ShieldAlert, 
    GraduationCap, 
    Compass,
    CheckCircle2,
    Zap
} from "lucide-react";
import { useModal } from "@/context/ModalContext";

const mappingServices = [
    {
        title: "Regulatory Support",
        description: "MTSA and C-TPAT operational support and TWIC compliance to ensure your operations remain secure and legally compliant.",
        icon: FileText
    },
    {
        title: "FEMA Coordination",
        description: "Port Security Grant services and emergency security coordination with FEMA and other federal agencies.",
        icon: Globe
    },
    {
        title: "Strategic Training",
        description: "Specialized training in Port Security Operations, NIMS (National Incident Management System), and Workplace Violence Reduction.",
        icon: GraduationCap
    },
    {
        title: "Risk Management",
        description: "Meticulous vulnerability assessments, maritime crime analysis, and detailed emergency response planning.",
        icon: ShieldAlert
    },
    {
        title: "Access Control",
        description: "Rigorous monitoring of facilities, supplies, and controlled substances to maintain terminal integrity.",
        icon: Key
    },
    {
        title: "Technical Integration",
        description: "Advanced electronic security systems and high-definition surveillance monitoring for 24/7 situational awareness.",
        icon: Monitor
    }
];

const sectorsServed = [
    { name: "Ports & Port Authorities", desc: "Full-scale facility and perimeter protection for major maritime hubs.", icon: Anchor },
    { name: "Shipping Terminals & Cargo Ships", desc: "Safeguarding high-value assets and international freight shipments.", icon: Ship },
    { name: "Cruise Lines", desc: "Specialized security for passenger terminals and cruise vessel integrity.", icon: Compass },
    { name: "Intermodal Facilities & Land Bridges", desc: "Ensuring seamless security during complex cargo transitions.", icon: Zap }
];

const pillarsOfExcellence = [
    {
        title: "Compliance & Federal Standards",
        description: "Deeply experienced in all elements of the Maritime Transportation Security Act (MTSA) and TWIC compliance."
    },
    {
        title: "FEMA & National Incident Management",
        description: "Leadership trained in NIMS, allowing for seamless integration with federal agencies during emergencies."
    },
    {
        title: "On-Site Operational Security",
        description: "Armed and unarmed security guards, patrol services, and specialized maritime parking enforcement."
    }
];

export default function PortMaritimeSecurityPage() {
    const { openModal } = useModal();

    return (
        <main className="bg-white">
            <Navbar />
            
            {/* Hero Section */}
            <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute z-0 w-full h-full object-cover object-bottom brightness-[0.4]"
                >
                    <source src="/videos/Port-Maritime-Security.mp4" type="video/mp4" />
                </video>
                
                <div className="container relative z-10 mx-auto px-6 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <span className="bg-primary text-white font-black  tracking-[0.4em] text-[10px] py-2 px-6 mb-8 inline-block">
                            Maritime Protection
                        </span>
                        <h1 className="uppercase text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter mb-8 max-w-6xl mx-auto leading-[0.9]  px-6">
                            Port & Maritime <br className="hidden md:block" />
                            <span className="text-primary italic font-black">Security</span>
                        </h1>
                        <p className="text-sm md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed mb-10 px-8 italic">
                            Safeguarding Global Trade and Critical Infrastructure
                        </p>
                        <button 
                            onClick={openModal}
                            className="bg-primary hover:bg-red-700 text-white px-10 py-5 rounded-sm font-black  tracking-[0.2em] transition-all transform hover:scale-105 shadow-2xl"
                        >
                            Request a Maritime Security Proposal
                        </button>
                    </motion.div>
                </div>
                
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
                    <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center py-2">
                        <div className="w-1 h-2 bg-primary rounded-full" />
                    </div>
                </div>
            </section>

            {/* Strategy Section */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container mx-auto px-6 md:px-12 lg:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl md:text-5xl font-black text-dark-blue mb-8  leading-tight">
                                Securing the <br />
                                <span className="text-primary italic font-light">Global Supply Chain</span>
                            </h2>
                            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                                <p>
                                    Manhattan’s vast ports, international shipping lanes, and thriving maritime tourism create complex security challenges. WSO provides the tactical expertise needed to protect against theft, physical attacks, and unauthorized access.
                                </p>
                                <p>
                                    In an environment where fleets, cargo, and personnel must arrive safely at their destinations, our agency delivers precision, compliance, and federal-grade vigilance.
                                </p>
                                <p className="font-bold text-dark-blue">
                                    We don't just secure ports; we ensure the continuity of global commerce through zero-error protection.
                                </p>
                            </div>
                        </motion.div>
                        
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-gray-50 p-12 rounded-sm border border-black/5 shadow-inner"
                        >
                            <h3 className="text-2xl font-black text-dark-blue mb-8 ">Maritime Sectors We Serve</h3>
                            <div className="space-y-8">
                                {sectorsServed.map((sector, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="mt-1">
                                            <sector.icon size={24} className="text-primary italic font-black" />
                                        </div>
                                        <div>
                                            <h4 className="font-black text-dark-blue  text-sm mb-1">{sector.name}</h4>
                                            <p className="text-gray-500 text-sm leading-relaxed">{sector.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Specialized Services Grid */}
            <section className="py-24 bg-dark-blue text-white">
                <div className="container mx-auto px-6 md:px-12 lg:px-20">
                    <div className="text-center mb-16">
                        <span className="text-primary font-black  tracking-[0.3em] text-sm md:text-base">MTSA & C-TPAT Compliance</span>
                        <h2 className="text-3xl md:text-5xl font-black mt-4 ">Specialized Maritime Security Services</h2>
                        <div className="w-20 h-1.5 bg-primary mx-auto mt-8" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {mappingServices.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-all group"
                            >
                                <service.icon className="text-primary mb-6 group-hover:scale-110 transition-transform" size={40} />
                                <h4 className="text-lg font-black  mb-4 tracking-tighter">{service.title}</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Regulatory Support Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 md:px-12 lg:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl md:text-5xl font-black text-dark-blue mb-8  leading-tight">Compliance & <br /><span className="text-primary italic font-black">Federal Standards</span></h2>
                            <p className="text-gray-600 text-lg mb-12">
                                WSO is deeply experienced in navigating the complexities of maritime law and federal security standards, ensuring your operations remain secure and audit-ready.
                            </p>
                            
                            <div className="space-y-10">
                                {pillarsOfExcellence.map((feature, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: i * 0.2 }}
                                        className="flex gap-6"
                                    >
                                        <div className="flex-shrink-0 w-12 h-12 bg-gray-50 flex items-center justify-center border border-black/5 rounded-sm">
                                            <CheckCircle2 className="text-primary italic font-black" size={24} />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-black text-dark-blue  mb-2">{feature.title}</h4>
                                            <p className="text-gray-500 leading-relaxed">{feature.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-gray-100 p-2 rounded-sm"
                        >
                            <div className="relative aspect-video overflow-hidden">
                                <img 
                                    src="/images/ship-terminal.png" 
                                    alt="Maritime Security Operations" 
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 opacity-30"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-dark-blue/80 p-8 text-center text-white">
                                    <div>
                                        <Anchor size={60} className="text-primary mx-auto mb-6" />
                                        <h4 className="text-2xl font-black  mb-4">FEMA coordination & NIMS integration</h4>
                                        <p className="text-gray-400 text-sm italic">Our leadership integrates seamlessly with federal agencies during maritime emergencies.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-gray-50 border-y border-black/5">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-5xl font-black text-dark-blue mb-8  max-w-4xl mx-auto">Protect Your Fleet and Cargo</h2>
                    <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                        Worldwide Security Options delivers the precision and compliance necessary to keep your maritime assets moving safely.
                    </p>
                    <button 
                        onClick={openModal}
                        className="bg-primary hover:bg-black text-white px-12 py-6 rounded-sm font-black  tracking-[0.2em] transition-all transform hover:scale-105 shadow-xl"
                    >
                        Request a Maritime Security Proposal
                    </button>
                    <p className="mt-8 text-gray-500 font-bold  tracking-widest text-sm">
                        Secure your operations. Ensure compliance. Contact WSO today.
                    </p>
                </div>
            </section>

            <Footer />
        </main>
    );
}
