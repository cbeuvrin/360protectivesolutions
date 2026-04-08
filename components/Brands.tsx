"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Award, Briefcase, Globe, Star } from "lucide-react";

const brands = [
    { name: "Brand One", icon: Shield },
    { name: "Brand Two", icon: Lock },
    { name: "Brand Three", icon: Award },
    { name: "Brand Four", icon: Briefcase },
    { name: "Brand Five", icon: Globe },
    { name: "Brand Six", icon: Star },
];

export function Brands() {
    return (
        <section className="py-12 bg-gray-50 border-b border-gray-100">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-widest mb-8">
                    Trusted by world-class brands & organizations
                </p>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
                    {brands.map((brand, idx) => (
                        <div key={idx} className="flex items-center space-x-2 grayscale hover:grayscale-0 transition-all duration-300">
                            <brand.icon size={32} className="text-dark-blue" />
                            <span className="text-lg font-bold text-dark-blue hidden md:block">{brand.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
