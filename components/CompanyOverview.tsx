"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Target, Users } from "lucide-react";

export function CompanyOverview() {
    const features = [
        {
            icon: ShieldCheck,
            title: "Protection",
            description: "Providing top-tier security solutions for high-profile clients and critical assets.",
        },
        {
            icon: Target,
            title: "Development",
            description: "Continuous training and advancement to ensure our team handles any threat.",
        },
        {
            icon: Users,
            title: "Dedication",
            description: "Unwavering commitment to safety, discretion, and professional excellence.",
        },
    ];

    return (
        <section id="about" className="py-20 md:py-28 bg-white">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading text-dark-blue mb-6">
                        Who We Are
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        360 Protective Solutions is a premier security firm dedicated to providing bespoke protection services.
                        We blend military-grade precision with corporate-level discretion.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.2, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center text-center p-6"
                        >
                            <div className="mb-6 p-4 bg-gray-50 rounded-full text-primary">
                                <feature.icon size={48} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-2xl font-bold text-dark-blue mb-4">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
