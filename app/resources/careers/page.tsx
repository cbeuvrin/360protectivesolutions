"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { 
    FileCheck, 
    MailCheck, 
    MessagesSquare, 
    Trophy, 
    ShieldCheck, 
    ShieldAlert, 
    Lock, 
    UserCheck,
    Target,
    Eye,
    BookOpenCheck,
    CheckCircle2,
    Briefcase,
    Zap,
    Shield
} from "lucide-react";
import { useModal } from "@/context/ModalContext";

const selectionProcess = [
    {
        title: "Submission",
        description: "Review requirements carefully and submit your application. This is your first test of attention to detail.",
        icon: FileCheck
    },
    {
        title: "Verification",
        description: "Receive confirmation via email. Our team conducts a thorough resume review and background screening.",
        icon: MailCheck
    },
    {
        title: "Interview",
        description: "Qualified candidates will be contacted for a rigorous in-person interview at our NYC/NJ facilities.",
        icon: MessagesSquare
    },
    {
        title: "Induction",
        description: "Upon success, you will be inducted into the 360 Alliance as part of our elite on-call force.",
        icon: Trophy
    }
];

const opportunities = [
    {
        title: "Force Protection Specialist (Armed)",
        status: "NOW ACCEPTING APPLICATIONS",
        available: true,
        icon: ShieldAlert
    },
    {
        title: "Protection Specialist",
        status: "Currently Unavailable",
        available: false,
        icon: Lock
    },
    {
        title: "Executive Protection",
        status: "Currently Unavailable",
        available: false,
        icon: UserCheck
    }
];

const criteria = [
    {
        title: "Absolute Discretion",
        description: "Operating in high-profile environments with total confidentiality and professionalism.",
        icon: Eye
    },
    {
        title: "Situational Awareness",
        description: "Mastery of the SAS mindset to identify threats before they manifest.",
        icon: Target
    },
    {
        title: "Professional Integrity",
        description: "Unwavering ethics and a 'client-first' protective posture at all times.",
        icon: Shield
    }
];

export default function CareersPage() {
    const { openModal } = useModal();

    return (
        <main className="bg-white">
            <Navbar />
            
            {/* Hero Section - Centered Gray Theme */}
            <section className="relative pt-40 pb-20 md:pt-48 md:pb-32 bg-gray-50 overflow-hidden">
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-primary font-black  tracking-[0.4em] text-xs mb-6 inline-block">
                                Join the Elite On-Call Force
                            </span>
                            <h1 className="uppercase text-5xl md:text-6xl lg:text-7xl font-bold text-dark-blue tracking-tighter mb-8 leading-[0.9]">
                                360 <span className="text-primary italic font-black">Alliance</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-500 font-light mb-10 max-w-3xl mx-auto leading-relaxed">
                                Seeking the most disciplined and highly trained individuals to join our professional cohort of security elite.
                            </p>
                            <button 
                                onClick={openModal}
                                className="bg-primary hover:bg-black text-white px-10 py-5 rounded-sm font-black  tracking-[0.2em] transition-all transform hover:scale-105 shadow-xl"
                            >
                                Inquire About Selection
                            </button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Selection Process Section - White Background */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 md:px-12 lg:px-20">
                    <div className="text-center mb-16">
                        <span className="text-primary font-black  tracking-[0.3em] text-sm md:text-base">The Pipeline</span>
                        <h2 className="text-3xl md:text-5xl font-black mt-4  text-dark-blue">The Selection Process: <br /><span className="text-primary italic font-black">Your First Test</span></h2>
                        <p className="text-gray-500 mt-6 max-w-2xl mx-auto italic">We observe every step of your interaction with our firm. Precision is not optional.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {selectionProcess.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="bg-gray-50 p-10 border border-black/5 flex flex-col items-center text-center group hover:bg-dark-blue transition-all duration-500"
                            >
                                <div className="text-primary mb-6 transition-transform group-hover:scale-110">
                                    <step.icon size={48} />
                                </div>
                                <span className="text-[10px] font-bold text-gray-400  tracking-[0.3em] mb-4">Step 0{i+1}</span>
                                <h4 className="text-xl font-black text-dark-blue  mb-4 tracking-tighter group-hover:text-white">{step.title}</h4>
                                <p className="text-gray-500 text-xs leading-relaxed group-hover:text-gray-400">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Current Opportunities Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 md:px-12 lg:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-black text-dark-blue mb-8  leading-tight">
                                Current <br />
                                <span className="text-primary italic font-black">Opportunities</span>
                            </h2>
                            <p className="text-gray-600 text-lg mb-12 leading-relaxed">
                                We provide elite protection for high-profile assets and individuals; therefore, we only induct those who demonstrate unparalleled tactical proficiency.
                            </p>
                            
                            <div className="space-y-6">
                                {opportunities.map((opp, i) => (
                                    <div key={i} className={`p-8 border ${opp.available ? 'border-primary/30 bg-primary/5' : 'border-black/5 bg-gray-50 opacity-60'} flex justify-between items-center group transition-all`}>
                                        <div className="flex gap-4 items-center">
                                            <opp.icon size={24} className={opp.available ? 'text-primary' : 'text-gray-400'} />
                                            <div>
                                                <h4 className="font-black text-dark-blue  tracking-tight">{opp.title}</h4>
                                                <span className={`text-[10px] font-bold  tracking-widest ${opp.available ? 'text-primary' : 'text-gray-500'}`}>{opp.status}</span>
                                            </div>
                                        </div>
                                        {opp.available && (
                                            <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-sm animate-pulse">
                                                <Zap size={20} className="text-white fill-white" />
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                                className="bg-gray-100 aspect-square rounded-sm overflow-hidden p-16 flex flex-col justify-center items-center text-center border border-black/5"
                            >
                                <ShieldCheck size={120} className="text-dark-blue mb-8" />
                                <h3 className="text-3xl font-black text-dark-blue  tracking-tighter mb-4 italic">Unparalleled <br /> Proficiency</h3>
                                <p className="text-gray-500 text-sm max-w-xs mx-auto">Commitment to excellence and tactical mastery are the standards of the 360 Alliance.</p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Criteria for Excellence Section - Dark Theme */}
            <section className="py-24 bg-dark-blue text-white overflow-hidden relative">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center mb-16 relative z-10">
                    <span className="text-primary font-black  tracking-[0.4em] text-sm">Standards of the Force</span>
                    <h2 className="text-3xl md:text-5xl font-black mt-4  leading-tight">Our Criteria for <br /><span className="text-primary italic font-black">Excellence</span></h2>
                    <p className="text-gray-400 mt-8 max-w-2xl mx-auto font-light">
                        We prioritize candidates with backgrounds in elite military units, law enforcement, and specialized high-threat security environments.
                    </p>
                </div>

                <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12">
                    {criteria.map((item, i) => (
                        <div key={i} className="bg-white/5 border border-white/10 p-12 hover:bg-white/10 transition-colors text-center group">
                            <div className="w-16 h-16 bg-primary/10 mx-auto flex items-center justify-center mb-8 border border-white/5 group-hover:bg-primary transition-colors">
                                <item.icon size={32} className="text-primary group-hover:text-white transition-colors" />
                            </div>
                            <h4 className="text-xl font-black  mb-4 tracking-tighter">{item.title}</h4>
                            <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Ready to Apply Section */}
            <section className="py-24 bg-white text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-5xl font-black text-dark-blue mb-8  max-w-4xl mx-auto leading-tight">
                        Are You Ready to <br />
                        <span className="text-primary italic font-black">Apply?</span>
                    </h2>
                    <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
                        If you believe you meet our standards and are ready to represent the 360 Alliance, review the full requirements and begin the instructions.
                    </p>
                    <button 
                        onClick={openModal}
                        className="bg-primary hover:bg-black text-white px-12 py-6 rounded-sm font-black  tracking-[0.2em] transition-all transform hover:scale-105 shadow-xl"
                    >
                        Ready to Apply
                    </button>
                    <p className="mt-8 text-gray-500 font-bold  tracking-widest text-sm italic">
                        The ultimate first impression. Representative of the Elite.
                    </p>
                </div>
            </section>

            <Footer />
        </main>
    );
}
