"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { 
    Shield, 
    ClipboardCheck, 
    Video, 
    Handshake, 
    ShieldCheck, 
    MapPin, 
    FileText, 
    AlertTriangle,
    Truck,
    Package,
    Lock,
    Eye
} from "lucide-react";
import { useModal } from "@/context/ModalContext";

const distributionFeatures = [
    {
        title: "Facility Supply Chain Audits",
        description: "Thorough security audits to identify and neutralize threats within your specific logistics flow.",
        icon: ClipboardCheck
    },
    {
        title: "Asset Protection",
        description: "Safeguarding goods and facilities from fire, break-ins, and organized theft.",
        icon: Shield
    },
    {
        title: "Remote Security Integration",
        description: "Remote video monitoring and access control for 24/7 freight protection.",
        icon: Video
    },
    {
        title: "Strategic Partnership",
        description: "Creating security strategies that protect both employees and inventory.",
        icon: Handshake
    }
];

const specializedGuarding = [
    {
        title: "Gate Access Control",
        description: "Checking all visitors, vendors, and drivers to ensure no product leaves unaccounted for.",
        icon: ShieldCheck
    },
    {
        title: "Interior & Exterior Patrols",
        description: "Monitoring of the facility's perimeter and internal storage via foot or patrols.",
        icon: MapPin
    },
    {
        title: "Digital Reporting",
        description: "Real-time tracking of movement and incidents for total transparency.",
        icon: FileText
    },
    {
        title: "Hazard Identification",
        description: "Proactive detection of fire risks or safety breaches to avoid downtime.",
        icon: AlertTriangle
    }
];

const choiceReasons = [
    {
        title: "Exposing Security Breaches",
        description: "Finding the gaps before criminals do.",
        icon: Eye
    },
    {
        title: "Reducing Shrinkage",
        description: "Minimizing shipping loss and internal/external theft.",
        icon: Package
    },
    {
        title: "Ensuring Continuity",
        description: "Maintaining a secure environment so your operations never stop.",
        icon: Lock
    }
];

export default function WarehouseSecurityPage() {
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
                    className="absolute z-0 w-auto min-w-full min-h-full max-w-none brightness-[0.4]"
                >
                    <source src="/videos/warehouse.mp4" type="video/mp4" />
                </video>
                
                <div className="container relative z-10 mx-auto px-6 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <span className="bg-primary text-white font-black  tracking-[0.4em] text-[10px] py-2 px-6 mb-8 inline-block">
                            Supply Chain Integrity
                        </span>
                        <h1 className="uppercase font-bold tracking-tighter mb-8 max-w-6xl mx-auto leading-[0.9] px-6 text-fluid-h1">
                            Warehouse & <br className="hidden md:block" />
                            <span className="text-primary italic font-black">Logistics Security</span>
                        </h1>
                        <p className="text-sm md:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed mb-10 px-8 italic">
                            Protecting Your Supply Chain and Your Bottom Line
                        </p>
                        <button 
                            onClick={openModal}
                            className="bg-primary hover:bg-red-700 text-white px-10 py-5 rounded-sm font-black  tracking-[0.2em] transition-all transform hover:scale-105 shadow-2xl"
                        >
                            Request a Logistics Security Audit
                        </button>
                    </motion.div>
                </div>
                
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
                    <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center py-2">
                        <div className="w-1 h-2 bg-primary rounded-full" />
                    </div>
                </div>
            </section>

            {/* Intro Section */}
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
                                Securing the Flow of <br />
                                <span className="text-primary italic font-light">Global Commerce</span>
                            </h2>
                            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                                <p>
                                    The strength of your logistics security program has a direct impact on your profitability. In a high-traffic environment with a steady stream of people, products, and machinery, you cannot afford a weak link.
                                </p>
                                <p>
                                    Worldwide Security Options (WSO) delivers customized logistics security solutions designed to expose vulnerabilities, reduce theft, and eliminate shipping loss or damage. We provide a reliable, professional service that integrates physical guarding with advanced technology.
                                </p>
                                <p className="font-bold text-dark-blue">
                                    Don't let your supply chain be a target. Secure your logistics with the experts in warehouse protection.
                                </p>
                            </div>
                        </motion.div>
                        
                        <div className="relative">
                            <div className="grid grid-cols-2 gap-4">
                                {distributionFeatures.map((feature, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: i * 0.1 }}
                                        className="bg-gray-50 p-8 rounded-sm border border-black/5 flex flex-col items-center text-center group hover:bg-primary transition-all duration-500"
                                    >
                                        <feature.icon size={32} className="text-primary group-hover:text-white mb-4 transition-transform group-hover:scale-110" />
                                        <h3 className="text-xs font-black text-dark-blue group-hover:text-white  tracking-wider">{feature.title}</h3>
                                    </motion.div>
                                ))}
                            </div>
                            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 rounded-full blur-3xl" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Specialized Logistics Guarding Section */}
            <section className="py-24 bg-dark-blue text-white">
                <div className="container mx-auto px-6 md:px-12 lg:px-20">
                    <div className="text-center mb-16">
                        <span className="text-primary font-black  tracking-[0.3em] text-sm md:text-base">Specialized Logistics Guarding</span>
                        <h2 className="text-3xl md:text-5xl font-black mt-4 ">Reliable Protection for Distribution Centers</h2>
                        <div className="w-20 h-1.5 bg-primary mx-auto mt-8" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {specializedGuarding.map((service, index) => (
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

            {/* Why WSO Section */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-6 md:px-12 lg:px-20">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="lg:w-1/2 order-2 lg:order-1">
                            <h2 className="text-3xl md:text-5xl font-black text-dark-blue mb-8  leading-tight">
                                Why WSO is the Right <br />
                                <span className="text-primary italic font-light">Choice for Logistics</span>
                            </h2>
                            <p className="text-gray-600 text-lg mb-12 leading-relaxed">
                                Due to the large volume of inbound and outbound traffic in modern distribution centers, choosing a specialized provider is critical. We focus on exposing security breaches before they occur.
                            </p>
                            
                            <div className="space-y-8">
                                {choiceReasons.map((reason, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: i * 0.1 }}
                                        className="flex gap-6 items-start"
                                    >
                                        <div className="bg-gray-50 p-4 rounded-sm border border-black/5">
                                            <reason.icon size={24} className="text-primary italic font-black" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-black text-dark-blue  mb-2">{reason.title}</h4>
                                            <p className="text-gray-500 leading-relaxed">{reason.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                        
                        <div className="lg:w-1/2 order-1 lg:order-2">
                            <div className="relative">
                                <img 
                                    src="/images/wso-corporate.png" 
                                    alt="Logistics Security" 
                                    className="w-full h-auto grayscale opacity-10"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Truck size={120} className="text-primary/20 animate-pulse" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-gray-50 border-y border-black/5 text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-5xl font-black text-dark-blue mb-8  max-w-4xl mx-auto">Protect Your Supply Chain Today</h2>
                    <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Don't let your logistics be a target. At WSO, we don't just protect your property; we ensure the continuity of your business.
                    </p>
                    <button 
                        onClick={openModal}
                        className="bg-primary hover:bg-black text-white px-12 py-6 rounded-sm font-black  tracking-[0.2em] transition-all transform hover:scale-105 shadow-xl"
                    >
                        Request a Logistics Security Audit
                    </button>
                    <p className="mt-8 text-gray-500 font-bold  tracking-widest text-sm">
                        Contact Worldwide Security Options today.
                    </p>
                </div>
            </section>

            <Footer />
        </main>
    );
}
