"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { 
    Shield, 
    Heart, 
    Building2, 
    Users, 
    Bell, 
    Truck, 
    Home, 
    ShieldCheck, 
    Shirt,
    Cpu,
    Wifi,
    Camera,
    MapPin,
    Smartphone
} from "lucide-react";
import { useModal } from "@/context/ModalContext";

const residentialSectors = [
    {
        title: "Luxury High-Rises & Condominiums",
        description: "Specialized 'White-Glove' service for NYC’s most prestigious addresses.",
        icon: Building2
    },
    {
        title: "Gated Communities",
        description: "Rigorous access control and perimeter management.",
        icon: ShieldCheck
    },
    {
        title: "Private Estates",
        description: "Discreet, high-level protection for high-profile individuals and families.",
        icon: Home
    },
    {
        title: "Multiple-Dwelling Units",
        description: "Scalable security for mid-sized housing complexes.",
        icon: Users
    }
];

const specializedModules = [
    {
        title: "Emergency Response",
        description: "Prompt and effective action for fire, medical, or security threats.",
        icon: Bell
    },
    {
        title: "Concierge Excellence",
        description: "Welcoming residents and managing visitor access with a professional, friendly demeanor.",
        icon: Heart
    },
    {
        title: "Logistics Management",
        description: "Receiving and managing packages utilizing the latest tracking software.",
        icon: Truck
    },
    {
        title: "Customized Image",
        description: "High-end uniforms tailored to reflect your building's specific aesthetic and brand.",
        icon: Shirt
    }
];

const techFeatures = [
    {
        title: "Connected Visitor Management",
        description: "Verifying residents and controlling traffic with advanced digital tools.",
        icon: Smartphone
    },
    {
        title: "Information-Driven Patrols",
        description: "Utilizing mobile workforce applications to improve incident response times.",
        icon: MapPin
    },
    {
        title: "Compliance & Enforcement",
        description: "Mobile patrols dedicated to rule adherence and parking enforcement.",
        icon: Shield
    },
    {
        title: "Real-Time Monitoring",
        description: "Coordinated remote video and alarm monitoring for 24/7 vigilance.",
        icon: Camera
    },
    {
        title: "Mass Notification Platforms",
        description: "Instantly communicating alerts to residents and authorities.",
        icon: Wifi
    },
    {
        title: "Fire & Intrusion Alarms",
        description: "Constant monitoring and rapid response services for emergencies.",
        icon: Bell
    }
];

export default function ResidentialSecurityPage() {
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
                    <source src="/videos/resdent.mp4" type="video/mp4" />
                </video>
                
                <div className="container relative z-10 mx-auto px-6 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <span className="bg-primary text-white font-black  tracking-[0.4em] text-[10px] py-2 px-6 mb-8 inline-block">
                            Premium Living
                        </span>
                        <h1 className="uppercase text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter mb-8 max-w-6xl mx-auto leading-[0.9]  px-6">
                            Residential Security & <br className="hidden md:block" />
                            <span className="text-primary italic font-black">Private Estates</span>
                        </h1>
                        <p className="text-sm md:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed mb-10 px-8 italic">
                            Elite Protection for Luxury Communities and Private Residences
                        </p>
                        <button 
                            onClick={openModal}
                            className="bg-primary hover:bg-red-700 text-white px-10 py-5 rounded-sm font-black  tracking-[0.2em] transition-all transform hover:scale-105 shadow-2xl"
                        >
                            Request a Residential Security Consultation
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
                                Your Partner for a <br />
                                <span className="text-primary italic font-light">Safer Community</span>
                            </h2>
                            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                                <p>
                                    At Worldwide Security Options (WSO), we understand that a security officer is often the first representative a visitor encounters. That first interaction at a gate or front desk sets the tone for the entire community. 
                                </p>
                                <p>
                                    Our residential programs are designed to be a cornerstone of the living experience, providing a proactive force against crime while acting as trusted ambassadors for your residents. Property developers, HOAs, and estate managers require professional security planning to minimize risks of theft, vandalism, and litigation.
                                </p>
                                <p className="font-bold text-dark-blue">
                                    WSO is committed to creating customized solutions for every type of residential environment.
                                </p>
                            </div>
                        </motion.div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {residentialSectors.map((sector, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="bg-gray-50 p-8 rounded-sm border border-black/5 flex flex-col items-center text-center group hover:bg-dark-blue transition-colors duration-500"
                                >
                                    <sector.icon size={40} className="text-primary mb-6 group-hover:scale-110 transition-transform" />
                                    <h3 className="text-lg font-black text-dark-blue group-hover:text-white mb-4  leading-tight">{sector.title}</h3>
                                    <p className="text-gray-500 group-hover:text-gray-400 text-sm leading-relaxed">{sector.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* The WSO Ambassador Approach Section */}
            <section className="py-24 bg-dark-blue text-white overflow-hidden">
                <div className="container mx-auto px-6 md:px-12 lg:px-20">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <span className="text-primary font-black  tracking-[0.3em] text-sm">The WSO Ambassador Approach</span>
                                <h2 className="text-3xl md:text-5xl font-black mt-4 mb-8  leading-tight">
                                    Luxury Residential <br />
                                    <span className="text-primary italic font-light">Specialists</span>
                                </h2>
                                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                    We believe security professionals should be the "Eyes and Ears" of your neighborhood. Our staff is trained to go the extra mile with an ambassador-level approach to customer service that aligns with your high-end brand image.
                                </p>
                                <p className="text-gray-400 text-lg mb-12 leading-relaxed">
                                    Through our School of Residential Security, our professionals are equipped with specialized modules to manage the nuances of luxury living.
                                </p>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {specializedModules.map((module, i) => (
                                        <div key={i} className="flex gap-4">
                                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                                                <module.icon className="text-primary italic font-black" size={20} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold  tracking-wider text-sm mb-1">{module.title}</h4>
                                                <p className="text-gray-500 text-xs leading-relaxed">{module.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                        
                        <div className="lg:w-1/2 relative">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                                className="relative z-10"
                            >
                                <img 
                                    src="/images/wso-corporate.png" 
                                    alt="Residential Security" 
                                    className="w-full h-auto grayscale brightness-150 opacity-20"
                                />
                                <div className="absolute inset-0 flex items-center justify-center text-center p-12">
                                    <div className="max-w-xs">
                                        <Shield size={64} className="text-primary mx-auto mb-6" />
                                        <h3 className="text-2xl font-black  mb-4 tracking-tighter">Security as a Luxury Amenity</h3>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            Enhancing the lifestyle of those who call your property home through discretion and excellence.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Integrated Technology Grid */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 md:px-12 lg:px-20">
                    <div className="text-center mb-16">
                        <span className="text-primary font-black  tracking-[0.3em] text-sm md:text-base">Advanced Protection</span>
                        <h2 className="text-3xl md:text-5xl font-black mt-4  text-dark-blue">Integrated Technology & Risk Management</h2>
                        <div className="w-20 h-1.5 bg-primary mx-auto mt-8" />
                        <p className="text-gray-500 mt-8 max-w-2xl mx-auto italic">
                            We increase resident peace of mind through cost-effective, high-tech configurations that never compromise on safety.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {techFeatures.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-gray-50 border border-black/5 p-8 hover:shadow-xl transition-all group"
                            >
                                <feature.icon className="text-primary mb-6 group-hover:scale-110 transition-transform" size={32} />
                                <h4 className="text-lg font-black text-dark-blue  mb-4 tracking-tighter">{feature.title}</h4>
                                <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-gray-50 border-y border-black/5">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-5xl font-black text-dark-blue mb-8  max-w-4xl mx-auto">Elevate Your Resident Experience</h2>
                    <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Discover the peace of mind that comes from a security program designed specifically for the nuances of residential life. We don't just protect your property; we enhance the lifestyle of your community.
                    </p>
                    <button 
                        onClick={openModal}
                        className="bg-primary hover:bg-black text-white px-12 py-6 rounded-sm font-black  tracking-[0.2em] transition-all transform hover:scale-105 shadow-xl"
                    >
                        Request a Residential Consultation
                    </button>
                    <p className="mt-8 text-gray-500 font-bold  tracking-widest text-sm">
                        Secure your community. Contact WSO today.
                    </p>
                </div>
            </section>

            <Footer />
        </main>
    );
}
