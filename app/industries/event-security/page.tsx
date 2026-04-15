"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Users, Shield, Ticket, Car, Radio, Map, Activity, Bell, Target, Star, Trophy, Music } from "lucide-react";
import { useModal } from "@/context/ModalContext";

const venuesServed = [
    { title: "Professional Sports", icon: Trophy, description: "Stadiums, Arenas, and Racetracks." },
    { title: "Collegiate Athletics", icon: Target, description: "University sports and campus events." },
    { title: "Live Entertainment", icon: Music, description: "Concert venues, outdoor festivals, and airshows." },
    { title: "Community Events", icon: Star, description: "Fundraisers, trail rides, and local festivals." },
    { title: "Executive Gatherings", icon: Users, description: "Private VIP events and high-profile media summits." }
];

const specializedEventServices = [
    {
        title: "Crowd Control & Access Management",
        description: "Strategic placement to manage large-scale attendee flow and secure entry points.",
        icon: Users
    },
    {
        title: "Executive & VIP Protection",
        description: "Specialized close protection for athletes, performers, and high-profile individuals.",
        icon: Shield
    },
    {
        title: "Facility & Perimeter Patrols",
        description: "Continuous monitoring of the venue to ensure asset and personnel integrity.",
        icon: Map
    },
    {
        title: "Command Center Operations",
        description: "Real-time monitoring and electronic security integration for total situational awareness.",
        icon: Radio
    },
    {
        title: "Ticketing & Guest Assistance",
        description: "Professional, courtesy-focused staff to manage ticketing and visitor needs.",
        icon: Ticket
    },
    {
        title: "Parking & Logistics Security",
        description: "Monitoring and enforcement for secure transit and parking areas.",
        icon: Car
    }
];

const emergencyPreparedness = [
    { title: "Active Shooter Preparedness", description: "Specialized training to identify and neutralize high-level threats." },
    { title: "Emergency Response Planning", description: "Strategic coordination for medical emergencies and evacuations." },
    { title: "Medical Readiness", description: "Personnel certified in CPR, First Aid, and AED response." },
    { title: "Electronic Security Integration", description: "Harmonizing physical presence with advanced surveillance technology." }
];

export default function EventSecurityPage() {
    const { openModal } = useModal();

    return (
        <main className="bg-white">
            <Navbar />
            
            {/* Hero Section */}
            <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute z-0 w-auto min-w-full min-h-full max-w-none brightness-[0.4]"
                >
                    <source src="/videos/event.mp4" type="video/mp4" />
                </video>
                
                <div className="container relative z-10 mx-auto px-6 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <span className="bg-primary text-white font-black  tracking-[0.4em] text-[10px] py-2 px-6 mb-8 inline-block">
                            Venue Management
                        </span>
                        <h1 className="uppercase text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-8 max-w-6xl mx-auto leading-[0.9] px-6">
                            Event Security & <br className="hidden md:block" />
                            <span className="text-primary italic font-black">Venue Management</span>
                        </h1>
                        <p className="text-sm md:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed mb-10 px-8">
                            Securing High-Profile Entertainment and Sporting Events
                        </p>
                        <button 
                            onClick={openModal}
                            className="bg-primary hover:bg-black text-white px-10 py-5 rounded-sm font-black  tracking-[0.2em] transition-all transform hover:scale-105 shadow-2xl border border-primary/20"
                        >
                            Request an Event Security Proposal
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 md:px-12 lg:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl md:text-5xl font-black text-dark-blue mb-8  leading-tight">
                                Comprehensive Protection for <br />
                                <span className="text-primary italic font-light">Multipurpose Venues</span>
                            </h2>
                            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                                <p>
                                    The large volume of attendees, combined with the high visibility of VIP guests, coaching staffs, and sports media, creates unique challenges for stadiums and arenas.
                                </p>
                                <p>
                                    Worldwide Security Options (WSO) brings advanced security techniques to ensure your venue is prepared, safe, and maintains the appropriate atmosphere to maximize your return on investment.
                                </p>
                                <p className="font-bold text-dark-blue border-l-4 border-primary pl-6 py-2 bg-gray-50">
                                    Our team provides security during setup, rehearsals, and breakdown, ensuring that high-value equipment and personnel are protected 24/7.
                                </p>
                            </div>
                        </motion.div>
                        
                        <div className="grid grid-cols-1 gap-4">
                            {venuesServed.map((venue, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="flex items-center gap-6 p-6 bg-gray-50 rounded-sm border border-black/5 hover:border-primary/20 transition-all group"
                                >
                                    <venue.icon className="text-primary group-hover:scale-110 transition-transform" size={24} />
                                    <div>
                                        <h4 className="text-sm font-black text-dark-blue  tracking-widest mb-1">{venue.title}</h4>
                                        <p className="text-xs text-gray-500  tracking-tighter">{venue.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Specialized Services Grid */}
            <section className="py-24 bg-dark-blue text-white overflow-hidden relative">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-primary font-black  tracking-[0.3em] text-sm">Tactical Support</span>
                        <h2 className="text-3xl md:text-5xl font-black mt-4 ">Specialized Event Security Services</h2>
                        <div className="w-20 h-1.5 bg-primary mx-auto mt-8" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {specializedEventServices.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white/5 border border-white/10 p-10 hover:bg-white/10 transition-all group relative"
                            >
                                <service.icon className="text-primary mb-8 group-hover:rotate-12 transition-transform" size={40} />
                                <h4 className="text-xl font-black  mb-4 tracking-tighter">{service.title}</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                                <div className="absolute top-4 right-4 text-white/5 font-black text-4xl italic select-none">0{index + 1}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
                {/* Background grid accent */}
                <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            </section>

            {/* Emergency Preparedness Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 md:px-12 lg:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="relative">
                                <img 
                                    src="/images/hero-image.jpg" 
                                    alt="Emergency Preparedness" 
                                    className="w-full h-auto grayscale rounded-sm shadow-2xl"
                                    onError={(e) => { e.currentTarget.style.display = 'none' }}
                                />
                                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
                            </div>
                        </motion.div>
                        
                        <div>
                            <h2 className="text-3xl md:text-5xl font-black text-dark-blue mb-8  leading-tight">Emergency Preparedness & Tactical Training</h2>
                            <p className="text-gray-600 text-lg mb-12">
                                We go beyond standard guard services by integrating advanced safety protocols into every event plan:
                            </p>
                            
                            <div className="grid grid-cols-1 gap-8">
                                {emergencyPreparedness.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: i * 0.2 }}
                                        className="flex gap-6 border-b border-gray-100 pb-8 last:border-0"
                                    >
                                        <div className="flex-shrink-0 w-12 h-12 bg-primary text-white flex items-center justify-center font-black rounded-full">
                                            {i + 1}
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-black text-dark-blue  mb-2">{item.title}</h4>
                                            <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-gray-50 border-t border-black/5">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-5xl font-black text-dark-blue mb-8  max-w-4xl mx-auto tracking-tighter">Experience the Gold Standard in Event Safety</h2>
                    <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto font-light">
                        At Worldwide Security Options, we understand that a safe event is a successful event. Our dedicated professionals are trained to handle the complexities of New York and New Jersey’s most prominent venues with precision and discretion.
                    </p>
                    <div className="space-y-8">
                        <button 
                            onClick={openModal}
                            className="bg-primary hover:bg-red-700 text-white px-12 py-6 rounded-sm font-black  tracking-[0.2em] transition-all transform hover:scale-105 shadow-xl"
                        >
                            Request an Event Security Proposal
                        </button>
                        <p className="text-gray-400 font-bold  tracking-[0.3em] text-sm">
                            Ensure your event's success. Partner with the experts.
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
