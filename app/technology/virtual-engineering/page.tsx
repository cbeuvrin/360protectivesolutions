"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { 
    Box, 
    Database, 
    Glasses, 
    FlaskConical, 
    Cpu, 
    Globe, 
    TrendingDown, 
    Leaf,
    Building2,
    Settings,
    PenTool,
    CheckCircle2
} from "lucide-react";
import { useModal } from "@/context/ModalContext";

const engineeringServices = [
    {
        title: "3D Modeling & Simulations",
        description: "Detailed digital twins to analyze every aspect of your project.",
        icon: Box
    },
    {
        title: "Virtual Prototyping",
        description: "Testing designs in a virtual environment before physical implementation.",
        icon: FlaskConical
    },
    {
        title: "Augmented & Virtual Reality",
        description: "Immersive visualizations for design review and stakeholder engagement.",
        icon: Glasses
    },
    {
        title: "Building Information Modeling",
        description: "Optimized project outcomes through intelligent, data-driven modeling.",
        icon: Database
    }
];

const valueProps = [
    {
        title: "Advanced Technology",
        description: "Leveraging the latest in CAD and BIM to streamline workflows.",
        icon: Cpu
    },
    {
        title: "Global Collaboration",
        description: "Facilitating real-time communication among stakeholders worldwide.",
        icon: Globe
    },
    {
        title: "Sustainability",
        description: "Optimizing energy and material usage for eco-friendly practices.",
        icon: Leaf
    }
];

const savingsItems = [
    {
        title: "Reduced Rework",
        description: "Catching errors in the virtual phase saves millions in physical corrections."
    },
    {
        title: "Faster Completion",
        description: "Optimized workflows propel your business forward."
    },
    {
        title: "Budget Integrity",
        description: "Precision planning ensures you stay within your financial goals."
    }
];

const industrySectors = [
  { name: "Architecture & Construction", icon: Building2 },
  { name: "Manufacturing", icon: Settings },
  { name: "Engineering Firms", icon: PenTool }
];

export default function VirtualEngineeringPage() {
    const { openModal } = useModal();

    return (
        <main className="bg-white">
            <Navbar />
            
            {/* Hero Section - White Background */}
            <section className="relative pt-40 pb-20 md:pt-48 md:pb-32 bg-white overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-primary font-black  tracking-[0.4em] text-xs mb-6 inline-block">
                                Centralized Vision Powered
                            </span>
                            <h1 className="uppercase text-5xl md:text-6xl lg:text-7xl font-bold text-dark-blue tracking-tighter mb-8 leading-[0.9]">
                                Virtual <span className="text-primary italic font-black">Engineering</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-500 font-light mb-10 max-w-3xl leading-relaxed">
                                Precision and efficiency powered by centralized vision, revolutionizing every phase of your engineering and construction projects.
                            </p>
                            <button 
                                onClick={openModal}
                                className="bg-primary hover:bg-black text-white px-10 py-5 rounded-sm font-black  tracking-[0.2em] transition-all transform hover:scale-105 shadow-xl"
                            >
                                Request an Engineering Demo
                            </button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-24 bg-gray-50 overflow-hidden">
                <div className="container mx-auto px-6 md:px-12 lg:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-black text-dark-blue mb-8  leading-tight">
                                Transform Your Vision into <br />
                                <span className="text-primary italic font-black">Digital Reality</span>
                            </h2>
                            <p className="text-gray-600 text-lg mb-12 leading-relaxed">
                                At Worldwide Security Options (WSO), our advanced technology brings a new level of efficiency, accuracy, and cost-effectiveness to every phase of your project. We provide a full spectrum of virtual solutions designed to help you visualize, plan, and execute with unparalleled precision.
                            </p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {engineeringServices.map((service, i) => (
                                    <div key={i} className="flex gap-4 group">
                                        <div className="flex-shrink-0 w-12 h-12 bg-white flex items-center justify-center border border-black/5 group-hover:border-primary/30 transition-colors">
                                            <service.icon size={24} className="text-primary italic font-black" />
                                        </div>
                                        <div>
                                            <h4 className="font-black text-dark-blue  tracking-widest text-[11px] mb-2">{service.title}</h4>
                                            <p className="text-gray-500 text-xs leading-relaxed">{service.description}</p>
                                        </div>
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
                                className="aspect-square bg-dark-blue flex items-center justify-center p-20 relative overflow-hidden"
                            >
                                <Box size={200} strokeWidth={0.5} className="text-primary/20 animate-spin-slow" />
                                <div className="absolute inset-0 border-[20px] border-white/5 m-10" />
                                <div className="absolute inset-0 border border-white/10 m-20" />
                            </motion.div>
                            <div className="absolute -bottom-6 -right-6 bg-white p-10 border border-black/5 shadow-2xl">
                                <span className="text-primary font-black block text-sm  mb-2">Accuracy Rate</span>
                                <span className="text-3xl font-black text-dark-blue">99.9%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose WSO / Value Props */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 md:px-12 lg:px-20">
                    <div className="text-center mb-20">
                        <span className="text-primary font-black  tracking-[0.3em] text-sm">Strategic Partnership</span>
                        <h2 className="text-3xl md:text-5xl font-black mt-4  text-dark-blue">Why Choose WSO for Your Project?</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {valueProps.map((prop, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="text-center group"
                            >
                                <div className="w-20 h-20 bg-gray-50 mx-auto flex items-center justify-center mb-8 border border-black/5 group-hover:bg-primary transition-colors">
                            <prop.icon size={32} className="text-primary group-hover:text-white transition-colors" />
                                </div>
                                <h4 className="text-xl font-black text-dark-blue  mb-4 tracking-tighter">{prop.title}</h4>
                                <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">{prop.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Time and Cost Savings */}
            <section className="py-24 bg-dark-blue text-white overflow-hidden relative">
                <div className="container mx-auto px-6 md:px-12 lg:px-20">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl md:text-5xl font-black mb-8  leading-tight text-dark-blue">
                                Significant Time and <br />
                                <span className="text-primary italic font-black">Cost Savings</span>
                            </h2>
                            <p className="text-gray-400 text-lg mb-12 leading-relaxed">
                                By eliminating the need for expensive physical prototypes and frequent on-site visits, we streamline the entire design-to-construction process.
                            </p>
                            
                            <div className="space-y-10">
                                {savingsItems.map((item, i) => (
                                    <div key={i} className="flex gap-6">
                                        <div className="flex-shrink-0 w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center rounded-sm">
                                            <TrendingDown className="text-primary italic font-black" size={24} />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-black  mb-2 group-hover:text-primary transition-colors">{item.title}</h4>
                                            <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:w-1/2 relative">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {industrySectors.map((sector, i) => (
                                    <div key={i} className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-all group">
                                        <sector.icon size={32} className="text-primary mb-6" />
                                        <h5 className="font-black  tracking-widest text-xs">{sector.name}</h5>
                                    </div>
                                ))}
                                <div className="bg-primary p-8 flex flex-col justify-center items-center text-center">
                                    <h5 className="font-black  tracking-widest text-[10px] mb-2">Project Success</h5>
                                    <span className="text-4xl font-black">100%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-white border-y border-black/5 text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-5xl font-black text-dark-blue mb-8  max-w-4xl mx-auto">Unlock Your Potential with WSO</h2>
                    <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Optimize your outcomes. Maximize your efficiency. Let Worldwide Security Options be your trusted partner in transforming your vision into a digital reality.
                    </p>
                    <button 
                        onClick={openModal}
                        className="bg-primary hover:bg-black text-white px-12 py-6 rounded-sm font-black  tracking-[0.2em] transition-all transform hover:scale-105 shadow-xl"
                    >
                        Request an Engineering Demo
                    </button>
                    <p className="mt-8 text-gray-500 font-bold  tracking-widest text-sm italic">
                        Transforming vision into digital reality. Contact us today.
                    </p>
                </div>
            </section>

            <Footer />
        </main>
    );
}
