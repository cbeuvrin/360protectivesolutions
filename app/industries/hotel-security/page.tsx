"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { 
    Hotel, 
    Bed, 
    Users, 
    Car, 
    ShieldCheck, 
    Smartphone, 
    CheckCircle2, 
    MapPin, 
    LifeBuoy,
    Briefcase,
    UserCheck,
    Search,
    Umbrella
} from "lucide-react";
import { useModal } from "@/context/ModalContext";

const mappingServices = [
    {
        title: "Concierge & Visitor Care",
        description: "Security professionals specifically trained to assist guests while maintaining a vigilant and proactive security posture.",
        icon: Users
    },
    {
        title: "Secure Transportation",
        description: "Full coordination of shuttle driving and executive logistics for VIP guests and specialized transport needs.",
        icon: Car
    },
    {
        title: "Adaptive Scopes of Work",
        description: "Our leadership has the expertise to edit and evolve security protocols as the needs of your property change over time.",
        icon: Smartphone
    },
    {
        title: "24/7 On-Call Support",
        description: "Immediate deployment of additional staff for special events, high-occupancy periods, or emergency response.",
        icon: LifeBuoy
    },
    {
        title: "Hospitality Supervision",
        description: "Dedicated on-site supervisors oversee operations, ensuring that your property’s safety is audited at all times.",
        icon: UserCheck
    },
    {
        title: "White-Glove Service",
        description: "Personnel in executive suits or discreet plain clothes, ensuring our appearance matches your establishment’s prestige.",
        icon: Briefcase
    }
];

const sectorsServed = [
    { name: "Luxury Hotels", desc: "Elite protection for high-profile stays and urban luxury destinations.", icon: Hotel },
    { name: "Resorts", desc: "Integrated security for large-scale recreational facilities and secluded escapes.", icon: Bed },
    { name: "High-End Restaurants", desc: "Discreet security management for exclusive dining and social environments.", icon: MapPin },
    { name: "Pool & Leisure Areas", desc: "Ensuring safety and order in guest relaxation zones without intrusive presence.", icon: Umbrella }
];

const pillarsOfExcellence = [
    {
        title: "Dedicated Supervision",
        description: "We assign a devoted Hospitality Supervisor to oversee every client, ensuring professional management and auditing."
    },
    {
        title: "White-Glove Service",
        description: "Whether in black suits or professional WSO uniforms, we ensure our appearance is as flawless as your establishment."
    },
    {
        title: "Advanced & OJT Training",
        description: "Staff undergoes rigorous training with an emphasis on customer service, de-escalation, and property-specific needs."
    }
];

export default function HotelSecurityPage() {
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
                    className="absolute z-0 w-full h-full object-cover brightness-[0.4]"
                >
                    <source src="/videos/Hotel-Security.mp4" type="video/mp4" />
                </video>
                
                <div className="container relative z-10 mx-auto px-6 text-center text-white">
                    <motion.span 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="bg-primary text-white font-black  tracking-[0.4em] text-[10px] py-2 px-6 mb-8 inline-block"
                    >
                        Hospitality Protection
                    </motion.span>
                    
                    <motion.h1 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="uppercase font-bold tracking-tighter mb-8 max-w-6xl mx-auto leading-[0.9] px-6 text-fluid-h1"
                    >
                        Hotel & Resort <br className="hidden md:block" />
                        <span className="text-primary italic font-black">Security Services</span>
                    </motion.h1>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="text-sm md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed mb-10 px-8 italic"
                    >
                        Setting the Global Standard in Hospitality Protection
                    </motion.p>
                    
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <button 
                            onClick={openModal}
                            className="bg-primary hover:bg-black text-white px-10 py-5 rounded-sm font-black  tracking-[0.2em] transition-all transform hover:scale-105 shadow-2xl"
                        >
                            Request a Hospitality Security Consultation
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
                                Sophisticated Security for <br />
                                <span className="text-primary italic font-light">Complex Operations</span>
                            </h2>
                            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                                <p>
                                    Hotels and resorts are unique environments where high guest turnover and bustling public areas can attract planned criminal activity. At Worldwide Security Options (WSO), we know firsthand that choosing the right security partner is a necessity to protect your guests, your staff, and your reputation.
                                </p>
                                <p>
                                    Based in NYC and servicing New Jersey and international markets, WSO is a leader in hospitality security, blending elite protection with world-class service that acts as a seamless extension of your brand.
                                </p>
                                <p className="font-bold text-dark-blue">
                                    We ensure that safety protocols never compromise the guest experience, maintaining the delicate balance between security and hospitality.
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
                            <h3 className="text-2xl font-black text-dark-blue mb-8 ">Hospitality Sectors We Serve</h3>
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
                        <span className="text-primary font-black  tracking-[0.3em] text-sm md:text-base">Integrated Hospitality Solutions</span>
                        <h2 className="text-3xl md:text-5xl font-black mt-4 ">Specialized Hotel Security Services</h2>
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

            {/* Pillars of Excellence Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 md:px-12 lg:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl md:text-5xl font-black text-dark-blue mb-8  leading-tight">The WSO <br /><span className="text-primary italic font-black">Hospitality Advantage</span></h2>
                            <p className="text-gray-600 text-lg mb-12">
                                Our agency stands uniquely positioned through decades of experience in both domestic and international hospitality markets, creates and executes precise security plans.
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
                                    src="/images/luxury-lobby.png" 
                                    alt="Luxury Hotel Security" 
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 opacity-30"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-dark-blue/80 p-8 text-center text-white">
                                    <div>
                                        <Hotel size={60} className="text-primary mx-auto mb-6" />
                                        <h4 className="text-2xl font-black  mb-4">Global Standards in Protection</h4>
                                        <p className="text-gray-400 text-sm italic">Allowing your guests to enjoy their stay with total peace of mind, anywhere in the world.</p>
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
                    <h2 className="text-3xl md:text-5xl font-black text-dark-blue mb-8  max-w-4xl mx-auto">Elevate Your Hospitality Security</h2>
                    <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                        Worldwide Security Options delivers the discretion and professional service necessary to protect your reputation and your guests.
                    </p>
                    <button 
                        onClick={openModal}
                        className="bg-primary hover:bg-black text-white px-12 py-6 rounded-sm font-black  tracking-[0.2em] transition-all transform hover:scale-105 shadow-xl"
                    >
                        Request a Hospitality Security Consultation
                    </button>
                    <p className="mt-8 text-gray-500 font-bold  tracking-widest text-sm">
                        Protect your reputation. Ensure safety. Contact WSO today.
                    </p>
                </div>
            </section>

            <Footer />
        </main>
    );
}
