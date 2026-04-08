"use client";

import { Navbar } from "@/components/Navbar";
import { AboutHero } from "@/components/AboutHero";
import { AboutVideos } from "@/components/AboutVideos";
import { ExecutiveBio } from "@/components/ExecutiveBio";
import { TeamSection } from "@/components/TeamSection";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white font-sans text-gray-900">
            <Navbar />
            <AboutHero />
            <AboutVideos />
            <ExecutiveBio />
            <TeamSection />
            
            {/* Core Values Section with Gradient to Footer */}
            <section className="py-32 bg-gradient-to-b from-dark-blue to-[#222334] text-white">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-12"
                    >
                        Built on Experience. <br className="md:hidden" />
                        Driven by Perfection.
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light"
                    >
                        At Worldwide Security Options, we don't just provide services; we set the benchmark 
                        for the entire industry. Our background in tactical operations and high-stakes protection 
                        ensures that our clients receive the most sophisticated security solutions available today.
                    </motion.p>
                </div>
            </section>
            
            <Footer />
        </main>
    );
}
