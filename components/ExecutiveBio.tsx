"use client";

import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

export function ExecutiveBio() {
    return (
        <section className="py-24 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                <div className="max-w-6xl mx-auto">
                    
                    {/* Photo Container with Float Left */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        viewport={{ once: true }}
                        className="float-left mr-16 mb-12 relative z-10 w-full md:w-[450px]"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5]">
                            <img 
                                src="/nelson.png" 
                                alt="Nelson Vergara - CEO & Founder" 
                                className="w-full h-full object-cover object-right grayscale-[20%] hover:grayscale-0 transition-all duration-700 hover:scale-[1.05]"
                            />
                            {/* Decorative Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/30 to-transparent pointer-events-none" />

                            {/* LinkedIn Button - Perfectly Centered & No Overlap */}
                            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
                                <a 
                                    href="https://www.linkedin.com/in/nelson-vergara-pps-sas%C2%AE-ap-ccpa%C2%AE-a-l-i-v-e-05ba41a4/" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative flex items-center h-14"
                                >
                                    {/* Text Pill first (Background) */}
                                    <div className="bg-[#0077B5] text-white py-3 pl-14 pr-8 rounded-full font-bold uppercase tracking-widest text-[10px] shadow-lg z-10 transition-all duration-300 group-hover:pr-10 whitespace-nowrap">
                                        Connect on LinkedIn
                                    </div>
                                    {/* Icon Circle (Foreground - Offset to the left) */}
                                    <div className="absolute left-0 w-14 h-14 bg-[#0077B5] rounded-full flex items-center justify-center text-white shadow-xl z-20 border-2 border-white transition-transform duration-300 group-hover:scale-110">
                                        <Linkedin size={24} fill="currentColor" />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Bio Content - Text wraps around the photo */}
                    <div className="text-gray-600 font-light leading-relaxed text-lg lg:text-xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <span className="inline-block text-primary font-black uppercase tracking-[0.2em] text-xs mb-3">
                                Chief Executive Officer / Founder
                            </span>
                            <h2 className="text-3xl md:text-5xl font-bold text-dark-blue leading-tight mb-8">
                                Nelson Vergara, <br />
                                <span className="text-2xl md:text-3xl font-light text-gray-500">PPS, SAS-AP, CCPA, A.L.I.V.E</span>
                            </h2>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <p>
                                As a U.S Marine and Law Enforcement Professional, a protective vision became the prime focus after working for over twenty-five years in the intelligence and protection industry. Nelson’s academic background in Homeland Security and Emergency Management has allowed him to understand other risks not traditionally conventional to executive protection yet instrumental to mission success. 
                            </p>
                            <p>
                                360 Protective Solutions was realized in 2021 as a capstone of lessons learned from both real-world applications and academic experience. In addition, Nelson serves as a member of the American Society for Industrial Security (ASIS International) for the New York City Chapter. Nelson’s background has earned several designations including Situation Awareness Specialist-Advanced Practitioner (SAS-AP) & Instructor by the Arcuri Group. 
                            </p>
                            <p>
                                The International Association of Personal Protection Agents (IAPPA) has recognized Nelson as a Board Certified Close Protection Agent (CCPA). He is a graduate of the Executive Protection Institute and is Board Certified as a Personal Protection Specialist (PPS). Nelson is a certified Active Shooter Survival A.L.I.V.E Instructor. 
                            </p>
                            <p>
                                Nelson is an active contributing law enforcement and security analyst for Bloomberg TV, CBS, and Cheddar News. To find out more about Nelson’s professional background and affiliations, please click on the LinkedIn button.
                            </p>
                        </motion.div>
                    </div>

                    {/* Clearfloat for any subsequent sections */}
                    <div className="clear-both" />
                </div>
            </div>
        </section>
    );
}
