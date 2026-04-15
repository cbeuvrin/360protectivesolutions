"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { 
    UserCheck, 
    ScanFace, 
    ShieldCheck, 
    Lock, 
    Bell, 
    Palette, 
    Zap, 
    BarChart3,
    Monitor,
    Smile,
    Heart,
    Star
} from "lucide-react";
import { useModal } from "@/context/ModalContext";

const conciergeFeatures = [
    {
        title: "Personalized Welcome",
        description: "Recognize and greet guests by name, creating a personalized experience from the moment they step through your doors.",
        icon: Smile
    },
    {
        title: "Advanced Facial Recognition",
        description: "Powered by Centralized Vision to identify authorized visitors instantly and notify contacts in real-time.",
        icon: ScanFace
    },
    {
        title: "Enhanced Security",
        description: "Equipped with real-time monitoring and integrated access control to ensure a secure environment.",
        icon: ShieldCheck
    }
];

const securityAssets = [
    {
        title: "Real-Time Monitoring",
        description: "Keeping a watchful eye on all entry points.",
        icon: Monitor
    },
    {
        title: "Integrated Access Control",
        description: "Preventing unauthorized entry seamlessly.",
        icon: Lock
    },
    {
        title: "Incident Alerts",
        description: "Instant notification of any anomalies at the front desk.",
        icon: Bell
    }
];

const operationalBenefits = [
    {
        title: "Customizable Branding",
        description: "Tailor on-screen messages to align perfectly with your organization's brand and values.",
        icon: Palette
    },
    {
        title: "24/7 Cost-Effectiveness",
        description: "Significantly reduce overhead while maintaining a seamless, round-the-clock process.",
        icon: Zap
    },
    {
        title: "Data-Driven Insights",
        description: "Comprehensive dashboard for tracking visitor volume, peak hours, and demographics.",
        icon: BarChart3
    }
];

export default function VirtualGreetingPage() {
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
                                Centralized Vision Powered
                            </span>
                            <h1 className="uppercase font-bold text-dark-blue tracking-tighter mb-8 leading-[0.9] text-fluid-h1">
                                Virtual <span className="text-primary italic font-black">Greeting & Concierge</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-500 font-light mb-10 max-w-3xl leading-relaxed">
                                The future of first impressions. Revolutionizing the way you welcome and engage with visitors through state-of-the-art hospitality technology.
                            </p>
                            <button 
                                onClick={openModal}
                                className="bg-primary hover:bg-black text-white px-10 py-5 rounded-sm font-black  tracking-[0.2em] transition-all transform hover:scale-105 shadow-xl"
                            >
                                Request a Virtual Concierge Demo
                            </button>
                        </motion.div>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-1/2 right-10 -translate-y-1/2 w-1/3 h-2/3 bg-gray-50 -z-0 rounded-full blur-3xl opacity-50 hidden lg:block" />
                <div className="absolute top-1/2 right-20 -translate-y-1/2 hidden lg:block">
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <UserCheck size={300} strokeWidth={0.5} className="text-primary/10" />
                    </motion.div>
                </div>
            </section>

            {/* Intro Section - Tech Meets Human Choice */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-6 md:px-12 lg:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-black text-dark-blue mb-8  leading-tight">
                                Personalized & <br />
                                <span className="text-primary italic font-black">Professional Welcome</span>
                            </h2>
                            <p className="text-gray-600 text-lg mb-12 leading-relaxed">
                                Our state-of-the-art Virtual Concierge is designed to revolutionize the way you welcome guests. Say goodbye to outdated receptionist desks and embrace a solution that recognize guests by name and creates a lasting impression.
                            </p>
                            
                            <div className="space-y-10">
                                {conciergeFeatures.map((feature, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: i * 0.1 }}
                                        className="flex gap-6 items-start"
                                    >
                                        <div className="bg-gray-50 p-4 rounded-sm">
                                            <feature.icon size={24} className="text-primary italic font-black" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-black text-dark-blue  tracking-tight mb-2">{feature.title}</h4>
                                            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">{feature.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                                className="bg-dark-blue aspect-[4/5] rounded-sm p-12 flex flex-col justify-between relative overflow-hidden group"
                            >
                                <img 
                                    src="/images/luxury-lobby.png" 
                                    alt="Luxury Environment" 
                                    className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale group-hover:scale-110 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark-blue via-dark-blue/20 to-transparent" />
                                
                                <div className="relative z-10 flex justify-between items-start">
                                    <Star className="text-primary italic font-black" size={32} />
                                    <div className="w-12 h-1 bg-white/10" />
                                </div>
                                <div className="relative z-10 space-y-6">
                                    <h3 className="text-4xl font-black text-white  italic leading-none">Hospitality <br /> <span className="text-primary italic font-black">Redefined</span></h3>
                                    <p className="text-gray-300 text-sm leading-relaxed">Elevating the standard of front desk management with a sophisticated digital touch.</p>
                                </div>
                            </motion.div>
                            <div className="absolute -top-10 -right-10 bg-primary/95 backdrop-blur p-12 text-white hidden md:block shadow-2xl z-20">
                                <Heart size={40} className="mb-4" />
                                <span className="block text-2xl font-black italic mb-1  tracking-tighter">Hospitality</span>
                                <span className="block text-[10px] font-bold  tracking-widest opacity-70">Human-Centric Tech</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Security Asset Section */}
            <section className="py-24 bg-gray-50 text-dark-blue">
                <div className="container mx-auto px-6 md:px-12 lg:px-20">
                    <div className="text-center mb-16">
                        <span className="text-primary font-black  tracking-[0.3em] text-sm">Beyond a Greeting</span>
                        <h2 className="text-3xl md:text-5xl font-black mt-4 ">A Robust Security Asset</h2>
                        <div className="w-20 h-1.5 bg-primary mx-auto mt-8" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {securityAssets.map((asset, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="bg-white p-12 border border-black/5 text-center group hover:bg-dark-blue transition-colors duration-500"
                            >
                                <asset.icon size={48} className="text-primary mx-auto mb-8 transition-transform group-hover:scale-110" />
                                <h4 className="text-lg font-black  mb-4 tracking-tighter group-hover:text-white transition-colors">{asset.title}</h4>
                                <p className="text-gray-500 group-hover:text-gray-400 text-sm leading-relaxed transition-colors">{asset.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Operational Benefits Grid */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 md:px-12 lg:px-20">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-dark-blue ">Operational Advantages</h2>
                        <p className="text-gray-500 mt-6 max-w-2xl mx-auto">Optimize your front desk efficiency while reducing overhead and gaining valuable insights.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {operationalBenefits.map((benefit, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="border-l-4 border-primary pl-8 py-4"
                            >
                                <benefit.icon size={32} className="text-dark-blue mb-6" />
                                <h4 className="text-xl font-black text-dark-blue  mb-3 tracking-tight">{benefit.title}</h4>
                                <p className="text-gray-600 leading-relaxed text-sm">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-gray-50 border-y border-black/5 text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-5xl font-black text-dark-blue mb-8  max-w-4xl mx-auto leading-tight">
                        Transform Your Front Desk. <br />
                        <span className="text-primary italic font-black">Stay Ahead of the Competition.</span>
                    </h2>
                    <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Embrace the future of customer service with a solution that combines cutting-edge technology with enhanced security measures.
                    </p>
                    <button 
                        onClick={openModal}
                        className="bg-primary hover:bg-black text-white px-12 py-6 rounded-sm font-black  tracking-[0.2em] transition-all transform hover:scale-105 shadow-xl"
                    >
                        Request a Virtual Concierge Demonstration
                    </button>
                    <p className="mt-8 text-gray-500 font-bold  tracking-widest text-sm italic">
                        Experience the wso standard. Contact us today.
                    </p>
                </div>
            </section>

            <Footer />
        </main>
    );
}
