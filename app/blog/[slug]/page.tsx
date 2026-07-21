import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
    formatPostDate,
    getPostBySlug,
    getPosts,
    getRecentSlugs,
    getFeaturedImage,
    stripHtml,
    stripLeadingFeaturedImage,
    WPPost,
} from "@/lib/wordpress";

export const revalidate = 3600;

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const slugs = await getRecentSlugs(30);
    return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        return { title: "Article Not Found | Worldwide Security Options" };
    }

    const title = stripHtml(post.title.rendered);
    const description = stripHtml(post.excerpt.rendered).slice(0, 160);
    const image = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

    return {
        title: `${title} | Worldwide Security Options`,
        description,
        openGraph: {
            title,
            description,
            type: "article",
            publishedTime: post.date,
            images: image ? [{ url: image }] : undefined,
        },
    };
}

const getCategory = (post: WPPost) =>
    post._embedded?.["wp:term"]?.[0]?.[0]?.name || "Intelligence";

// La cabecera solo muestra imagen si el post realmente tiene una.
const hasFeaturedImage = (post: WPPost) =>
    Boolean(post._embedded?.["wp:featuredmedia"]?.[0]);

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    const related: WPPost[] = (await getPosts(4))
        .filter((item: WPPost) => item.id !== post.id)
        .slice(0, 3);

    const featured = hasFeaturedImage(post) ? getFeaturedImage(post, 1024) : undefined;
    const author = post._embedded?.author?.[0]?.name;

    return (
        <main className="min-h-screen bg-white font-sans text-gray-900 overflow-x-hidden">
            <Navbar />

            {/* Hero */}
            <section className="relative pt-48 pb-16 bg-dark-blue text-white">
                <div className="container mx-auto px-6 max-w-4xl">
                    <Link
                        href="/blog"
                        className="flex w-fit items-center gap-2 text-[10px] font-black tracking-[0.3em] text-gray-400 hover:text-primary transition-colors mb-10"
                    >
                        <ArrowLeft size={13} /> BACK TO BLOG
                    </Link>

                    <span className="inline-block px-3 py-1 border border-primary/40 text-primary text-[10px] font-bold tracking-widest mb-8 rounded-sm">
                        {getCategory(post)}
                    </span>

                    <h1
                        className="font-bold tracking-tighter leading-[1.05] text-3xl md:text-5xl mb-8"
                        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                    />

                    <div className="flex flex-wrap items-center gap-6 opacity-60">
                        <span className="flex items-center gap-2 text-[10px] font-bold tracking-widest">
                            <Calendar size={12} className="text-primary" />
                            {formatPostDate(post.date)}
                        </span>
                        {author && (
                            <span className="flex items-center gap-2 text-[10px] font-bold tracking-widest">
                                <User size={12} className="text-primary" />
                                {author}
                            </span>
                        )}
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-px bg-white/10" />
            </section>

            {/* Featured image */}
            {featured && (
                <div className="bg-dark-blue">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <div className="relative aspect-video overflow-hidden rounded-sm shadow-2xl translate-y-px">
                            <img
                                src={featured}
                                alt={stripHtml(post.title.rendered)}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="h-24 bg-white -mt-12 rounded-t-[2px]" />
                </div>
            )}

            {/* Article body */}
            <article className="pb-24 px-6">
                <div
                    className="container mx-auto max-w-3xl article-body"
                    dangerouslySetInnerHTML={{
                        __html: stripLeadingFeaturedImage(post.content.rendered, featured),
                    }}
                />
            </article>

            {/* Related */}
            {related.length > 0 && (
                <section className="py-24 px-6 md:px-12 lg:px-24 bg-gray-50 border-t border-gray-100">
                    <div className="max-w-[1400px] mx-auto">
                        <div className="mb-12">
                            <h2 className="text-3xl font-black text-dark-blue tracking-tighter italic">
                                Keep Reading
                            </h2>
                            <div className="w-16 h-1 bg-primary mt-2" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {related.map((item) => (
                                <Link
                                    key={item.id}
                                    href={`/blog/${item.slug}`}
                                    className="group overflow-hidden bg-white shadow-sm border border-gray-100 rounded-sm hover:shadow-xl transition-all"
                                >
                                    <div className="relative aspect-video overflow-hidden bg-gray-100">
                                        <img
                                            src={getFeaturedImage(item)}
                                            alt={stripHtml(item.title.rendered)}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="p-8">
                                        <span className="inline-block px-3 py-1 bg-gray-50 text-blue-600 text-[10px] font-bold border border-blue-600/30 mb-4 rounded-sm">
                                            {getCategory(item)}
                                        </span>
                                        <h3
                                            className="text-xl font-bold text-dark-blue tracking-tighter leading-tight mb-6 group-hover:text-primary transition-colors"
                                            dangerouslySetInnerHTML={{ __html: item.title.rendered }}
                                        />
                                        <span className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-dark-blue opacity-50">
                                            <Calendar size={12} className="text-primary" />
                                            {formatPostDate(item.date)}
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <Footer />
        </main>
    );
}
