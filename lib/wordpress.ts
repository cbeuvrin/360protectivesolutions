const BASE_URL = "https://360protectivesolutions.com/wp-json/wp/v2";

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

    return res.json();
}

export function formatPostDate(dateString: string) {
    return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}
