"use client";

import { motion } from "framer-motion";
import { Eye, Calendar } from "lucide-react";
import Link from "next/link";
import { WPPost, formatPostDate } from "@/lib/wordpress";

interface MostReadSectionProps {
    posts: WPPost[];
}

export const MostReadSection = ({ posts }: MostReadSectionProps) => {
    if (!posts || posts.length === 0) return null;

    // Use posts from index 4 onwards for this section
    const mainPosts = posts.slice(4, 8);
    const sidePosts = posts.slice(8, 13);

    const getFeaturedImage = (post: WPPost) => {
        return post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/images/blog-placeholder.png";
    };

    const getCategory = (post: WPPost) => {
        return post._embedded?.["wp:term"]?.[0]?.[0]?.name || "Uncategorized";
    };

    return (
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
            <div className="max-w-[1400px] mx-auto">
                <div className="mb-12">
                    <h2 className="text-3xl font-black text-dark-blue  tracking-tighter italic">Most Read</h2>
                    <div className="w-16 h-1 bg-primary mt-2" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Left & Center: Grid of Cards (2 Columns) */}
                    <div className="lg:col-span-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {mainPosts.map((post, index) => (
                                <motion.div 
                                    key={post.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="group overflow-hidden bg-white shadow-sm border border-gray-100 rounded-sm hover:shadow-xl transition-all"
                                >
                                    <div className="relative aspect-video overflow-hidden">
                                        <img src={getFeaturedImage(post)} alt={post.title.rendered} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                    <div className="p-8">
                                        <span className="inline-block px-3 py-1 bg-gray-50 text-blue-600 text-[10px] font-bold border border-blue-600/30 mb-4 rounded-sm">
                                            {getCategory(post)}
                                        </span>
                                        <h3 className="text-xl font-bold text-dark-blue tracking-tighter leading-tight mb-6 group-hover:text-primary transition-colors" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                                        <div className="flex gap-4 opacity-50 mt-auto">
                                            <div className="flex items-center gap-2 text-[10px] font-bold  tracking-widest text-dark-blue">
                                                <Calendar size={12} className="text-primary" /> {formatPostDate(post.date)}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Most Read Sidebar List */}
                    <div className="lg:col-span-4 space-y-8">
                        {sidePosts.map((post, index) => (
                            <motion.div 
                                key={post.id}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex gap-6 group cursor-pointer border-b border-gray-100 pb-6 last:border-0"
                            >
                                <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-sm bg-gray-100">
                                    <img src={getFeaturedImage(post)} alt={post.title.rendered} className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-[11px] font-bold text-dark-blue tracking-tight mb-3 leading-snug group-hover:text-primary transition-colors" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                                    <div className="flex gap-4 opacity-40">
                                        <div className="flex items-center gap-1.5 text-[9px] font-bold  tracking-widest text-dark-blue">
                                            <Calendar size={10} className="text-primary font-black" /> {formatPostDate(post.date)}
                                        </div>
                                    </div>
                                    <span className="inline-block mt-3 px-2 py-0.5 bg-gray-50 text-blue-600 text-[8px] font-bold border border-blue-600/30 rounded-sm">
                                        {getCategory(post)}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
