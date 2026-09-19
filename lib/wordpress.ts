// El sitio vive en Vercel bajo el dominio principal, asi que WordPress quedo
// servido desde el subdominio. Los medios siguen en el hosting viejo.
const WP_HOST = "https://api.360protectivesolutions.com";
const WP_LEGACY_HOST = "https://360protectivesolutions.com";

const BASE_URL = `${WP_HOST}/wp-json/wp/v2`;

// Un dia y no un minuto. Cada reescritura de una ruta ISR cuenta en la factura
// de Vercel, y con 242 rutas del blog a 60s un solo rastreador las quemaba
// todas cada hora. El contenido nuevo no espera al dia: WordPress avisa a
// /api/revalidate al publicar y se purga la etiqueta.
export const WP_REVALIDATE = 86400;
export const WP_CACHE_TAG = "wp-posts";

const CACHE = { next: { revalidate: WP_REVALIDATE, tags: [WP_CACHE_TAG] } };

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

interface WPMedia {
    source_url: string;
    alt_text: string;
    media_details?: {
        sizes?: Record<string, { source_url: string; width: number }>;
    };
}

export interface WPPost {
    id: number;
    title: { rendered: string };
    content: { rendered: string };
    excerpt: { rendered: string };
    date: string;
    slug: string;
    _embedded?: {
        "wp:featuredmedia"?: WPMedia[];
        "wp:term"?: Array<Array<{
            name: string;
            slug: string;
        }>>;
        author?: Array<{
            name: string;
        }>;
    };
}

// Lo unico que necesita una tarjeta del listado. Se recorta aqui, en la capa
// de datos, porque las tarjetas son componentes cliente: todo lo que reciban
// como prop acaba serializado dentro del HTML. Con el objeto entero de
// WordPress, /blog pesaba 341 KB de los que solo se pintaban titulo, fecha,
// categoria e imagen.
export interface PostCard {
    id: number;
    slug: string;
    date: string;
    /** HTML tal cual lo entrega WordPress (entidades incluidas). */
    title: string;
    /** Titulo en texto plano, para atributos alt. */
    alt: string;
    category: string;
    /** Variante mas pequenya que cubre cada hueco; null si no hay destacada. */
    image: { small: string; medium: string; large: string } | null;
}

export const BLOG_PLACEHOLDER = "/images/blog-placeholder.svg";

// WordPress ya genera versiones redimensionadas de cada imagen, pero source_url
// apunta siempre al original: hay destacadas de 5 MB entrando en tarjetas de
// 430px. Se elige la variante mas pequenya que cubra el ancho que se necesita y
// solo se cae al original si no hay ninguna.
function pickSize(media: WPMedia, minWidth: number) {
    const candidates = Object.values(media.media_details?.sizes ?? {})
        .filter((size) => size.width >= minWidth)
        .sort((a, b) => a.width - b.width);

    return candidates[0]?.source_url ?? media.source_url;
}

export function getFeaturedImage(post: WPPost, minWidth = 768) {
    const media = post._embedded?.["wp:featuredmedia"]?.[0];
    return media ? pickSize(media, minWidth) ?? BLOG_PLACEHOLDER : BLOG_PLACEHOLDER;
}

export function cardImage(card: PostCard, size: keyof NonNullable<PostCard["image"]>) {
    return card.image?.[size] ?? BLOG_PLACEHOLDER;
}

function toCard(post: WPPost): PostCard {
    const media = post._embedded?.["wp:featuredmedia"]?.[0];

    return {
        id: post.id,
        slug: post.slug,
        date: post.date,
        title: post.title.rendered,
        alt: stripHtml(post.title.rendered),
        category: post._embedded?.["wp:term"]?.[0]?.[0]?.name ?? "Uncategorized",
        image: media
            ? {
                  small: pickSize(media, 300),
                  medium: pickSize(media, 768),
                  large: pickSize(media, 1536),
              }
            : null,
    };
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

// Tarjetas para los listados. Se pide a WordPress lo justo: _embed solo de
// imagen y categoria, y _fields sin content ni excerpt. _links tiene que ir en
// _fields o _embed deja de funcionar.
export async function getPostCards(offset: number, perPage: number) {
    const params = new URLSearchParams({
        per_page: String(perPage),
        offset: String(offset),
        _embed: "wp:featuredmedia,wp:term",
        _fields: "id,slug,date,title,_links,_embedded",
    });

    const res = await fetch(`${BASE_URL}/posts?${params}`, CACHE);

    if (!res.ok) {
        throw new Error("Failed to fetch posts");
    }

    const posts: WPPost[] = JSON.parse(rewriteMediaUrls(await res.text()));

    return {
        cards: posts.map(toCard),
        total: Number(res.headers.get("x-wp-total") ?? 0),
    };
}

export async function getPostBySlug(slug: string): Promise<WPPost | null> {
    const res = await fetch(
        `${BASE_URL}/posts?slug=${encodeURIComponent(slug)}&_embed`,
        CACHE
    );

    if (!res.ok) {
        throw new Error("Failed to fetch post");
    }

    const posts: WPPost[] = JSON.parse(rewriteMediaUrls(await res.text()));
    return posts[0] ?? null;
}

// Solo se prerenderizan los mas recientes: el resto se genera bajo demanda para
// no alargar el build con los 200 y pico posts del archivo.
export async function getRecentSlugs(limit = 30): Promise<string[]> {
    const res = await fetch(`${BASE_URL}/posts?per_page=${limit}&_fields=slug`, CACHE);

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

// Para el sitemap hacen falta todos, no solo la primera pagina: la API tope a
// 100 por peticion, asi que se recorre hasta agotar x-wp-totalpages.
export async function getAllPostRefs(): Promise<Array<{ slug: string; modified: string }>> {
    const perPage = 100;
    const refs: Array<{ slug: string; modified: string }> = [];
    let page = 1;
    let totalPages = 1;

    do {
        const res = await fetch(
            `${BASE_URL}/posts?per_page=${perPage}&page=${page}&_fields=slug,modified`,
            CACHE
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
