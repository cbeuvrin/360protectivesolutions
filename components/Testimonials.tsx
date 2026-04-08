"use client";

import { motion } from "framer-motion";

export function Testimonials() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="w-full px-8 md:px-16 lg:px-24 xl:px-32">
        <div className="max-w-4xl mx-auto text-center mb-20">
          
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-4 block">
              What they say about us
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-blue tracking-tight leading-[1.1] mb-8">
              Testimonials from Satisfied Clients of 360 Protective Solutions
            </h2>
          </motion.div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="aspect-video rounded-3xl overflow-hidden shadow-xl bg-black border border-gray-100"
          >
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/tkBigwe9jEI" 
              title="YouTube video player" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="aspect-video rounded-3xl overflow-hidden shadow-xl bg-black border border-gray-100"
          >
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/rb4j6CaqgAw" 
              title="YouTube video player" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
