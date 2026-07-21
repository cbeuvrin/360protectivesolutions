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

export function formatPostDate(dateString: string) {
    return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}
