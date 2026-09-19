import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BlogHero } from "@/components/blog/BlogHero";
import { FeaturedGrid } from "@/components/blog/FeaturedGrid";
import { MostReadSection } from "@/components/blog/MostReadSection";
import { Pagination } from "@/components/blog/Pagination";
import {
    getPostCards,
    POSTS_ON_FIRST_PAGE,
    totalBlogPages,
    PostCard,
} from "@/lib/wordpress";

// Un dia. Cada reescritura ISR se factura y con 60s un rastreador bastaba para
// regenerar todo el blog cada hora. Lo nuevo aparece al momento igualmente:
// WordPress avisa a /api/revalidate al publicar. Next exige aqui un literal,
// asi que no se puede importar WP_REVALIDATE.
export const revalidate = 86400;

export const metadata: Metadata = {
    title: "WSO Strategic Blog | Worldwide Security Options",
    description:
        "Insights into national security, tactical operations, and the future of professional protection in NYC.",
};

export default async function BlogPage() {
    // Se resuelve en el servidor: el HTML ya sale con los posts y el navegador
    // se ahorra descargar la respuesta de la API de WordPress.
    let posts: PostCard[] = [];
    let pages = 1;
    let failed = false;

    try {
        const { cards, total } = await getPostCards(0, POSTS_ON_FIRST_PAGE);
        posts = cards;
        pages = totalBlogPages(total);
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

                    <Pagination current={1} total={pages} />
                </>
            )}

            <Footer />
        </main>
    );
}
