"use client";

import { motion } from "framer-motion";

export function MissionStatement() {
    return (
        <section className="py-32 bg-white w-full border-t border-gray-100 pb-20">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center"
                >
                    <h4 className="text-[14px] md:text-sm font-black text-[#ce161f] uppercase tracking-[0.4em] mb-10 font-heading text-center">
                        100% Military & Law Enforcement Veteran-Owned
                    </h4>
                    <p className="text-xl md:text-2xl lg:text-3xl text-dark-blue leading-[1.3] font-sans text-center font-light">
                        In a city of millions and a landscape of rising threats, experience isn't optional. <span className="font-bold">We are proud to provide exclusive, battle-tested security services across New York and New Jersey.</span>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
