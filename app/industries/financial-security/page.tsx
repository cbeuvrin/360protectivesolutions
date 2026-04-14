"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { 
    Shield, 
    Building2, 
    Database, 
    TrendingUp, 
    Lock, 
    UserCheck, 
    Key, 
    ShieldCheck, 
    Search, 
    Camera, 
    Cpu, 
    Zap,
    AlertTriangle,
    CheckCircle2
} from "lucide-react";
import { useModal } from "@/context/ModalContext";

const mappingServices = [
    {
        title: "Concierge-Level Security Ambassadors",
        description: "Professionals specifically selected and trained to provide elite customer service while maintaining a proactive security posture.",
        icon: UserCheck
    },
    {
        title: "Advanced Access & Visitor Management",
        description: "Protecting facility access points with connected visitor technologies, biometric access control, and high-definition video solutions.",
        icon: Key
    },
    {
        title: "Executive & High-Net-Worth Protection",
        description: "Specialized personal protection operations and training for leadership and high-profile clients.",
        icon: ShieldCheck
    },
    {
        title: "Threat Mitigation & Risk Advisory",
        description: "Meticulous planning, robbery suppression strategies, and situational analysis to identify risks before they manifest.",
        icon: Search
    },
    {
        title: "Intrusion Detection & Monitoring",
        description: "Enhancing situational awareness through continuous monitoring and immediate response protocols.",
        icon: Camera
    },
    {
        title: "Robotic & Remote Surveillance",
        description: "Leveraging security robotics and remote video monitoring for 24/7 facility integrity.",
        icon: Cpu
    }
];

const facilityTypes = [
    { name: "Retail Bank Branches", desc: "Highly visible presence to deter crime and assist clients.", icon: Building2 },
    { name: "Data Centers", desc: "Mission-critical protection for digital infrastructure and sensitive information.", icon: Database },
    { name: "Corporate Offices & Trading Floors", desc: "Secure environments for high-stakes business operations.", icon: TrendingUp },
    { name: "Lock-Box & High-Value Areas", desc: "Specialized access control for restricted zones.", icon: Lock }
];

const specializedTraining = [
    {
        title: "Robbery Procedures & Suppression",
        description: "Specialized response tactics for high-risk criminal events."
    },
    {
        title: "ATM & Physical Breach Identification",
        description: "Recognizing and preventing common crimes against financial infrastructure."
    },
    {
        title: "Workplace Violence & External Threats",
        description: "Advanced training in de-escalation and threat neutralization."
    },
    {
        title: "Compliance & Regulation Support",
        description: "Understanding the role of security in enforcing industry regulations and audit requirements."
    },
    {
        title: "Data Center Protection",
        description: "Specialized protocols for safeguarding critical digital assets."
    }
];

export default function FinancialSecurityPage() {
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
                    <source src="/videos/Financial-Institution-Security.mp4" type="video/mp4" />
                </video>
                
                <div className="container relative z-10 mx-auto px-6 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <span className="bg-primary text-white font-black  tracking-[0.4em] text-[10px] py-2 px-6 mb-8 inline-block">
                            Mission Critical
                        </span>
                        <h1 className="uppercase text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter mb-8 max-w-6xl mx-auto leading-[0.9]  px-6">
                            Financial Institution <br className="hidden md:block" />
                            <span className="text-primary italic font-black">Security</span>
                        </h1>
                        <p className="text-sm md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed mb-10 px-8 italic">
                            Protecting Assets, Data, and Personnel with Zero Error Margin
                        </p>
                        <button 
                            onClick={openModal}
                            className="bg-primary hover:bg-red-700 text-white px-10 py-5 rounded-sm font-black  tracking-[0.2em] transition-all transform hover:scale-105 shadow-2xl"
                        >
                            CONSULT WITH A FINANCIAL SECURITY EXPERT
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
                                Integrated Shield for <br />
                                <span className="text-primary italic font-light">Financial Interests</span>
                            </h2>
                            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                                <p>
                                    In the financial sector, threats to data and physical assets are constantly evolving. Worldwide Security Options (WSO) provides an integrated shield of armed, unarmed, and cybersecurity services customized for the rigorous demands of the financial industry.
                                </p>
                                <p>
                                    From retail branches to high-stakes trading floors, we ensure your institution stays one step ahead of criminal activity through meticulous planning and elite execution.
                                </p>
                                <p className="font-bold text-dark-blue">
                                    Safeguarding the integrity of global finance requires more than just presence—it requires precision.
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
                            <h3 className="text-2xl font-black text-dark-blue mb-8 ">Comprehensive Security for Financial Facilities</h3>
                            <div className="space-y-8">
                                {facilityTypes.map((type, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="mt-1">
                                            <type.icon size={24} className="text-primary italic font-black" />
                                        </div>
                                        <div>
                                            <h4 className="font-black text-dark-blue  text-sm mb-1">{type.name}</h4>
                                            <p className="text-gray-500 text-sm leading-relaxed">{type.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Integrated Protection Strategies Grid */}
            <section className="py-24 bg-dark-blue text-white">
                <div className="container mx-auto px-6 md:px-12 lg:px-20">
                    <div className="text-center mb-16">
                        <span className="text-primary font-black  tracking-[0.3em] text-sm md:text-base">Elite Capability</span>
                        <h2 className="text-3xl md:text-5xl font-black mt-4 ">Integrated Protection Strategies</h2>
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

            {/* Specialized Training Section */}
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
                            <div className="relative">
                                <img 
                                    src="/images/wso-vault.png" 
                                    alt="Financial Security" 
                                    className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700 opacity-20"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Shield size={120} className="text-primary/10" />
                                </div>
                            </div>
                        </motion.div>
                        
                        <div className="order-1 lg:order-2">
                            <h2 className="text-3xl md:text-5xl font-black text-dark-blue mb-8  leading-tight">Specialized Financial <br /><span className="text-primary italic font-black">Security Training</span></h2>
                            <p className="text-gray-600 text-lg mb-12">
                                Our professionals undergo a rigorous curriculum designed specifically for the banking and financial services industry, focusing on high-risk mitigation and regulatory excellence.
                            </p>
                            
                            <div className="space-y-10">
                                {specializedTraining.map((feature, i) => (
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
                        </div>
                    </div>
                </div>
            </section>

            {/* Proactive Risk Management */}
            <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2" />
                <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
                    <div className="max-w-4xl">
                        <h2 className="text-3xl md:text-5xl font-black mb-8  leading-tight">Proactive Risk Management</h2>
                        <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                            Through our integrated workforce management platform, we extract maximum value from security expenditures by improving response times and proactively mitigating incidents. At WSO, we don't just react to threats—<span className="text-primary font-bold">tenemos el compromiso de anticiparnos a ellos.</span>
                        </p>
                        <div className="flex flex-wrap gap-8">
                            <div className="flex items-center gap-3">
                                <Zap className="text-primary italic font-black" />
                                <span className="font-bold  tracking-widest text-sm">Real-time Response</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <AlertTriangle className="text-primary italic font-black" />
                                <span className="font-bold  tracking-widest text-sm">Predictive Analysis</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-white border-y border-black/5">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-5xl font-black text-dark-blue mb-8  max-w-4xl mx-auto">Safeguard your institution with the experts</h2>
                    <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                        Contact us today for a comprehensive risk assessment tailored to your organization's specific security requirements.
                    </p>
                    <button 
                        onClick={openModal}
                        className="bg-primary hover:bg-black text-white px-12 py-6 rounded-sm font-black  tracking-[0.2em] transition-all transform hover:scale-105 shadow-xl"
                    >
                        CONSULT WITH A FINANCIAL SECURITY EXPERT
                    </button>
                    <p className="mt-8 text-gray-500 font-bold  tracking-widest text-sm">
                        Worldwide Security Options
                    </p>
                </div>
            </section>

            <Footer />
        </main>
    );
}
