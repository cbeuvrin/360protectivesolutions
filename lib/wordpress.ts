// El sitio vive en Vercel bajo el dominio principal, asi que WordPress quedo
// servido desde el subdominio. Los medios siguen en el hosting viejo.
const WP_HOST = "https://api.360protectivesolutions.com";
const WP_LEGACY_HOST = "https://360protectivesolutions.com";

const BASE_URL = `${WP_HOST}/wp-json/wp/v2`;

// WordPress genera las URLs de /wp-content apuntando al dominio principal, que
// ahora responde Vercel. Solo se reescriben los medios: los permalinks no se
// tocan porque los enlaces del blog se arman con el slug.
//
// El JSON de WordPress llega con las barras escapadas ("https:\/\/..."), asi que
// hay que sustituir tambien esa variante o la reescritura no encuentra nada.
function rewriteMediaUrls(payload: string) {
    const escapeSlashes = (url: string) => url.split("/").join("\\/");
    const legacy = `${WP_LEGACY_HOST}/wp-content/`;
    const current = `${WP_HOST}/wp-content/`;

    return payload
        .split(legacy).join(current)
        .split(escapeSlashes(legacy)).join(escapeSlashes(current));
}

export interface WPPost {
    id: number;
    title: { rendered: string };
    content: { rendered: string };
    excerpt: { rendered: string };
    date: string;
    slug: string;
    _embedded?: {
        "wp:featuredmedia"?: Array<{
            source_url: string;
            alt_text: string;
            media_details?: {
                sizes?: Record<string, { source_url: string; width: number }>;
            };
        }>;
        "wp:term"?: Array<Array<{
            name: string;
            slug: string;
        }>>;
        author?: Array<{
            name: string;
        }>;
    };
}

export async function getPosts(perPage = 10, page = 1) {
    const res = await fetch(
        `${BASE_URL}/posts?_embed&per_page=${perPage}&page=${page}`,
        { next: { revalidate: 60 } } // Revalidate every minute
    );

    if (!res.ok) {
        throw new Error("Failed to fetch posts");
    }

    return JSON.parse(rewriteMediaUrls(await res.text()));
}

// La primera pagina usa el layout destacado (4 + 9). El resto son rejillas
// uniformes, asi que llevan su propio tamanyo.
export const POSTS_ON_FIRST_PAGE = 13;
export const POSTS_PER_PAGE = 12;

export function offsetForPage(page: number) {
    return page <= 1 ? 0 : POSTS_ON_FIRST_PAGE + (page - 2) * POSTS_PER_PAGE;
}

export function totalBlogPages(total: number) {
    if (total <= POSTS_ON_FIRST_PAGE) {
        return 1;
    }

    return 1 + Math.ceil((total - POSTS_ON_FIRST_PAGE) / POSTS_PER_PAGE);
}

export async function getPostsByOffset(offset: number, perPage: number) {
    const res = await fetch(
        `${BASE_URL}/posts?_embed&per_page=${perPage}&offset=${offset}`,
        { next: { revalidate: 60 } }
    );

    if (!res.ok) {
        throw new Error("Failed to fetch posts");
    }

    return {
        posts: JSON.parse(rewriteMediaUrls(await res.text())) as WPPost[],
        total: Number(res.headers.get("x-wp-total") ?? 0),
    };
}

export async function getPostBySlug(slug: string): Promise<WPPost | null> {
    const res = await fetch(
        `${BASE_URL}/posts?slug=${encodeURIComponent(slug)}&_embed`,
        { next: { revalidate: 60 } }
    );

    if (!res.ok) {
        throw new Error("Failed to fetch post");
    }

    const posts: WPPost[] = JSON.parse(rewriteMediaUrls(await res.text()));
    return posts[0] ?? null;
}

// Solo se prerenderizan los mas recientes: el resto se genera bajo demanda para
// no alargar el build con los 215 posts del archivo.
export async function getRecentSlugs(limit = 30): Promise<string[]> {
    const res = await fetch(`${BASE_URL}/posts?per_page=${limit}&_fields=slug`, {
        next: { revalidate: 60 },
    });

    if (!res.ok) {
        return [];
    }

    const posts: Array<{ slug: string }> = await res.json();
    return posts.map((post) => post.slug);
}

export const BLOG_PLACEHOLDER = "/images/blog-placeholder.svg";

// WordPress ya genera versiones redimensionadas de cada imagen, pero source_url
// apunta siempre al original: hay destacadas de 5 MB entrando en tarjetas de
// 430px. Se elige la variante mas pequenya que cubra el ancho que se necesita y
// solo se cae al original si no hay ninguna.
export function getFeaturedImage(post: WPPost, minWidth = 768) {
    const media = post._embedded?.["wp:featuredmedia"]?.[0];

    if (!media) {
        return BLOG_PLACEHOLDER;
    }

    const candidates = Object.values(media.media_details?.sizes ?? {})
        .filter((size) => size.width >= minWidth)
        .sort((a, b) => a.width - b.width);

    return candidates[0]?.source_url ?? media.source_url ?? BLOG_PLACEHOLDER;
}

// La mayoria de los posts repiten la imagen destacada como primera figura del
// cuerpo. Como la cabecera del articulo ya la muestra, se recorta para no verla
// dos veces seguidas. Si esa figura es otra imagen, se deja intacta.
export function stripLeadingFeaturedImage(content: string, featuredUrl?: string) {
    if (!featuredUrl) {
        return content;
    }

    const fileName = featuredUrl.split("/").pop() ?? "";
    const base = fileName.replace(/-\d+x\d+(?=\.\w+$)/, "").replace(/\.\w+$/, "");

    if (!base) {
        return content;
    }

    const leadingFigure = content.match(/^\s*<figure[\s\S]*?<\/figure>/);

    return leadingFigure?.[0].includes(base)
        ? content.slice(leadingFigure[0].length)
        : content;
}

// Para el sitemap hacen falta los 215, no solo la primera pagina: la API tope a
// 100 por peticion, asi que se recorre hasta agotar x-wp-totalpages.
export async function getAllPostRefs(): Promise<Array<{ slug: string; modified: string }>> {
    const perPage = 100;
    const refs: Array<{ slug: string; modified: string }> = [];
    let page = 1;
    let totalPages = 1;

    do {
        const res = await fetch(
            `${BASE_URL}/posts?per_page=${perPage}&page=${page}&_fields=slug,modified`,
            { next: { revalidate: 60 } }
        );

        if (!res.ok) {
            break;
        }

        totalPages = Number(res.headers.get("x-wp-totalpages") ?? 1);
        refs.push(...(await res.json()));
        page += 1;
    } while (page <= totalPages);

    return refs;
}

export function stripHtml(html: string) {
    return html
        .replace(/<[^>]*>/g, "")
        .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
        .replace(/&nbsp;/g, " ")
        .replace(/&amp;/g, "&")
        .replace(/&quot;/g, '"')
        .replace(/&#8217;|&rsquo;/g, "'")
        .replace(/&hellip;/g, "...")
        .trim();
}

export function formatPostDate(dateString: string) {
    return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}
