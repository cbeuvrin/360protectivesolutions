"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="relative h-screen min-h-[600px] w-full flex items-center overflow-hidden">
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src="/videos/hero-video-2.mp4?v=2" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 text-left text-white h-full flex flex-col justify-center pt-24 md:pt-32 lg:pt-0">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.15,
                                delayChildren: 0.3
                            }
                        }
                    }}
                    className="max-w-[90rem]"
                >
                    <motion.h1 
                        variants={{
                            hidden: { opacity: 0, y: 40 },
                            visible: { 
                                opacity: 1, 
                                y: 0, 
                                transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } 
                            }
                        }}
                        className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold font-heading mb-6 tracking-tight leading-[1.1] max-w-4xl text-white"
                    >
                        Executive Protection NYC:
                        <br />
                        <span className="text-[#ce161f]">Tailored Solutions</span> for Elite Security
                    </motion.h1>

                    <motion.h2 
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { 
                                opacity: 1, 
                                y: 0, 
                                transition: { duration: 0.8, ease: "easeOut" } 
                            }
                        }}
                        className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-6 tracking-wider max-w-2xl"
                    >
                        100% Military & Law Enforcement <br /> Veteran-Owned Security Service
                    </motion.h2>

                    <motion.p 
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { 
                                opacity: 1, 
                                y: 0, 
                                transition: { duration: 0.8, ease: "easeOut" } 
                            }
                        }}
                        className="text-[14px] text-gray-200 mb-10 max-w-2xl font-normal leading-relaxed"
                    >
                        <strong className="font-bold text-white">Executive Protection NYC</strong> delivers premier security services across the <strong className="font-bold text-white">United States, Canada, and Mexico</strong>. Headquartered in New York City, our elite team of <strong className="font-bold text-white">military and law enforcement veterans</strong> provides proprietary, tailored client protection solutions. Experience the gold standard in physical security with the top-rated experts in NYC.
                    </motion.p>

                    <motion.div 
                        variants={{
                            hidden: { opacity: 0, scale: 0.95 },
                            visible: { 
                                opacity: 1, 
                                scale: 1, 
                                transition: { duration: 0.5, ease: "easeOut" } 
                            }
                        }}
                        className="flex flex-wrap gap-4"
                    >
                        <Link
                            href="#contact"
                            className="inline-block px-8 py-3.5 bg-primary text-white text-base md:text-lg font-bold uppercase tracking-widest hover:bg-red-700 transition-all hover:scale-105 rounded-sm"
                        >
                            Get Started
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
