import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BlogHero } from "@/components/blog/BlogHero";
import { FeaturedGrid } from "@/components/blog/FeaturedGrid";
import { MostReadSection } from "@/components/blog/MostReadSection";
import { getPosts, WPPost } from "@/lib/wordpress";

export const revalidate = 3600;

export const metadata: Metadata = {
    title: "WSO Strategic Blog | Worldwide Security Options",
    description:
        "Insights into national security, tactical operations, and the future of professional protection in NYC.",
};

export default async function BlogPage() {
    // Se resuelve en el servidor: el HTML ya sale con los posts y el navegador
    // se ahorra descargar la respuesta de la API de WordPress.
    let posts: WPPost[] = [];
    let failed = false;

    try {
        posts = await getPosts(15);
    } catch (error) {
        console.error("Error loading posts:", error);
        failed = true;
    }

    return (
        <main className="min-h-screen bg-white font-sans text-gray-900 overflow-x-hidden">
            <Navbar />

            <BlogHero />

            {failed ? (
                <section className="py-32 text-center">
                    <p className="text-xs font-black tracking-widest text-dark-blue opacity-50">
                        Intelligence feed unavailable. Please try again shortly.
                    </p>
                </section>
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
