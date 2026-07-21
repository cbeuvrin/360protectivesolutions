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
        { next: { revalidate: 3600 } } // Revalidate every hour
    );

    if (!res.ok) {
        throw new Error("Failed to fetch posts");
    }

    return JSON.parse(rewriteMediaUrls(await res.text()));
}

export async function getPostBySlug(slug: string): Promise<WPPost | null> {
    const res = await fetch(
        `${BASE_URL}/posts?slug=${encodeURIComponent(slug)}&_embed`,
        { next: { revalidate: 3600 } }
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
        next: { revalidate: 3600 },
    });

    if (!res.ok) {
        return [];
    }

    const posts: Array<{ slug: string }> = await res.json();
    return posts.map((post) => post.slug);
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
