"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Shield, HardHat, Construction, Clock, ShieldCheck, FileSearch, Lock, AlertTriangle, UserCheck, DollarSign } from "lucide-react";
import { useModal } from "@/context/ModalContext";

const specializedConstructionServices = [
    {
        title: "24-Hour Controlled Access",
        description: "Strict log-in/log-out protocols for all vendors and visitors.",
        icon: UserCheck
    },
    {
        title: "Asset Protection",
        description: "Constant patrolling to ensure high-value equipment and materials remain secure.",
        icon: Lock
    },
    {
        title: "Unauthorized Access Mitigation",
        description: "Immediate intervention for unauthorized visits or loitering.",
        icon: Shield
    },
    {
        title: "Vagrancy Management",
        description: "Maintaining the perimeter and safety in and around the construction site.",
        icon: AlertTriangle
    },
    {
        title: "Hazard Detection",
        description: "Identifying and reporting developing hazardous situations to prevent accidents.",
        icon: HardHat
    },
    {
        title: "Incident Reporting",
        description: "Real-time digital updates and transparent communication with site managers.",
        icon: FileSearch
    }
];

const excellencePillars = [
    {
        title: "Overtime Cost Protection",
        description: "In most cases, any overtime accrued by our officers will not be passed on to the client. We manage our personnel costs so you can manage your project budget.",
        icon: DollarSign
    },
    {
        title: "24/7 Vigilance",
        description: "We offer up to 24-hour security, seven days per week, adjusting protocols promptly as the site evolves.",
        icon: Clock
    },
    {
        title: "Proactive Site Monitoring",
        description: "We don't just man a post; we actively monitor and adjust to the security needs of your specific site.",
        icon: ShieldCheck
    }
];

export default function ConstructionSecurityPage() {
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
                    className="absolute z-0 w-auto min-w-full min-h-full max-w-none brightness-[0.5]"
                >
                    <source src="/videos/construction.mp4" type="video/mp4" />
                </video>
                
                <div className="container relative z-10 mx-auto px-6 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <span className="bg-primary text-white font-black  tracking-[0.4em] text-[10px] py-2 px-6 mb-8 inline-block">
                            Industrial Protection
                        </span>
                        <h1 className="uppercase text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter mb-8 max-w-6xl mx-auto leading-[0.9]  px-6">
                            Construction Site <br className="hidden md:block" />
                            <span className="text-primary italic font-black">Security</span>
                        </h1>
                        <p className="text-sm md:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed mb-10 px-8">
                            Strategic Partnerships for Industrial Protection
                        </p>
                        <button 
                            onClick={openModal}
                            className="bg-primary hover:bg-red-700 text-white px-10 py-5 rounded-sm font-black  tracking-[0.2em] transition-all transform hover:scale-105 shadow-2xl"
                        >
                            Request a Construction Site Evaluation
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* Strategy Section */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-6 md:px-12 lg:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-primary font-black  tracking-widest text-sm">Our Primary Mission</span>
                            <h2 className="text-3xl md:text-5xl font-black text-dark-blue mt-4 mb-8  leading-tight">
                                Functioning as a <br />
                                <span className="text-primary italic font-light font-serif">Strategic Partner</span>
                            </h2>
                            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                                <p>
                                    Worldwide Security Options (WSO) functions as a strategic partner, providing an exceptional and professional level of construction security. We understand that a construction site is a high-stakes environment with expensive assets, constant traffic, and unique vulnerabilities.
                                </p>
                                <p>
                                    Our specialized expertise allows us to provide individually tailored strategies that protect your project from inception to completion. An effective security strategy begins long before the first officer is placed on-site.
                                </p>
                            </div>
                        </motion.div>
                        
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-dark-blue p-12 text-white rounded-sm shadow-2xl relative overflow-hidden"
                        >
                            <div className="relative z-10">
                                <h3 className="text-2xl font-black mb-6  tracking-tighter">Advanced Access Control & Digital Logging</h3>
                                <p className="text-gray-400 leading-relaxed mb-8 italic">
                                    We utilize a sophisticated vendor and visitor log-in system powered by digital reporting technology. This ensures an accurate, real-time record of everyone entering or exiting the site.
                                </p>
                                <div className="p-6 border-l-4 border-primary bg-white/5">
                                    <p className="font-bold  tracking-widest text-sm">
                                        No equipment or material is released without authorized written consent, ensuring total accountability for your inventory.
                                    </p>
                                </div>
                            </div>
                            <Construction size={200} className="absolute -bottom-10 -right-10 text-white/5 rotate-12" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Operational Excellence Pills */}
            <section className="py-24 bg-gray-50 border-y border-black/5">
                <div className="container mx-auto px-6 md:px-12 lg:px-20">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-dark-blue ">Our Commitment to Operational Excellence</h2>
                        <div className="w-20 h-1.5 bg-primary mx-auto mt-8" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {excellencePillars.map((pillar, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="flex flex-col items-center text-center p-8 bg-white border border-black/5 hover:border-primary/30 transition-all group"
                            >
                                <div className="w-16 h-16 bg-gray-50 flex items-center justify-center rounded-sm mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                                    <pillar.icon size={30} />
                                </div>
                                <h4 className="text-lg font-black text-dark-blue  mb-4 tracking-tighter">{pillar.title}</h4>
                                <p className="text-gray-500 text-sm leading-relaxed">{pillar.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Specialized Services List */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 md:px-12 lg:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-black text-dark-blue mb-8  leading-tight">Specialized Construction Security Programs</h2>
                            <p className="text-gray-600 text-lg mb-12">
                                Our specialized programs are designed to mitigate the specific challenges of the New York and New Jersey construction landscape:
                            </p>
                            <img 
                                src="/images/industrial1.png" 
                                alt="Construction Site" 
                                className="w-full h-auto grayscale opacity-40 mix-blend-multiply"
                                onError={(e) => { e.currentTarget.style.display = 'none' }}
                            />
                        </div>

                        <div className="grid grid-cols-1 gap-6">
                            {specializedConstructionServices.map((service, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="flex gap-6 p-6 rounded-sm border border-black/5 hover:bg-gray-50 transition-all group"
                                >
                                    <div className="flex-shrink-0 w-12 h-12 bg-primary text-white flex items-center justify-center rounded-sm group-hover:scale-110 transition-transform">
                                        <service.icon size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-black text-dark-blue  mb-2 tracking-tighter">{service.title}</h4>
                                        <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-dark-blue text-white overflow-hidden relative">
                <div className="container relative z-10 mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-6xl font-black mb-8  max-w-4xl mx-auto tracking-tighter">Lead Your Project with Peace of Mind</h2>
                    <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto italic font-light">
                        When you partner with WSO, you receive a dedicated security infrastructure designed to keep your project on track and your assets safe.
                    </p>
                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                        <button 
                            onClick={openModal}
                            className="bg-primary hover:bg-red-700 text-white px-12 py-6 rounded-sm font-black  tracking-[0.2em] transition-all transform hover:scale-105 shadow-xl"
                        >
                            Request a Construction Site Evaluation
                        </button>
                    </div>
                    <div className="mt-12 flex flex-col items-center gap-4">
                        <p className="text-primary font-black  tracking-[0.3em] text-sm italic">Protect your site. Secure your investment.</p>
                        <p className="text-gray-500 font-bold  tracking-widest text-xs">Contact Worldwide Security Options today.</p>
                    </div>
                </div>
                
                {/* Visual accents */}
                <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
            </section>

            <Footer />
        </main>
    );
}
