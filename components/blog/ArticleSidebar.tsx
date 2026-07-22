import Link from "next/link";
import { Calendar } from "lucide-react";
import { WPPost, formatPostDate, getFeaturedImage, stripHtml } from "@/lib/wordpress";
import { PostImage } from "@/components/blog/PostImage";

interface ArticleSidebarProps {
    posts: WPPost[];
}

/**
 * Columna lateral del articulo, solo en escritorio. Va sticky para seguir al
 * lector durante textos largos: si solo aparece al principio, deja de existir en
 * cuanto empieza a leer.
 */
export const ArticleSidebar = ({ posts }: ArticleSidebarProps) => {
    if (posts.length === 0) {
        return null;
    }

    return (
        <div className="sticky top-28">
            <div className="mb-8">
                <h2 className="text-lg font-black italic tracking-tighter text-dark-blue">
                    More Intelligence
                </h2>
                <div className="mt-2 h-1 w-12 bg-primary" />
            </div>

            <ul className="space-y-6">
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link
                            href={`/blog/${post.slug}`}
                            className="group flex gap-4 border-b border-gray-100 pb-6"
                        >
                            <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-sm bg-gray-100">
                                <PostImage
                                    src={getFeaturedImage(post, 300)}
                                    alt={stripHtml(post.title.rendered)}
                                    sizes="80px"
                                    className="object-cover grayscale transition-all duration-500 group-hover:scale-110 group-hover:grayscale-0"
                                />
                            </div>

                            <div className="flex-1">
                                <h3
                                    className="mb-2 text-[13px] font-bold leading-snug tracking-tight text-dark-blue transition-colors group-hover:text-primary"
                                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                                />
                                <span className="flex items-center gap-1.5 text-[9px] font-bold tracking-widest text-dark-blue opacity-40">
                                    <Calendar size={10} className="text-primary" />
                                    {formatPostDate(post.date)}
                                </span>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>

            <Link
                href="/blog"
                className="mt-8 block rounded-sm border border-dark-blue/15 py-4 text-center text-[10px] font-black tracking-[0.25em] text-dark-blue transition-all hover:border-primary hover:text-primary"
            >
                VIEW ALL ARTICLES
            </Link>
        </div>
    );
};
