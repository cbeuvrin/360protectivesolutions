import path from "node:path";
import type { NextConfig } from "next";

const WP_API = "https://api.360protectivesolutions.com/wp-json/wp/v2";

// Rutas propias del sitio: ningun slug de WordPress puede secuestrarlas.
const RESERVED = new Set([
  "about",
  "blog",
  "contact",
  "federal-contracting",
  "industries",
  "resources",
  "services",
  "technology",
]);

/**
 * WordPress publicaba los articulos en /<slug>/ y el sitio nuevo los sirve en
 * /blog/<slug>. Sin estas redirecciones, las 215 URLs que Google lleva anyos
 * indexando devuelven 404 y se pierde todo el posicionamiento acumulado.
 *
 * Se resuelve en tiempo de build. Si WordPress no responde, se despliega sin
 * redirecciones en vez de romper el build.
 */
async function legacyBlogRedirects() {
  const perPage = 100;
  const slugs: string[] = [];
  let page = 1;
  let totalPages = 1;

  try {
    do {
      const res = await fetch(`${WP_API}/posts?per_page=${perPage}&page=${page}&_fields=slug`);

      if (!res.ok) {
        break;
      }

      totalPages = Number(res.headers.get("x-wp-totalpages") ?? 1);
      const batch: Array<{ slug: string }> = await res.json();
      slugs.push(...batch.map((post) => post.slug));
      page += 1;
    } while (page <= totalPages);
  } catch (error) {
    console.error("No se pudieron cargar los slugs para las redirecciones:", error);
    return [];
  }

  const redirects = slugs
    .filter((slug) => slug && !RESERVED.has(slug))
    .map((slug) => ({
      source: `/${slug}`,
      destination: `/blog/${slug}`,
      permanent: true,
    }));

  console.log(`Redirecciones de blog heredadas: ${redirects.length}`);

  return redirects;
}

const nextConfig: NextConfig = {
  // Hay un package-lock.json suelto en el home del usuario y Turbopack elegia
  // ese directorio como raiz del workspace.
  turbopack: {
    root: path.resolve(__dirname),
  },
  async redirects() {
    return legacyBlogRedirects();
  },
};

export default nextConfig;
