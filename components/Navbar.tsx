"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Plus, Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { useModal } from "@/context/ModalContext";

const services = [
    { name: "Executive Protection & Security Drivers", href: "/services/executive-protection" },
    { name: "Federal Contracting & Government Services", href: "/federal-contracting" },
    { name: "Force Protection Specialists", href: "/services/force-protection" },
    { name: "Protection Specialists", href: "/services/protection-specialist" },
    { name: "Anti-Piracy Film Surveillance", href: "/services/anti-piracy" },
];

const industries = [
    { name: "Commercial Security & Concierge", href: "/industries/commercial-security" },
    { name: "Construction Site Security", href: "/industries/construction-security" },
    { name: "Event Security", href: "/industries/event-security" },
    { name: "Financial Institution Security", href: "/industries/financial-security" },
    { name: "Hotel Security", href: "/industries/hotel-security" },
    { name: "Port & Maritime Security", href: "/industries/port-maritime-security" },
    { name: "Residential Security & Private Estates", href: "/industries/residential-security" },
    { name: "Warehouse & Logistics Security", href: "/industries/warehouse-security" },
    { name: "Request a Facility Assessment", href: "/contact" },
];

const technologySubMenu = [
    { name: "360 TRAX", href: "/technology/360-trax" },
    { name: "Camera Monitoring", href: "/technology/camera-monitoring" },
    { name: "Virtual Engineering", href: "/technology/virtual-engineering" },
    { name: "Virtual Greeting | Concierge", href: "/technology/virtual-greeting" },
    { name: "Virtual Guard Services", href: "/technology/virtual-guard" },
    { name: "Weapons Detection", href: "/technology/weapons-detection" },
];

const resourcesSubMenu = [
    { name: "Careers: 360 Alliance", href: "/resources/careers" },
    { name: "Media Center", href: "/resources/media-center" },
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
    { 
        name: "Resources", 
        href: "#resources",
        subMenu: resourcesSubMenu
    },
    { name: "Blog", href: "/blog" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);
    const { openModal } = useModal();
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
                visible: { y: 0, opacity: 1 },
                hidden: { y: -200, opacity: 0 }
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-4 md:top-8 left-1/2 -translate-x-1/2 z-50 bg-white border border-black/10 h-16 md:h-20 flex items-center rounded-sm w-[calc(100%-2rem)] md:w-[calc(100%-6rem)] lg:w-[calc(100%-10rem)] max-w-[90rem] shadow-2xl px-4 md:px-8"
        >
            <div className="w-full flex items-center justify-between h-full">
                {/* Logo Section */}
                <Link href="/" className="flex items-center hover:opacity-80 transition-opacity flex-shrink-0 min-w-[200px] 2xl:min-w-[250px]">
                    <img 
                        src="/images/wso32.png" 
                        alt="WORLDWIDE SECURITY OPTIONS" 
                        className="h-10 md:h-14 w-auto object-contain"
                    />
                </Link>

                {/* Navigation Section */}
                <div className="flex items-center h-full">
                    <div className="hidden xl:flex items-center gap-8 2xl:gap-12 h-full">
                        {navLinks.map((link) => (
                            <div 
                                key={link.name} 
                                className="relative h-full flex items-center"
                                onMouseEnter={() => setHoveredLink(link.name)}
                                onMouseLeave={() => setHoveredLink(null)}
                            >
                                <Link
                                    href={link.href}
                                    className="text-[11px] font-bold text-dark-blue hover:text-primary transition-all duration-300 uppercase tracking-[0.1em] 2xl:tracking-[0.2em] whitespace-nowrap flex items-center gap-1.5"
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
                                                    className={cn(
                                                        "block px-6 py-3 text-[10px] font-semibold uppercase tracking-widest transition-all border-l-2 border-transparent",
                                                        sub.name.includes("FACILITY ASSESSMENT") 
                                                            ? "text-primary hover:bg-primary/5 border-l-primary" 
                                                            : "text-dark-blue hover:text-primary hover:bg-gray-50 hover:border-primary"
                                                    )}
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

                    <div className="h-6 w-[1px] bg-black/10 mx-4 2xl:mx-8 hidden xl:block" />

                    <button 
                        onClick={openModal}
                        className="hidden md:block text-primary hover:text-red-700 transition-all duration-300 font-bold tracking-[0.1em] 2xl:tracking-[0.2em] text-[12px] 2xl:text-[13px] whitespace-nowrap cursor-pointer"
                    >
                        Get Started
                    </button>

                    {/* Mobile Menu Icon */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="xl:hidden p-2 text-dark-blue hover:text-primary transition-colors ml-4"
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
                        className="absolute top-full left-0 mt-4 w-full bg-white border border-black/10 rounded-sm shadow-2xl p-6 md:p-10 origin-top overflow-y-auto custom-scrollbar max-h-[80vh]"
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
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
