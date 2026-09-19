import { revalidatePath, revalidateTag } from "next/cache";
import type { NextRequest } from "next/server";
import { WP_CACHE_TAG } from "@/lib/wordpress";

// WordPress llama aqui al publicar o editar un post (hook save_post). Las
// rutas del blog se cachean un dia entero; esto es lo que hace que un articulo
// nuevo aparezca al momento sin pagar reescrituras cada minuto.
//
// POST /api/revalidate?secret=...   body opcional: { "slug": "..." }
export async function POST(req: NextRequest) {
    const secret = process.env.REVALIDATE_SECRET;

    if (!secret || req.nextUrl.searchParams.get("secret") !== secret) {
        return new Response("Unauthorized", { status: 401 });
    }

    const body: { slug?: unknown } = await req.json().catch(() => ({}));
    const slug = typeof body.slug === "string" ? body.slug : undefined;

    // La etiqueta cubre los cinco fetch a WordPress: listados, articulos,
    // barra lateral y sitemap se regeneran en la siguiente visita.
    revalidateTag(WP_CACHE_TAG, "max");
    revalidatePath("/blog");
    revalidatePath("/blog/page/[page]", "page");
    revalidatePath("/sitemap.xml");

    if (slug) {
        revalidatePath(`/blog/${slug}`);
    }

    return Response.json({ revalidated: true, slug: slug ?? null });
}
