"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { 
    CheckCircle2, 
    Bell, 
    EyeOff, 
    BarChart3, 
    ShieldAlert, 
    Target, 
    Crosshair, 
    UserPlus,
    Play,
    Zap,
    AlertTriangle,
    Shield
} from "lucide-react";
import { useModal } from "@/context/ModalContext";

const detectionFeatures = [
    {
        title: "99% Accuracy",
        description: "High-precision weapon detection that minimizes false alarms.",
        icon: CheckCircle2
    },
    {
        title: "Instant Notification",
        description: "Real-time alerts sent to personnel and law enforcement instantly.",
        icon: Bell
    },
    {
        title: "Invisible Layer",
        description: "Completely software-based with no additional hardware required.",
        icon: EyeOff
    },
    {
        title: "Advanced Analytics",
        description: "Identifying suspicious crowds, loitering, and perimeter breaches.",
        icon: BarChart3
    }
];

const ecosystemItems = [
    {
        title: "SAS Specialist",
        description: "Integration with Arcuri Group for high-level situational intelligence.",
        icon: ShieldAlert
    },
    {
        title: "Active Shooter Training",
        description: "A.L.I.V.E. survival training for staff and agents.",
        icon: AlertTriangle
    },
    {
        title: "Proactive Detection",
        description: "Recognizing behavioral patterns before a security breach.",
        icon: Target
    }
];

export default function WeaponsDetectionPage() {
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
                                Proactive Intelligence Response
                            </span>
                            <h1 className="uppercase text-5xl md:text-6xl lg:text-7xl font-bold text-dark-blue tracking-tighter mb-8 leading-[0.9]">
                                AI <span className="text-primary italic font-black">Weapons Detection</span>
                            </h1>
 Broadway-style weight update
                            <p className="text-xl md:text-2xl text-gray-500 font-light mb-10 max-w-3xl leading-relaxed">
                                Don't just record a crime—prevent it. In high-stakes security, seconds save lives. Transform standard cameras into AI-powered sensors.
                            </p>
                            <button 
                                onClick={openModal}
                                className="bg-primary hover:bg-black text-white px-10 py-5 rounded-sm font-black  tracking-[0.2em] transition-all transform hover:scale-105 shadow-xl"
                            >
                                Request a Smart Camera Audit
                            </button>
                        </motion.div>
                    </div>
                </div>

                {/* Decorative Visuals */}
                <div className="absolute top-0 right-0 w-1/4 h-full bg-gray-50 -z-0 hidden lg:block overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center opacity-10">
                        <Crosshair size={600} strokeWidth={0.5} className="text-dark-blue" />
                    </div>
                </div>
            </section>

            {/* Video Section */}
            <section className="pb-24 bg-white">
                <div className="container mx-auto px-6 md:px-12 lg:px-20">
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
                                <source src="/videos/Weapons-Detection.mp4" type="video/mp4" />
                            </video>
                            <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/60 to-transparent pointer-events-none" />
                            <div className="absolute bottom-8 left-8 flex items-center gap-4">
                                <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-sm">
                                    <Play size={20} className="text-white fill-white" />
                                </div>
                                <span className="text-white font-black  tracking-widest text-xs">Stopping Threats at the Perimeter</span>
                            </div>
                        </motion.div>

                        <div>
                            <h2 className="text-3xl md:text-5xl font-black text-dark-blue mb-8  leading-tight">
                                React Before a <br />
                                <span className="text-primary italic font-black">Threat Escalates</span>
                            </h2>
                            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                Our system automatically identifies brandished weapons, intruders, and unauthorized vehicles the moment they become visible.
                            </p>
                            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                By using Actuate’s smart AI software with your existing infrastructure, we extend your response to gates, fences, and outer perimeters.
                            </p>
                            <div className="flex items-center gap-4 text-dark-blue">
                                <div className="w-12 h-12 bg-gray-50 flex items-center justify-center rounded-full">
                                    <Shield size={24} className="text-primary italic font-black" />
                                </div>
                                <div>
                                    <span className="block font-black text-xs  tracking-widest">Actuate Powered</span>
                                    <span className="block text-[10px] text-gray-500 font-bold  tracking-widest">Enterprise Threat Intelligence</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose AI Detection */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6 md:px-12 lg:px-20">
                    <div className="text-center mb-16">
                        <span className="text-primary font-black  tracking-[0.3em] text-sm">Advanced Capability</span>
                        <h2 className="text-3xl md:text-5xl font-black mt-4  text-dark-blue">Why Choose WSO's AI Detection?</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {detectionFeatures.map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="bg-white p-10 border border-black/5 hover:border-primary/20 hover:shadow-2xl transition-all group"
                            >
                                <div className="w-14 h-14 bg-gray-50 flex items-center justify-center mb-8 group-hover:bg-primary transition-colors">
                            <feature.icon size={28} className="text-primary group-hover:text-white transition-colors" />
                                </div>
                                <h4 className="text-lg font-black text-dark-blue  mb-4 tracking-tighter">{feature.title}</h4>
                                <p className="text-gray-500 text-xs leading-relaxed">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Safety Ecosystem */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 md:px-12 lg:px-20">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl md:text-5xl font-black text-dark-blue mb-8  leading-tight">
                                A Comprehensive <br />
                                <span className="text-primary italic font-black">Safety Ecosystem</span>
                            </h2>
                            <p className="text-gray-600 text-lg mb-12 leading-relaxed">
                                At WSO, technology is only one part of the solution. We complement our AI detection with world-class tactical training to ensure a 360-degree safety posture.
                            </p>
                            
                            <div className="space-y-8">
                                {ecosystemItems.map((item, i) => (
                                    <div key={i} className="flex gap-6 items-start">
                                        <div className="bg-dark-blue p-4 rounded-sm">
                                            <item.icon size={24} className="text-white" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-black text-dark-blue  tracking-tight mb-2">{item.title}</h4>
                                            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:w-1/2">
                            <div className="bg-dark-blue p-16 rounded-sm relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 -m-16 rounded-full group-hover:scale-150 transition-transform duration-700" />
                                <span className="text-primary font-black  tracking-[0.4em] text-xs mb-8 block">Active Response</span>
                                <h3 className="text-4xl md:text-6xl font-black text-white  italic leading-none mb-10">ALIVE <br /> Survival <br /> Training</h3>
                                <div className="flex items-center gap-4 text-white/60">
                                    <Zap size={20} className="text-primary italic font-black" />
                                    <span className="font-bold  tracking-widest text-[10px]">Situational Awareness Specialist Certified</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Seamless Integration */}
            <section className="py-24 bg-gray-50 border-y border-black/5 text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-5xl font-black text-dark-blue mb-8  max-w-4xl mx-auto leading-tight">
                        Seamless Integration, <br />
                        <span className="text-primary italic font-black">Absolute Vigilance.</span>
                    </h2>
 Broadway-style weight update
                    <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Identify brandished firearms and manage crowd density. Upgrade your facility with proactive edge intelligence.
                    </p>
                    <button 
                        onClick={openModal}
                        className="bg-primary hover:bg-black text-white px-12 py-6 rounded-sm font-black  tracking-[0.2em] transition-all transform hover:scale-105 shadow-xl"
                    >
                        Request a Smart Camera System Audit
                    </button>
                    <p className="mt-8 text-gray-500 font-bold  tracking-widest text-sm italic">
                        Proactive Weapons Detection. Contact us today.
                    </p>
                </div>
            </section>

            <Footer />
        </main>
    );
}
