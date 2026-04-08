"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowRight } from "lucide-react";

const serviceList = [
    { 
        title: "Executive Protection & Security Drivers", 
        desc: "360‘s Proprietary-Based Executive and Close Protection Services are specifically designed to meet client’s needs to enhance time management, protective intelligence, and first aid while providing the finest in armed personal protection." 
    },
    { 
        title: "Force Protection Specialist", 
        desc: "360 offers a custom and comprehensive security program. Our armed Force Protection Specialists are certified professionals trained in situational awareness, tactics, surveillance, weapons handling, and customer service." 
    },
    { 
        title: "Protection Specialist", 
        desc: "In the retail industry, security omnipresence coupled with situational awareness & proper training are paramount in loss prevention. Our 360 Protection Specialists provides the security service needed to stop the ongoing threat of retail item shrinkage." 
    },
    { 
        title: "Camera Monitoring", 
        desc: "360 offers a custom and comprehensive security program. Our armed Force Protection Specialists are certified professionals trained in situational awareness, tactics." 
    },
    { 
        title: "Weapons Detection Artificial Intelligence", 
        desc: "360 Protective Solutions partnered with Actuate to offer comprehensive access to a proactive and digital security response. By providing a digital and human situational awareness system." 
    },
    { 
        title: "360 TRAX", 
        desc: "Simply put, 360TRAX by Silvertrac Software was developed to embrace today’s technology ensuring accurate accountability while providing transparency to our Clients." 
    },
];

export function ServicesGrid() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    return (
        <section id="services" className="py-32 bg-gray-50/50 w-full">
            <div className="w-full px-8 md:px-16 lg:px-24 xl:px-32">
                <div className="flex flex-col lg:flex-row gap-20 lg:gap-32 relative items-start">
                    
                    {/* Left Sticky Content Section */}
                    <div className="lg:w-[45%] lg:sticky lg:top-32 lg:h-fit">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold font-heading text-dark-blue mb-8 leading-[1.1] tracking-tight text-left">
                                Experience where <br className="hidden xl:block" /> it matters most.
                            </h2>
                            <p className="text-xl md:text-xl text-dark-blue/90 font-bold mb-10 leading-relaxed max-w-lg text-left">
                                We develop precise, comprehensive, and adaptive security strategies designed to protect assets and ensure peace of mind.
                            </p>
                            <p className="text-lg text-gray-500 font-light leading-relaxed max-w-sm text-left">
                                Our specialists identify critical vulnerabilities and implement immediate, high-impact mitigation to neutralize threats.
                            </p>
                        </motion.div>
                    </div>

                    {/* Right Accordion Section */}
                    <div className="lg:w-[55%]">
                        <div className="border-t border-black/10">
                            {serviceList.map((service, idx) => (
                                <motion.div 
                                    key={idx} 
                                    className="border-b border-black/10"
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ 
                                        opacity: 1, 
                                        y: 0,
                                        transition: { 
                                            duration: 0.8, 
                                            delay: idx * 0.1,
                                            ease: [0.22, 1, 0.36, 1]
                                        } 
                                    }}
                                    viewport={{ once: true }}
                                >
                                    <button
                                        onClick={() => setExpandedIndex(expandedIndex === idx ? null : idx)}
                                        className="w-full py-8 flex items-center justify-between text-left group transition-all duration-300"
                                    >
                                        <h3 className={`text-xl md:text-2xl font-bold transition-all duration-300 ${expandedIndex === idx ? 'text-primary' : 'text-dark-blue lg:group-hover:pl-4'}`}>
                                            {service.title}
                                        </h3>
                                        <div className={`flex-shrink-0 ml-4 w-10 h-10 rounded-full border border-black/10 flex items-center justify-center transition-all duration-300 ${expandedIndex === idx ? 'bg-primary border-primary text-white rotate-90' : 'group-hover:border-primary group-hover:text-primary'}`}>
                                            {expandedIndex === idx ? <Minus size={20} /> : <Plus size={20} />}
                                        </div>
                                    </button>

                                    <AnimatePresence initial={false}>
                                        {expandedIndex === idx && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                                            >
                                                <div className="pb-10 pt-2 lg:pr-24">
                                                    <p className="text-gray-500 text-lg leading-relaxed mb-8">
                                                        {service.desc}
                                                    </p>
                                                    <Link 
                                                        href="#contact"
                                                        className="inline-flex items-center gap-2 text-primary font-black uppercase tracking-widest text-[13px] hover:gap-4 transition-all"
                                                    >
                                                        Learn more <ArrowRight size={16} />
                                                    </Link>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

// Helper Link component since I'm using it inside but not imported in previous context
import Link from "next/link";
