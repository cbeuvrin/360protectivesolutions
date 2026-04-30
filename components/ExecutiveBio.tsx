"use client";

import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

interface Executive {
    name: string;
    role: string;
    roleFull?: string;
    bio: string[];
    image: string;
    linkedin?: string;
}

const executives: Executive[] = [
    {
        name: "Nelson Vergara",
        role: "Chief Executive Officer / Founder",
        roleFull: "PPS, SAS-AP, CCPA, A.L.I.V.E",
        image: "/nelson.png",
        linkedin: "https://www.linkedin.com/in/nelson-vergara-pps-sas%C2%AE-ap-ccpa%C2%AE-a-l-i-v-e-05ba41a4/",
        bio: [
            "As a U.S Marine and Law Enforcement Professional, a protective vision became the prime focus after working for over twenty-five years in the intelligence and protection industry. Nelson’s academic background in Homeland Security and Emergency Management has allowed him to understand other risks not traditionally conventional to executive protection yet instrumental to mission success.",
            "Worldwide Security Options was realized in 2021 as a capstone of lessons learned from both real-world applications and academic experience. In addition, Nelson serves as a member of the American Society for Industrial Security (ASIS International) for the New York City Chapter. Nelson’s background has earned several designations including Situation Awareness Specialist-Advanced Practitioner (SAS-AP) & Instructor by the Arcuri Group.",
            "The International Association of Personal Protection Agents (IAPPA) has recognized Nelson as a Board Certified Close Protection Agent (CCPA). He is a graduate of the Executive Protection Institute and is Board Certified as a Personal Protection Specialist (PPS). Nelson is a certified Active Shooter Survival A.L.I.V.E Instructor.",
            "Nelson is an active contributing law enforcement and security analyst for Bloomberg TV, CBS, and Cheddar News. To find out more about Nelson’s professional background and affiliations, please click on the LinkedIn button."
        ]
    },
    {
        name: "Carlos Beuvrin",
        role: "Chief Marketing Officer (CMO)",
        image: "/beuvrin.png",
        bio: [
            "Carlos Beuvrin is a seasoned Chief Marketing Officer (CMO) and strategic leader with over a decade of experience driving digital transformation at the intersection of marketing and technology. Originally from Venezuela and currently based in Mexico City, Carlos has spent the last 10 years at the forefront of the region’s evolving digital landscape.",
            "A Licensed Administrator by training, Carlos blends high-level business logic with a deep technical mastery of vibe coding and software design. He is a certified Facebook Ads and Google Ads Partner, leveraging data-driven precision to scale brands and optimize performance in highly competitive markets.",
            "Throughout his career, Carlos has bridged the gap between creative marketing strategy and robust technical infrastructure. His expertise in software design allows him to oversee the development of products that are not only functional but resonate deeply with end-users. As a CMO, he is recognized for his ability to build comprehensive marketing ecosystems that integrate cutting-edge AI-driven development with traditional business principles.",
            "Key Areas of Expertise:",
            "• Strategic Leadership: Multi-year tenure as a Chief Marketing Officer directing cross-functional teams.",
            "• AdTech Mastery: Expert-level management of Facebook and Google Ads ecosystems.",
            "• Technical Innovation: Advanced proficiency in vibe coding and UI/UX software design.",
            "• Regional Insight: Extensive experience in the Mexican and Latin American markets.",
            "• Business Administration: Solid foundation in organizational growth and operational efficiency."
        ]
    }
];

export function ExecutiveBio() {
    return (
        <div className="bg-gray-50">
            {executives.map((exec, index) => (
                <section key={exec.name} className={`py-24 overflow-hidden ${index % 2 === 0 ? '' : 'bg-white'}`}>
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
                                        src={exec.image} 
                                        alt={`${exec.name} - ${exec.role}`} 
                                        className="w-full h-full object-cover object-right grayscale-[20%] hover:grayscale-0 transition-all duration-700 hover:scale-[1.05]"
                                    />
                                    {/* Decorative Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/30 to-transparent pointer-events-none" />

                                    {/* LinkedIn Button - Only if present */}
                                    {exec.linkedin && (
                                        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
                                            <a 
                                                href={exec.linkedin} 
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group relative flex items-center h-14"
                                            >
                                                {/* Text Pill first (Background) */}
                                                <div className="bg-[#0077B5] text-white py-3 pl-[4.5rem] pr-8 rounded-full font-bold tracking-widest text-[10px] shadow-lg z-10 transition-all duration-300 group-hover:pr-10 whitespace-nowrap">
                                                    Connect on LinkedIn
                                                </div>
                                                {/* Icon Circle (Foreground - Offset to the left) */}
                                                <div className="absolute left-0 w-14 h-14 bg-[#0077B5] rounded-full flex items-center justify-center text-white shadow-xl z-20 border-2 border-white transition-transform duration-300 group-hover:scale-110">
                                                    <Linkedin size={24} fill="currentColor" />
                                                </div>
                                            </a>
                                        </div>
                                    )}
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
                                    <span className="inline-block text-primary font-black  tracking-[0.2em] text-xs mb-3">
                                        {exec.role}
                                    </span>
                                    <h2 className="text-3xl md:text-5xl font-bold text-dark-blue leading-tight mb-8">
                                        {exec.name}, <br />
                                        {exec.roleFull && (
                                            <span className="text-2xl md:text-3xl font-light text-gray-500">{exec.roleFull}</span>
                                        )}
                                    </h2>
                                </motion.div>

                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    viewport={{ once: true }}
                                    className="space-y-6"
                                >
                                    {exec.bio.map((paragraph, i) => (
                                        <p key={i} className={paragraph.startsWith('Key Areas') || paragraph.startsWith('•') ? 'font-normal text-dark-blue mt-4 mb-2' : ''}>
                                            {paragraph}
                                        </p>
                                    ))}
                                </motion.div>
                            </div>

                            {/* Clearfloat for any subsequent sections */}
                            <div className="clear-both" />
                        </div>
                    </div>
                </section>
            ))}
        </div>
    );
}
