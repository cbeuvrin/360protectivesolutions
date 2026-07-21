"use client";

import { motion } from "framer-motion";

export const BlogHero = () => (
    <section className="relative pt-48 pb-12 bg-dark-blue text-white text-center">
        <div className="container mx-auto px-6">
            <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-primary font-black  tracking-[0.4em] text-[10px] mb-4 block"
            >
                Intelligence & Strategic Updates
            </motion.span>
            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-bold tracking-tighter mb-8 leading-[0.9] uppercase text-fluid-h1"
            >
                WSO <span className="text-primary italic font-black">Strategic</span> Blog
            </motion.h1>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-gray-400 font-light max-w-2xl mx-auto italic mb-12"
            >
                Insights into national security, tactical operations, and the future of professional protection in NYC.
            </motion.p>
        </div>

        {/* Subtle decorative line */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-white/10" />
    </section>
);
