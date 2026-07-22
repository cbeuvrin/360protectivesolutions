import Image from "next/image";
import { BLOG_PLACEHOLDER } from "@/lib/wordpress";

interface PostImageProps {
    src: string;
    alt: string;
    /** Ancho que ocupara el hueco, para que Next genere el srcset correcto. */
    sizes: string;
    className?: string;
    /** Solo para la imagen que domina la primera pantalla. */
    priority?: boolean;
}

/**
 * Imagen de post servida a traves del optimizador de Next.
 *
 * Los originales siguen en WordPress: Vercel los busca una vez, los convierte a
 * WebP/AVIF, los redimensiona al hueco real y los cachea en su CDN. Sin esto
 * llegaban PNG de 700 KB a tarjetas de 430px desde un origen unico sin CDN.
 */
export function PostImage({ src, alt, sizes, className, priority }: PostImageProps) {
    return (
        <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            priority={priority}
            // El marcador de posicion es un SVG local: no hay nada que optimizar
            // y el optimizador rechaza SVG salvo que se habilite explicitamente.
            unoptimized={src === BLOG_PLACEHOLDER}
            className={className}
        />
    );
}
