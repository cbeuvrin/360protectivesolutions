"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Plus, Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

const services = [
    { name: "Anti-Piracy Film Surveillance", href: "/services/anti-piracy" },
    { name: "Executive Protection & Security Drivers", href: "/services/executive-protection" },
    { name: "Federal Contracting & Government Services", href: "/federal-contracting" },
    { name: "Force Protection Specialists", href: "/services/force-protection" },
    { name: "Protection Specialists", href: "/services/protection-specialist" },
];

const industries = [
    { name: "Commercial Security", href: "#commercial" },
    { name: "Construction Site Security", href: "#construction" },
    { name: "Event Security", href: "#event" },
    { name: "Financial Institution Security", href: "#financial" },
    { name: "Hotel Security", href: "#hotel" },
    { name: "Port & Maritime Security", href: "#port-maritime" },
    { name: "Residential Security", href: "#residential" },
    { name: "Warehouse Security", href: "#warehouse" },
];

const technologySubMenu = [
    { name: "360 TRAX", href: "#360-trax" },
    { name: "Camera Monitoring", href: "#camera-monitoring" },
    { name: "Virtual Engineering", href: "#virtual-engineering" },
    { name: "Virtual Greeting | Concierge", href: "#virtual-greeting" },
    { name: "Virtual Guard Services", href: "#virtual-guard" },
    { name: "Weapons Detection", href: "#weapons-detection" },
];

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About us", href: "/about" },
    { 
        name: "Services", 
        href: "#services",
        subMenu: services
    },
    { 
        name: "Industries Serviced", 
        href: "#industries",
        subMenu: industries
    },
    { 
        name: "Technology", 
        href: "#technology",
        subMenu: technologySubMenu
    },
    { name: "Resources", href: "#resources" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    return (
        <motion.nav 
            variants={{
                visible: { y: 0 },
                hidden: { y: -150 }
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-10 left-1/2 -translate-x-1/2 z-50 bg-white border border-black/10 h-20 flex items-center rounded-sm w-[calc(100%-3rem)] md:w-[calc(100%-6rem)] lg:w-[calc(100%-10rem)] max-w-[90rem] shadow-xl"
        >
            <div className="w-full px-8 flex items-center justify-between h-full">
                {/* Logo Section */}
                <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
                    <img 
                        src="/images/logo.png" 
                        alt="360 PROTECTION" 
                        className="h-10 md:h-12 w-auto object-contain"
                    />
                </Link>

                {/* Navigation Section */}
                <div className="flex items-center h-full">
                    <div className="hidden xl:flex items-center gap-6 h-full">
                        {navLinks.map((link) => (
                            <div 
                                key={link.name} 
                                className="relative h-full flex items-center"
                                onMouseEnter={() => setHoveredLink(link.name)}
                                onMouseLeave={() => setHoveredLink(null)}
                            >
                                <Link
                                    href={link.href}
                                    className="text-[11px] font-bold text-dark-blue hover:text-primary transition-all duration-300 uppercase tracking-widest whitespace-nowrap flex items-center gap-1"
                                >
                                    {link.name}
                                    {link.subMenu && <ChevronDown size={14} className={cn("transition-transform duration-300", hoveredLink === link.name && "rotate-180")} />}
                                </Link>

                                {/* Dropdown Menu */}
                                <AnimatePresence>
                                    {link.subMenu && hoveredLink === link.name && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute top-full left-1/2 -translate-x-1/2 w-64 bg-white border border-black/10 shadow-2xl py-4 rounded-sm mt-0 overflow-hidden"
                                        >
                                            {link.subMenu.map((sub, sIdx) => (
                                                <Link
                                                    key={sIdx}
                                                    href={sub.href}
                                                    className="block px-6 py-3 text-[10px] font-bold text-dark-blue hover:text-primary hover:bg-gray-50 uppercase tracking-widest transition-all border-l-2 border-transparent hover:border-primary"
                                                >
                                                    {sub.name}
                                                </Link>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>

                    <div className="h-6 w-[1px] bg-black/10 mx-6 hidden xl:block" />

                    <Link 
                        href="#contact"
                        className="hidden md:block text-primary hover:text-red-700 transition-all duration-300 font-black uppercase tracking-widest text-[13px] whitespace-nowrap"
                    >
                        Get Started
                    </Link>

                    {/* Mobile Menu Icon */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="xl:hidden p-2 text-dark-blue hover:text-primary transition-colors"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Expanded Menu (Mobile Dropdown) */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-24 left-6 md:left-12 lg:left-20 w-[calc(100vw-3rem)] md:w-[600px] bg-white border border-black/10 rounded-sm shadow-xl p-6 md:p-10 origin-top-left pointer-events-auto max-h-[80vh] overflow-y-auto custom-scrollbar"
                    >
                        <div className="grid grid-cols-1 gap-2">
                            {navLinks.map((link) => (
                                <div key={link.name} className="flex flex-col">
                                    <Link
                                        href={link.href}
                                        className="text-sm font-bold text-dark-blue hover:text-primary transition-colors uppercase tracking-widest p-4 rounded-xl hover:bg-black/5 flex items-center justify-between group"
                                        onClick={() => !link.subMenu && setIsOpen(false)}
                                    >
                                        {link.name}
                                        <div className="w-2 h-2 rounded-full bg-primary/20 group-hover:bg-primary transition-colors" />
                                    </Link>
                                    {link.subMenu && (
                                        <div className="pl-8 flex flex-col gap-1 border-l-2 border-black/5 ml-4 mb-4">
                                            {link.subMenu.map((sub, sIdx) => (
                                                <Link
                                                    key={sIdx}
                                                    href={sub.href}
                                                    className="text-[10px] font-bold text-gray-500 hover:text-primary transition-colors uppercase tracking-widest p-3 rounded-lg hover:bg-black/5"
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    {sub.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 pt-6 border-t border-black/5 flex justify-center">
                            <Link 
                                href="#contact"
                                className="w-full md:hidden py-4 bg-primary text-white text-center rounded-xl font-bold uppercase tracking-widest hover:bg-red-700 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                Get Started
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
