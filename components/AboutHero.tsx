"use client";

import { motion } from "framer-motion";

export function AboutHero() {
    return (
        <section className="relative min-h-[60vh] flex items-center pt-56 pb-24 overflow-hidden bg-white">
            <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Left Side: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <motion.h4 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-6"
                        >
                            The Gold Standard in Executive Protection
                        </motion.h4>
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold text-dark-blue leading-tight mb-8"
                        >
                            Experience where <br className="hidden md:block" />
                            it <span className="text-primary font-black">matters most</span>.
                        </motion.h1>
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="space-y-6 text-lg md:text-xl text-gray-700 font-light leading-relaxed max-w-2xl"
                        >
                            <p>
                                The Executive Protection HQ is the cornerstone of Worldwide Security Options. 
                                Our mission is two-fold: providing elite client protection and spearheading 
                                security professional development.
                            </p>
                            <p>
                                Our instruction is carefully developed, scrutinized, and updated by former 
                                U.S. military, NYC government, and major corporate security members. 
                                This isn't just security; it’s evolution based on real-world tactical experience.
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Right Side: Round Logo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
                        className="flex justify-center lg:justify-end"
                    >
                        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px]">
                            <img 
                                src="/logo-round.png" 
                                alt="360 Protection Symbol" 
                                className="w-full h-full object-contain filter drop-shadow-2xl opacity-90 hover:opacity-100 transition-opacity duration-500"
                            />
                            {/* Subtle background glow */}
                            <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl -z-10" />
                        </div>
                    </motion.div>
                </div>
            </div>
            
            {/* Minimal Decorative elements */}
            <div className="absolute -top-12 -right-12 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-12 -left-12 w-96 h-96 bg-dark-blue/5 rounded-full blur-3xl -z-10" />
        </section>
    );
}
