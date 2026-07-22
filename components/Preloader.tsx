"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SEEN_KEY = "wso:preloader-seen";

export function Preloader() {
    const [progress, setProgress] = useState(0);
    // Arranca apagado y solo se enciende si toca: asi al navegar entre paginas
    // no aparece ni un parpadeo de la pantalla negra.
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        // La intro es un gesto de marca para quien llega al sitio. Repetirla en
        // cada pagina costaba ~2,6s de pantalla negra por navegacion, asi que se
        // muestra una sola vez por sesion.
        if (sessionStorage.getItem(SEEN_KEY)) {
            return;
        }

        sessionStorage.setItem(SEEN_KEY, "1");
        setIsLoading(true);

        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setIsLoading(false), 500);
                    return 100;
                }
                // Random increments for a more natural feel
                return prev + Math.floor(Math.random() * 15) + 5;
            });
        }, 150);

        return () => clearInterval(interval);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                    className="fixed inset-0 z-[9999] bg-[#0a0a0a] flex flex-col items-center justify-center pointer-events-auto"
                >
                    <div className="w-full max-w-md px-10">
                        {/* Logo Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="flex flex-col items-center mb-12"
                        >
                            <img 
                                src="/images/wso31.webp" 
                                alt="Worldwide Security Options" 
                                className="h-20 w-auto object-contain mb-6"
                            />
                            <p className="text-gray-500 text-xs md:text-sm  tracking-[0.3em] font-medium whitespace-nowrap">
                                powered by <span className="text-primary italic font-black">360 protective solutions</span>
                            </p>
                        </motion.div>

                        {/* Progress Bar Container */}
                        <div className="relative h-[2px] w-full bg-white/10 rounded-full overflow-hidden mb-4">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${progress}%` }}
                                transition={{ duration: 0.1 }}
                                className="absolute top-0 left-0 h-full bg-primary"
                            />
                        </div>

                        {/* Percentage */}
                        <div className="flex justify-between items-center text-[10px]  tracking-widest font-bold">
                            <span className="text-gray-600">Loading System</span>
                            <span className="text-primary italic font-black">{Math.min(progress, 100)}%</span>
                        </div>
                    </div>

                    {/* Background decorative elements */}
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
