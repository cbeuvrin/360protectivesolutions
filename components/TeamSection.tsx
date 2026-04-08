"use client";

import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

interface TeamMember {
    name: string;
    role: string;
    bio: string;
    image: string;
    linkedin: string;
}

const team: TeamMember[] = [
    {
        name: "Stephen DanzLopez",
        role: "Chief Operations Officer & Director of Cyber Security",
        bio: "As an Information Security and Risk professional with over 10 year of experience, working within both private and public sectors in various roles within technology, to include the Department of Homeland Security, American Express, and Citibank. Stephen has served for 4 years as an Active-Duty U.S. Marine infantryman with additional training in Visit Board Search and Seizure (VBSS) and Combat Hunter. This special training allows for a unique perspective and understanding for the needs and demands within the intelligence and protection sector. Operating in globally sensitive locations such as Jordan and Afghanistan has added to Stephen's already proven skill set in situational awareness and behavior-patterning analysis. His education background consists of a Master of Science in Cyber Security from the Fordham University Graduate School and a Bachelor of Science in Networking and Communication Management from DeVry University. Stephen served as the Chief Information Security Officer and Cyber Security Director for 360 Protective Solutions. In April 2022, he was appointed as the Chief Operations Officer.",
        image: "/images/team/stephen.png",
        linkedin: "https://www.linkedin.com/in/stephen-danzlopez/"
    },
    {
        name: "Michael DanzLopez",
        role: "Chief Financial Officer & Director of Fire Prevention",
        bio: "Michael is an active first-responder for fire services and has the experience in accessing safety protocols for buildings, other infrastructures while implementing proper emergency procedure. Michael is a U.S Marine veteran with dynamic experiences in personal and route safety for high-risk individuals abroad. Some of the responsibilities included but are not limited to: route planning, detecting, deterring while maintaining proactive to threats with the correct level of action. Attained cultural empathy and built relationships from training and operating with foreign military groups. Michael is certified in Self-Defense, Non-Lethal Tactics, Tactical Casualty and Care, Surveillance Detection, and Combat Hunter Program (Situational Awareness). Performed missions in various areas of the Middle East to include, Jordan, Pakistan, & Afghanistan. Operating in the Middle-Eastern region, Michael has acquired the proven experience in situational awareness and the ability to operate in unconventional austere environments. Michael has a Master of Science in Accounting and a B.S in Business Marketing from St. John's University. Michael was appointed Chief Financial Officer and Fire Prevention Director for 360 Protective Solutions in April 2022.",
        image: "/images/team/michael.png",
        linkedin: ""
    },
    {
        name: "Nelson Seda",
        role: "National Sales Director",
        bio: "Nelson Seda began working as a senior executive for WSO Worldwide Security Options, N.A and 360 Protective Solutions in November 2024. Nelson is a seasoned technology executive with over 28 years of expertise spanning Electronic Security, Telecommunications, and Finance. As a forward-thinking leader at Eagle Eye Networks, he drives innovation in the Video Management System (VMS) space by leveraging cutting-edge technologies including cloud infrastructure, mobility solutions, and artificial intelligence. His strategic approach to business transformation focuses on developing robust disaster preparedness protocols and implementing tailored security solutions that optimize operations for clients worldwide. Under his leadership, Eagle Eye Networks has emerged as a global leader in the VMS industry, distinguished by its unwavering commitment to customer-centric service and operational excellence. Based in New Jersey, Nelson balances his professional pursuits with family life. He shares his home with his wife Brenda, his son Brandon (an emerging artist), and their dog Tiberius. His daughter Savannah is currently pursuing a degree in Event Planning and Management at Johnson & Wales University.",
        image: "/images/team/nelson-seda.png",
        linkedin: ""
    }
];

export function TeamSection() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-primary font-bold uppercase tracking-widest text-xs"
                    >
                        Success through unity
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-dark-blue mt-2 mb-4"
                    >
                        Meet our team
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-xl text-gray-500 font-light italic"
                    >
                        "No individual can win a game by himself."
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {team.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col h-full border border-gray-100 group"
                        >
                            <div className="relative aspect-square overflow-hidden">
                                <img 
                                    src={member.image} 
                                    alt={member.name} 
                                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                            
                            <div className="p-8 flex flex-col flex-grow">
                                <span className="text-primary font-bold uppercase tracking-[0.2em] text-[10px] mb-2">
                                    {member.role}
                                </span>
                                <h3 className="text-2xl font-bold text-dark-blue mb-4">
                                    {member.name}
                                </h3>
                                <div className="text-gray-600 font-light leading-relaxed text-sm h-48 overflow-y-auto mb-6 pr-4 custom-scrollbar">
                                    {member.bio}
                                </div>
                                
                                {member.linkedin && (
                                    <div className="mt-auto">
                                        <a 
                                            href={member.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-[#0077B5] font-bold text-sm hover:underline"
                                        >
                                            <Linkedin size={18} fill="currentColor" />
                                            <span>LinkedIn Profile</span>
                                        </a>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
