"use client";

import { Mail, MapPin, Phone } from "lucide-react";

export function ContactSection() {
    return (
        <section id="contact" className="relative py-20 bg-dark-blue text-white overflow-hidden">
            {/* Decorative background elements could go here */}

            <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
                            Stay Connected
                        </h2>
                        <p className="text-lg text-gray-300 mb-10 leading-relaxed">
                            Subscribe to our newsletter for the latest security insights, company news, and industry updates.
                        </p>

                        <form className="flex flex-col sm:flex-row gap-4 mb-12">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="flex-1 px-6 py-4 bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:border-primary transition-colors rounded-sm"
                            />
                            <button
                                type="button"
                                className="px-8 py-4 bg-primary text-white font-bold uppercase tracking-widest hover:bg-red-700 transition-colors rounded-sm"
                            >
                                Subscribe
                            </button>
                        </form>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-gray-400">
                            <div className="flex items-start space-x-4">
                                <MapPin className="text-primary mt-1" size={20} />
                                <p>123 Security Avenue,<br />New York, NY 10001</p>
                            </div>
                            <div className="flex items-start space-x-4">
                                <Phone className="text-primary mt-1" size={20} />
                                <p>+1 (555) 123-4567</p>
                            </div>
                            <div className="flex items-start space-x-4">
                                <Mail className="text-primary mt-1" size={20} />
                                <p>info@360protectivesolutions.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white/5 p-8 md:p-12 border border-white/10 rounded-sm">
                        <h3 className="text-2xl font-bold mb-6">Request a Consultation</h3>
                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                <input type="text" className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white focus:border-primary focus:outline-none transition-colors" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                <input type="email" className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white focus:border-primary focus:outline-none transition-colors" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                <textarea rows={4} className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white focus:border-primary focus:outline-none transition-colors"></textarea>
                            </div>
                            <button className="w-full py-4 bg-white text-dark-blue font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
