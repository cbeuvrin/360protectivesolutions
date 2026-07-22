import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BlogHero } from "@/components/blog/BlogHero";
import { PostGrid } from "@/components/blog/PostGrid";
import { Pagination } from "@/components/blog/Pagination";
import {
    getPostsByOffset,
    offsetForPage,
    POSTS_PER_PAGE,
    totalBlogPages,
} from "@/lib/wordpress";

export const revalidate = 3600;

interface PageProps {
    params: Promise<{ page: string }>;
}

function parsePage(raw: string) {
    return /^[1-9]\d*$/.test(raw) ? Number(raw) : null;
}

// Son pocas y baratas de generar: se prerenderizan todas para que la navegacion
// por el archivo sea instantanea.
export async function generateStaticParams() {
    const { total } = await getPostsByOffset(0, 1);
    const pages = totalBlogPages(total);

    return Array.from({ length: Math.max(pages - 1, 0) }, (_, i) => ({
        page: String(i + 2),
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { page } = await params;

    return {
        title: `WSO Strategic Blog — Page ${page} | Worldwide Security Options`,
        description:
            "Insights into national security, tactical operations, and the future of professional protection in NYC.",
        alternates: {
            canonical: `/blog/page/${page}`,
        },
    };
}

export default async function BlogArchivePage({ params }: PageProps) {
    const { page: raw } = await params;
    const page = parsePage(raw);

    if (!page) {
        notFound();
    }

    // La primera pagina vive en /blog: tener dos URLs con el mismo contenido
    // seria contenido duplicado.
    if (page === 1) {
        redirect("/blog");
    }

    const { posts, total } = await getPostsByOffset(offsetForPage(page), POSTS_PER_PAGE);
    const pages = totalBlogPages(total);

    if (page > pages || posts.length === 0) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white font-sans text-gray-900 overflow-x-hidden">
            <Navbar />
            <BlogHero />
            <PostGrid posts={posts} />
            <Pagination current={page} total={pages} />
            <Footer />
        </main>
    );
}
