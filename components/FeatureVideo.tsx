"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function FeatureVideo() {
    return (
        <section className="py-32 bg-gray-50 w-full overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                
                {/* Centered Title */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-dark-blue leading-[1.1] font-heading max-w-5xl mx-auto">
                        Peace of Mind Through Results-Driven Protection
                    </h2>
                </motion.div>

                {/* Centered Video - Scale Animation (Small to Large) */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true }}
                    className="w-full mb-20 relative z-10"
                >
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-black">
                        <video 
                            autoPlay 
                            loop 
                            muted 
                            playsInline 
                            className="w-full h-full object-cover"
                        >
                            <source src="https://360protectivesolutions.com/wp-content/uploads/2024/08/Y2meta.app-WSO-Worldwide-Security-Options-English-1.mp4" type="video/mp4" />
                        </video>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                    </div>
                </motion.div>

                {/* Bottom Row: Split Text and Button */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        viewport={{ once: true }}
                        className="lg:w-2/3"
                    >
                        <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed font-sans">
                            At Worldwide Security Options, we don't just provide guards; we deliver certainty. With our tactical expertise and results-driven approach, <span className="font-bold text-dark-blue">you can rest assured that your business, assets, and personnel are in the most capable hands in the industry.</span>
                        </p>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        viewport={{ once: true }}
                        className="lg:w-1/3 flex lg:justify-end w-full"
                    >
                        <Link
                            href="#contact"
                            className="inline-block px-12 py-5 bg-[#ce161f] text-white text-base md:text-lg font-bold uppercase tracking-widest hover:bg-red-700 transition-all hover:scale-105 rounded-sm shadow-xl shadow-red-900/20 text-center w-full lg:w-auto min-w-[240px]"
                        >
                            Contact Us Today
                        </Link>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
