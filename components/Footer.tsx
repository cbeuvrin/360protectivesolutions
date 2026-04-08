"use client";

import Link from "next/link";
import { Facebook, Linkedin, Twitter, Instagram } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-[#222334] text-white py-12 border-t border-white/10">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 text-center md:text-left">
                    {/* Brand / About */}
                    <div className="flex flex-col items-center md:items-start">
                        <Link href="/" className="mb-8 inline-block group">
                            <div className="bg-white p-2 rounded-full flex items-center justify-center w-36 h-36 hover:scale-105 transition-transform duration-300 shadow-2xl overflow-hidden">
                                <img 
                                    src="/images/logo.png" 
                                    alt="360 PROTECTION" 
                                    className="h-[85%] w-[85%] object-contain"
                                />
                            </div>
                        </Link>
                        <div className="flex space-x-4 mb-4 md:mb-0 justify-center md:justify-start">
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Linkedin size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Instagram size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                            <li><Link href="#about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="#services" className="hover:text-primary transition-colors">Services</Link></li>
                            <li><Link href="#training" className="hover:text-primary transition-colors">Training</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors cursor-pointer">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Services</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link href="#" className="hover:text-primary transition-colors">Executive Protection</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Residential Security</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Event Security</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Consulting</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Investigation</Link></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Legal</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Licenses</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 text-center md:text-left">
                    <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} 360 Protective Solutions. <br className="md:hidden" /> All rights reserved.</p>
                    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
                        <span>NY License #11000123456</span>
                        <span className="hidden md:block">|</span>
                        <span>Design by Antigravity</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
