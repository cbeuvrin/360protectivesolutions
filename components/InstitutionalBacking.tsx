"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const backingItems = [
  {
    title: "Government Services",
    description: "We have served the DHS (Homeland Security)",
    video: "/videos/goverment.mp4",
  },
  {
    title: "HQ Training",
    description: "We don't just hire, we train the industry",
    video: "/videos/HQ Training.mp4",
  },
  {
    title: "360 Network",
    description: "Our network of technology partners",
    video: "/videos/360 Network.mp4",
  },
];

export function InstitutionalBacking() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="w-full px-8 md:px-16 lg:px-24 xl:px-32 mb-16 text-center">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-4 block"
        >
          Institutional Excellence
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark tracking-tight"
        >
          Institutional Backing & <br /> Global Network
        </motion.h2>
      </div>

      <div className="flex flex-col lg:flex-row h-[315px] lg:h-[700px] w-full gap-2 px-2">
        {backingItems.map((item, idx) => (
          <motion.div
            key={idx}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              flex: hoveredIndex === idx ? 2.5 : hoveredIndex !== null ? 0.7 : 1,
            }}
            transition={{ 
              y: { duration: 1, delay: 0.3 + (idx * 0.15), ease: [0.22, 1, 0.36, 1] },
              opacity: { duration: 1, delay: 0.3 + (idx * 0.15) },
              flex: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
            }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl cursor-pointer group"
          >
            {/* Video Background */}
            <video
              src={item.video}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
            />
            
            {/* Dark Overlay - Standardized to a premium feel */}
            <div 
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                hoveredIndex === idx 
                ? 'bg-black/20' 
                : hoveredIndex !== null 
                  ? 'bg-black/70 grayscale-[0.5]' 
                  : 'bg-black/50'
              }`} 
            />

            {/* Content Container */}
            <div className={`absolute inset-0 flex flex-col items-center justify-end pb-8 lg:pb-16 px-6 lg:px-8 text-center text-white transition-all duration-700 ${hoveredIndex === idx ? 'opacity-100' : 'opacity-80'}`}>
              <div className="max-w-md w-full">
                <motion.h3 
                  animate={{
                    y: hoveredIndex === idx ? 0 : 40,
                  }}
                  className={`font-bold tracking-tight transition-all duration-500 ${hoveredIndex === idx ? 'text-lg md:text-xl lg:text-4xl mb-4' : 'text-sm md:text-base lg:text-4xl mb-4'}`}
                >
                  {item.title}
                </motion.h3>
                
                <div className={`overflow-hidden transition-all duration-700 ${hoveredIndex === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-xs lg:text-xl font-light text-white/90 leading-relaxed border-t border-white/20 pt-2 lg:pt-4 mt-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
