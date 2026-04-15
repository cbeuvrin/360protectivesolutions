"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FeaturedGrid } from "@/components/blog/FeaturedGrid";
import { MostReadSection } from "@/components/blog/MostReadSection";
import { motion } from "framer-motion";
import { getPosts, WPPost } from "@/lib/wordpress";

export default function BlogPage() {
    const [posts, setPosts] = useState<WPPost[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadPosts() {
            try {
                const data = await getPosts(15); // Get first 15 posts
                setPosts(data);
            } catch (error) {
                console.error("Error loading posts:", error);
            } finally {
                setLoading(false);
            }
        }
        loadPosts();
    }, []);

    return (
        <main className="min-h-screen bg-white font-sans text-gray-900 overflow-x-hidden">
            <Navbar />

            {/* Standardized Hero */}
            <section className="relative pt-48 pb-12 bg-dark-blue text-white text-center">
                <div className="container mx-auto px-6">
                    <motion.span 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-primary font-black  tracking-[0.4em] text-[10px] mb-4 block"
                    >
                        Intelligence & Strategic Updates
                    </motion.span>
                    <motion.h1 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="font-bold tracking-tighter mb-8 leading-[0.9] uppercase text-fluid-h1"
                    >
                        WSO <span className="text-primary italic font-black">Strategic</span> Blog
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 font-light max-w-2xl mx-auto italic mb-12"
                    >
                        Insights into national security, tactical operations, and the future of professional protection in NYC.
                    </motion.p>
                </div>
                
                {/* Subtle decorative line */}
                <div className="absolute bottom-0 left-0 w-full h-px bg-white/10" />
            </section>

            {loading ? (
                <div className="py-32 text-center">
                    <div className="inline-block w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4" />
                    <p className="text-xs font-black  tracking-widest text-dark-blue opacity-50">Loading Intelligence...</p>
                </div>
            ) : (
                <>
                    {/* Featured Grid (Layout 1) */}
                    <FeaturedGrid posts={posts} />

                    {/* Most Read (Layout 2) - Uses posts from index 4 onwards */}
                    <MostReadSection posts={posts} />

                    {/* Pagination / Load More */}
                    <section className="py-24 text-center bg-gray-50 border-t border-gray-100">
                        <button className="px-12 py-5 bg-dark-blue text-white font-black  tracking-[0.2em] text-xs hover:bg-primary transition-all rounded-sm shadow-xl">
                            Explore Full Archive
                        </button>
                    </section>
                </>
            )}

            <Footer />
        </main>
    );
}
