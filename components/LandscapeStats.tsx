"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function AnimatedCounter({ value, duration = 1.2 }: { value: string, duration?: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [displayValue, setDisplayValue] = useState("0");

    useEffect(() => {
        if (!isInView) return;

        const numericPart = parseFloat(value.replace(/[^0-9.]/g, ""));
        const suffix = value.replace(/[0-9.]/g, "");
        
        let startTimestamp: number | null = null;
        const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
            
            // Ease out cubic
            const easedProgress = 1 - Math.pow(1 - progress, 3);
            
            const current = easedProgress * numericPart;
            const formatted = numericPart % 1 === 0 ? Math.floor(current) : current.toFixed(2);
            
            setDisplayValue(`${formatted}${suffix}`);
            
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        
        window.requestAnimationFrame(step);
    }, [isInView, value, duration]);

    return (
        <span ref={ref} className="text-[#ce161f] text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter leading-none inline-block font-heading">
            {displayValue}
        </span>
    );
}

export function LandscapeStats() {
    return (
        <section className="py-40 bg-white w-full relative overflow-hidden flex flex-col items-center justify-center">
            
            <div className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.35] pointer-events-none">
                <div 
                    className="w-full h-full max-w-7xl mx-auto world-map-mask"
                    style={{
                        backgroundImage: 'radial-gradient(circle, #334155 1.5px, transparent 1.5px)',
                        backgroundSize: '4px 4px'
                    }}
                />
            </div>

            <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
                
                {/* Statistics Columns - Staggered Entry */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mt-12">
                    {[
                        { val: "7.89m+", label: "NYC Population" },
                        { val: "309", label: "U.S. Active Shooter Incidents (2024)" },
                        { val: "29%", label: "NYC Violent Crimes 2023" }
                    ].map((stat, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ 
                                opacity: 1, 
                                y: 0,
                                transition: { 
                                    duration: 0.8, 
                                    delay: 0.2 + (i * 0.1),
                                    ease: [0.22, 1, 0.36, 1]
                                }
                            }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center"
                        >
                            <AnimatedCounter value={stat.val} />
                            <h3 className="text-base font-bold text-dark-blue mt-4 uppercase tracking-widest font-heading text-center">
                                {stat.label}
                            </h3>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
