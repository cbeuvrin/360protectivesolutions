"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { 
    Tv, 
    ExternalLink, 
    Mic, 
    Newspaper, 
    Play, 
    Quote, 
    ShieldAlert, 
    Award,
    Target,
    Zap,
    MapPin,
    Calendar,
    ArrowRight
} from "lucide-react";
import { useModal } from "@/context/ModalContext";

const mediaAppearances = [
    {
        title: "Dos Oficiales Agredidos por Migrantes",
        outlet: "Univision",
        description: "Nelson Vergara provides tactical analysis on the recent attacks against NYPD officers.",
        link: "https://www.univision.com/shows/noticiero-univision/dos-oficiales-son-agredidos-por-migrantes-recien-llegados-a-nueva-york-la-golpiza-quedo-captada-en-video-video?fbclid=IwAR2DC6BX2wlHNEMhK4HPzY9HEf9FdrWUGfplC7p_GsPCnks4SCoj68I3Fqc",
        type: "Interview"
    },
    {
        title: "Active Shooter Training for Adults",
        outlet: "On New Jersey",
        description: "Critical importance of A.L.I.V.E. training for businesses and civilians.",
        link: "https://www.onnj.com/videos/on-new-jersey-active-shooter-training-for-adults-with-nelson-vergara/?fbclid=IwAR2DC6BX2wlHNEMhK4HPzY9HEf9FdrWUGfplC7p_GsPCnks4SCoj68I3Fqc",
        type: "Training"
    },
    {
        title: "Terror en el Tren: Violencia en el Metro",
        outlet: "Telemundo 47",
        description: "Expert analysis on the rise of transit-related incidents and subway safety.",
        link: "https://www.telemundo47.com/video/videos/terror-en-el-tren-una-mirada-al-aumento-de-la-violencia-en-el-metro-de-nyc/2335339/",
        type: "Report"
    },
    {
        title: "Alerta por Ataques en Pandillas en NYC",
        outlet: "Telemundo 47",
        description: "Tactical breakdown of gang-related violence trends in the city.",
        link: "https://www.telemundo47.com/video/videos/alerta-por-ataques-en-pandillas-en-la-ciudad-de-nueva-york/2332865/",
        type: "Analysis"
    },
    {
        title: "Violencia en la ciudad de Nueva York",
        outlet: "Telemundo 47",
        description: "Security expert Nelson Vergara discusses community safety and response.",
        link: "https://www.telemundo47.com/video/noticias/local/experto-en-seguridad-habla-sobre-la-violencia-en-la-ciudad-de-nueva-york/2310138/",
        type: "Interview"
    },
    {
        title: "Active Shooter Training After Gunfight",
        outlet: "BK Reader",
        description: "East New York restaurant gives employees tactical tools for survival.",
        link: "https://www.bkreader.com/featured-news/east-new-york-restaurant-gives-employees-active-shooter-training-after-gunfight-incident-6549652",
        type: "Article"
    }
];

const legacyItems = [
    {
        title: "Hero Cop Speaks Out on Wild Shootout",
        outlet: "ABC7 News",
        description: "Exclusive interview detailing the courage and tactics used during high-risk NYPD operations.",
        link: "https://abc7ny.com/post/exclusive-hero-cop-speaks-out-about-wild-shootout-video/69315/",
        icon: Award
    },
    {
        title: "NYPD Officer Wounded in Bronx Shooting",
        outlet: "Daily Mail",
        description: "The remarkable story of survival and duty following a tactical engagement in the Bronx.",
        link: "https://www.dailymail.co.uk/news/article-2164137/NYPD-oficer-Nelson-Vergara-wounded-Bronx-shooting-firing-suspect-handcuffing-another.html",
        icon: ShieldAlert
    },
    {
        title: "Off-Duty Officer Expected to Survive",
        outlet: "CBS New York",
        description: "Coverage of the bravery and service to the City of New York following an off-duty shootout.",
        link: "https://www.cbsnews.com/newyork/news/off-duty-police-officer-shot-in-early-morning-bronx-shootout-is-expected-to-survive/",
        icon: Zap
    }
];

export default function MediaCenterPage() {
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
                                Expert Security Analysis
                            </span>
                            <h1 className="uppercase font-bold text-dark-blue tracking-tighter mb-8 leading-[0.9] text-fluid-h1">
                                Media <span className="text-primary italic font-black">Center</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-500 font-light mb-10 max-w-3xl mx-auto leading-relaxed">
                                Authority in Action. Worldwide Security Options is a leading voice in National Security and Public Safety across NYC & New Jersey.
                            </p>
                            <div className="flex flex-col items-center gap-8">
                                <button 
                                    onClick={openModal}
                                    className="bg-primary hover:bg-black text-white px-10 py-5 rounded-sm font-black  tracking-[0.2em] transition-all transform hover:scale-105 shadow-xl"
                                >
                                    Request an Interview
                                </button>
                                <div className="flex items-center gap-6 px-4">
                                    <span className="text-[10px] font-bold text-gray-400  tracking-widest">Seen On:</span>
                                    <div className="flex flex-wrap justify-center gap-6 opacity-40">
                                        <span className="font-black text-dark-blue text-xs  tracking-tighter">Univision</span>
                                        <span className="font-black text-dark-blue text-xs  tracking-tighter">Telemundo</span>
                                        <span className="font-black text-dark-blue text-xs  tracking-tighter">Bloomberg</span>
                                        <span className="font-black text-dark-blue text-xs  tracking-tighter">CBS</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Featured Media Section - White Background */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 md:px-12 lg:px-20">
                    <div className="text-center mb-16">
                        <span className="text-primary font-black  tracking-[0.3em] text-sm md:text-base">In the Headlines</span>
                        <h2 className="text-3xl md:text-5xl font-black mt-4  text-dark-blue">Featured Media <br /><span className="text-primary italic font-black">Appearances</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {mediaAppearances.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="bg-gray-50 border border-black/5 hover:shadow-2xl transition-all group overflow-hidden"
                            >
                                <div className="p-8">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="bg-dark-blue px-3 py-1 rounded-sm">
                                            <span className="text-[9px] font-black text-white  tracking-widest">{item.type}</span>
                                        </div>
                                        <div className="text-primary italic font-black">
                                            <Mic size={20} />
                                        </div>
                                    </div>
                                    <span className="block text-[10px] font-bold text-primary  tracking-[0.3em] mb-2">{item.outlet}</span>
                                    <h4 className="text-xl font-black text-dark-blue  mb-4 tracking-tighter leading-tight group-hover:text-primary transition-colors">{item.title}</h4>
                                    <p className="text-gray-500 text-xs leading-relaxed mb-8">{item.description}</p>
                                    <a 
                                        href={item.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-dark-blue font-black  tracking-widest text-[10px] border-b-2 border-primary/20 hover:border-primary transition-all pb-1"
                                    >
                                        Watch / Read Now <ExternalLink size={12} />
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Impact Quote Section */}
            <section className="py-24 bg-dark-blue text-white overflow-hidden relative">
                <div className="container mx-auto px-6 text-center relative z-10">
                    <Quote size={64} className="text-primary mx-auto mb-10 opacity-50" />
                    <h2 className="text-2xl md:text-4xl font-black  italic max-w-4xl mx-auto leading-tight mb-8">
                        "We need to give businesses a sense of security and the tools to protect themselves."
                    </h2>
                    <div className="flex flex-col items-center">
                        <span className="text-primary font-black  tracking-widest text-sm mb-2">Nelson Vergara</span>
                        <span className="text-white/40 font-bold  tracking-[0.3em] text-[10px]">Founder & CEO, WSO</span>
                    </div>
                </div>
                <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] select-none pointer-events-none">
                    <span className="text-[20vw] font-black  tracking-tighter absolute -bottom-20 -right-20">IMPACT</span>
                </div>
            </section>

            {/* Legacy Section */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-6 md:px-12 lg:px-20">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="lg:w-1/2">
                            <span className="text-primary font-black  tracking-[0.3em] text-sm">Forged in Action</span>
                            <h2 className="text-3xl md:text-5xl font-black mt-4 mb-8  text-dark-blue leading-tight">A Legacy of Courage: <br /><span className="text-primary italic font-black">The WSO Story</span></h2>
                            <p className="text-gray-600 text-lg mb-12 leading-relaxed">
                                The leadership at Worldwide Security Options is forged in real-world experience. Our founder’s commitment to protection is personal and proven.
                            </p>
                            
                            <div className="grid grid-cols-1 gap-6">
                                {legacyItems.map((item, i) => (
                                    <a 
                                        key={i} 
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex gap-6 p-6 border border-black/5 hover:border-primary/30 transition-all items-center group"
                                    >
                                        <div className="w-12 h-12 bg-gray-50 flex items-center justify-center rounded-sm group-hover:bg-primary transition-colors">
                                            <item.icon size={24} className="text-primary group-hover:text-white" />
                                        </div>
                                        <div>
                                            <h4 className="font-black text-dark-blue  tracking-tight text-sm group-hover:text-primary transition-colors">{item.title}</h4>
                                            <span className="text-[10px] font-bold text-gray-400  tracking-widest">{item.outlet}</span>
                                        </div>
                                        <ArrowRight size={16} className="ml-auto text-primary opacity-0 group-hover:opacity-100 transition-all" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="lg:w-1/2 relative">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                                className="bg-dark-blue p-16 rounded-sm relative overflow-hidden text-white"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 -m-16 rounded-full" />
                                <h3 className="text-3xl md:text-5xl font-black  leading-none mb-10 italic">A Cop's <br /> Courage <br /> <span className="text-primary italic font-black">Under Fire</span></h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                                    Off-duty Officer Nelson Vergara survived a shootout in the Bronx, taking two bullets yet successfully apprehending both suspects. He was officially recognized by NYC leadership for his bravery.
                                </p>
                                <div className="flex items-center gap-4 border-t border-white/10 pt-8 mt-8">
                                    <Award size={32} className="text-primary italic font-black" />
                                    <div>
                                        <span className="block font-black  text-xs tracking-widest">Mayoral Recognition</span>
                                        <span className="block text-[10px] text-gray-500 font-bold  tracking-widest">NYPD & U.S. Marines Veteran</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Media Inquiries Section */}
            <section className="py-24 bg-gray-50 border-y border-black/5 text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-5xl font-black text-dark-blue mb-8  max-w-4xl mx-auto leading-tight">
                        Media <br />
                        <span className="text-primary italic font-black">Inquiries</span>
                    </h2>
                    <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Looking for expert commentary on security, terrorism, or situational awareness? Our leadership team is available for technical analysis and interviews.
                    </p>
                    <button 
                        onClick={openModal}
                        className="bg-primary hover:bg-black text-white px-12 py-6 rounded-sm font-black  tracking-[0.2em] transition-all transform hover:scale-105 shadow-xl"
                    >
                        Request Media Kit
                    </button>
                    <p className="mt-8 text-gray-500 font-bold  tracking-widest text-sm italic">
                        Technical analysis. Real-world insights. Every interview counts.
                    </p>
                </div>
            </section>

            <Footer />
        </main>
    );
}
