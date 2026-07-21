"use client";

import { useEffect, useRef, useState } from "react";

interface LazyVideoProps {
    src: string;
    poster: string;
    className?: string;
}

/**
 * Video de fondo que no se descarga hasta acercarse al viewport.
 *
 * Un <video autoPlay> se descarga siempre, aunque quede muy por debajo del
 * pliegue: el home bajaba 7 MB de video que la mayoria de visitantes no llegaba
 * a ver. Aqui el src no se asigna hasta que el elemento entra en rango, y
 * mientras tanto el poster ocupa su sitio, asi que el hueco nunca se ve vacio.
 */
export function LazyVideo({ src, poster, className }: LazyVideoProps) {
    const ref = useRef<HTMLVideoElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const node = ref.current;

        if (!node || visible) {
            return;
        }

        // Sin IntersectionObserver (navegador antiguo) se carga sin diferir.
        if (typeof IntersectionObserver === "undefined") {
            setVisible(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            // Se empieza a cargar un poco antes de que el usuario llegue.
            { rootMargin: "400px" }
        );

        observer.observe(node);

        return () => observer.disconnect();
    }, [visible]);

    return (
        <video
            ref={ref}
            src={visible ? src : undefined}
            poster={poster}
            autoPlay={visible}
            muted
            loop
            playsInline
            preload="none"
            className={className}
        />
    );
}
