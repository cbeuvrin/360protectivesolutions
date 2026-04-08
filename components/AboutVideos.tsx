"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const aboutItems = [
  {
    title: "Government Services",
    description: "Worldwide Security Options is proud to have serviced Federal Clients, including the Department of Homeland Security (DHS). This experience in high-stakes, government-level security allows us to bring a unique level of rigor and strategic crisis response to our private and corporate clients. When we say we meet threats head-on, we do so with protocols tested at the highest levels of national security.",
    video: "/videos/goverment.mp4",
  },
  {
    title: "HQ Training",
    description: "We don’t just hire security specialists; we build them. Through our HQ Training programs, we provide ongoing instruction to security professionals, ensuring they are certified in situational awareness, advanced weapons handling, and crisis management. Our commitment to education ensures that every member of the WSO team is prepared for the constantly evolving threats of the modern world.",
    video: "/videos/HQ Training.mp4",
  },
  {
    title: "360 Network",
    description: "Security today requires more than physical presence; it requires a holistic infrastructure. The 360 Network is our proprietary ecosystem that includes elite technology providers, specialized training partners, and top-tier security professionals. By integrating human intelligence with digital situational awareness, we ensure that our specialists have the best resources at their fingertips to protect what matters most.",
    video: "/videos/360 Network.mp4",
  },
  {
    title: "Specialized Protection",
    description: "Worldwide Security Options serves a wide range of industries, adapting our tactical expertise to the unique risks of each sector: Corporate & Executive, Retail & Loss Prevention, Government & Infrastructure, and Private Estates.",
    video: "/videos/industrial1.mp4",
  },
];

export function AboutVideos() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 mb-12 text-center">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-primary font-black uppercase tracking-[0.3em] text-[10px] mb-4 block"
        >
          Institutional Excellence
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark tracking-tight"
        >
          Our Expertise & <br /> Global Infrastructure
        </motion.h2>
      </div>

      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row h-[420px] w-full gap-4">
          {aboutItems.map((item, idx) => (
            <motion.div
              key={idx}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ 
                opacity: 1, 
                scale: 1,
                flex: hoveredIndex === idx ? 2.5 : hoveredIndex !== null ? 0.8 : 1,
              }}
              transition={{ 
                opacity: { duration: 0.5, delay: idx * 0.1 },
                flex: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
              }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-3xl cursor-pointer group shadow-lg border border-gray-100"
            >
              {/* Video Background */}
              <video
                src={item.video}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
              />
              
              {/* Dark Overlay */}
              <div 
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  hoveredIndex === idx 
                  ? 'bg-black/30' 
                  : hoveredIndex !== null 
                    ? 'bg-black/70 grayscale' 
                    : 'bg-black/40'
                }`} 
              />

              {/* Content Container */}
              <div className={`absolute inset-0 flex flex-col items-center justify-end pb-8 px-6 text-center text-white transition-all duration-700 ${hoveredIndex === idx ? 'opacity-100' : 'opacity-90'}`}>
                <div className="w-full">
                  <motion.h3 
                    animate={{
                      y: hoveredIndex === idx ? -10 : 0,
                    }}
                    className={`font-bold tracking-tight transition-all duration-500 ${hoveredIndex === idx ? 'text-lg md:text-xl' : 'text-sm md:text-base'}`}
                  >
                    {item.title}
                  </motion.h3>
                  
                  <div className={`overflow-hidden transition-all duration-700 ${hoveredIndex === idx ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="text-xs md:text-sm font-light text-white/90 leading-relaxed border-t border-white/20 pt-3 mt-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
