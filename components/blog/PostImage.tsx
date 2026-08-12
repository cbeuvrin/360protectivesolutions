import Image from "next/image";

interface PostImageProps {
    src: string;
    alt: string;
    /** Ancho que ocupara el hueco; se usa para elegir la variante de WordPress. */
    sizes: string;
    className?: string;
    /** Solo para la imagen que domina la primera pantalla. */
    priority?: boolean;
}

/**
 * Imagen de post.
 *
 * NO pasa por el optimizador de Vercel (`unoptimized`), a proposito. WordPress ya
 * sirve las imagenes en WebP y ya redimensionadas: getFeaturedImage() elige la
 * variante del tamanyo correcto. Re-optimizarlas en Vercel no aportaba nada y
 * consumia cuota de pago -- al superarla, el optimizador devuelve 402 y las
 * imagenes dejan de verse. Sirviendolas directas desde WordPress eso no ocurre.
 */
export function PostImage({ src, alt, sizes, className, priority }: PostImageProps) {
    return (
        <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            priority={priority}
            unoptimized
            className={className}
        />
    );
}
