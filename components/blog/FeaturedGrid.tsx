"use client";

import { motion } from "framer-motion";
import { Eye, User, Calendar } from "lucide-react";
import Link from "next/link";
import { WPPost, formatPostDate, getFeaturedImage } from "@/lib/wordpress";

interface FeaturedGridProps {
    posts: WPPost[];
}

export const FeaturedGrid = ({ posts }: FeaturedGridProps) => {
    if (!posts || posts.length === 0) return null;

    // Use the first 4 posts for the grid
    const displayPosts = posts.slice(0, 4);

    const getCategory = (post: WPPost) => {
        return post._embedded?.["wp:term"]?.[0]?.[0]?.name || "Uncategorized";
    };

    return (
        <section className="py-12 px-6 md:px-12 lg:px-24 bg-gray-50/50">
            {/* Category Filters (Dynamic if needed, but keeping manual for aesthetic for now) */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {["All", "Corporate Strategy", "Tactical Assets", "Executive Edge", "Market Intelligence", "Tech Trends"].map((cat) => (
                    <button key={cat} className="px-6 py-3 bg-white hover:bg-primary hover:text-white transition-all rounded-sm shadow-sm text-sm font-bold text-dark-blue whitespace-nowrap">
                        {cat}
                    </button>
                ))}
            </div>

            {/* Featured Grid */}
            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto lg:h-[600px]">
                    {/* Main Featured Card - Left (Larger) */}
                    {displayPosts[0] && (
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="lg:col-span-8 relative group overflow-hidden rounded-sm shadow-xl"
                        >
                            <Link href={`/blog/${displayPosts[0].slug}`} className="block h-full cursor-pointer">
                                <img src={getFeaturedImage(displayPosts[0], 1024)} alt={displayPosts[0].title.rendered} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent flex flex-col justify-end p-8 md:p-12">
                                    <span className="bg-primary/95 text-white font-black  text-[10px] tracking-[0.3em] py-1.5 px-4 mb-6 inline-block w-fit">
                                        {getCategory(displayPosts[0])}
                                    </span>
                                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tighter leading-none group-hover:text-primary transition-colors" dangerouslySetInnerHTML={{ __html: displayPosts[0].title.rendered }} />
                                    <div className="flex gap-6 mt-4 opacity-70">
                                        <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-white">
                                            <Calendar size={14} className="text-primary" /> {formatPostDate(displayPosts[0].date)}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    )}

                    {/* Right Stack */}
                    <div className="lg:col-span-4 flex flex-col gap-6">
                        {/* Top-Right Secondary Featured */}
                        {displayPosts[1] && (
                            <motion.div 
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.1 }}
                                className="relative h-[300px] group overflow-hidden rounded-sm shadow-xl"
                            >
                                <Link href={`/blog/${displayPosts[1].slug}`} className="block h-full cursor-pointer">
                                    <img src={getFeaturedImage(displayPosts[1])} alt={displayPosts[1].title.rendered} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent flex flex-col justify-end p-8">
                                        <span className="bg-primary/95 text-white font-black text-[10px] tracking-[0.3em] py-1.5 px-4 mb-4 inline-block w-fit">
                                            {getCategory(displayPosts[1])}
                                        </span>
                                        <h3 className="text-xl md:text-2xl font-bold text-white tracking-tighter leading-tight group-hover:text-primary transition-colors" dangerouslySetInnerHTML={{ __html: displayPosts[1].title.rendered }} />
                                        <div className="flex gap-4 mt-6 opacity-60">
                                            <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-white">
                                                <Calendar size={12} className="text-primary" /> {formatPostDate(displayPosts[1].date)}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        )}

                        {/* Bottom-Right Row (Two small items) */}
                        <div className="flex flex-col sm:flex-row gap-6 h-auto lg:h-[276px]">
                            {displayPosts.slice(2, 4).map((post, index) => (
                                <motion.div 
                                    key={post.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.2 + (index * 0.1) }}
                                    className="flex-1 relative group overflow-hidden rounded-sm shadow-xl h-[200px] lg:h-full"
                                >
                                    <Link href={`/blog/${post.slug}`} className="block h-full cursor-pointer">
                                        <img src={getFeaturedImage(post)} alt={post.title.rendered} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent flex flex-col justify-end p-6">
                                            <span className="bg-primary/95 text-white font-black text-[8px] tracking-[0.3em] py-1 px-3 mb-3 inline-block w-fit">
                                                {getCategory(post)}
                                            </span>
                                            <h4 className="text-[10px] md:text-xs font-bold text-white tracking-tighter leading-tight group-hover:text-primary transition-colors" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                                            <div className="flex gap-3 mt-4 opacity-50">
                                                <div className="flex items-center gap-2 text-[8px] font-bold text-white">
                                                    <Calendar size={10} className="text-primary font-black" /> {formatPostDate(post.date)}
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
