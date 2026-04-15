"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ChevronRight, Shield, Heart, Building2, Users, Radio, Bell, Truck, MapPin, FileText, Activity } from "lucide-react";
import { useModal } from "@/context/ModalContext";

const specializedServices = [
    {
        title: "Lobby & Guest Services",
        description: "Professional concierge and reception management.",
        icon: Users
    },
    {
        title: "Access Management",
        description: "Strict control of entry points for tenants and visitors.",
        icon: Shield
    },
    {
        title: "Control Center Operations",
        description: "24/7 monitoring of facility systems and security feeds.",
        icon: Radio
    },
    {
        title: "Emergency Preparedness",
        description: "Strategic planning for fire safety, medical emergencies, and workplace violence.",
        icon: Bell
    },
    {
        title: "Loading Dock Operations",
        description: "Secure management of deliveries and logistics.",
        icon: Truck
    },
    {
        title: "Mobile Patrols",
        description: "Foot and vehicle security services to ensure perimeter integrity.",
        icon: MapPin
    },
    {
        title: "Incident Reporting",
        description: "Detailed and transparent reporting for property management.",
        icon: FileText
    },
    {
        title: "First Responder Capabilities",
        description: "Personnel trained in first aid and emergency medical response.",
        icon: Activity
    }
];

const programFeatures = [
    {
        title: "Site-Specific Protocols",
        description: "Security measures designed for your building's unique footprint."
    },
    {
        title: "Terrorism & Workplace Violence Preparedness",
        description: "Advanced training to identify and mitigate modern threats."
    },
    {
        title: "Facility Management Integration",
        description: "Coordination with building systems to ensure seamless operations."
    }
];

export default function CommercialSecurityPage() {
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
                    <source src="/videos/concierge.mp4" type="video/mp4" />
                </video>
                
                <div className="container relative z-10 mx-auto px-6 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <span className="bg-primary text-white font-black  tracking-[0.4em] text-[10px] py-2 px-6 mb-8 inline-block">
                            Premium Hospitality
                        </span>
                        <h1 className="uppercase font-bold tracking-tighter mb-8 max-w-6xl mx-auto leading-[0.9] px-6 text-fluid-h1">
                            Commercial Security & <br className="hidden md:block" />
                            <span className="text-primary italic font-black">Concierge Services</span>
                        </h1>
                        <p className="text-sm md:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed mb-10 px-8 italic">
                            The Intersection of Elite Safety and Premium Hospitality
                        </p>
                        <button 
                            onClick={openModal}
                            className="bg-primary hover:bg-red-700 text-white px-10 py-5 rounded-sm font-black  tracking-[0.2em] transition-all transform hover:scale-105 shadow-2xl"
                        >
                            Request a Facility Assessment
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
                                Your Brand, Elevated by <br />
                                <span className="text-primary italic font-light">Our Professionals</span>
                            </h2>
                            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                                <p>
                                    Commercial real estate management companies trust us to be a seamless extension of their brand. A well-dressed, well-spoken, and responsive security officer or concierge is often the first and last point of contact in a luxury building.
                                </p>
                                <p>
                                    New York City's skyline is defined by its iconic architecture, but its success depends on the teams that support its tenants. Worldwide Security Options (WSO) provides a customer service-based approach that pairs naturally with today's tenant-focused building owners.
                                </p>
                                <p className="font-bold text-dark-blue">
                                    We don't just secure your property; we enhance the experience of everyone who walks through your doors.
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
                            <Building2 size={60} className="text-primary mb-8" />
                            <h3 className="text-2xl font-black text-dark-blue mb-6 ">Asset Representation</h3>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                Our employees strive to deliver an unparalleled guest experience for every tenant, visitor, and vendor, ensuring your asset is represented with the highest level of professionalism.
                            </p>
                            <ul className="space-y-4">
                                {["Elite Grooming Standards", "Advanced Concierge Training", "Premium Customer Service", "Hospitality Focus"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm font-bold  tracking-widest text-dark-blue">
                                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Specialized Services Grid */}
            <section className="py-24 bg-dark-blue text-white">
                <div className="container mx-auto px-6 md:px-12 lg:px-20">
                    <div className="text-center mb-16">
                        <span className="text-primary font-black  tracking-[0.3em] text-sm md:text-base">Elite Capability</span>
                        <h2 className="text-3xl md:text-5xl font-black mt-4 ">Specialized Services for Commercial Real Estate</h2>
                        <div className="w-20 h-1.5 bg-primary mx-auto mt-8" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {specializedServices.map((service, index) => (
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

            {/* Site Specific Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 md:px-12 lg:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="order-2 lg:order-1"
                        >
                            <img 
                                src="/images/wso-corporate.png" 
                                alt="Specialized Program" 
                                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700 opacity-20"
                            />
                        </motion.div>
                        
                        <div className="order-1 lg:order-2">
                            <h2 className="text-3xl md:text-5xl font-black text-dark-blue mb-8 ">A Security Program Specific to Your Site</h2>
                            <p className="text-gray-600 text-lg mb-12">
                                We understand that managing major commercial assets requires an in-depth understanding of high-traffic urban environments. Our program is built on:
                            </p>
                            
                            <div className="space-y-10">
                                {programFeatures.map((feature, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: i * 0.2 }}
                                        className="flex gap-6"
                                    >
                                        <div className="flex-shrink-0 w-12 h-12 bg-gray-50 flex items-center justify-center border border-black/5 rounded-sm">
                                            <span className="text-primary italic font-black">0{i + 1}</span>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-black text-dark-blue  mb-2">{feature.title}</h4>
                                            <p className="text-gray-500 leading-relaxed">{feature.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-gray-50 border-y border-black/5">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-5xl font-black text-dark-blue mb-8  max-w-4xl mx-auto">Partner with NYC's Commercial Security Experts</h2>
                    <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                        Make our security team one of the best parts of your building. We are committed to safeguarding your tenants while providing the elite service that Manhattan's premier real estate demands.
                    </p>
                    <button 
                        onClick={openModal}
                        className="bg-primary hover:bg-black text-white px-12 py-6 rounded-sm font-black  tracking-[0.2em] transition-all transform hover:scale-105 shadow-xl"
                    >
                        Request a Facility Assessment
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
