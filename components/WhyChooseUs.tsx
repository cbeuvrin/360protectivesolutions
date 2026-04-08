"use client";

import { motion } from "framer-motion";
import { Shield, Users, Cpu, Settings, Tag, Award, Target, Briefcase, Zap } from "lucide-react";

const features = [
    {
        title: "Comprehensive Security Solutions",
        desc: "More than just guards at the door. We offer a full range of tailored security programs designed to meet the specific safety needs of your environment.",
        icon: <Shield className="w-6 h-6" />
    },
    {
        title: "Elite Veteran Personnel",
        desc: "Our services are only as good as our people. We are proud to deploy a team of highly-trained military and law enforcement veterans dedicated to your safety.",
        icon: <Users className="w-6 h-6" />
    },
    {
        title: "Cutting-Edge Technology",
        desc: "We are committed to advanced security. Our partnership with Silvertrac Software delivers 360 Trax, providing our clients with total transparency and real-time accountability.",
        icon: <Cpu className="w-6 h-6" />
    },
    {
        title: "Personalized Service",
        desc: "Our specialists take the time to understand your unique security objectives, developing customized protection plans designed to mitigate your specific risks.",
        icon: <Settings className="w-6 h-6" />
    },
    {
        title: "Competitive Pricing",
        desc: "Elite protection should be accessible. We offer high-quality security solutions with flexible pricing models tailored to meet your budgetary needs without compromising safety.",
        icon: <Tag className="w-6 h-6" />
    },
    {
        title: "Results-Driven Protection",
        desc: "Our team is trained to identify and neutralize potential threats quickly and effectively. We focus on delivering the highest level of proactive security services possible.",
        icon: <Award className="w-6 h-6" />
    }
];

export function WhyChooseUs() {
    return (
        <section className="py-32 bg-[#222334] relative overflow-hidden text-white w-full">
            {/* Professional Pattern Image Background - Extremely Subtle Centered Top */}
            <div className="absolute inset-x-0 top-0 z-0 flex justify-center opacity-10 pointer-events-none">
                <img 
                    src="https://360protectivesolutions.com/wp-content/uploads/2025/02/Pattern_img.png" 
                    alt="Pattern Background" 
                    className="w-full max-w-7xl object-contain min-h-[600px] select-none"
                />
            </div>

            <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
                
                {/* Header Section */}
                <div className="text-center mb-24">
                    <motion.h4 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-[14px] font-black text-gray-400 uppercase tracking-[0.4em] mb-6 font-heading"
                    >
                        Why Choose Us
                    </motion.h4>
                    <motion.h2 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-8 leading-tight font-heading"
                    >
                        Real Security. Real Service. Real Results.
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-lg md:text-xl text-gray-400 font-light max-w-3xl mx-auto leading-relaxed"
                    >
                        At Worldwide Security Options, we provide the elite protection you need through experience, transparency, and tactical excellence.
                    </motion.p>
                </div>

                {/* Features Grid - Updated 3 Column Horizontal Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
                    {features.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ 
                                duration: 0.8, 
                                delay: idx * 0.1,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                            viewport={{ once: true }}
                            className="flex flex-row items-start gap-6 group"
                        >
                            {/* Icon Circle - Larger Size and Side Placement */}
                            <div className="w-20 h-20 shrink-0 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#ce161f] group-hover:bg-[#ce161f] transition-all duration-500 shadow-2xl shadow-black/60">
                                <div className="text-white group-hover:scale-110 transition-transform duration-500 scale-125">
                                    {item.icon}
                                </div>
                            </div>
                            
                            <div className="flex flex-col">
                                <h3 className="text-xl font-bold mb-3 font-heading group-hover:text-white transition-colors leading-tight">
                                    {item.title}
                                </h3>
                                <p className="text-base font-light leading-relaxed text-gray-400">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
