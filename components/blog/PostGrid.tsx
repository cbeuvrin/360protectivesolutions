"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import Link from "next/link";
import { WPPost, formatPostDate, getFeaturedImage } from "@/lib/wordpress";
import { PostImage } from "@/components/blog/PostImage";

interface PostGridProps {
    posts: WPPost[];
}

const getCategory = (post: WPPost) =>
    post._embedded?.["wp:term"]?.[0]?.[0]?.name || "Uncategorized";

/**
 * Rejilla uniforme para las paginas 2 en adelante. La primera pagina usa el
 * layout destacado, que solo tiene sentido con lo mas reciente.
 */
export const PostGrid = ({ posts }: PostGridProps) => (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
                <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: Math.min(index, 5) * 0.06 }}
                >
                    <Link
                        href={`/blog/${post.slug}`}
                        className="group flex h-full flex-col overflow-hidden bg-white shadow-sm border border-gray-100 rounded-sm hover:shadow-xl transition-all"
                    >
                        <div className="relative aspect-video overflow-hidden bg-gray-100">
                            <PostImage
                                src={getFeaturedImage(post)}
                                alt={post.title.rendered}
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div className="flex flex-1 flex-col p-8">
                            <span className="inline-block w-fit px-3 py-1 bg-gray-50 text-blue-600 text-[10px] font-bold border border-blue-600/30 mb-4 rounded-sm">
                                {getCategory(post)}
                            </span>
                            <h3
                                className="text-xl font-bold text-dark-blue tracking-tighter leading-tight mb-6 group-hover:text-primary transition-colors"
                                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                            />
                            <span className="mt-auto flex items-center gap-2 text-[10px] font-bold tracking-widest text-dark-blue opacity-50">
                                <Calendar size={12} className="text-primary" />
                                {formatPostDate(post.date)}
                            </span>
                        </div>
                    </Link>
                </motion.div>
            ))}
        </div>
    </section>
);
