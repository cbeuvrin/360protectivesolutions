"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { 
    Bell, 
    MapPin, 
    Camera, 
    ShieldAlert, 
    Building2, 
    Home, 
    CheckCircle2,
    Cpu,
    BarChart3,
    Smartphone,
    Play
} from "lucide-react";
import { useModal } from "@/context/ModalContext";

const keyBenefits = [
    {
        title: "Instant Incident Alerts",
        description: "Receive real-time notifications of any security or safety issues.",
        icon: Bell
    },
    {
        title: "GPS Verification",
        description: "Every report and patrol hit is time-stamped and location-verified.",
        icon: MapPin
    },
    {
        title: "Photo & Audio Documentation",
        description: "Clear, undeniable evidence attached to every digital report.",
        icon: Camera
    },
    {
        title: "Hazard Reporting",
        description: "Proactive identification of facility issues (leaks, broken lights, fire hazards) before they become liabilities.",
        icon: ShieldAlert
    }
];

const industrySolutions = [
    {
        title: "Commercial & Corporate Security",
        description: "Providing an innovative way to monitor large assets and hazard reporting that protects value and tenant satisfaction.",
        icon: Building2
    },
    {
        title: "Residential Security",
        description: "Ensuring customer service and security standards are met daily, identifying inefficiencies and staying on target.",
        icon: Home
    }
];

export default function TraxPage() {
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
                                Real-Time Accountability
                            </span>
                            <h1 className="uppercase text-5xl md:text-6xl lg:text-7xl font-bold text-dark-blue tracking-tighter mb-8 leading-[0.9]">
                                360 <span className="text-primary italic font-black">TRAX</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-500 font-light mb-10 max-w-2xl leading-relaxed">
                                Digital Officer & Incident Reporting System ensuring total transparency and situational awareness.
                            </p>
                            <div className="flex flex-wrap gap-6">
                                <button 
                                    onClick={openModal}
                                    className="bg-primary hover:bg-black text-white px-10 py-5 rounded-sm font-black  tracking-[0.2em] transition-all transform hover:scale-105 shadow-xl"
                                >
                                    Request a Live Demo
                                </button>
                                <div className="flex items-center gap-4 text-dark-blue">
                                    <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center animate-pulse">
                                        <Cpu size={20} className="text-primary italic font-black" />
                                    </div>
                                    <span className="font-bold  tracking-widest text-[10px]">Powered by Silvertrac Software</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
                
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-50 -z-0 skew-x-[-12deg] translate-x-20 hidden lg:block" />
            </section>

            {/* Video Section */}
            <section className="pb-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative group rounded-sm overflow-hidden shadow-2xl bg-dark-blue aspect-video"
                        >
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                            >
                                <source src="/videos/what-is-trax.mp4" type="video/mp4" />
                            </video>
                            <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/60 to-transparent pointer-events-none" />
                            <div className="absolute bottom-8 left-8 flex items-center gap-4">
                                <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-sm">
                                    <Play size={20} className="text-white fill-white" />
                                </div>
                                <span className="text-white font-black  tracking-widest text-xs">What is 360 TRAX?</span>
                            </div>
                        </motion.div>

                        <div>
                            <h2 className="text-3xl md:text-5xl font-black text-dark-blue mb-8  leading-tight">
                                Embracing <br />
                                <span className="text-primary italic font-black">Today's Technology</span>
                            </h2>
                            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                Simply put, 360 TRAX was developed to embrace today's technology, ensuring accurate accountability while providing total transparency to our clients. 
                            </p>
                            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                Powered by Silvertrac Software, it is an all-new digital reporting ecosystem specifically designed to meet modern threats with a comprehensive, data-driven security solution.
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="flex gap-3 items-center">
                                    <CheckCircle2 className="text-primary italic font-black" size={20} />
                                    <span className="text-[11px] font-black text-dark-blue  tracking-widest">Verified Data</span>
                                </div>
                                <div className="flex gap-3 items-center">
                                    <CheckCircle2 className="text-primary italic font-black" size={20} />
                                    <span className="text-[11px] font-black text-dark-blue  tracking-widest">GPS Stamped</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Platform Definition Section */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6 md:px-12 lg:px-20">
                    <div className="max-w-4xl mx-auto text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-black text-dark-blue mb-8 ">A Complete Situational Awareness Platform</h2>
                        <p className="text-xl text-gray-500 font-light">
                            360 TRAX is more than just a reporting tool. It allows our officers to document every patrol, incident, and maintenance issue instantly from the field.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {keyBenefits.map((benefit, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="bg-white p-10 border border-black/5 hover:border-primary/20 hover:shadow-2xl transition-all group"
                            >
                                <div className="w-16 h-16 bg-gray-50 flex items-center justify-center mb-8 group-hover:bg-primary transition-colors">
                                    <benefit.icon size={32} className="text-primary group-hover:text-white transition-colors" />
                                </div>
                                <h4 className="text-lg font-black text-dark-blue  mb-4 tracking-tighter">{benefit.title}</h4>
                                <p className="text-gray-500 text-sm leading-relaxed">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industry Specific Solutions */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-6 md:px-12 lg:px-20">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2">
                            <span className="text-primary font-black  tracking-[0.3em] text-sm">Industry-Specific Solutions</span>
                            <h2 className="text-3xl md:text-5xl font-black mt-4 mb-12  leading-tight text-dark-blue">
                                Tailored Technology <br />
                                <span className="text-primary italic font-black">for Your Sector</span>
                            </h2>
                            
                            <div className="grid grid-cols-1 gap-12">
                                {industrySolutions.map((solution, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: i * 0.2 }}
                                        className="flex gap-8"
                                    >
                                        <div className="flex-shrink-0 w-14 h-14 bg-dark-blue flex items-center justify-center rounded-sm">
                                            <solution.icon size={28} className="text-white" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-black text-dark-blue  mb-3 tracking-tight">{solution.title}</h4>
                                            <p className="text-gray-600 leading-relaxed max-w-md">{solution.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <div className="bg-gray-100 aspect-[4/5] rounded-sm flex flex-col justify-end p-8 overflow-hidden relative group">
                                    <BarChart3 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black/5 w-32 h-32 group-hover:scale-110 transition-transform duration-700" />
                                    <h5 className="font-black text-dark-blue  tracking-widest text-[10px] relative z-10">Data Analytics</h5>
                                </div>
                                <div className="bg-primary aspect-square rounded-sm flex flex-col justify-end p-8 relative z-10 overflow-hidden group">
                                    <Smartphone className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/10 w-24 h-24 group-hover:rotate-12 transition-transform duration-700" />
                                    <h5 className="font-black text-white  tracking-widest text-[10px] relative z-10">Mobile Apps</h5>
                                </div>
                            </div>
                            <div className="space-y-4 pt-12">
                                <div className="bg-dark-blue aspect-square rounded-sm flex flex-col justify-end p-8 relative overflow-hidden group">
                                    <MapPin className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/5 w-24 h-24 group-hover:scale-110 transition-transform duration-700" />
                                    <h5 className="font-black text-white  tracking-widest text-[10px] relative z-10">GPS Tracking</h5>
                                </div>
                                <div className="bg-gray-100 aspect-[4/5] rounded-sm flex flex-col justify-end p-8 relative overflow-hidden group">
                                    <Bell className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black/5 w-32 h-32 group-hover:scale-110 transition-transform duration-700" />
                                    <h5 className="font-black text-dark-blue  tracking-widest text-[10px] relative z-10">Live Alerts</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Transparency Section */}
            <section className="py-24 bg-dark-blue text-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-5xl font-black mb-8  max-w-3xl mx-auto">Transparency You Can Trust</h2>
                    <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                        At Worldwide Security Options, we believe that accountability is the foundation of a professional partnership. With 360 TRAX, we close the gap between the field and the office.
                    </p>
                    <div className="w-16 h-1 bg-primary mx-auto mb-12" />
                    <p className="text-gray-300 font-bold  tracking-[0.2em] italic mb-16">
                        "The 360-degree view of your security posture that you deserve."
                    </p>
                    
                    <button 
                        onClick={openModal}
                        className="bg-primary hover:bg-white hover:text-dark-blue text-white px-12 py-6 rounded-sm font-black  tracking-[0.2em] transition-all transform hover:scale-105 shadow-2xl"
                    >
                        Request a Live System Demonstration
                    </button>
                    <p className="mt-8 text-gray-500 font-bold  tracking-widest text-xs">
                        Experience the future of security management.
                    </p>
                </div>
            </section>

            <Footer />
        </main>
    );
}
