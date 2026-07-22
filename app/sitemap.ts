import type { MetadataRoute } from "next";
import { getAllPostRefs } from "@/lib/wordpress";

export const revalidate = 3600;

export const SITE_URL = "https://www.360protectivesolutions.com";

// Rutas estaticas del sitio. Se listan a mano a proposito: asi anyadir una
// pagina obliga a decidir su prioridad en vez de colarse sin criterio.
const staticRoutes: Array<{ path: string; priority: number }> = [
    { path: "/", priority: 1 },
    { path: "/about", priority: 0.8 },
    { path: "/contact", priority: 0.8 },
    { path: "/federal-contracting", priority: 0.8 },
    { path: "/blog", priority: 0.9 },

    { path: "/services/executive-protection", priority: 0.9 },
    { path: "/services/protection-specialist", priority: 0.8 },
    { path: "/services/force-protection", priority: 0.8 },
    { path: "/services/anti-piracy", priority: 0.8 },

    { path: "/industries/commercial-security", priority: 0.7 },
    { path: "/industries/construction-security", priority: 0.7 },
    { path: "/industries/event-security", priority: 0.7 },
    { path: "/industries/financial-security", priority: 0.7 },
    { path: "/industries/hotel-security", priority: 0.7 },
    { path: "/industries/port-maritime-security", priority: 0.7 },
    { path: "/industries/residential-security", priority: 0.7 },
    { path: "/industries/warehouse-security", priority: 0.7 },

    { path: "/technology/360-trax", priority: 0.7 },
    { path: "/technology/camera-monitoring", priority: 0.7 },
    { path: "/technology/virtual-engineering", priority: 0.7 },
    { path: "/technology/virtual-greeting", priority: 0.7 },
    { path: "/technology/virtual-guard", priority: 0.7 },
    { path: "/technology/weapons-detection", priority: 0.7 },

    { path: "/resources/careers", priority: 0.6 },
    { path: "/resources/media-center", priority: 0.6 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const now = new Date();

    const pages: MetadataRoute.Sitemap = staticRoutes.map(({ path, priority }) => ({
        url: `${SITE_URL}${path}`,
        lastModified: now,
        changeFrequency: path === "/blog" ? "daily" : "monthly",
        priority,
    }));

    // Si WordPress no responde, se publica el sitemap de las paginas fijas en
    // vez de tumbar la ruta entera.
    try {
        const posts = await getAllPostRefs();

        pages.push(
            ...posts.map((post) => ({
                url: `${SITE_URL}/blog/${post.slug}`,
                lastModified: new Date(post.modified),
                changeFrequency: "monthly" as const,
                priority: 0.6,
            }))
        );
    } catch (error) {
        console.error("Sitemap: could not load posts", error);
    }

    return pages;
}
